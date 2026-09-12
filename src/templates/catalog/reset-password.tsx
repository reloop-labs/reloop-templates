import React from "react";
import { KeyRound, Shield, Clock, ArrowRight } from "lucide-react";
import { EmailTemplate } from "../types";

export function ResetPasswordPreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Accent bar */}
      <div className="h-1.5 w-full bg-violet-600" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 flex items-center justify-center">
            <KeyRound className="w-5 h-5" />
          </div>
          <span className="text-xs text-zinc-500 font-medium">Account Security</span>
        </div>

        {/* Copy */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Reset your password
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We received a request to reset the password for your account. Click the button below to choose a secure new password.
          </p>
        </div>

        {/* Primary CTA */}
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm shadow-md transition-colors gap-2"
          >
            <span>Reset Password</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Security advisory */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
          <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-200">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>This link expires in 30 minutes</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            If you didn&apos;t request a password reset, please ignore this email or reach out to support if you have concerns regarding your account security.
          </p>
        </div>
      </div>
    </div>
  );
}

export const resetPasswordTemplate: EmailTemplate = {
  id: "reset-password",
  title: "Password Reset",
  category: "Auth & Security",
  description: "Secure account recovery email with token expiration warning, high-contrast action CTA, and security note.",
  component: ResetPasswordPreview,
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

interface ResetPasswordProps {
  resetUrl?: string;
  userEmail?: string;
  expiryMinutes?: number;
}

export default function ResetPasswordEmail({
  resetUrl = "https://reloop.sh/reset-password?token=rst_81920381029",
  userEmail = "alex@example.com",
  expiryMinutes = 30,
}: ResetPasswordProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Top Violet Accent Bar */}
          <div style={{ height: "6px", width: "100%", backgroundColor: "#7c3aed" }} />

          {/* Header */}
          <Section style={{ padding: "28px 32px 20px 32px" }}>
            <Row>
              <Column style={{ width: "60%", verticalAlign: "middle" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#ede9fe", textAlign: "center", lineHeight: "36px", color: "#7c3aed", fontSize: "16px" }}>
                  🔑
                </div>
              </Column>
              <Column style={{ width: "40%", verticalAlign: "middle", textAlign: "right" }}>
                <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
                  Account Security
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <Text style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
              Reset your password
            </Text>
            <Text style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              We received a request to reset the password for your account (<strong style={{ color: "#0f172a" }}>{userEmail}</strong>). Click the button below to choose a secure new password.
            </Text>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 32px 28px 32px" }}>
            <Button
              href={resetUrl}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#7c3aed",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Reset Password →
            </Button>
          </Section>

          {/* Expiry Advisory Box */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px" }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: "0 0 4px 0" }}>
                      ⏱ This link expires in {expiryMinutes} minutes
                    </Text>
                    <Text style={{ fontSize: "11px", color: "#64748b", margin: 0, lineHeight: "1.5" }}>
                      If you didn't request a password reset, please ignore this email or reach out to support if you have concerns regarding your account security.
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 32px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Reloop Security • Automated system notification
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
    <title>Password Reset</title>
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
                          <td style="height:6px;background-color:rgb(124,58,237)"></td>
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
                                    <span style="display:inline-block;width:36px;height:36px;border-radius:10px;background-color:rgb(237,233,254);color:rgb(124,58,237);font-size:16px;line-height:36px;text-align:center">
                                      🔑
                                    </span>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:40%;vertical-align:middle;text-align:right">
                                    <span style="font-size:12px;color:rgb(100,116,139)">
                                      Account Security
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
                              Reset your password
                            </h2>
                            <p style="font-size:14px;color:rgb(71,85,105);line-height:1.6;margin:0">
                              We received a request to reset the password for your account (<strong style="color:rgb(15,23,42)">alex@example.com</strong>). Click the button below to choose a secure new password.
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
                              href="https://reloop.sh/reset-password?token=rst_81920381029"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(124,58,237);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>Reset Password →</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Security Note Box -->
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
                                  <td style="vertical-align:top">
                                    <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0 0 4px 0">
                                      ⏱ This link expires in 30 minutes
                                    </p>
                                    <p style="font-size:11px;color:rgb(100,116,139);margin:0;line-height:1.5">
                                      If you didn't request a password reset, please ignore this email or reach out to support if you have concerns regarding your account security.
                                    </p>
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
                              Reloop Security • Automated system notification
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
  usageCode: `import ResetPasswordEmail from "@/templates/reset-password";
import { reloop } from "@reloop/sdk";

// Send password reset link
await reloop.emails.send({
  from: "security@reloop.sh",
  to: "user@example.com",
  subject: "Reset your Reloop password",
  react: <ResetPasswordEmail resetUrl="https://reloop.sh/reset-password?token=..." />,
});`,
};
