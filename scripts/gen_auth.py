import os

catalog_dir = "/Users/twinkal/Development/reloop-templates/src/templates/catalog"

magic_link = '''import React from "react";
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
            <span>Reloop Auth</span>
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
            https://auth.reloop.sh/verify?token=mglk_9821804918204128941098
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
  badge: "High Conversion",
  description: "Passwordless authentication email with 10-minute expiry countdown, client geolocation metadata, and raw URL fallback.",
  component: MagicLinkPreview,
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
  Link,
} from "@react-email/components";

interface MagicLinkEmailProps {
  loginUrl?: string;
  userEmail?: string;
  ipAddress?: string;
  location?: string;
}

export default function MagicLinkEmail({
  loginUrl = "https://auth.reloop.sh/verify?token=example",
  userEmail = "alex@example.com",
  ipAddress = "198.51.100.42",
  location = "San Francisco, CA",
}: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f9fafb", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #e5e7eb" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#111827", margin: "0 0 12px" }}>
            Your magic sign-in link
          </Text>
          <Text style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: "0 0 24px" }}>
            Click below to sign in to your Reloop account ({userEmail}). This link expires in 10 minutes.
          </Text>
          <Button href={loginUrl} style={{ background: "#4f46e5", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            Sign In to Reloop
          </Button>
          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />
          <Text style={{ fontSize: "12px", color: "#6b7280" }}>
            Requested from {location} (IP: {ipAddress}). If you didn't request this, you can ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#f9fafb;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="560" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="margin:0 0 12px;color:#111827;font-size:20px;">Your magic sign-in link</h2>
        <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0 0 24px;">Click the button below to sign in. This link will expire in 10 minutes.</p>
        <a href="https://auth.reloop.sh/verify" style="display:block;text-align:center;background:#4f46e5;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">Sign In to Reloop</a>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
        <p style="color:#9ca3af;font-size:12px;margin:0;">Requested from San Francisco, CA (IP: 198.51.100.42).</p>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import MagicLinkEmail from "@/templates/magic-link";
import { reloop } from "@reloop/sdk";

// Send passwordless magic link
await reloop.emails.send({
  from: "security@reloop.sh",
  to: "developer@example.com",
  subject: "Your Reloop Magic Sign-in Link",
  react: <MagicLinkEmail loginUrl="https://auth.reloop.sh/verify?token=..." />,
});`,
};
'''

with open(os.path.join(catalog_dir, "magic-link.tsx"), "w") as f:
    f.write(magic_link)

otp_code = '''import React from "react";
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
'''

with open(os.path.join(catalog_dir, "otp-code.tsx"), "w") as f:
    f.write(otp_code)

new_device = '''import React from "react";
import { ShieldAlert, AlertTriangle, MapPin, Smartphone, Lock, Check } from "lucide-react";
import { EmailTemplate } from "../types";

export function NewDeviceAlertPreview() {
  return (
    <div className="w-full max-w-[580px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Alert Header */}
      <div className="bg-amber-500/10 dark:bg-amber-500/15 border-b border-amber-200/80 dark:border-amber-900/50 px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-amber-900 dark:text-amber-300">Security Alert</div>
          <div className="text-xs text-amber-700 dark:text-amber-400">New login from unrecognized device</div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Did you just sign in?
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            We noticed a successful login to your Reloop account from a device or location we haven&apos;t seen before.
          </p>
        </div>

        {/* Device Information Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-zinc-800">
            <span className="text-zinc-500 font-medium">When</span>
            <span className="font-semibold text-zinc-900 dark:text-white">Today at 3:42 PM UTC</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-zinc-800">
            <span className="text-zinc-500 font-medium">Device / Browser</span>
            <span className="font-semibold text-zinc-900 dark:text-white">Firefox 129 on Linux Ubuntu</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-zinc-800">
            <span className="text-zinc-500 font-medium">Approximate Location</span>
            <span className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              Frankfurt, Germany
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500 font-medium">IP Address</span>
            <span className="font-mono text-zinc-900 dark:text-white">85.214.132.11</span>
          </div>
        </div>

        {/* Dual Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 font-medium text-xs text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Yes, this was me</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 font-semibold text-xs text-white shadow-sm transition-colors"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>No, lock my account</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const newDeviceAlertTemplate: EmailTemplate = {
  id: "new-device-alert",
  title: "New Device Login Alert",
  category: "Auth & Security",
  badge: "Security",
  description: "Real-time security notice alerting users to logins from unfamiliar devices, IP addresses, or foreign geolocations.",
  component: NewDeviceAlertPreview,
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

interface NewDeviceAlertProps {
  device?: string;
  location?: string;
  ip?: string;
}

export default function NewDeviceAlertEmail({
  device = "Firefox 129 on Linux",
  location = "Frankfurt, Germany",
  ip = "85.214.132.11",
}: NewDeviceAlertProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#fafafa", fontFamily: "sans-serif", margin: 0, padding: "20px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #e4e4e7" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#b45309", margin: "0 0 12px" }}>
            Security Alert: New sign-in detected
          </Text>
          <Text style={{ fontSize: "14px", color: "#3f3f46", margin: "0 0 20px" }}>
            We noticed a new login to your account:
          </Text>
          <Section style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px", fontSize: "13px", lineHeight: "1.8", color: "#27272a" }}>
            <div><strong>Device:</strong> {device}</div>
            <div><strong>Location:</strong> {location}</div>
            <div><strong>IP:</strong> {ip}</div>
          </Section>
          <Hr style={{ margin: "24px 0", borderColor: "#e4e4e7" }} />
          <Button href="https://reloop.sh/security/lock" style={{ background: "#e11d48", color: "#ffffff", padding: "12px 20px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
            Lock Account Immediately
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#fafafa;font-family:sans-serif;margin:0;padding:20px;">
  <table align="center" width="560" style="background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="color:#b45309;font-size:20px;margin:0 0 12px;">Security Alert: New sign-in detected</h2>
        <p style="color:#3f3f46;font-size:14px;margin:0 0 20px;">A login occurred from an unrecognized device:</p>
        <div style="background:#f4f4f5;padding:16px;border-radius:8px;font-size:13px;line-height:1.8;color:#27272a;">
          <strong>Device:</strong> Firefox 129 on Linux<br>
          <strong>Location:</strong> Frankfurt, Germany<br>
          <strong>IP:</strong> 85.214.132.11
        </div>
        <hr style="margin:24px 0;border:none;border-top:1px solid #e4e4e7;">
        <a href="https://reloop.sh/security/lock" style="display:inline-block;background:#e11d48;color:#ffffff;padding:12px 20px;border-radius:6px;font-weight:bold;text-decoration:none;">Lock Account Immediately</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import NewDeviceAlertEmail from "@/templates/new-device-alert";
import { reloop } from "@reloop/sdk";

// Trigger security notice on suspicious login
await reloop.emails.send({
  from: "security@reloop.sh",
  to: "user@example.com",
  subject: "Security alert: New login from Frankfurt, Germany",
  react: <NewDeviceAlertEmail location="Frankfurt, Germany" ip="85.214.132.11" />,
});`,
};
'''

with open(os.path.join(catalog_dir, "new-device-alert.tsx"), "w") as f:
    f.write(new_device)

reset_password = '''import React from "react";
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
'''

with open(os.path.join(catalog_dir, "reset-password.tsx"), "w") as f:
    f.write(reset_password)

print("Auth templates generated successfully.")
