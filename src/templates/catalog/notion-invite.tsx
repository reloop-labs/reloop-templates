import React from "react";
import { EmailTemplate } from "../types";

export function NotionInvitePreview() {
  return (
    <div className="w-full bg-[#f7f7f5] dark:bg-[#121212] py-10 px-4 flex justify-center text-zinc-900 dark:text-zinc-100 font-sans">
      <div className="w-full max-w-[560px] bg-white dark:bg-[#191919] border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
        {/* Notion Header Icon */}
        <div className="mb-6 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-base font-serif">
            N
          </div>
          <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">Notion</span>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
          Alex Morgan invited you to join Acme Corp on Notion
        </h2>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          Collaborate with your team across shared engineering wikis, product roadmaps, and meeting notes in one unified workspace.
        </p>

        {/* Workspace Card */}
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 mb-6 bg-zinc-50 dark:bg-zinc-900/50 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold text-sm shadow-xs">
            AC
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Acme Corp Workspace
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Team Plan &bull; 32 active members
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          <a
            href="https://notion.so"
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full text-center bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-white text-sm font-medium py-3 px-6 rounded-lg transition-colors shadow-xs"
          >
            Join Workspace
          </a>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mb-8">
          This invitation was sent to alex@example.com. If you weren&apos;t expecting this invitation, you can safely ignore this email.
        </p>

        {/* Divider */}
        <hr className="border-t border-zinc-200 dark:border-zinc-800 my-6" />

        {/* Footer */}
        <div className="text-[11px] text-zinc-400 dark:text-zinc-500 space-y-1">
          <div>Notion Labs, Inc. &bull; 2300 Harrison Street, San Francisco, CA 94110</div>
          <div>Manage your notifications or visit the Help Center.</div>
        </div>
      </div>
    </div>
  );
}

export const notionInviteTemplate: EmailTemplate = {
  id: "notion-invite",
  title: "Notion Workspace Invite",
  category: "Brands & Recreations",
  description: "Minimalist Notion-styled team collaboration invitation featuring workspace card, inviter avatar, and high-conversion action button.",
  component: NotionInvitePreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
  Hr,
  Link,
} from "@react-email/components";

