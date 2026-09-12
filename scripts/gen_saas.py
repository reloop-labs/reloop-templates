import os

catalog_dir = "/Users/twinkal/Development/reloop-templates/src/templates/catalog"

payment_failed = '''import React from "react";
import { AlertCircle, CreditCard, ArrowRight, ShieldAlert } from "lucide-react";
import { EmailTemplate } from "../types";

export function PaymentFailedPreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0d0f14] dark:border-zinc-800 dark:text-zinc-100">
      {/* Top Rose Bar */}
      <div className="h-2 w-full bg-rose-500" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Warning Icon & Status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">Billing Notice</span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
            Payment Past Due
          </span>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Action required: Payment failed
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
            We were unable to process your payment for your Reloop Pro subscription renewal.
          </p>
        </div>

        {/* Failed Charge Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-4 space-y-3 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200/70 dark:border-zinc-800">
            <span className="text-zinc-500">Plan</span>
            <span className="font-bold text-zinc-900 dark:text-white">Reloop Pro (Monthly)</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200/70 dark:border-zinc-800">
            <span className="text-zinc-500">Attempted Amount</span>
            <span className="font-bold text-zinc-900 dark:text-white">$79.00 USD</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200/70 dark:border-zinc-800">
            <span className="text-zinc-500">Card on File</span>
            <span className="font-medium text-zinc-900 dark:text-white flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-zinc-400" />
              Visa ending in 4242
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500">Failure Reason</span>
            <span className="font-semibold text-rose-600 dark:text-rose-400">Card expired or declined</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm shadow-md transition-colors gap-2"
          >
            <span>Update Payment Method</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grace Period Warning */}
        <div className="p-3.5 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 text-xs text-amber-800 dark:text-amber-300">
          <span className="font-semibold">Grace Period:</span> We will retry this charge in 3 days. Your service will remain uninterrupted until then.
        </div>
      </div>
    </div>
  );
}

export const paymentFailedTemplate: EmailTemplate = {
  id: "payment-failed",
  title: "Payment Failed (Dunning)",
  category: "SaaS & Billing",
  badge: "High ROI",
  description: "Urgent dunning notification warning customers of a declined charge, grace period timeline, and a direct 1-click update link.",
  component: PaymentFailedPreview,
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

interface PaymentFailedEmailProps {
  customerName?: string;
  amount?: string;
  cardLast4?: string;
  updateUrl?: string;
}

export default function PaymentFailedEmail({
  customerName = "Alex",
  amount = "$79.00",
  cardLast4 = "4242",
  updateUrl = "https://reloop.sh/billing/update",
}: PaymentFailedEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#fdf2f2", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #fecdd3" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#e11d48", margin: "0 0 12px" }}>
            Payment Failed for your Reloop subscription
          </Text>
          <Text style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: "0 0 20px" }}>
            Hi {customerName}, we could not process your recurring charge of <strong>{amount}</strong> using Visa ending in {cardLast4}.
          </Text>
          <Section style={{ background: "#fff1f2", padding: "16px", borderRadius: "8px", margin: "0 0 24px" }}>
            <Text style={{ margin: 0, fontSize: "13px", color: "#9f1239" }}>
              Please update your billing information within 3 days to maintain uninterrupted service.
            </Text>
          </Section>
          <Button href={updateUrl} style={{ background: "#e11d48", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            Update Payment Method
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#fdf2f2;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="560" style="background:#ffffff;border:1px solid #fecdd3;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="font-size:20px;color:#e11d48;margin:0 0 12px;">Payment Failed for your Reloop subscription</h2>
        <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0 0 20px;">We were unable to charge <strong>$79.00</strong> to your card ending in 4242.</p>
        <div style="background:#fff1f2;padding:16px;border-radius:8px;margin-bottom:24px;color:#9f1239;font-size:13px;">
          Please update your payment method to prevent account disruption.
        </div>
        <a href="https://reloop.sh/billing" style="display:block;text-align:center;background:#e11d48;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">Update Payment Method</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import PaymentFailedEmail from "@/templates/payment-failed";
import { reloop } from "@reloop/sdk";

// Trigger dunning sequence on webhook invoice.payment_failed
await reloop.emails.send({
  from: "billing@reloop.sh",
  to: "finance@company.com",
  subject: "Urgent: Payment failed for Reloop Pro",
  react: <PaymentFailedEmail customerName="Alex" amount="$79.00" />,
});`,
};
'''

