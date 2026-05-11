import { Resend } from "resend";
import { prisma } from "../utils/prisma";
import { AppError } from "../types/error";
import env from "../config/env";
import type { SubmitTalentInput } from "../validators/talent.validator";

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

if (resend) {
  console.log("[Resend] Email service ready ✓");
} else {
  console.warn("[Resend] RESEND_API_KEY not set — emails will be logged to console only");
}

async function sendConfirmationEmail(to: string, name: string) {
  const groupUrl = env.WHATSAPP_GROUP_URL ?? "";
  const fromAddress = env.RESEND_FROM_ADDRESS || "onboarding@resend.dev";
  const subject = "BUK Innovation Hub — Talent Discovery Confirmation";

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#172018">
      <h2 style="color:#006b85">Welcome to the BUK Talent Pool, ${name}!</h2>
      <p>
        Your talent profile has been received by the <strong>Bayero University Kano
        Innovation Hub</strong>. We will reach out when opportunities that match your
        skillset become available.
      </p>
      ${
        groupUrl
          ? `<p>In the meantime, join our WhatsApp community to stay up to date with
             hub activities, announcements, and opportunities:</p>
             <p style="text-align:center;margin:24px 0">
               <a href="${groupUrl}"
                  style="background:#006b85;color:#fff;padding:12px 28px;border-radius:6px;
                         text-decoration:none;font-weight:bold;display:inline-block">
                 Join WhatsApp Group
               </a>
             </p>`
          : ""
      }
      <p style="color:#61705d;font-size:13px;margin-top:32px">
        BUK Innovation Hubs &mdash; Bayero University Kano
      </p>
    </div>
  `;

  const text = groupUrl
    ? `Hi ${name}, your BUK talent profile has been received. Join our WhatsApp group: ${groupUrl}`
    : `Hi ${name}, your BUK talent profile has been received. We will be in touch soon.`;

  if (!resend) {
    console.warn("[Resend] RESEND_API_KEY not set — logging email to console");
    console.log(`To: ${to}\nSubject: ${subject}\n${text}`);
    return;
  }

  const { data, error } = await resend.emails.send({
    from: `BUK Innovation Hubs <${fromAddress}>`,
    to,
    subject,
    html,
    text,
    tags: [{ name: "category", value: "talent-discovery" }],
  });

  if (error) {
    console.error("[Resend] Email send failed:", error.name, "-", error.message);
    return;
  }

  console.log("[Resend] Confirmation email sent — id:", data?.id);
}

export async function submitTalent(input: SubmitTalentInput) {
  const existing = await prisma.talentProfile.findUnique({
    where: { email: input.email },
  });

  if (existing) {
    throw new AppError(
      "This email is already registered. Each person can only submit one talent profile.",
      409,
    );
  }

  const talent = await prisma.talentProfile.create({ data: input });

  await sendConfirmationEmail(input.email, input.name);

  return talent;
}

export async function listTalents() {
  return prisma.talentProfile.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function deleteTalent(id: string) {
  const existing = await prisma.talentProfile.findUnique({ where: { id } });
  if (!existing) throw new AppError("Talent profile not found", 404);
  return prisma.talentProfile.delete({ where: { id } });
}
