import os

catalog_dir = "/Users/twinkal/Development/reloop-templates/src/templates/catalog"

founder_welcome = '''import React from "react";
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
            <span>Reloop</span>
          </div>
          <span className="text-xs text-zinc-400">Founder Note</span>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p className="font-semibold text-base text-zinc-900 dark:text-white">
            Hey Alex,
          </p>
          <p>
            I wanted to personally reach out and welcome you to Reloop. We built Reloop because we got tired of brittle email HTML tables breaking in Outlook and tedious deliverability debugging.
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
              <div className="text-xs text-zinc-500">Founder &amp; CEO, Reloop</div>
            </div>
          </div>

          <a
            href="https://reloop.sh/console"
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
  badge: "High Reply Rate",
  description: "Personal, conversational letter from the founder driving user engagement, feedback loops, and console activations.",
  component: FounderWelcomePreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr,
} from "@react-email/components";

interface FounderWelcomeProps {
  userName?: string;
  founderName?: string;
}

export default function FounderWelcomeEmail({
  userName = "Alex",
  founderName = "Twinkal",
}: FounderWelcomeProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#ffffff", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "16px" }}>
          <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#111827", margin: "0 0 16px" }}>
            Hey {userName},
          </Text>
          <Text style={{ fontSize: "15px", lineHeight: "1.6", color: "#374151", margin: "0 0 16px" }}>
            Welcome to Reloop! We built this platform to take the pain out of transactional email infrastructure.
          </Text>
          <Text style={{ fontSize: "15px", lineHeight: "1.6", color: "#374151", margin: "0 0 16px" }}>
            If you have questions or want to see a specific template, simply hit reply to this email.
          </Text>
          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />
          <Text style={{ fontSize: "14px", fontWeight: "bold", color: "#111827", margin: 0 }}>
            {founderName}
          </Text>
          <Text style={{ fontSize: "12px", color: "#6b7280", margin: "4px 0 0" }}>
            Founder & CEO, Reloop
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#ffffff;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="560" style="background:#ffffff;padding:16px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h3 style="color:#111827;font-size:16px;margin:0 0 16px;">Hey Alex,</h3>
        <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">Welcome to Reloop! We built this platform to simplify transactional email infrastructure.</p>
        <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">Feel free to reply directly to this email if you ever need any assistance.</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
        <p style="margin:0;font-weight:bold;color:#111827;">Twinkal</p>
        <p style="margin:4px 0 0;font-size:12px;color:#6b7280;">Founder &amp; CEO, Reloop</p>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import FounderWelcomeEmail from "@/templates/founder-welcome";
import { reloop } from "@reloop/sdk";

// Send personal founder note upon signup
await reloop.emails.send({
  from: "twinkal@reloop.sh",
  to: "newuser@example.com",
  subject: "Welcome to Reloop - personal note from the founder",
  react: <FounderWelcomeEmail userName="Alex" />,
});`,
};
'''

with open(os.path.join(catalog_dir, "founder-welcome.tsx"), "w") as f:
    f.write(founder_welcome)

