import React from "react";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { EmailTemplate } from "../types";

export function FounderWelcomePreview() {
  return (
    <div className="w-full max-w-[580px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Subtle Brand Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2 font-bold text-base tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span>Lumen</span>
          </div>
          <span className="text-xs text-zinc-400">Founder Note</span>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p className="font-semibold text-base text-zinc-900 dark:text-white">
            Hey Alex,
          </p>
          <p>
            I wanted to personally reach out and welcome you to Lumen. We built Lumen because we got tired of brittle email HTML tables breaking in Outlook and tedious deliverability debugging.
          </p>
          <p>
            Here are three quick things to help you get the most out of your experience:
          </p>
          
          <div className="space-y-2.5 pl-2 border-l-2 border-zinc-200 dark:border-zinc-800 text-xs">
            <div>
              <strong className="text-zinc-900 dark:text-white">1. Grab any prebuilt template:</strong>{" "}
              <span>Browse our gallery and copy battle-tested templates directly into your codebase.</span>
            </div>
            <div>
              <strong className="text-zinc-900 dark:text-white">2. Check your DNS records:</strong>{" "}
              <span>Set up DKIM and SPF in our console for instant 99.9% inbox placement.</span>
            </div>
            <div>
              <strong className="text-zinc-900 dark:text-white">3. Send your first email in 3 lines:</strong>{" "}
              <span>Use our Node, Go, or Python SDKs with React Email or plain HTML.</span>
            </div>
          </div>

          <p>
            If you ever get stuck or want to suggest a new template feature, just <strong>hit reply to this email</strong>. It lands straight in my personal inbox.
          </p>
        </div>

        {/* Founder Signoff Card */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              T
            </div>
            <div>
              <div className="font-bold text-sm text-zinc-900 dark:text-white">Twinkal</div>
              <div className="text-xs text-zinc-500">Founder &amp; CEO, Lumen</div>
            </div>
          </div>

          <a
            href="https://lumen.co/console"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 font-medium text-xs transition-colors"
          >
            <span>Open Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export const founderWelcomeTemplate: EmailTemplate = {
  id: "founder-welcome",
  title: "Founder Welcome Note",
  category: "Growth & Onboarding",
  description: "Personal, conversational letter from the founder driving user engagement, feedback loops, and console activations.",
  component: FounderWelcomePreview,
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

interface FounderWelcomeProps {
  userName?: string;
  founderName?: string;
  founderRole?: string;
  consoleUrl?: string;
}

export default function FounderWelcomeEmail({
  userName = "Alex",
  founderName = "Twinkal",
  founderRole = "Founder & CEO, Lumen",
  consoleUrl = "https://lumen.co/console",
}: FounderWelcomeProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "580px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Subtle Brand Header */}
          <Section style={{ padding: "24px 32px 18px 32px", borderBottom: "1px solid #f1f5f9" }}>
            <Row>
              <Column style={{ width: "60%", verticalAlign: "middle" }}>
                <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle", textAlign: "left" }}>
                        <span style={{ display: "inline-block", verticalAlign: "middle", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981", marginRight: "8px" }} />
                        <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "16px", fontWeight: "700", color: "#0f172a", letterSpacing: "-0.3px" }}>Lumen</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
              <Column style={{ width: "40%", verticalAlign: "middle", textAlign: "right" }}>
                <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
                  Founder Note
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Letter Content */}
          <Section style={{ padding: "28px 32px" }}>
            <Text style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", margin: "0 0 16px 0" }}>
              Hey {userName},
            </Text>
            <Text style={{ fontSize: "14px", lineHeight: "1.7", color: "#334155", margin: "0 0 16px 0" }}>
              I wanted to personally reach out and welcome you to Lumen. We built Lumen because we got tired of brittle email HTML tables breaking in Outlook and tedious deliverability debugging.
            </Text>
            <Text style={{ fontSize: "14px", lineHeight: "1.7", color: "#334155", margin: "0 0 16px 0" }}>
              Here are three quick things to help you get the most out of your experience:
            </Text>

            {/* 3 Steps Left-Border Box */}
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderLeft: "2px solid #cbd5e1", paddingLeft: "14px", margin: "16px 0 20px 0" }}>
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <Text style={{ fontSize: "13px", lineHeight: "1.5", color: "#475569", margin: 0 }}>
                      <strong style={{ color: "#0f172a" }}>1. Grab any prebuilt template:</strong> Browse our gallery and copy battle-tested templates directly into your codebase.
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <Text style={{ fontSize: "13px", lineHeight: "1.5", color: "#475569", margin: 0 }}>
                      <strong style={{ color: "#0f172a" }}>2. Check your DNS records:</strong> Set up DKIM and SPF in our console for instant 99.9% inbox placement.
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text style={{ fontSize: "13px", lineHeight: "1.5", color: "#475569", margin: 0 }}>
                      <strong style={{ color: "#0f172a" }}>3. Send your first email in 3 lines:</strong> Use our Node, Go, or Python SDKs with React Email or plain HTML.
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>

            <Text style={{ fontSize: "14px", lineHeight: "1.7", color: "#334155", margin: "0 0 24px 0" }}>
              If you ever get stuck or want to suggest a new template feature, just <strong>hit reply to this email</strong>. It lands straight in my personal inbox.
            </Text>

            {/* Founder Signoff Card */}
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #f1f5f9", paddingTop: "20px" }}>
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style={{ width: "65%", verticalAlign: "middle" }}>
                    <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: "middle" }}>
                            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", textAlign: "center", lineHeight: "42px", color: "#ffffff", fontWeight: "700", fontSize: "16px" }}>
                              T
                            </div>
                          </td>
                          <td style={{ verticalAlign: "middle", paddingLeft: "12px" }}>
                            <Text style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a", margin: 0 }}>
                              {founderName}
                            </Text>
                            <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
                              {founderRole}
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td data-id="__react-email-column" style={{ width: "35%", verticalAlign: "middle", textAlign: "right" }}>
                    <Button
                      href={consoleUrl}
                      style={{
                        backgroundColor: "#0f172a",
                        color: "#ffffff",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      Open Console →
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 32px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Lumen • 548 Market St, San Francisco, CA 94104
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Founder Welcome Note</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(248,250,252);margin:0;padding:32px 0;">
    <!--$--><!--html--><!--head--><!--body-->
    <table
      border="0"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      align="center">
      <tbody>
        <tr>
          <td
            dir="ltr"
            lang="en"
            style="background-color:rgb(248,250,252);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:580px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(226,232,240);overflow:hidden;text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Header -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:24px 32px 18px 32px;border-bottom:1px solid rgb(241,245,249)">
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation">
                              <tbody style="width:100%">
                                <tr style="width:100%">
                                  <td
                                    data-id="__react-email-column"
                                    style="width:60%;vertical-align:middle;text-align:left">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody>
                                        <tr>
                                          <td style="vertical-align:middle;text-align:left">
                                            <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:50%;background-color:rgb(16,185,129);margin-right:8px"></span>
                                            <span style="display:inline-block;vertical-align:middle;font-size:16px;font-weight:700;color:rgb(15,23,42);margin:0;letter-spacing:-0.3px">Lumen</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:40%;vertical-align:middle;text-align:right">
                                    <span style="font-size:12px;color:rgb(148,163,184)">
                                      Founder Note
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Letter Body -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:28px 32px">
                            <h3 style="font-size:16px;font-weight:700;color:rgb(15,23,42);margin:0 0 16px 0">
                              Hey Alex,
                            </h3>
                            <p style="font-size:14px;line-height:1.7;color:rgb(51,65,85);margin:0 0 16px 0">
                              I wanted to personally reach out and welcome you to Lumen. We built Lumen because we got tired of brittle email HTML tables breaking in Outlook and tedious deliverability debugging.
                            </p>
                            <p style="font-size:14px;line-height:1.7;color:rgb(51,65,85);margin:0 0 16px 0">
                              Here are three quick things to help you get the most out of your experience:
                            </p>

                            <!-- Bordered list -->
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border-left:2px solid rgb(203,213,225);padding-left:14px;margin:16px 0 20px 0">
                              <tbody>
                                <tr>
                                  <td style="padding-bottom:10px">
                                    <p style="font-size:13px;line-height:1.5;color:rgb(71,85,105);margin:0">
                                      <strong style="color:rgb(15,23,42)">1. Grab any prebuilt template:</strong> Browse our gallery and copy battle-tested templates directly into your codebase.
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-bottom:10px">
                                    <p style="font-size:13px;line-height:1.5;color:rgb(71,85,105);margin:0">
                                      <strong style="color:rgb(15,23,42)">2. Check your DNS records:</strong> Set up DKIM and SPF in our console for instant 99.9% inbox placement.
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p style="font-size:13px;line-height:1.5;color:rgb(71,85,105);margin:0">
                                      <strong style="color:rgb(15,23,42)">3. Send your first email in 3 lines:</strong> Use our Node, Go, or Python SDKs with React Email or plain HTML.
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <p style="font-size:14px;line-height:1.7;color:rgb(51,65,85);margin:0 0 24px 0">
                              If you ever get stuck or want to suggest a new template feature, just <strong>hit reply to this email</strong>. It lands straight in my personal inbox.
                            </p>

                            <!-- Signoff Card -->
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border-top:1px solid rgb(241,245,249);padding-top:20px">
                              <tbody>
                                <tr>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:65%;vertical-align:middle">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody>
                                        <tr>
                                          <td style="vertical-align:middle">
                                            <span style="display:inline-block;width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,rgb(79,70,229) 0%,rgb(124,58,237) 100%);color:rgb(255,255,255);font-size:16px;font-weight:700;line-height:42px;text-align:center">
                                              T
                                            </span>
                                          </td>
                                          <td style="vertical-align:middle;padding-left:12px">
                                            <p style="font-size:14px;font-weight:700;color:rgb(15,23,42);margin:0">
                                              Twinkal
                                            </p>
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">
                                              Founder &amp; CEO, Lumen
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:35%;vertical-align:middle;text-align:right">
                                    <a
                                      href="https://lumen.co/console"
                                      style="line-height:100%;text-decoration:none;display:inline-block;background-color:rgb(15,23,42);border-radius:8px;color:rgb(255,255,255);font-size:12px;font-weight:600;text-align:center;padding:10px 18px">
                                      <span>Open Console →</span>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Footer -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:18px 32px;background-color:rgb(248,250,252);border-top:1px solid rgb(226,232,240);text-align:center">
                            <p style="font-size:12px;color:rgb(148,163,184);margin:0">
                              Lumen • 548 Market St, San Francisco, CA 94104
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>`,
  plainText: `Lumen

Founder Note


HEY ALEX,

I wanted to personally reach out and welcome you to Lumen. We built Lumen because we got tired of brittle email HTML tables breaking in Outlook and tedious deliverability debugging.

Here are three quick things to help you get the most out of your experience:

1. Grab any prebuilt template: Browse our gallery and copy battle-tested templates directly into your codebase.

2. Check your DNS records: Set up DKIM and SPF in our console for instant 99.9% inbox placement.

3. Send your first email in 3 lines: Use our Node, Go, or Python SDKs with React Email or plain HTML.

If you ever get stuck or want to suggest a new template feature, just hit reply to this email. It lands straight in my personal inbox.

T

Twinkal

Founder & CEO, Lumen

Open Console → https://lumen.co/console

Lumen • 548 Market St, San Francisco, CA 94104`,
  usageCode: `import FounderWelcomeEmail from "@/templates/founder-welcome";
import { reloop } from "@reloop/sdk";

// Send personal founder note upon signup
await reloop.emails.send({
  from: "alex@lumen.co",
  to: "newuser@example.com",
  subject: "Welcome to Lumen - personal note from the founder",
  react: <FounderWelcomeEmail userName="Alex" />,
});`,
};