export default function NotionInviteEmail() {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f7f7f5", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e5e7eb", padding: "32px" }}>
          {/* Header */}
          <Section style={{ marginBottom: "24px" }}>
            <Row>
              <Column style={{ width: "36px" }}>
                <div style={{ width: "32px", height: "32px", backgroundColor: "#000000", borderRadius: "6px", color: "#ffffff", fontWeight: "bold", fontSize: "16px", textAlign: "center", lineHeight: "32px" }}>
                  N
                </div>
              </Column>
              <Column style={{ paddingLeft: "10px" }}>
                <Text style={{ margin: 0, fontWeight: "600", fontSize: "14px", color: "#111827" }}>Notion</Text>
              </Column>
            </Row>
          </Section>

          {/* Title */}
          <Heading style={{ fontSize: "20px", fontWeight: "600", color: "#111827", lineHeight: "1.3", margin: "0 0 12px 0" }}>
            Alex Morgan invited you to join Acme Corp on Notion
          </Heading>

          <Text style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: "0 0 24px 0" }}>
            Collaborate with your team across shared engineering wikis, product roadmaps, and meeting notes in one unified workspace.
          </Text>

          {/* Workspace Card */}
          <Section style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px", marginBottom: "24px" }}>
            <Row>
              <Column style={{ width: "48px" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#f59e0b", borderRadius: "8px", color: "#ffffff", fontWeight: "bold", fontSize: "14px", textAlign: "center", lineHeight: "40px" }}>
                  AC
                </div>
              </Column>
              <Column style={{ paddingLeft: "12px" }}>
                <Text style={{ margin: "0 0 4px 0", fontWeight: "600", fontSize: "14px", color: "#111827" }}>
                  Acme Corp Workspace
                </Text>
                <Text style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>
                  Team Plan &bull; 32 active members
                </Text>
              </Column>
            </Row>
          </Section>

          {/* CTA Button */}
          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Button
              href="https://notion.so"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: "14px",
                padding: "12px 24px",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Join Workspace
            </Button>
          </Section>

          <Text style={{ fontSize: "12px", color: "#6b7280", margin: "0 0 24px 0", lineHeight: "1.5" }}>
            This invitation was sent to alex@example.com. If you weren&apos;t expecting this invitation, you can safely ignore this email.
          </Text>

          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

          {/* Footer */}
          <Text style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px 0" }}>
            Notion Labs, Inc. &bull; 2300 Harrison Street, San Francisco, CA 94110
          </Text>
          <Text style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>
            Manage your notifications or visit the <Link href="https://notion.so/help" style={{ color: "#9ca3af", textDecoration: "underline" }}>Help Center</Link>.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--$--><html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Alex Morgan invited you to Notion</title>
  </head>
  <body style="background-color:#f7f7f5;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border-radius:12px;border:1px solid #e5e7eb;padding:32px">
      <tbody>
        <tr>
          <td>
            <!-- Header Brand -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-bottom:24px">
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style="width:36px;vertical-align:middle">
                    <div style="width:32px;height:32px;background-color:#000000;border-radius:6px;color:#ffffff;font-weight:bold;font-size:16px;text-align:center;line-height:32px;font-family:serif">
                      N
                    </div>
                  </td>
                  <td data-id="__react-email-column" style="padding-left:10px;vertical-align:middle">
                    <p style="margin:0;font-weight:600;font-size:14px;color:#111827">Notion</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Heading -->
            <h2 style="font-size:20px;font-weight:600;color:#111827;line-height:1.3;margin:0 0 12px 0">
              Alex Morgan invited you to join Acme Corp on Notion
            </h2>

            <p style="font-size:14px;color:#4b5563;line-height:1.6;margin:0 0 24px 0">
              Collaborate with your team across shared engineering wikis, product roadmaps, and meeting notes in one unified workspace.
            </p>

            <!-- Workspace Card -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:24px">
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style="width:48px;vertical-align:middle">
                    <div style="width:40px;height:40px;background-color:#f59e0b;border-radius:8px;color:#ffffff;font-weight:bold;font-size:14px;text-align:center;line-height:40px">
                      AC
                    </div>
                  </td>
                  <td data-id="__react-email-column" style="padding-left:12px;vertical-align:middle">
                    <p style="margin:0 0 4px 0;font-weight:600;font-size:14px;color:#111827">
                      Acme Corp Workspace
                    </p>
                    <p style="margin:0;font-size:12px;color:#6b7280">
                      Team Plan &bull; 32 active members
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- CTA Button -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-bottom:24px">
              <tbody>
                <tr>
                  <td align="center" style="text-align:center">
                    <a href="https://notion.so" target="_blank" style="background-color:#000000;color:#ffffff;border-radius:6px;font-weight:500;font-size:14px;padding:12px 28px;display:inline-block;text-align:center;text-decoration:none">
                      Join Workspace
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <p style="font-size:12px;color:#6b7280;margin:0 0 24px 0;line-height:1.5">
              This invitation was sent to alex@example.com. If you were not expecting this invitation, you can safely ignore this email.
            </p>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />

            <!-- Footer -->
            <p style="font-size:11px;color:#9ca3af;margin:0 0 4px 0">
              Notion Labs, Inc. &bull; 2300 Harrison Street, San Francisco, CA 94110
            </p>
            <p style="font-size:11px;color:#9ca3af;margin:0">
              Manage your notifications or visit the <a href="https://notion.so/help" style="color:#9ca3af;text-decoration:underline">Help Center</a>.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html><!--/$-->`,
  plainText: `N

Notion


ALEX MORGAN INVITED YOU TO JOIN ACME CORP ON NOTION

Collaborate with your team across shared engineering wikis, product roadmaps, and meeting notes in one unified workspace.

AC

Acme Corp Workspace

Team Plan • 32 active members

Join Workspace https://notion.so

This invitation was sent to alex@example.com. If you were not expecting this invitation, you can safely ignore this email.

----------------------------------------

Notion Labs, Inc. • 2300 Harrison Street, San Francisco, CA 94110

Manage your notifications or visit the Help Center https://notion.so/help.`,
  usageCode: `import NotionInviteEmail from "@/templates/notion-invite";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@yourdomain.com",
  to: "developer@example.com",
  subject: "Alex Morgan invited you to Acme Corp on Notion",
  react: <NotionInviteEmail />,
});`,
};
