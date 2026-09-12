import React from "react";
import { Sparkles, Terminal, CheckCircle, ArrowRight } from "lucide-react";
import { EmailTemplate } from "../types";

export function HelloWorldPreview() {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Signature Reloop Gradient Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm shadow-sm">
              R
            </div>
            <span className="font-bold text-lg tracking-tight">Reloop Starter</span>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            Official Starter
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Hello, World!
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
            Welcome to Reloop Templates. This starter layout demonstrates standard email client compatibility across Apple Mail, Gmail, and Outlook.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Dark Mode Supported</span>
            </div>
            <p className="text-zinc-500 text-[11px]">
              Automatically adjusts contrast for Gmail and Apple Mail dark modes.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Deliverability Tested</span>
            </div>
            <p className="text-zinc-500 text-[11px]">
              Strict HTML table fallback structures ensuring zero layout distortion.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="https://reloop.sh/docs"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-semibold text-sm shadow-sm transition-colors gap-2"
          >
            <span>Explore Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export const helloWorldTemplate: EmailTemplate = {
  id: "hello-world",
  title: "Hello World",
  category: "Growth & Onboarding",
  description: "Official introductory template welcoming developers to Reloop. Features bulletproof responsive layout and dark mode styling.",
  component: HelloWorldPreview,
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

interface HelloWorldEmailProps {
  name?: string;
  docsUrl?: string;
}

export default function HelloWorldEmail({
  name = "Developer",
  docsUrl = "https://reloop.sh/docs",
}: HelloWorldEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "580px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Top Gradient Accent */}
          <div style={{ height: "6px", width: "100%", background: "linear-gradient(90deg, #3b82f6 0%, #6366f1 50%, #9333ea 100%)" }} />

          {/* Header */}
          <Section style={{ padding: "28px 32px 20px 32px" }}>
            <Row>
              <Column style={{ width: "60%", verticalAlign: "middle" }}>
                <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "10px", backgroundColor: "#0f172a", textAlign: "center", lineHeight: "32px", color: "#ffffff", fontWeight: "800", fontSize: "15px" }}>
                          R
                        </div>
                      </td>
                      <td style={{ verticalAlign: "middle", paddingLeft: "10px" }}>
                        <Text style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", margin: 0, letterSpacing: "-0.3px" }}>
                          Reloop Starter
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
              <Column style={{ width: "40%", verticalAlign: "middle", textAlign: "right" }}>
                <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "600", color: "#4f46e5", backgroundColor: "#eef2ff", border: "1px solid #e0e7ff", borderRadius: "9999px", padding: "4px 10px" }}>
                  Official Starter
                </span>
              </Column>
            </Row>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <Text style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
              Hello, {name}!
            </Text>
            <Text style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Welcome to Reloop Templates. This starter layout demonstrates standard email client compatibility across Apple Mail, Gmail, and Outlook.
            </Text>
          </Section>

          {/* Feature Highlights (2 Columns) */}
          <Section style={{ padding: "0 32px 28px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
              <tbody style={{ width: "100%" }}>
                <tr style={{ width: "100%" }}>
                  <td data-id="__react-email-column" style={{ width: "48%", verticalAlign: "top" }}>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <Text style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", margin: "0 0 4px 0" }}>
                              ✓ Dark Mode Supported
                            </Text>
                            <Text style={{ fontSize: "12px", color: "#64748b", margin: 0, lineHeight: "1.4" }}>
                              Automatically adjusts contrast for Gmail and Apple Mail dark modes.
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td data-id="__react-email-column" style={{ width: "4%" }}></td>
                  <td data-id="__react-email-column" style={{ width: "48%", verticalAlign: "top" }}>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <Text style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", margin: "0 0 4px 0" }}>
                              ✓ Deliverability Tested
                            </Text>
                            <Text style={{ fontSize: "12px", color: "#64748b", margin: 0, lineHeight: "1.4" }}>
                              Strict HTML table fallback structures ensuring zero layout distortion.
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 32px 32px 32px" }}>
            <Button
              href={docsUrl}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#0f172a",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Explore Documentation →
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 32px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Reloop • The modern email delivery platform for developers.
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
    <title>Hello World Starter</title>
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
                    <!-- Top Accent Bar -->
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="height:6px;background:linear-gradient(90deg,rgb(59,130,246) 0%,rgb(99,102,241) 50%,rgb(147,51,234) 100%)"></td>
                        </tr>
                      </tbody>
                    </table>

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
                          <td style="padding:28px 32px 20px 32px">
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
                                          <td style="vertical-align:middle">
                                            <span style="display:inline-block;width:32px;height:32px;border-radius:10px;background-color:rgb(15,23,42);color:rgb(255,255,255);font-size:15px;font-weight:800;line-height:32px;text-align:center">
                                              R
                                            </span>
                                          </td>
                                          <td style="vertical-align:middle;padding-left:10px">
                                            <p style="font-size:16px;font-weight:700;color:rgb(15,23,42);margin:0;letter-spacing:-0.3px">
                                              Reloop Starter
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:40%;vertical-align:middle;text-align:right">
                                    <span style="display:inline-block;font-size:11px;font-weight:600;color:rgb(79,70,229);background-color:rgb(238,242,255);border:1px solid rgb(224,231,255);border-radius:9999px;padding:4px 10px">
                                      Official Starter
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Heading & Subtitle -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 24px 32px">
                            <h2 style="font-size:24px;font-weight:800;color:rgb(15,23,42);margin:0 0 8px 0;letter-spacing:-0.5px">
                              Hello, Developer!
                            </h2>
                            <p style="font-size:14px;color:rgb(71,85,105);line-height:1.6;margin:0">
                              Welcome to Reloop Templates. This starter layout demonstrates standard email client compatibility across Apple Mail, Gmail, and Outlook.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- 2 Columns Feature Cards -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 28px 32px">
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
                                    style="width:48%;vertical-align:top">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:16px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:13px;font-weight:700;color:rgb(15,23,42);margin:0 0 4px 0">
                                              ✓ Dark Mode Supported
                                            </p>
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0;line-height:1.4">
                                              Automatically adjusts contrast for Gmail and Apple Mail dark modes.
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td data-id="__react-email-column" style="width:4%"></td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:48%;vertical-align:top">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:16px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:13px;font-weight:700;color:rgb(15,23,42);margin:0 0 4px 0">
                                              ✓ Deliverability Tested
                                            </p>
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0;line-height:1.4">
                                              Strict HTML table fallback structures ensuring zero layout distortion.
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

                    <!-- CTA Button -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 32px 32px">
                            <a
                              href="https://reloop.sh/docs"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(15,23,42);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>Explore Documentation →</span>
                            </a>
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
                              Reloop • The modern email delivery platform for developers.
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
  usageCode: `import HelloWorldEmail from "@/templates/hello-world";
import { reloop } from "@reloop/sdk";

// Send official Reloop Hello World starter email
await reloop.emails.send({
  from: "welcome@yourcompany.com",
  to: "developer@example.com",
  subject: "Hello World from Reloop",
  react: <HelloWorldEmail name="Developer" />,
});`,
};
