import * as XLSX from "xlsx";
import type { Hub } from "./hubs";

export function exportHubsToXlsx(hubs: Hub[]) {
  const rows = hubs.map((h) => {
    const social = h.socialLinks ?? {};
    const pricing = h.pricing as {
      free?: boolean;
      amount?: number;
      currency?: string;
      description?: string;
    } | null;

    return {
      "Hub Name": h.name,
      Slug: h.slug,
      Status: h.isActive ? "Active" : "Inactive",
      "Focus Area": h.focusArea,
      Location: h.location ?? "",
      Description: h.description,
      "Contact Email": h.contactEmail ?? "",
      "Contact Phone": h.contactPhone ?? "",
      Website: (social.website as string) ?? "",
      Twitter: (social.twitter as string) ?? "",
      LinkedIn: (social.linkedin as string) ?? "",
      Instagram: (social.instagram as string) ?? "",
      Facebook: (social.facebook as string) ?? "",
      YouTube: (social.youtube as string) ?? "",
      Facilities: h.facilities.join(", "),
      "Pricing Type": pricing?.free === false ? "Paid" : "Free",
      "Pricing Amount": pricing?.free === false && pricing?.amount ? pricing.amount : "",
      "Pricing Currency": pricing?.free === false ? (pricing?.currency ?? "") : "",
      "Pricing Description": pricing?.description ?? "",
      "Manager Name": h.manager?.name ?? "",
      "Manager Email": h.manager?.email ?? "",
      "Staff Count": h._count?.staff ?? "",
      "Programs Count": h._count?.programs ?? "",
      "Events Count": h._count?.events ?? "",
      "Created At": new Date(h.createdAt).toLocaleDateString("en-NG", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      "Updated At": new Date(h.updatedAt).toLocaleDateString("en-NG", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(rows);

  // Column widths
  worksheet["!cols"] = [
    { wch: 30 }, // Hub Name
    { wch: 24 }, // Slug
    { wch: 10 }, // Status
    { wch: 26 }, // Focus Area
    { wch: 30 }, // Location
    { wch: 50 }, // Description
    { wch: 26 }, // Contact Email
    { wch: 18 }, // Contact Phone
    { wch: 30 }, // Website
    { wch: 24 }, // Twitter
    { wch: 24 }, // LinkedIn
    { wch: 24 }, // Instagram
    { wch: 24 }, // Facebook
    { wch: 24 }, // YouTube
    { wch: 40 }, // Facilities
    { wch: 14 }, // Pricing Type
    { wch: 16 }, // Pricing Amount
    { wch: 18 }, // Pricing Currency
    { wch: 36 }, // Pricing Description
    { wch: 24 }, // Manager Name
    { wch: 28 }, // Manager Email
    { wch: 14 }, // Staff Count
    { wch: 16 }, // Programs Count
    { wch: 14 }, // Events Count
    { wch: 14 }, // Created At
    { wch: 14 }, // Updated At
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Hubs");

  const date = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `BUK_Hubs_${date}.xlsx`);
}
