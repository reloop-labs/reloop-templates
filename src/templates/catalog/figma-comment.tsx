import React from "react";
import { EmailTemplate } from "../types";

export function FigmaCommentPreview() {
  return (
    <div className="w-full bg-[#f5f5f5] dark:bg-[#121212] py-10 px-4 flex justify-center text-zinc-900 dark:text-zinc-100 font-sans">
      <div className="w-full max-w-[580px] bg-white dark:bg-[#1e1e1e] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        {/* Figma Header Bar */}
        <div className="px-8 pt-8 pb-4 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <span className="w-2.5 h-4 rounded-l-full bg-[#f24e1e] inline-block" />
              <span className="w-2.5 h-4 rounded-r-full bg-[#a259ff] inline-block" />
              <span className="w-2.5 h-4 rounded-full bg-[#1abcfe] inline-block" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 ml-1">Figma</span>
          </div>
          <span className="text-xs font-mono text-zinc-400">Design System</span>
        </div>

        <div className="p-8">
          {/* Notification Intro */}
          <div className="text-sm text-zinc-600 dark:text-zinc-300 mb-6">
            <strong className="text-zinc-900 dark:text-zinc-100">Sarah Jenkins</strong> commented on{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">Mobile Checkout Experience / Screen #4</span>:
          </div>

          {/* Comment Card with Frame Mockup */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 mb-6 bg-zinc-50/70 dark:bg-zinc-900/40">
            {/* User row */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white flex items-center justify-center text-xs font-semibold">
                SJ
              </div>
              <div>
                <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">Sarah Jenkins</span>
                <span className="text-[11px] text-zinc-400 ml-2">12 mins ago</span>
              </div>
            </div>

            {/* Comment Message */}
            <div className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed pl-11">
              &ldquo;@alex Can we update the primary CTA border radius to 8px across these checkout screens before Monday&apos;s review? Also let&apos;s verify the contrast ratio on dark mode.&rdquo;
            </div>
          </div>

          {/* Design Frame Thumbnail Banner */}
          <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 p-4 mb-6 text-center">
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
              Frame: Checkout Flow &bull; Node #284:1092
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-6">
            <a
              href="https://figma.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full text-center bg-[#0c8ce9] hover:bg-[#0b7cd0] text-white text-sm font-medium py-3 px-6 rounded-lg transition-colors shadow-xs"
            >
              Reply in Figma
            </a>
          </div>

          <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
            You can also reply directly to this email to leave a comment.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-zinc-50 dark:bg-zinc-900/80 px-8 py-5 border-t border-zinc-100 dark:border-zinc-800 text-[11px] text-zinc-400 dark:text-zinc-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>Figma, Inc. &bull; 760 Market St, San Francisco, CA</span>
          <a href="https://figma.com" className="hover:underline text-zinc-500">Unsubscribe from thread</a>
        </div>
      </div>
    </div>
  );
}

export const figmaCommentTemplate: EmailTemplate = {
  id: "figma-comment",
  title: "Figma Design Comment",
  category: "Brands & Recreations",
  description: "Interactive Figma design file comment notification with user avatar, comment bubble, frame node context, and 1-click reply button.",
  component: FigmaCommentPreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Button,
  Hr,
  Link,
} from "@react-email/components";

export default function FigmaCommentEmail() {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f5f5f5", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: "40px 0" }}>
        <Container style={{ maxWidth: "580px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
          {/* Header */}
          <Section style={{ padding: "24px 32px 16px 32px", borderBottom: "1px solid #f3f4f6" }}>
            <Row>
              <Column>
                <Text style={{ margin: 0, fontWeight: "600", fontSize: "15px", color: "#111827" }}>
                  Figma &bull; Design System
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Main Body */}
          <Section style={{ padding: "32px" }}>
            <Text style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.5", margin: "0 0 20px 0" }}>
              <strong style={{ color: "#111827" }}>Sarah Jenkins</strong> commented on{" "}
              <strong style={{ color: "#111827" }}>Mobile Checkout Experience / Screen #4</strong>:
            </Text>

            {/* Comment Card */}
            <Section style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px", marginBottom: "20px" }}>
              <Row>
                <Column style={{ width: "40px", verticalAlign: "top" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#a855f7", color: "#ffffff", fontWeight: "600", fontSize: "12px", textAlign: "center", lineHeight: "32px" }}>
                    SJ
                  </div>
                </Column>
                <Column style={{ paddingLeft: "8px", verticalAlign: "top" }}>
                  <Text style={{ margin: "0 0 6px 0", fontSize: "12px", fontWeight: "600", color: "#111827" }}>
                    Sarah Jenkins <span style={{ fontWeight: "400", color: "#9ca3af", marginLeft: "8px" }}>12 mins ago</span>
                  </Text>
                  <Text style={{ margin: 0, fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>
                    &ldquo;@alex Can we update the primary CTA border radius to 8px across these checkout screens before Monday&apos;s review? Also let&apos;s verify the contrast ratio on dark mode.&rdquo;
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* CTA Button */}
            <Section style={{ textAlign: "center", marginBottom: "20px" }}>
              <Button
                href="https://figma.com"
                style={{
                  backgroundColor: "#0c8ce9",
                  color: "#ffffff",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "14px",
                  padding: "12px 24px",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Reply in Figma
              </Button>
            </Section>

            <Text style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", margin: 0 }}>
              You can also reply directly to this email to leave a comment.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#f9fafb", borderTop: "1px solid #f3f4f6", padding: "16px 32px" }}>
            <Row>
              <Column>
                <Text style={{ margin: 0, fontSize: "11px", color: "#9ca3af" }}>
                  Figma, Inc. &bull; 760 Market St, San Francisco, CA
                </Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <Link href="https://figma.com" style={{ fontSize: "11px", color: "#6b7280", textDecoration: "underline" }}>
                  Unsubscribe from thread
                </Link>
              </Column>
            </Row>
          </Section>
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
    <title>Sarah Jenkins commented on Figma</title>
  </head>
  <body style="background-color:#f5f5f5;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:580px;margin:0 auto;background-color:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden">
      <tbody>
        <tr>
          <td>
            <!-- Header Bar -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:24px 32px 16px 32px;border-bottom:1px solid #f3f4f6">
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style="vertical-align:middle">
                    <p style="margin:0;font-weight:600;font-size:15px;color:#111827">
                      Figma &bull; Design System
                    </p>
                  </td>
                  <td data-id="__react-email-column" align="right" style="vertical-align:middle;text-align:right">
                    <span style="font-size:11px;font-family:monospace;color:#9ca3af">Node #284:1092</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Body Section -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:32px">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:14px;color:#4b5563;line-height:1.5;margin:0 0 20px 0">
                      <strong style="color:#111827">Sarah Jenkins</strong> commented on <strong style="color:#111827">Mobile Checkout Experience / Screen #4</strong>:
                    </p>

                    <!-- Comment Card -->
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:20px">
                      <tbody>
                        <tr>
                          <td data-id="__react-email-column" style="width:40px;vertical-align:top">
                            <div style="width:32px;height:32px;border-radius:50%;background-color:#a855f7;color:#ffffff;font-weight:600;font-size:12px;text-align:center;line-height:32px">
                              SJ
                            </div>
                          </td>
                          <td data-id="__react-email-column" style="padding-left:8px;vertical-align:top">
                            <p style="margin:0 0 6px 0;font-size:12px;font-weight:600;color:#111827">
                              Sarah Jenkins <span style="font-weight:400;color:#9ca3af;margin-left:8px">12 mins ago</span>
                            </p>
                            <p style="margin:0;font-size:14px;color:#374151;line-height:1.6">
                              &ldquo;@alex Can we update the primary CTA border radius to 8px across these checkout screens before Monday&apos;s review? Also let&apos;s verify the contrast ratio on dark mode.&rdquo;
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- CTA Button -->
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-bottom:20px">
                      <tbody>
                        <tr>
                          <td align="center" style="text-align:center">
                            <a href="https://figma.com" target="_blank" style="background-color:#0c8ce9;color:#ffffff;border-radius:8px;font-weight:500;font-size:14px;padding:12px 28px;display:inline-block;text-align:center;text-decoration:none">
                              Reply in Figma
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <p style="font-size:12px;color:#9ca3af;text-align:center;margin:0">
                      You can also reply directly to this email to leave a comment.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Footer Bar -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#f9fafb;border-top:1px solid #f3f4f6;padding:16px 32px">
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style="vertical-align:middle">
                    <p style="margin:0;font-size:11px;color:#9ca3af">
                      Figma, Inc. &bull; 760 Market St, San Francisco, CA
                    </p>
                  </td>
                  <td data-id="__react-email-column" align="right" style="vertical-align:middle;text-align:right">
                    <a href="https://figma.com" style="font-size:11px;color:#6b7280;text-decoration:underline">
                      Unsubscribe
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html><!--/$-->`,
  plainText: `Figma • Design System

Node #284:1092

Sarah Jenkins commented on Mobile Checkout Experience / Screen #4:

SJ

Sarah Jenkins 12 mins ago

“@alex Can we update the primary CTA border radius to 8px across these checkout screens before Monday's review? Also let's verify the contrast ratio on dark mode.”

Reply in Figma https://figma.com

You can also reply directly to this email to leave a comment.

Figma, Inc. • 760 Market St, San Francisco, CA

Unsubscribe https://figma.com`,
  usageCode: `import FigmaCommentEmail from "@/templates/figma-comment";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@yourdomain.com",
  to: "developer@example.com",
  subject: "Sarah Jenkins commented on Mobile Checkout Experience",
  react: <FigmaCommentEmail />,
});`,
};
