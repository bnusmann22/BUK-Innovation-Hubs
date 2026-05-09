import { NextRequest, NextResponse } from "next/server";
import { refreshToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const refreshTokenValue = request.cookies.get("refreshToken")?.value;

    if (!refreshTokenValue) {
      return NextResponse.json(
        { error: "No refresh token" },
        { status: 401 }
      );
    }

    const result = await refreshToken(refreshTokenValue);
    const { accessToken, refreshToken: newRefreshToken } = result.data;

    const response = NextResponse.json({
      success: true,
      message: "Token refreshed",
    });

    response.cookies.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    response.cookies.set({
      name: "refreshToken",
      value: newRefreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    // If refresh fails, clear cookies and force re-login
    const response = NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to refresh token",
      },
      { status: 401 }
    );
    response.cookies.delete({ name: "accessToken", path: "/" });
    response.cookies.delete({ name: "refreshToken", path: "/" });
    return response;
  }
}