with open(os.path.join(catalog_dir, "payment-failed.tsx"), "w") as f:
    f.write(payment_failed)

usage_limit = '''import React from "react";
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
'''

with open(os.path.join(catalog_dir, "usage-limit.tsx"), "w") as f:
    f.write(usage_limit)

workspace_invite = '''import React from "react";
import { UserPlus, Users, ArrowRight, Check } from "lucide-react";
import { EmailTemplate } from "../types";

export function WorkspaceInvitePreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Brand Stripe */}
      <div className="h-1.5 w-full bg-emerald-500" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Inviter Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-base shadow-sm">
            SC
          </div>
          <div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">Sarah Chen</div>
            <div className="text-xs text-zinc-500">sarah@acme-engineering.com</div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Join Acme Engineering on Reloop
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Sarah Chen has invited you to collaborate as an <span className="font-semibold text-emerald-600 dark:text-emerald-400">Admin</span> on the Acme Engineering workspace.
          </p>
        </div>

        {/* Workspace Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-4 space-y-2.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Workspace</span>
            <span className="font-bold text-zinc-900 dark:text-white">Acme Engineering</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Assigned Role</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold text-[11px]">
              Admin
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Team Size</span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">14 team members</span>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-colors gap-2"
          >
            <span>Accept Invitation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="text-center text-[11px] text-zinc-500">
          This invitation was sent to <span className="font-medium text-zinc-700 dark:text-zinc-300">alex@example.com</span> and expires in 7 days.
        </div>
      </div>
    </div>
  );
}

export const workspaceInviteTemplate: EmailTemplate = {
  id: "workspace-invite",
  title: "Team Workspace Invite",
  category: "SaaS & Billing",
  badge: "Collaboration",
  description: "Team collaboration invitation featuring inviter avatar, workspace meta card, role badge, and 1-click onboarding.",
  component: WorkspaceInvitePreview,
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

interface WorkspaceInviteEmailProps {
  inviterName?: string;
  workspaceName?: string;
  role?: string;
  inviteUrl?: string;
}

export default function WorkspaceInviteEmail({
  inviterName = "Sarah Chen",
  workspaceName = "Acme Engineering",
  role = "Admin",
  inviteUrl = "https://reloop.sh/invite/accept?token=example",
}: WorkspaceInviteEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f9fafb", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #e5e7eb" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#111827", margin: "0 0 12px" }}>
            Join {workspaceName} on Reloop
          </Text>
          <Text style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: "0 0 24px" }}>
            {inviterName} has invited you to join their team as an <strong>{role}</strong>.
          </Text>
          <Button href={inviteUrl} style={{ background: "#059669", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            Accept Invitation
          </Button>
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
        <h2 style="font-size:20px;color:#111827;margin:0 0 12px;">Join Acme Engineering on Reloop</h2>
        <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0 0 24px;">Sarah Chen has invited you to collaborate as an <strong>Admin</strong>.</p>
        <a href="https://reloop.sh/invite" style="display:block;text-align:center;background:#059669;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">Accept Invitation</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import WorkspaceInviteEmail from "@/templates/workspace-invite";
import { reloop } from "@reloop/sdk";

// Send workspace team invitation
await reloop.emails.send({
  from: "team@reloop.sh",
  to: "colleague@acme.com",
  subject: "Sarah invited you to Acme Engineering on Reloop",
  react: <WorkspaceInviteEmail inviterName="Sarah Chen" workspaceName="Acme Engineering" />,
});`,
};
'''

with open(os.path.join(catalog_dir, "workspace-invite.tsx"), "w") as f:
    f.write(workspace_invite)

print("SaaS templates generated successfully.")
