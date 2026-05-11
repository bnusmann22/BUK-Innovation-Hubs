const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BACKEND_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
}

async function requestWithAuth<T>(endpoint: string, token: string, options: RequestInit = {}): Promise<T> {
  const url = `${BACKEND_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
}

export async function login(email: string, password: string) {
  return request<{ status: string; message: string; data: { user: User; accessToken: string; refreshToken: string } }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function getCurrentUser(token?: string) {
  if (token) {
    return requestWithAuth<{ status: string; data: User }>("/api/auth/me", token, {
      method: "GET",
    });
  }
  return request<{ status: string; data: User }>("/api/auth/me", {
    method: "GET",
  });
}

export async function refreshToken(refreshToken: string) {
  return request<{ status: string; data: { accessToken: string; refreshToken: string } }>("/api/auth/refresh", {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });
}

export async function logout(refreshToken: string) {
  return request<{ status: string; message: string }>("/api/auth/logout", {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  hubId: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
