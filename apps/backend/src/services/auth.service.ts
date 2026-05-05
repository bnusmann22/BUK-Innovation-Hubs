import bcrypt from "bcryptjs";
import { prisma } from "../utils/prisma";
import { AppError } from "../types/error";
import { signAccessToken, signRefreshToken, verifyRefreshToken, type JwtPayload } from "../utils/jwt";
import { sha256 } from "../utils/hash";

const REFRESH_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const getSessionExpiry = (): Date => new Date(Date.now() + REFRESH_TTL_MS);

const buildPayload = (user: { id: string; role: JwtPayload["role"]; hubId: string | null }): JwtPayload => ({
  userId: user.id,
  role: user.role,
  hubId: user.hubId,
});

export const loginUser = async (email: string, password: string, meta?: { ip?: string; userAgent?: string }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  if (!user.isActive) {
    throw new AppError("Account is disabled. Contact an administrator.", 403);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const payload = buildPayload(user);
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  await prisma.authSession.create({
    data: {
      userId: user.id,
      tokenHash: sha256(refreshToken),
      expiresAt: getSessionExpiry(),
      ipAddress: meta?.ip,
      userAgent: meta?.userAgent,
    },
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      hubId: user.hubId,
      isActive: user.isActive,
    },
    accessToken,
    refreshToken,
  };
};

export const refreshUserToken = async (refreshToken: string) => {
  const decoded = verifyRefreshToken(refreshToken);
  const tokenHash = sha256(refreshToken);

  const session = await prisma.authSession.findFirst({
    where: {
      userId: decoded.userId,
      tokenHash,
      revokedAt: null,
      expiresAt: { gt: new Date() },
    },
  });

  if (!session) {
    throw new AppError("Invalid session. Please login again.", 401);
  }

  const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
  if (!user || !user.isActive) {
    throw new AppError("Invalid session. Please login again.", 401);
  }

  const payload = buildPayload(user);
  const newAccessToken = signAccessToken(payload);
  const newRefreshToken = signRefreshToken(payload);

  await prisma.$transaction([
    prisma.authSession.update({ where: { id: session.id }, data: { revokedAt: new Date() } }),
    prisma.authSession.create({
      data: {
        userId: user.id,
        tokenHash: sha256(newRefreshToken),
        expiresAt: getSessionExpiry(),
        ipAddress: session.ipAddress,
        userAgent: session.userAgent,
      },
    }),
  ]);

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};

export const logoutUser = async (refreshToken: string) => {
  const decoded = verifyRefreshToken(refreshToken);
  const tokenHash = sha256(refreshToken);

  const session = await prisma.authSession.findFirst({
    where: {
      userId: decoded.userId,
      tokenHash,
      revokedAt: null,
    },
  });

  if (session) {
    await prisma.authSession.update({
      where: { id: session.id },
      data: { revokedAt: new Date() },
    });
  }
};

export const getCurrentUser = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
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
