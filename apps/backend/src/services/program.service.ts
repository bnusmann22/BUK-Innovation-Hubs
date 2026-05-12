import { prisma } from "../utils/prisma";
import { AppError } from "../types/error";
import { ApplicationStatus, ProgramType } from "../generated/prisma/enums";
import { sendProgramRegistrationConfirmation } from "../utils/email";
import type { JwtPayload } from "../utils/jwt";
import type {
  CreateProgramInput,
  UpdateProgramInput,
  RegisterForProgramInput,
  ReviewRegistrationInput,
} from "../validators/program.validator";

async function resolveProgram(id: string, user: JwtPayload) {
  const program = await prisma.program.findUnique({ where: { id } });
  if (!program) throw new AppError("Program not found", 404);

  if (user.role !== "SUPER_ADMIN" && user.hubId !== program.hubId) {
    throw new AppError("Forbidden: cannot access resources outside your hub", 403);
  }

  return program;
}

export const createProgram = async (input: CreateProgramInput, user: JwtPayload) => {
  let hubId: string;

  if (user.role === "SUPER_ADMIN") {
    if (!input.hubId) throw new AppError("hubId is required when creating a program as super admin", 400);
    hubId = input.hubId;
  } else {
    if (!user.hubId) throw new AppError("No hub scope is assigned to your account", 403);
    hubId = user.hubId;
  }

  const hub = await prisma.hub.findUnique({ where: { id: hubId } });
  if (!hub) throw new AppError("Hub not found", 404);

  return prisma.$transaction(async (tx) => {
    const program = await tx.program.create({
      data: {
        title: input.title,
        description: input.description,
        type: input.type,
        eligibility: input.eligibility ?? null,
        maxApplicants: input.maxApplicants ?? null,
        deadline: input.deadline,
        isActive: input.isActive,
        isPublished: input.isPublished,
        hubId,
      },
    });

    await tx.auditLog.create({
      data: {
        action: "CREATE_PROGRAM",
        entity: "Program",
        entityId: program.id,
        metadata: { title: program.title, type: program.type, hubId },
        userId: user.userId,
      },
    });

    return program;
  });
};

export const updateProgram = async (id: string, input: UpdateProgramInput, user: JwtPayload) => {
  const program = await resolveProgram(id, user);

  return prisma.$transaction(async (tx) => {
    const updated = await tx.program.update({
      where: { id: program.id },
      data: input,
    });

    await tx.auditLog.create({
      data: {
        action: "UPDATE_PROGRAM",
        entity: "Program",
        entityId: id,
        metadata: { updatedFields: Object.keys(input) },
        userId: user.userId,
      },
    });

    return updated;
  });
};

export const deleteProgram = async (id: string, user: JwtPayload) => {
  const program = await resolveProgram(id, user);

  await prisma.$transaction(async (tx) => {
    await tx.auditLog.create({
      data: {
        action: "DELETE_PROGRAM",
        entity: "Program",
        entityId: id,
        metadata: { title: program.title, type: program.type },
        userId: user.userId,
      },
    });

    await tx.program.delete({ where: { id } });
  });
};

export const getPublicPrograms = async (query: {
  type?: string;
  hubId?: string;
  page?: number;
  limit?: number;
}) => {
  const page = Math.max(1, query.page ?? 1);
  const limit = Math.min(50, Math.max(1, query.limit ?? 12));
  const skip = (page - 1) * limit;

  const where = {
    isPublished: true,
    isActive: true,
    ...(query.type && { type: query.type as ProgramType }),
    ...(query.hubId && { hubId: query.hubId }),
  };

  const [programs, total] = await prisma.$transaction([
    prisma.program.findMany({
      where,
      skip,
      take: limit,
      orderBy: { deadline: "asc" },
      include: {
        hub: { select: { id: true, name: true, slug: true, logo: true } },
        _count: { select: { registrations: true } },
      },
    }),
    prisma.program.count({ where }),
  ]);

  return {
    programs,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getPublicProgramById = async (id: string) => {
  const program = await prisma.program.findUnique({
    where: { id },
    include: {
      hub: { select: { id: true, name: true, slug: true, logo: true, contactEmail: true } },
      _count: { select: { registrations: true } },
    },
  });

  if (!program || !program.isPublished) throw new AppError("Program not found", 404);

  return program;
};

export const registerForProgram = async (id: string, input: RegisterForProgramInput) => {
  const program = await prisma.program.findUnique({
    where: { id },
    include: { _count: { select: { registrations: true } } },
  });

  if (!program || !program.isPublished || !program.isActive) {
    throw new AppError("Program not found or is not currently accepting applications", 404);
  }

  if (program.deadline < new Date()) {
    throw new AppError("The application deadline for this program has passed", 400);
  }

  if (
    program.maxApplicants !== null &&
    program._count.registrations >= program.maxApplicants
  ) {
    throw new AppError("This program has reached its maximum number of applicants", 400);
  }

  const duplicate = await prisma.programRegistration.findFirst({
    where: { programId: id, email: input.email.toLowerCase() },
  });
  if (duplicate) {
    throw new AppError(
      "An application with this email address already exists for this program",
      409,
    );
  }

  const registration = await prisma.programRegistration.create({
    data: {
      fullName: input.fullName,
      email: input.email.toLowerCase(),
      phone: input.phone,
      documents: input.documents,
      programId: id,
    },
  });

  sendProgramRegistrationConfirmation({
    recipientName: input.fullName,
    recipientEmail: input.email,
    programTitle: program.title,
    programType: program.type,
  }).catch((err) => console.error("[EMAIL] Registration confirmation failed:", err));

  return registration;
};

export const getRegistrations = async (
  programId: string,
  user: JwtPayload,
  query: { status?: string; page?: number; limit?: number },
) => {
  await resolveProgram(programId, user);

  const page = Math.max(1, query.page ?? 1);
  const limit = Math.min(100, Math.max(1, query.limit ?? 20));
  const skip = (page - 1) * limit;

  const where = {
    programId,
    ...(query.status && { status: query.status as ApplicationStatus }),
  };

  const [registrations, total] = await prisma.$transaction([
    prisma.programRegistration.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.programRegistration.count({ where }),
  ]);

  return {
    registrations,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const reviewRegistration = async (
  programId: string,
  regId: string,
  input: ReviewRegistrationInput,
  user: JwtPayload,
) => {
  const program = await resolveProgram(programId, user);

  const registration = await prisma.programRegistration.findUnique({ where: { id: regId } });
  if (!registration) throw new AppError("Registration not found", 404);
  if (registration.programId !== program.id) {
    throw new AppError("Registration does not belong to this program", 400);
  }

  return prisma.$transaction(async (tx) => {
    const updated = await tx.programRegistration.update({
      where: { id: regId },
      data: {
        status: input.status,
        notes: input.notes ?? null,
      },
    });

    await tx.auditLog.create({
      data: {
        action:
          input.status === ApplicationStatus.APPROVED
            ? "APPROVE_APPLICATION"
            : "REJECT_APPLICATION",
        entity: "ProgramRegistration",
        entityId: regId,
        metadata: {
          programId,
          applicantEmail: registration.email,
          status: input.status,
        },
        userId: user.userId,
      },
    });

    return updated;
  });
};
