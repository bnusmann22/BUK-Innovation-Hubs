import { NextRequest, NextResponse } from "next/server";
import { logout } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const refreshTokenValue = request.cookies.get("refreshToken")?.value;

    if (refreshTokenValue) {
      await logout(refreshTokenValue);
    }

    const response = NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });

    response.cookies.delete({ name: "accessToken", path: "/" });
    response.cookies.delete({ name: "refreshToken", path: "/" });

    return response;
  } catch {
    // Still clear cookies even if backend logout fails
    const response = NextResponse.json({
      success: true,
      message: "Logged out",
    });
    response.cookies.delete({ name: "accessToken", path: "/" });
    response.cookies.delete({ name: "refreshToken", path: "/" });
    return response;
  }
}
