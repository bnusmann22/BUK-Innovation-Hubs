export interface TalentProfile {
  id: string;
  name: string;
  department: string;
  regNumber: string;
  whatsappNumber: string;
  email: string;
  skillset: string;
  createdAt: string;
  updatedAt: string;
}

export async function getTalents(): Promise<{ status: string; data: TalentProfile[] }> {
  const res = await fetch("/api/talents", { credentials: "include" });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to fetch talents");
  return data;
}
