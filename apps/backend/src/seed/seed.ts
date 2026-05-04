import bcrypt from "bcryptjs";
import env from "../config/env";
import { prisma } from "../utils/prisma";

const seedSuperAdmin = async (): Promise<void> => {
  const existing = await prisma.user.findFirst({
    where: { role: "SUPER_ADMIN" },
  });

  if (existing) {
    console.log("Super Admin already exists, skipping seed.");
    return;
  }

  const hashedPassword = await bcrypt.hash(env.SUPER_ADMIN_PASSWORD, 12);

  await prisma.user.create({
    data: {
      name: env.SUPER_ADMIN_NAME,
      email: env.SUPER_ADMIN_EMAIL,
      password: hashedPassword,
      role: "SUPER_ADMIN",
      hubId: null,
    },
  });

  console.log(`Super Admin seeded: ${env.SUPER_ADMIN_EMAIL}`);
};

export default seedSuperAdmin;
