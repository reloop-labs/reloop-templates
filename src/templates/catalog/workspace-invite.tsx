import React from "react";
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
