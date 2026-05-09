import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface HubAdminCredentials {
  recipientName: string;
  personalEmail: string;
  institutionalEmail: string;
  accessPhrase: string;
  hubName: string;
  role: string;
}

export async function sendHubAdminCredentials(data: HubAdminCredentials) {
  if (!process.env.SMTP_HOST) {
    console.log(
      `[EMAIL - skipped, SMTP not configured] To: ${data.personalEmail} | Institutional: ${data.institutionalEmail} | Access phrase: ${data.accessPhrase}`,
    );
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f7f2; padding: 32px; border-radius: 8px;">
      <div style="background: #006b85; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">BUK Innovation Hubs</h1>
        <p style="color: #d0f0ff; margin: 8px 0 0;">Admin Portal Access</p>
      </div>
      <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #dfe6d7; border-top: none;">
        <p style="color: #172018; font-size: 16px;">Dear <strong>${data.recipientName}</strong>,</p>
        <p style="color: #61705d;">You have been assigned as <strong>${data.role}</strong> for <strong>${data.hubName}</strong> on the BUK Innovation Hubs platform.</p>
        <div style="background: #f5f7f2; border: 1px solid #dfe6d7; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #006b85; margin: 0 0 16px;">Your Login Credentials</h3>
          <p style="margin: 8px 0;"><strong>Institutional Email:</strong><br/><span style="color: #006b85; font-size: 18px;">${data.institutionalEmail}</span></p>
          <p style="margin: 16px 0 8px;"><strong>Access Phrase:</strong><br/><span style="background: #e8f4f8; padding: 8px 16px; border-radius: 4px; font-family: monospace; font-size: 16px; display: inline-block; margin-top: 4px;">${data.accessPhrase}</span></p>
        </div>
        <p style="color: #61705d; font-size: 14px;">Login at: <a href="${process.env.DASHBOARD_URL || "http://localhost:3001"}" style="color: #006b85;">${process.env.DASHBOARD_URL || "http://localhost:3001"}</a></p>
        <p style="color: #61705d; font-size: 14px;">Please keep your access phrase secure and change it upon first login.</p>
        <hr style="border: none; border-top: 1px solid #dfe6d7; margin: 24px 0;"/>
        <p style="color: #a0a9a0; font-size: 12px; margin: 0;">This is an automated message from BUK Innovation Hubs. Do not reply to this email.</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"BUK Innovation Hubs" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: data.personalEmail,
    subject: `Your Admin Access — ${data.hubName} | BUK Innovation Hubs`,
    html,
  });
}
