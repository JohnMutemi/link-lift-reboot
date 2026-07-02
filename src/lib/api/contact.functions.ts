import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { SITE } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(1),
  company: z.string().optional().default(""),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  subject: z.string().optional().default("Contact enquiry"),
  message: z.string().min(1),
});

const quoteSchema = z.object({
  name: z.string().min(1),
  company: z.string().optional().default(""),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  service: z.string().optional().default("Long Distance Haulage"),
  details: z.string().min(1),
});

function buildEmailHtml({ title, fields, content }: { title: string; fields: { label: string; value: string }[]; content: string }) {
  const fieldBlocks = fields
    .filter((field) => field.value.trim())
    .map(
      (field) => `
        <div style="padding: 14px 16px; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0;">
          <div style="font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; margin-bottom: 6px;">${field.label}</div>
          <div style="font-size: 15px; color: #0f172a; line-height: 1.6;">${field.value}</div>
        </div>
      `,
    )
    .join("");

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; background: #f8fafc; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0f172a;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;">
        <tr>
          <td align="center" style="padding: 24px 16px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 720px;">
              <tr>
                <td style="background: linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%); border-radius: 24px; padding: 28px 32px; color: #ffffff; box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);">
                  <h1 style="margin: 0; font-size: 24px; line-height: 1.2; letter-spacing: -0.02em;">${title}</h1>
                  <p style="margin: 12px 0 0; font-size: 15px; color: rgba(255, 255, 255, 0.85);">A new website enquiry has arrived for Link Freight.</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 24px 0 0;">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; border-spacing: 16px;">
                    <tr>
                      <td style="vertical-align: top;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; border-spacing: 16px;">
                          ${fieldBlocks}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background: #ffffff; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px;">
                  <h2 style="margin: 0 0 14px; font-size: 18px; color: #0f172a; line-height: 1.3;">Message</h2>
                  <div style="font-size: 15px; line-height: 1.75; color: #334155; white-space: pre-wrap;">${content}</div>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0 0; color: #64748b; font-size: 13px; text-align: center;">Delivered via Link Freight website contact form.</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      "",
      `Message:\n${data.message}`,
    ].join("\n");

    const html = buildEmailHtml({
      title: "New Contact Enquiry",
      fields: [
        { label: "Name", value: data.name },
        { label: "Company", value: data.company || "—" },
        { label: "Email", value: data.email },
        { label: "Phone", value: data.phone || "—" },
      ],
      content: data.message,
    });

    await sendEmail({
      to: SITE.email,
      subject: data.subject || "Contact enquiry",
      text: body,
      html,
    });

    return { success: true };
  });

export const submitQuoteForm = createServerFn({ method: "POST" })
  .validator(quoteSchema)
  .handler(async ({ data }) => {
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      "",
      `Shipment details:\n${data.details}`,
    ].join("\n");

    const html = buildEmailHtml({
      title: `Quote Request from ${data.name}`,
      fields: [
        { label: "Name", value: data.name },
        { label: "Company", value: data.company || "—" },
        { label: "Email", value: data.email },
        { label: "Phone", value: data.phone || "—" },
        { label: "Service", value: data.service },
      ],
      content: data.details,
    });

    await sendEmail({
      subject: `Enquiry from ${data.name || "website visitor"}`,
      text: body,
      html,
    });

    return { success: true };
  });
