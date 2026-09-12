import React from "react";
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
