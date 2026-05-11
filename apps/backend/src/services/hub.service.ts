import bcrypt from "bcryptjs";
import { prisma } from "../utils/prisma";
import { AppError } from "../types/error";
import { Role } from "../generated/prisma/enums";
import { sendHubAdminCredentials } from "../utils/email";
import type { CreateHubInput } from "../validators/hub.validator";

const WORDS = [
  "amber", "cedar", "delta", "ember", "frost", "grove", "haven", "ivory",
  "jade", "kite", "lunar", "maple", "nexus", "ocean", "pine", "quest",
  "ridge", "solar", "tidal", "ultra", "vivid", "willow", "xenon", "yield", "zenith",
];

function generateAccessPhrase(): string {
  const pick = () => WORDS[Math.floor(Math.random() * WORDS.length)];
  return `${pick()}-${pick()}-${pick()}-${pick()}`;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function generateInstitutionalEmail(name: string, existingSlugs: string[]): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  let candidate = base.length >= 2
    ? `${base[0]}.${base[base.length - 1]}@buk.edu.ng`
    : `${base[0] || "admin"}@buk.edu.ng`;

  let counter = 1;
  while (existingSlugs.includes(candidate)) {
    candidate = `${base[0]}.${base[base.length - 1] ?? base[0]}${counter}@buk.edu.ng`;
    counter++;
  }

  return candidate;
}

interface CreatedAdmin {
  name: string;
  institutionalEmail: string;
  accessPhrase: string;
  role: Role;
}

export const createHub = async (input: CreateHubInput, createdBy: string) => {
  const slug = generateSlug(input.name);

  const existing = await prisma.hub.findUnique({ where: { slug } });
  if (existing) {
    throw new AppError(`A hub with a similar name already exists (slug: ${slug})`, 409);
  }

  const existingEmails = await prisma.user.findMany({
    select: { email: true },
  });
  const takenEmails = existingEmails.map((u) => u.email);

  const adminsToCreate: CreatedAdmin[] = [];

  const managerEmail = generateInstitutionalEmail(input.manager.name, takenEmails);
  takenEmails.push(managerEmail);
  const managerPhrase = generateAccessPhrase();
  adminsToCreate.push({
    name: input.manager.name,
    institutionalEmail: managerEmail,
    accessPhrase: managerPhrase,
    role: Role.HUB_MANAGER,
  });

  if (input.contentManager) {
    const cmEmail = generateInstitutionalEmail(input.contentManager.name, takenEmails);
    takenEmails.push(cmEmail);
    const cmPhrase = generateAccessPhrase();
    adminsToCreate.push({
      name: input.contentManager.name,
      institutionalEmail: cmEmail,
      accessPhrase: cmPhrase,
      role: Role.CONTENT_MANAGER,
    });
  }

  if (input.programsOfficer) {
    const poEmail = generateInstitutionalEmail(input.programsOfficer.name, takenEmails);
    takenEmails.push(poEmail);
    const poPhrase = generateAccessPhrase();
    adminsToCreate.push({
      name: input.programsOfficer.name,
      institutionalEmail: poEmail,
      accessPhrase: poPhrase,
      role: Role.PROGRAM_OFFICER,
    });
  }

  const hub = await prisma.$transaction(async (tx) => {
    const newHub = await tx.hub.create({
      data: {
        name: input.name,
        slug,
        description: input.description,
        focusArea: input.focusArea,
        location: input.location,
        logo: input.logo,
        contactEmail: input.contactEmail || null,
        contactPhone: input.contactPhone,
        socialLinks: input.socialLinks ?? {},
        facilities: input.facilities ?? [],
        gallery: input.gallery ?? [],
        pricing: input.pricing ?? { free: true },
      },
    });

    const managerAdmin = adminsToCreate[0]!;
    const hashedManagerPw = await bcrypt.hash(managerAdmin.accessPhrase, 10);
    const managerUser = await tx.user.create({
      data: {
        name: managerAdmin.name,
        email: managerAdmin.institutionalEmail,
        password: hashedManagerPw,
        role: Role.HUB_MANAGER,
        imageUrl: input.manager.imageUrl,
        hubId: newHub.id,
      },
    });

    await tx.hub.update({
      where: { id: newHub.id },
      data: { managerId: managerUser.id },
    });

    const staffToCreate = adminsToCreate.slice(1);
    for (const admin of staffToCreate) {
      const hashedPw = await bcrypt.hash(admin.accessPhrase, 10);
      await tx.user.create({
        data: {
          name: admin.name,
          email: admin.institutionalEmail,
          password: hashedPw,
          role: admin.role,
          hubId: newHub.id,
        },
      });
    }

    await tx.auditLog.create({
      data: {
        action: "CREATE_HUB",
        entity: "Hub",
        entityId: newHub.id,
        metadata: { slug, adminCount: adminsToCreate.length },
        userId: createdBy,
      },
    });

    return newHub;
  });

  const personalEmails: Record<string, string> = {
    [adminsToCreate[0]!.name]: input.manager.personalEmail,
  };
  if (input.contentManager) {
    personalEmails[adminsToCreate.find((a) => a.role === Role.CONTENT_MANAGER)!.name] =
      input.contentManager.personalEmail;
  }
  if (input.programsOfficer) {
    personalEmails[adminsToCreate.find((a) => a.role === Role.PROGRAM_OFFICER)!.name] =
      input.programsOfficer.personalEmail;
  }

  const roleLabels: Record<Role, string> = {
    [Role.HUB_MANAGER]: "Hub Manager",
    [Role.CONTENT_MANAGER]: "Content Manager",
    [Role.PROGRAM_OFFICER]: "Programs Officer",
    [Role.SUPER_ADMIN]: "Super Admin",
    [Role.QA_ADMIN_SUPPORT]: "QA Admin Support",
  };

  await Promise.all(
    adminsToCreate.map((admin) =>
      sendHubAdminCredentials({
        recipientName: admin.name,
        personalEmail: personalEmails[admin.name]!,
        institutionalEmail: admin.institutionalEmail,
        accessPhrase: admin.accessPhrase,
        hubName: input.name,
        role: roleLabels[admin.role],
      }).catch((err) => {
        console.error(`Failed to send email to ${personalEmails[admin.name]}:`, err);
      }),
    ),
  );

  return hub;
};

export const getAllHubs = async () => {
  return prisma.hub.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      manager: {
        select: { id: true, name: true, email: true, imageUrl: true },
      },
      _count: { select: { staff: true, programs: true, events: true } },
    },
  });
};

export const getHubById = async (id: string) => {
  const hub = await prisma.hub.findUnique({
    where: { id },
    include: {
      manager: {
        select: { id: true, name: true, email: true, imageUrl: true },
      },
      staff: {
        select: { id: true, name: true, email: true, role: true, imageUrl: true },
      },
      _count: { select: { programs: true, events: true, startups: true } },
    },
  });
  if (!hub) throw new AppError("Hub not found", 404);
  return hub;
};
