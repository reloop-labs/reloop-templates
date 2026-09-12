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
