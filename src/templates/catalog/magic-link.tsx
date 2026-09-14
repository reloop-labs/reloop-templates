import React from "react";
import { ShieldCheck, Clock, ArrowRight, Laptop, Globe } from "lucide-react";
import { EmailTemplate } from "../types";

export function MagicLinkPreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Top Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Logo / Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>Lumen Auth</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-200/60 dark:border-amber-900/60">
            <Clock className="w-3 h-3" />
            <span>Expires in 10 mins</span>
          </span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Your magic sign-in link
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Click the button below to securely authenticate your session. No password required.
          </p>
        </div>

        {/* Main CTA Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-colors gap-2"
          >
            <span>Sign In to Your Account</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Device & Location Security Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-4 space-y-2 text-xs">
          <div className="font-semibold text-zinc-900 dark:text-zinc-200 mb-2">Request Details</div>
          <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5"><Laptop className="w-3.5 h-3.5 text-zinc-400" /> Device:</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-200">Chrome on macOS (Sonoma)</span>
          </div>
          <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-zinc-400" /> Location:</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-200">San Francisco, CA, USA</span>
          </div>
          <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
            <span>IP Address:</span>
            <span className="font-mono text-zinc-900 dark:text-zinc-200">198.51.100.42</span>
          </div>
        </div>

        {/* Fallback link */}
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
          <span>Or copy and paste this URL into your browser:</span>
          <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-900 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 break-all mt-1.5 select-all">
            https://auth.lumen.co/verify?token=mglk_9821804918204128941098
          </div>
        </div>
      </div>
    </div>
  );
}

