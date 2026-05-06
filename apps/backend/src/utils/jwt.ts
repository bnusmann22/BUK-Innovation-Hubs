import jwt from "jsonwebtoken";
import env from "../config/env";
import { type Role } from "../generated/prisma/enums";

export interface JwtPayload {
  userId: string;
  role: Role;
  hubId: string | null;
}

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
};
