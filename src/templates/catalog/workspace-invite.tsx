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
  description: "Team collaboration invitation featuring inviter avatar, workspace meta card, role badge, and 1-click onboarding.",
  component: WorkspaceInvitePreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Button,
  Hr,
  Link,
} from "@react-email/components";

interface WorkspaceInviteEmailProps {
  inviterName?: string;
  inviterEmail?: string;
  workspaceName?: string;
  role?: string;
  teamSize?: string;
  recipientEmail?: string;
  inviteUrl?: string;
}

export default function WorkspaceInviteEmail({
  inviterName = "Sarah Chen",
  inviterEmail = "sarah@acme-engineering.com",
  workspaceName = "Acme Engineering",
  role = "Admin",
  teamSize = "14 team members",
  recipientEmail = "alex@example.com",
  inviteUrl = "https://reloop.sh/invite/accept?token=inv_98120381023",
}: WorkspaceInviteEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Top Emerald Accent Stripe */}
          <div style={{ height: "6px", width: "100%", backgroundColor: "#10b981" }} />

          {/* Inviter Header */}
          <Section style={{ padding: "28px 32px 20px 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)", textAlign: "center", lineHeight: "42px", color: "#ffffff", fontWeight: "700", fontSize: "15px" }}>
                      SC
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle", paddingLeft: "12px" }}>
                    <Text style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a", margin: 0 }}>
                      {inviterName}
                    </Text>
                    <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
                      {inviterEmail}
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <Text style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
              Join {workspaceName} on Reloop
            </Text>
            <Text style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              {inviterName} has invited you to collaborate as an <strong style={{ color: "#059669" }}>{role}</strong> on the {workspaceName} workspace.
            </Text>
          </Section>

          {/* Workspace Card */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "8px 0" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Workspace</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: 0 }}>{workspaceName}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Assigned Role</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", color: "#047857", backgroundColor: "#d1fae5", border: "1px solid #a7f3d0", borderRadius: "9999px", padding: "3px 10px" }}>
                          {role}
                        </span>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0 0 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Team Size</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", margin: 0 }}>{teamSize}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <Button
              href={inviteUrl}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#059669",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Accept Invitation →
            </Button>
          </Section>

          {/* Expiry Note */}
          <Section style={{ padding: "0 32px 28px 32px", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              This invitation was sent to <strong style={{ color: "#475569" }}>{recipientEmail}</strong> and expires in 7 days.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 32px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Reloop Workspaces • If you don't know the inviter, you can safely ignore this invitation.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Team Workspace Invite</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(248,250,252);margin:0;padding:32px 0;">
    <!--$--><!--html--><!--head--><!--body-->
    <table
      border="0"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      align="center">
      <tbody>
        <tr>
          <td
            dir="ltr"
            lang="en"
            style="background-color:rgb(248,250,252);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:560px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(226,232,240);overflow:hidden;text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Emerald Top Accent -->
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="height:6px;background-color:rgb(16,185,129)"></td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Inviter Header -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:28px 32px 20px 32px">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:middle">
                                    <span style="display:inline-block;width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,rgb(16,185,129) 0%,rgb(6,182,212) 100%);color:rgb(255,255,255);font-size:15px;font-weight:700;line-height:42px;text-align:center">
                                      SC
                                    </span>
                                  </td>
                                  <td style="vertical-align:middle;padding-left:12px">
                                    <p style="font-size:14px;font-weight:700;color:rgb(15,23,42);margin:0">
                                      Sarah Chen
                                    </p>
                                    <p style="font-size:12px;color:rgb(100,116,139);margin:0">
                                      sarah@acme-engineering.com
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Heading & Subtitle -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 24px 32px">
                            <h2 style="font-size:24px;font-weight:800;color:rgb(15,23,42);margin:0 0 8px 0;letter-spacing:-0.5px">
                              Join Acme Engineering on Reloop
                            </h2>
                            <p style="font-size:14px;color:rgb(71,85,105);line-height:1.6;margin:0">
                              Sarah Chen has invited you to collaborate as an <strong style="color:rgb(5,150,105)">Admin</strong> on the Acme Engineering workspace.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Workspace Details Box -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 24px 32px">
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:16px 20px">
                              <tbody>
                                <tr>
                                  <td style="padding:8px 0">
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td
                                            data-id="__react-email-column"
                                            style="width:40%;text-align:left">
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Workspace</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0">Acme Engineering</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:8px 0;border-top:1px solid rgb(237,242,247)">
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td
                                            data-id="__react-email-column"
                                            style="width:40%;text-align:left">
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Assigned Role</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <span style="display:inline-block;font-size:11px;font-weight:700;color:rgb(4,120,87);background-color:rgb(209,250,229);border:1px solid rgb(167,243,208);border-radius:9999px;padding:3px 10px">
                                              Admin
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:8px 0 0 0;border-top:1px solid rgb(237,242,247)">
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td
                                            data-id="__react-email-column"
                                            style="width:40%;text-align:left">
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Team Size</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(15,23,42);margin:0">14 team members</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- CTA Button -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 24px 32px">
                            <a
                              href="https://reloop.sh/invite/accept?token=inv_98120381023"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(5,150,105);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>Accept Invitation →</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Expiry Note -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 28px 32px;text-align:center">
                            <p style="font-size:12px;color:rgb(148,163,184);margin:0">
                              This invitation was sent to <strong style="color:rgb(71,85,105)">alex@example.com</strong> and expires in 7 days.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Footer -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:18px 32px;background-color:rgb(248,250,252);border-top:1px solid rgb(226,232,240);text-align:center">
                            <p style="font-size:12px;color:rgb(148,163,184);margin:0">
                              Reloop Workspaces • If you don't know the inviter, you can safely ignore this invitation.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
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
