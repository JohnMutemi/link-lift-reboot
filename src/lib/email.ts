import { SITE } from "./site-config";

export type EmailPayload = {
  to?: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
};

function normalizeEmail(value?: string) {
  return value?.trim().toLowerCase();
}

function resolveRecipient(explicitRecipient?: string) {
  const configuredRecipient = normalizeEmail(explicitRecipient ?? process.env.EMAIL_TO ?? SITE.email);
  const sandboxRecipient = normalizeEmail(process.env.RESEND_TEST_TO);

  if (process.env.NODE_ENV !== "production" && sandboxRecipient) {
    return sandboxRecipient;
  }

  return configuredRecipient ?? SITE.email;
}

export async function sendEmail(payload: EmailPayload) {
  const to = resolveRecipient(payload.to);
  const apiKey = process.env.RESEND_API_KEY;
  const configuredFrom = process.env.EMAIL_FROM?.trim();
  const from = configuredFrom && /.+<.+@.+\..+>/.test(configuredFrom)
    ? configuredFrom
    : "Link Freight <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("❌ Email failed: RESEND_API_KEY is not configured");
    return { ok: false, reason: "missing-resend-key" };
  }

  try {
    console.log(`📧 Sending email to ${to} from ${from}...`);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html ?? `<p>${payload.text.replace(/\n/g, "<br />")}</p>`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Email failed: ${response.status}`, errorText);

      if (response.status === 403 && process.env.NODE_ENV !== "production") {
        console.error("🧪 Resend sandbox restriction hit. Set RESEND_TEST_TO to your verified sandbox recipient.");
      }

      throw new Error(`Email send failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log(`✅ Email sent successfully to ${to}`, { id: (data as any).id });
    return { ok: true, id: (data as any).id };
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
}