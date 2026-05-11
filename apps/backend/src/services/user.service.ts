import bcrypt from "bcryptjs";
import { prisma } from "../utils/prisma";
import { AppError } from "../types/error";
import { Role } from "../generated/prisma/enums";
import { type CreateUserInput, type ListUsersQueryInput, type ResetPasswordInput, type UpdateUserInput } from "../validators/user.validator";

const ensureHubRules = (role: string, hubId?: string | null) => {
  if (role === Role.SUPER_ADMIN && hubId) {
    throw new AppError("SUPER_ADMIN cannot be assigned to a hub", 400);
  }

  if (role !== Role.SUPER_ADMIN && !hubId) {
    throw new AppError("hubId is required for non-super-admin roles", 400);
  }
};

const ensureHubExists = async (hubId?: string | null) => {
  if (!hubId) return;

  const hub = await prisma.hub.findUnique({ where: { id: hubId }, select: { id: true } });
  if (!hub) {
    throw new AppError("Hub not found", 404);
  }
};

export const createAdminUser = async (input: CreateUserInput) => {
  ensureHubRules(input.role, input.hubId);
  await ensureHubExists(input.hubId);

  const hashedPassword = await bcrypt.hash(input.password, 12);

  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email.toLowerCase(),
      password: hashedPassword,
      role: input.role as Role,
      hubId: input.hubId ?? null,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      hubId: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export const listAdminUsers = async (query: ListUsersQueryInput) => {
  const page = Math.max(1, query.page ?? 1);
  const limit = Math.min(100, Math.max(1, query.limit ?? 20));
  const skip = (page - 1) * limit;

  const where = {
    ...(query.role ? { role: query.role as Role } : {}),
    ...(query.hubId ? { hubId: query.hubId } : {}),
    ...(query.isActive !== undefined ? { isActive: query.isActive } : {}),
  };

  const [users, total] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        hubId: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    items: users,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getAdminUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      hubId: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const updateAdminUser = async (id: string, input: UpdateUserInput) => {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError("User not found", 404);
  }

  const nextRole = input.role ?? existing.role;
  const nextHubId = input.hubId !== undefined ? input.hubId : existing.hubId;

  ensureHubRules(nextRole, nextHubId);
  await ensureHubExists(nextHubId);

  const user = await prisma.user.update({
    where: { id },
    data: {
      ...(input.name !== undefined ? { name: input.name } : {}),
      ...(input.role !== undefined ? { role: input.role as Role } : {}),
      ...(input.hubId !== undefined ? { hubId: input.hubId } : {}),
      ...(input.isActive !== undefined ? { isActive: input.isActive } : {}),
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      hubId: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export const deactivateAdminUser = async (id: string) => {
  const user = await prisma.user.update({
    where: { id },
    data: { isActive: false },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      hubId: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export const resetAdminUserPassword = async (id: string, input: ResetPasswordInput) => {
  const hashedPassword = await bcrypt.hash(input.password, 12);

  await prisma.user.update({
    where: { id },
    data: { password: hashedPassword },
  });
};
