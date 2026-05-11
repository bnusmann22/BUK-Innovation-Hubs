export interface HubAdmin {
  name: string;
  personalEmail: string;
  imageUrl?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface HubStaff {
  name: string;
  personalEmail: string;
}

export interface CreateHubPayload {
  name: string;
  description: string;
  location?: string;
  focusArea: string;
  contactEmail?: string;
  contactPhone?: string;
  socialLinks?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  facilities?: string[];
  logo?: string;
  gallery?: string[];
  pricing?: {
    free: boolean;
    amount?: number;
    currency?: string;
    description?: string;
  };
  manager: HubAdmin;
  contentManager?: HubStaff;
  programsOfficer?: HubStaff;
}

export interface Hub {
  id: string;
  name: string;
  slug: string;
  description: string;
  focusArea: string;
  location: string | null;
  logo: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  socialLinks: Record<string, string> | null;
  facilities: string[];
  gallery: string[];
  pricing: Record<string, unknown> | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  manager?: { id: string; name: string; email: string; imageUrl: string | null } | null;
  _count?: { staff: number; programs: number; events: number };
}

export async function createHub(payload: CreateHubPayload): Promise<{ status: string; message: string; data: Hub }> {
  const res = await fetch("/api/hubs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Failed to create hub");
  }
  return data;
}

export async function getHubs(): Promise<{ status: string; data: Hub[] }> {
  const res = await fetch("/api/hubs", { credentials: "include" });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Failed to fetch hubs");
  }
  return data;
}

export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok || !data.url) {
    throw new Error(data.error || "Upload failed");
  }
  return data.url as string;
}
