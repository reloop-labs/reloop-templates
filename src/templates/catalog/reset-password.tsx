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
  Text,
  Button,
  Hr,
} from "@react-email/components";

interface ResetPasswordProps {
  resetUrl?: string;
  userName?: string;
}

export default function ResetPasswordEmail({
  resetUrl = "https://reloop.sh/reset-password?token=example",
  userName = "Developer",
}: ResetPasswordProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#fafafa", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "540px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #eaeaea" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#111827", margin: "0 0 12px" }}>
            Reset your password
          </Text>
          <Text style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: "0 0 24px" }}>
            Hi {userName}, click below to create a new password. This link is valid for 30 minutes.
          </Text>
          <Button href={resetUrl} style={{ background: "#7c3aed", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            Reset Password
          </Button>
          <Hr style={{ borderColor: "#eaeaea", margin: "24px 0" }} />
          <Text style={{ fontSize: "12px", color: "#9ca3af" }}>
            If you didn't request this change, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#fafafa;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="540" style="background:#ffffff;border:1px solid #eaeaea;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="font-size:20px;color:#111827;margin:0 0 12px;">Reset your password</h2>
        <p style="font-size:14px;color:#4b5563;line-height:1.6;margin:0 0 24px;">Click the button below to choose a new password. This link expires in 30 minutes.</p>
        <a href="https://reloop.sh/reset-password" style="display:block;text-align:center;background:#7c3aed;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">Reset Password</a>
        <hr style="border:none;border-top:1px solid #eaeaea;margin:24px 0;">
        <p style="color:#9ca3af;font-size:12px;margin:0;">If you didn't request this change, you can safely ignore this email.</p>
      </td>
    </tr>
  </table>
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
