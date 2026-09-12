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
  badge: "Official",
  description: "Official introductory template welcoming developers to Reloop. Features bulletproof responsive layout and dark mode styling.",
  component: HelloWorldPreview,
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

interface HelloWorldEmailProps {
  name?: string;
}

export default function HelloWorldEmail({
  name = "Developer",
}: HelloWorldEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f6f9fc", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #e2e8f0" }}>
          <Text style={{ fontSize: "22px", fontWeight: "bold", color: "#0f172a", margin: "0 0 12px" }}>
            Hello, {name}!
          </Text>
          <Text style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: "0 0 24px" }}>
            Welcome to Reloop Templates. This starter layout delivers high inbox placement across all email clients.
          </Text>
          <Button href="https://reloop.sh" style={{ background: "#0f172a", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            Get Started
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#f6f9fc;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="560" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="font-size:22px;color:#0f172a;margin:0 0 12px;">Hello, Developer!</h2>
        <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px;">Welcome to Reloop Templates. Bulletproof responsive email template.</p>
        <a href="https://reloop.sh" style="display:block;text-align:center;background:#0f172a;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">Get Started</a>
      </td>
    </tr>
  </table>
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
