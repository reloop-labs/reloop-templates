import React from "react";
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