export const magicLinkTemplate: EmailTemplate = {
  id: "magic-link",
  title: "Magic Link Verification",
  category: "Auth & Security",
  description: "Passwordless authentication email with 10-minute expiry countdown, client geolocation metadata, and raw URL fallback.",
  component: MagicLinkPreview,
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

interface MagicLinkEmailProps {
  loginUrl?: string;
  userEmail?: string;
  device?: string;
  location?: string;
  ipAddress?: string;
}

export default function MagicLinkEmail({
  loginUrl = "https://auth.lumen.co/verify?token=mglk_9821804918204128941098",
  userEmail = "alex@example.com",
  device = "Chrome on macOS (Sonoma)",
  location = "San Francisco, CA, USA",
  ipAddress = "198.51.100.42",
}: MagicLinkEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Top Accent Gradient Bar */}
          <div style={{ height: "6px", width: "100%", background: "linear-gradient(90deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%)" }} />

          {/* Header */}
          <Section style={{ padding: "28px 32px 20px 32px" }}>
            <Row>
              <Column style={{ width: "60%", verticalAlign: "middle" }}>
                <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "10px", backgroundColor: "#4f46e5", textAlign: "center", lineHeight: "32px", color: "#ffffff", fontWeight: "700", fontSize: "14px" }}>
                          ✓
                        </div>
                      </td>
                      <td style={{ verticalAlign: "middle", paddingLeft: "10px" }}>
                        <Text style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", margin: 0, letterSpacing: "-0.3px" }}>
                          Lumen Auth
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
              <Column style={{ width: "40%", verticalAlign: "middle", textAlign: "right" }}>
                <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "600", color: "#d97706", backgroundColor: "#fef3c7", border: "1px solid #fde68a", borderRadius: "9999px", padding: "4px 10px" }}>
                  ⏱ Expires in 10 mins
                </span>
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <Text style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
              Your magic sign-in link
            </Text>
            <Text style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Click the button below to securely authenticate your session for <strong style={{ color: "#0f172a" }}>{userEmail}</strong>. No password required.
            </Text>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 32px 28px 32px" }}>
            <Button
              href={loginUrl}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Sign In to Your Account →
            </Button>
          </Section>

          {/* Request Details Security Card */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px" }}>
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: 0 }}>
                      Request Details
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Device</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", margin: 0 }}>{device}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Location</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", margin: 0 }}>{location}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0 0 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>IP Address</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontFamily: "monospace", color: "#0f172a", margin: 0 }}>{ipAddress}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Raw URL Fallback */}
          <Section style={{ padding: "0 32px 28px 32px" }}>
            <Text style={{ fontSize: "11px", color: "#94a3b8", margin: "0 0 6px 0" }}>
              Or copy and paste this URL into your browser:
            </Text>
            <div style={{ padding: "10px 14px", backgroundColor: "#f1f5f9", borderRadius: "8px", fontFamily: "monospace", fontSize: "11px", color: "#475569", wordBreak: "break-all" }}>
              {loginUrl}
            </div>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "20px 32px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              If you didn't attempt to sign in, you can safely disregard this email.
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
    <title>Magic Link Verification</title>
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
              style="max-width:560px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(226,232,240);overflow:hidden;text-align:left">
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
                          <td style="height:6px;background:linear-gradient(90deg,rgb(99,102,241) 0%,rgb(59,130,246) 50%,rgb(6,182,212) 100%)"></td>
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
                                            <span style="display:inline-block;vertical-align:middle;width:32px;height:32px;border-radius:10px;background-color:rgb(79,70,229);color:rgb(255,255,255);font-size:14px;font-weight:700;line-height:32px;text-align:center;margin-right:10px">
                                              🛡
                                            </span>
                                            <span style="display:inline-block;vertical-align:middle;font-size:16px;font-weight:700;color:rgb(15,23,42);letter-spacing:-0.3px">
                                              Lumen Auth
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:40%;vertical-align:middle;text-align:right">
                                    <span style="display:inline-block;font-size:11px;font-weight:600;color:rgb(217,119,6);background-color:rgb(254,243,199);border:1px solid rgb(253,230,138);border-radius:9999px;padding:4px 10px">
                                      ⏱ Expires in 10 mins
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
                              Your magic sign-in link
                            </h2>
                            <p style="font-size:14px;color:rgb(71,85,105);line-height:1.6;margin:0">
                              Click the button below to securely authenticate your session for <strong style="color:rgb(15,23,42)">alex@example.com</strong>. No password required.
                            </p>
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
                          <td style="padding:0 32px 28px 32px">
                            <a
                              href="https://auth.lumen.co/verify?token=mglk_9821804918204128941098"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(79,70,229);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>Sign In to Your Account →</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Request Details Security Box -->
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
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:16px 20px">
                              <tbody>
                                <tr>
                                  <td style="padding-bottom:10px">
                                    <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0">
                                      Request Details
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:8px 0;border-top:1px solid rgb(237,242,247)">
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
                                            style="width:40%;text-align:left">
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Device</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(15,23,42);margin:0">Chrome on macOS (Sonoma)</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:8px 0;border-top:1px solid rgb(237,242,247)">
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
                                            style="width:40%;text-align:left">
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Location</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(15,23,42);margin:0">San Francisco, CA, USA</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:8px 0 0 0;border-top:1px solid rgb(237,242,247)">
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
                                            style="width:40%;text-align:left">
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">IP Address</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-family:monospace;color:rgb(15,23,42);margin:0">198.51.100.42</p>
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

                    <!-- Fallback Link -->
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
                            <p style="font-size:11px;color:rgb(148,163,184);margin:0 0 6px 0">
                              Or copy and paste this URL into your browser:
                            </p>
                            <div style="padding:10px 14px;background-color:rgb(241,245,249);border-radius:8px;font-family:monospace;font-size:11px;color:rgb(71,85,105);word-break:break-all">
                              https://auth.lumen.co/verify?token=mglk_9821804918204128941098
                            </div>
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
                          <td style="padding:20px 32px;background-color:rgb(248,250,252);border-top:1px solid rgb(226,232,240);text-align:center">
                            <p style="font-size:12px;color:rgb(148,163,184);margin:0">
                              If you didn't attempt to sign in, you can safely disregard this email.
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
  plainText: `🛡

Lumen Auth

⏱ Expires in 10 mins


YOUR MAGIC SIGN-IN LINK

Click the button below to securely authenticate your session for alex@example.com. No password required.

Sign In to Your Account → https://auth.lumen.co/verify?token=mglk_9821804918204128941098

Request Details

Device

Chrome on macOS (Sonoma)

Location

San Francisco, CA, USA

IP Address

198.51.100.42

Or copy and paste this URL into your browser:

https://auth.lumen.co/verify?token=mglk_9821804918204128941098

If you didn't attempt to sign in, you can safely disregard this email.`,
  usageCode: `import MagicLinkEmail from "@/templates/magic-link";
import { reloop } from "@reloop/sdk";

// Send passwordless magic link
await reloop.emails.send({
  from: "security@lumen.co",
  to: "developer@example.com",
  subject: "Your Lumen Magic Sign-in Link",
  react: <MagicLinkEmail loginUrl="https://auth.lumen.co/verify?token=..." />,
});`,
};
