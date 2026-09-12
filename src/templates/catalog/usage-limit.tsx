import React from "react";
import { Gauge, ArrowUpRight, CheckCircle2, Zap } from "lucide-react";
import { EmailTemplate } from "../types";

export function UsageLimitPreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0b0d13] dark:border-zinc-800 dark:text-zinc-100">
      {/* Top Banner */}
      <div className="bg-amber-500/10 border-b border-amber-200 dark:border-amber-900/40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs">
          <Gauge className="w-4 h-4" />
          <span>Usage Quota Alert</span>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300">
          85% Reached
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Approaching monthly quota
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
            Your workspace has used <strong className="text-zinc-900 dark:text-zinc-100">8,500 of 10,000</strong> monthly email sends with 14 days remaining in your billing cycle.
          </p>
        </div>

        {/* Visual Progress Bar Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-zinc-700 dark:text-zinc-300">Monthly Email Volume</span>
            <span className="text-amber-600 dark:text-amber-400 font-mono">8,500 / 10,000 (85%)</span>
          </div>

          {/* Progress track */}
          <div className="w-full h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500 w-[85%]" />
          </div>

          <div className="flex justify-between text-[11px] text-zinc-500 pt-1">
            <span>0 sends</span>
            <span>Plan limit: 10,000 sends</span>
          </div>
        </div>

        {/* Benefits of Upgrade */}
        <div className="space-y-2 text-xs">
          <div className="font-semibold text-zinc-900 dark:text-zinc-200">Upgrade to Business to unlock:</div>
          <div className="grid grid-cols-2 gap-2 text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Unlimited monthly sends</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Dedicated IP address</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>99.99% SLA guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Priority 24/7 Slack support</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-semibold text-sm shadow-sm transition-colors gap-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Upgrade Workspace Plan</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export const usageLimitTemplate: EmailTemplate = {
  id: "usage-limit",
  title: "Usage Quota Warning",
  category: "SaaS & Billing",
  badge: "Automated",
  description: "Dynamic threshold alert with visual quota progress bar, tier upgrade perks, and seamless 1-click plan upgrade.",
  component: UsageLimitPreview,
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

interface UsageLimitEmailProps {
  currentSends?: number;
  maxSends?: number;
  percentage?: number;
}

export default function UsageLimitEmail({
  currentSends = 8500,
  maxSends = 10000,
  percentage = 85,
}: UsageLimitEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f8fafc", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #e2e8f0" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#0f172a", margin: "0 0 8px" }}>
            You've used {percentage}% of your monthly quota
          </Text>
          <Text style={{ fontSize: "14px", color: "#64748b", margin: "0 0 20px" }}>
            Your account has sent {currentSends.toLocaleString()} of {maxSends.toLocaleString()} allowed emails.
          </Text>
          <Section style={{ background: "#f1f5f9", height: "12px", borderRadius: "6px", overflow: "hidden", margin: "0 0 24px" }}>
            <div style={{ background: "#f59e0b", width: \`\${percentage}%\`, height: "100%" }} />
          </Section>
          <Button href="https://reloop.sh/settings/billing" style={{ background: "#0f172a", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", display: "block", textAlign: "center" }}>
            Upgrade Plan
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
  <table align="center" width="560" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="font-size:20px;color:#0f172a;margin:0 0 8px;">You've used 85% of your quota</h2>
        <p style="color:#64748b;font-size:14px;margin:0 0 20px;">8,500 of 10,000 emails sent this month.</p>
        <div style="background:#e2e8f0;border-radius:6px;height:12px;overflow:hidden;margin-bottom:24px;">
          <div style="background:#f59e0b;height:100%;width:85%;"></div>
        </div>
        <a href="https://reloop.sh/billing" style="display:block;text-align:center;background:#0f172a;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">Upgrade Plan</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import UsageLimitEmail from "@/templates/usage-limit";
import { reloop } from "@reloop/sdk";

// Trigger email when account exceeds 80% usage threshold
await reloop.emails.send({
  from: "notifications@reloop.sh",
  to: "owner@startup.io",
  subject: "Usage Alert: You've used 85% of your monthly email limit",
  react: <UsageLimitEmail currentSends={8500} maxSends={10000} percentage={85} />,
});`,
};
