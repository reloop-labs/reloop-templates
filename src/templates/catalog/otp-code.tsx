import React from "react";
import { KeyRound, ShieldAlert, Copy, Clock } from "lucide-react";
import { EmailTemplate } from "../types";

export function OTPCodePreview() {
  const digits = ["8", "4", "2", "9", "1", "0"];

  return (
    <div className="w-full max-w-[540px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0e1117] dark:border-zinc-800 dark:text-zinc-100">
      {/* Header Accent */}
      <div className="bg-slate-900 dark:bg-zinc-900 px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-white">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
            <KeyRound className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm tracking-tight">Two-Factor Authentication</span>
        </div>
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
          <Clock className="w-3 h-3 text-emerald-400" />
          <span>Valid for 5 mins</span>
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Verification Code
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Please enter the following 6-digit one-time passcode to confirm your login.
          </p>
        </div>

        {/* 6 Digit Box Grid */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 py-2">
          {digits.map((digit, i) => (
            <div
              key={i}
              className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center font-mono text-2xl font-extrabold text-zinc-900 dark:text-white shadow-2xs"
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Security Alert Note */}
        <div className="rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 p-4 flex gap-3 text-xs text-amber-900 dark:text-amber-200">
          <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-semibold">Security Reminder</span>
            <p className="text-[11px] opacity-90">
              Never share this code with anyone. Reloop staff will never request your 2FA passcode over phone, chat, or email.
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-500">
          <span>Didn&apos;t request this code? </span>
          <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Review active devices</a>
        </div>
      </div>
    </div>
  );
}

export const otpCodeTemplate: EmailTemplate = {
  id: "otp-code",
  title: "2FA Verification Code (OTP)",
  category: "Auth & Security",
  description: "Six-digit one-time passcode authentication email with monospace digit boxes, anti-phishing advisory, and expiry notice.",
  component: OTPCodePreview,
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
  Hr,
  Link,
} from "@react-email/components";

interface OTPCodeEmailProps {
  code?: string;
  userName?: string;
}

export default function OTPCodeEmail({
  code = "842910",
  userName = "Developer",
}: OTPCodeEmailProps) {
  const digits = code.slice(0, 6).split("");

  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f4f4f5", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "540px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "16px", overflow: "hidden" }}>
          {/* Header */}
          <Section style={{ backgroundColor: "#0f172a", padding: "20px 28px" }}>
            <Row>
              <Column style={{ width: "65%", verticalAlign: "middle" }}>
                <Text style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  🔒 Two-Factor Authentication
                </Text>
              </Column>
              <Column style={{ width: "35%", verticalAlign: "middle", textAlign: "right" }}>
                <Text style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399", margin: 0 }}>
                  ⏱ Valid for 5 mins
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Content Heading */}
          <Section style={{ padding: "32px 28px 20px 28px", textAlign: "center" }}>
            <Text style={{ fontSize: "24px", fontWeight: "800", color: "#18181b", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
              Verification Code
            </Text>
            <Text style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.5" }}>
              Hi {userName}, please enter the following 6-digit one-time passcode to confirm your login.
            </Text>
          </Section>

          {/* 6 Digit Cards */}
          <Section style={{ padding: "10px 28px 28px 28px", textAlign: "center" }}>
            <table align="center" border={0} cellPadding={0} cellSpacing={6} role="presentation">
              <tbody>
                <tr>
                  {digits.map((digit, i) => (
                    <td
                      key={i}
                      style={{
                        width: "48px",
                        height: "56px",
                        backgroundColor: "#f4f4f5",
                        border: "2px solid #e4e4e7",
                        borderRadius: "12px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        fontSize: "26px",
                        fontWeight: "800",
                        fontFamily: "monospace",
                        color: "#09090b",
                      }}
                    >
                      {digit}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Security Advisory Note */}
          <Section style={{ padding: "0 28px 24px 28px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#fef3c7", border: "1px solid #fde68a", borderRadius: "12px", padding: "14px 18px" }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top", width: "24px", paddingTop: "2px" }}>
                    <span style={{ fontSize: "16px" }}>⚠️</span>
                  </td>
                  <td style={{ verticalAlign: "top", paddingLeft: "8px" }}>
                    <Text style={{ fontSize: "12px", fontWeight: "700", color: "#92400e", margin: "0 0 2px 0" }}>
                      Security Reminder
                    </Text>
                    <Text style={{ fontSize: "11px", color: "#b45309", margin: 0, lineHeight: "1.4" }}>
                      Never share this code with anyone. Reloop staff will never request your 2FA passcode over phone, chat, or email.
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 28px", backgroundColor: "#fafafa", borderTop: "1px solid #f4f4f5", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#71717a", margin: 0 }}>
              Didn't request this code?{" "}
              <Link href="https://reloop.sh/security" style={{ color: "#4f46e5", fontWeight: "600", textDecoration: "underline" }}>
                Review active devices
              </Link>
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
    <title>2FA Verification Code (OTP)</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(244,244,245);margin:0;padding:32px 0;">
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
            style="background-color:rgb(244,244,245);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:540px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(228,228,231);overflow:hidden;text-align:left">
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
                          <td style="background-color:rgb(15,23,42);padding:20px 28px">
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
                                    style="width:65%;vertical-align:middle;text-align:left">
                                    <p style="font-size:14px;font-weight:700;color:rgb(255,255,255);margin:0">
                                      🔒 Two-Factor Authentication
                                    </p>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:35%;vertical-align:middle;text-align:right">
                                    <span style="font-size:11px;font-family:monospace;color:rgb(52,211,153);margin:0">
                                      ⏱ Valid for 5 mins
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
                          <td style="padding:32px 28px 20px 28px;text-align:center">
                            <h2 style="font-size:24px;font-weight:800;color:rgb(24,24,27);margin:0 0 8px 0;letter-spacing:-0.5px">
                              Verification Code
                            </h2>
                            <p style="font-size:13px;color:rgb(113,113,122);margin:0;line-height:1.5">
                              Please enter the following 6-digit one-time passcode to confirm your login.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- 6 Monospace Digit Boxes -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:10px 28px 28px 28px;text-align:center">
                            <table align="center" border="0" cellpadding="0" cellspacing="6" role="presentation">
                              <tbody>
                                <tr>
                                  <td style="width:48px;height:56px;background-color:rgb(244,244,245);border:2px solid rgb(228,228,231);border-radius:12px;text-align:center;vertical-align:middle;font-size:26px;font-weight:800;font-family:monospace;color:rgb(9,9,11)">8</td>
                                  <td style="width:48px;height:56px;background-color:rgb(244,244,245);border:2px solid rgb(228,228,231);border-radius:12px;text-align:center;vertical-align:middle;font-size:26px;font-weight:800;font-family:monospace;color:rgb(9,9,11)">4</td>
                                  <td style="width:48px;height:56px;background-color:rgb(244,244,245);border:2px solid rgb(228,228,231);border-radius:12px;text-align:center;vertical-align:middle;font-size:26px;font-weight:800;font-family:monospace;color:rgb(9,9,11)">2</td>
                                  <td style="width:48px;height:56px;background-color:rgb(244,244,245);border:2px solid rgb(228,228,231);border-radius:12px;text-align:center;vertical-align:middle;font-size:26px;font-weight:800;font-family:monospace;color:rgb(9,9,11)">9</td>
                                  <td style="width:48px;height:56px;background-color:rgb(244,244,245);border:2px solid rgb(228,228,231);border-radius:12px;text-align:center;vertical-align:middle;font-size:26px;font-weight:800;font-family:monospace;color:rgb(9,9,11)">1</td>
                                  <td style="width:48px;height:56px;background-color:rgb(244,244,245);border:2px solid rgb(228,228,231);border-radius:12px;text-align:center;vertical-align:middle;font-size:26px;font-weight:800;font-family:monospace;color:rgb(9,9,11)">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Security Alert Note -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 28px 24px 28px">
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(254,243,199);border:1px solid rgb(253,230,138);border-radius:12px;padding:14px 18px">
                              <tbody style="width:100%">
                                <tr>
                                  <td style="vertical-align:top;width:24px;padding-top:2px">
                                    <span style="font-size:16px">⚠️</span>
                                  </td>
                                  <td style="vertical-align:top;padding-left:8px">
                                    <p style="font-size:12px;font-weight:700;color:rgb(146,64,14);margin:0 0 2px 0">
                                      Security Reminder
                                    </p>
                                    <p style="font-size:11px;color:rgb(180,83,9);margin:0;line-height:1.4">
                                      Never share this code with anyone. Reloop staff will never request your 2FA passcode over phone, chat, or email.
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
                          <td style="padding:18px 28px;background-color:rgb(250,250,250);border-top:1px solid rgb(244,244,245);text-align:center">
                            <p style="font-size:12px;color:rgb(113,113,122);margin:0">
                              Didn't request this code?{" "}
                              <a href="https://reloop.sh/security" style="color:rgb(79,70,229);font-weight:600;text-decoration:underline">
                                Review active devices
                              </a>
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
  usageCode: `import OTPCodeEmail from "@/templates/otp-code";
import { reloop } from "@reloop/sdk";

// Send 2FA One-Time Passcode
await reloop.emails.send({
  from: "security@reloop.sh",
  to: "user@example.com",
  subject: "842910 is your Reloop verification code",
  react: <OTPCodeEmail code="842910" userName="Alex Morgan" />,
});`,
};