weekly_digest = '''import React from "react";
import { TrendingUp, Mail, CheckCircle2, Eye, MousePointer, ArrowRight } from "lucide-react";
import { EmailTemplate } from "../types";

export function WeeklyDigestPreview() {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Header Accent */}
      <div className="bg-indigo-600 px-6 sm:px-8 py-6 text-white flex justify-between items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">Weekly Report</span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Email Delivery Digest
          </h2>
          <div className="text-xs text-indigo-200 mt-1">Sep 5 - Sep 12, 2026</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-indigo-200">Overall Health</div>
          <div className="text-sm font-bold text-emerald-300">99.94% Optimal</div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* KPI Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1">
            <div className="text-zinc-500 text-[11px] font-medium flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span>Sent</span>
            </div>
            <div className="text-xl font-bold text-zinc-900 dark:text-white">142,850</div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>+12.4%</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1">
            <div className="text-zinc-500 text-[11px] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Delivered</span>
            </div>
            <div className="text-xl font-bold text-zinc-900 dark:text-white">99.94%</div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              Zero dropouts
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1">
            <div className="text-zinc-500 text-[11px] font-medium flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>Open Rate</span>
            </div>
            <div className="text-xl font-bold text-zinc-900 dark:text-white">42.8%</div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>+3.2%</span>
            </div>
          </div>
        </div>

        {/* Top Performing Templates Table */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden text-xs">
          <div className="bg-zinc-50 dark:bg-zinc-900/60 p-3 font-semibold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">
            Top Performing Templates
          </div>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            <div className="p-3 flex justify-between items-center">
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white">Magic Link Verification</div>
                <div className="text-[11px] text-zinc-500">Auth &amp; Security</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-emerald-600 dark:text-emerald-400">84.2% Clicks</div>
                <div className="text-[11px] text-zinc-500">64,210 sent</div>
              </div>
            </div>

            <div className="p-3 flex justify-between items-center">
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white">Amazon Order Receipt</div>
                <div className="text-[11px] text-zinc-500">Transactional</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-indigo-600 dark:text-indigo-400">62.8% Opens</div>
                <div className="text-[11px] text-zinc-500">48,920 sent</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://reloop.sh/analytics"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-sm transition-colors"
        >
          <span>View Full Analytics Dashboard</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export const weeklyDigestTemplate: EmailTemplate = {
  id: "weekly-digest",
  title: "Weekly Analytics Digest",
  category: "Growth & Onboarding",
  badge: "Analytics",
  description: "Weekly performance report summarizing delivery volume, inbox placement KPIs, and top-converting email templates.",
  component: WeeklyDigestPreview,
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

interface WeeklyDigestProps {
  totalSent?: string;
  deliveryRate?: string;
  openRate?: string;
}

export default function WeeklyDigestEmail({
  totalSent = "142,850",
  deliveryRate = "99.94%",
  openRate = "42.8%",
}: WeeklyDigestProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f8fafc", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #e2e8f0" }}>
          <Text style={{ fontSize: "22px", fontWeight: "bold", color: "#1e1b4b", margin: "0 0 8px" }}>
            Weekly Email Digest
          </Text>
          <Text style={{ fontSize: "14px", color: "#64748b", margin: "0 0 24px" }}>
            Here is how your transactional emails performed this week:
          </Text>
          <Section style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
            <div style={{ flex: 1, padding: "16px", background: "#f1f5f9", borderRadius: "8px" }}>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Total Sent</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: "#0f172a" }}>{totalSent}</div>
            </div>
            <div style={{ flex: 1, padding: "16px", background: "#f1f5f9", borderRadius: "8px" }}>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Delivery Rate</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: "#059669" }}>{deliveryRate}</div>
            </div>
            <div style={{ flex: 1, padding: "16px", background: "#f1f5f9", borderRadius: "8px" }}>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Open Rate</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: "#4f46e5" }}>{openRate}</div>
            </div>
          </Section>
          <Button href="https://reloop.sh/analytics" style={{ background: "#4f46e5", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", display: "block", textAlign: "center" }}>
            View Full Analytics
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#f8fafc;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="600" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="font-size:22px;color:#1e1b4b;margin:0 0 8px;">Weekly Email Digest</h2>
        <p style="font-size:14px;color:#64748b;margin:0 0 24px;">Email infrastructure summary for Sep 5 - Sep 12, 2026.</p>
        <table width="100%" cellpadding="8" style="margin-bottom:24px;">
          <tr>
            <td style="background:#f1f5f9;border-radius:8px;padding:16px;">
              <span style="font-size:12px;color:#64748b;">Total Sent</span><br>
              <strong style="font-size:20px;color:#0f172a;">142,850</strong>
            </td>
            <td style="background:#f1f5f9;border-radius:8px;padding:16px;">
              <span style="font-size:12px;color:#64748b;">Delivered</span><br>
              <strong style="font-size:20px;color:#059669;">99.94%</strong>
            </td>
            <td style="background:#f1f5f9;border-radius:8px;padding:16px;">
              <span style="font-size:12px;color:#64748b;">Open Rate</span><br>
              <strong style="font-size:20px;color:#4f46e5;">42.8%</strong>
            </td>
          </tr>
        </table>
        <a href="https://reloop.sh/analytics" style="display:block;text-align:center;background:#4f46e5;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">View Full Analytics</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import WeeklyDigestEmail from "@/templates/weekly-digest";
import { reloop } from "@reloop/sdk";

// Send automated weekly metrics digest to engineering leads
await reloop.emails.send({
  from: "reports@reloop.sh",
  to: "cto@company.com",
  subject: "Reloop Weekly Digest: 142,850 emails sent with 99.94% delivery",
  react: <WeeklyDigestEmail totalSent="142,850" deliveryRate="99.94%" openRate="42.8%" />,
});`,
};
'''

with open(os.path.join(catalog_dir, "weekly-digest.tsx"), "w") as f:
    f.write(weekly_digest)

hello_world = '''import React from "react";
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
'''

with open(os.path.join(catalog_dir, "hello-world.tsx"), "w") as f:
    f.write(hello_world)

print("Growth templates generated successfully.")
