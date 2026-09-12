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
  badge: "Essential",
  description: "Six-digit one-time passcode authentication email with monospace digit boxes, anti-phishing advisory, and expiry notice.",
  component: OTPCodePreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface OTPCodeEmailProps {
  code?: string;
  userName?: string;
}

export default function OTPCodeEmail({
  code = "842910",
  userName = "Developer",
}: OTPCodeEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f4f4f5", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "520px", margin: "0 auto", background: "#ffffff", borderRadius: "14px", padding: "32px", border: "1px solid #e4e4e7", textAlign: "center" }}>
          <Text style={{ fontSize: "22px", fontWeight: "bold", color: "#18181b", margin: "0 0 8px" }}>
            Verification Code
          </Text>
          <Text style={{ fontSize: "14px", color: "#71717a", margin: "0 0 24px" }}>
            Hi {userName}, use this 6-digit code to complete your two-factor login.
          </Text>
          <Section style={{ background: "#f4f4f5", borderRadius: "10px", padding: "18px", margin: "0 auto 24px", letterSpacing: "10px", fontSize: "32px", fontWeight: "bold", fontFamily: "monospace", color: "#09090b" }}>
            {code}
          </Section>
          <Text style={{ fontSize: "12px", color: "#a1a1aa" }}>
            This code will expire in 5 minutes. Do not share it with anyone.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#f4f4f5;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="520" style="background:#ffffff;border:1px solid #e4e4e7;border-radius:14px;padding:32px;text-align:center;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="font-size:22px;color:#18181b;margin:0 0 8px;">Verification Code</h2>
        <p style="color:#71717a;font-size:14px;margin:0 0 24px;">Use this 6-digit code to complete your login.</p>
        <div style="background:#f4f4f5;border-radius:10px;padding:18px;margin:0 auto 24px;letter-spacing:10px;font-size:32px;font-weight:bold;font-family:monospace;color:#09090b;">
          842910
        </div>
        <p style="color:#a1a1aa;font-size:12px;margin:0;">Expires in 5 minutes. Never share this code.</p>
      </td>
    </tr>
  </table>
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
