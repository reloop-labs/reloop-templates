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
  description: "Dynamic threshold alert with visual quota progress bar, tier upgrade perks, and seamless 1-click plan upgrade.",
  component: UsageLimitPreview,
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

interface UsageLimitEmailProps {
  currentSends?: number;
  maxSends?: number;
  percentage?: number;
  daysRemaining?: number;
  upgradeUrl?: string;
}

export default function UsageLimitEmail({
  currentSends = 8500,
  maxSends = 10000,
  percentage = 85,
  daysRemaining = 14,
  upgradeUrl = "https://lumen.co/settings/billing",
}: UsageLimitEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Header Banner */}
          <Section style={{ backgroundColor: "#fffbeb", padding: "18px 28px", borderBottom: "1px solid #fef3c7" }}>
            <Row>
              <Column style={{ width: "65%", verticalAlign: "middle" }}>
                <Text style={{ fontSize: "13px", fontWeight: "700", color: "#b45309", margin: 0 }}>
                  ⚡ Usage Quota Alert
                </Text>
              </Column>
              <Column style={{ width: "35%", verticalAlign: "middle", textAlign: "right" }}>
                <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", color: "#b45309", backgroundColor: "#fef3c7", border: "1px solid #fde68a", borderRadius: "9999px", padding: "3px 10px" }}>
                  {percentage}% Reached
                </span>
              </Column>
            </Row>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "28px 28px 20px 28px" }}>
            <Text style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
              Approaching monthly quota
            </Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Your workspace has used <strong style={{ color: "#0f172a" }}>{currentSends.toLocaleString()} of {maxSends.toLocaleString()}</strong> monthly email sends with {daysRemaining} days remaining in your billing cycle.
            </Text>
          </Section>

          {/* Progress Bar Card */}
          <Section style={{ padding: "0 28px 24px 28px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <tbody>
                <tr>
                  <td>
                    <Row>
                      <Column style={{ width: "50%" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: 0 }}>
                          Monthly Email Volume
                        </Text>
                      </Column>
                      <Column style={{ width: "50%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontFamily: "monospace", fontWeight: "700", color: "#d97706", margin: 0 }}>
                          {currentSends.toLocaleString()} / {maxSends.toLocaleString()} ({percentage}%)
                        </Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: "14px", paddingBottom: "10px" }}>
                    {/* Progress Track */}
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#e2e8f0", borderRadius: "6px", height: "10px", overflow: "hidden" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: percentage + "%", background: "linear-gradient(90deg, #f59e0b 0%, #f43f5e 100%)", height: "10px", borderRadius: "6px" }}></td>
                          <td style={{ width: (100 - percentage) + "%" }}></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Row>
                      <Column style={{ width: "50%" }}>
                        <Text style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>0 sends</Text>
                      </Column>
                      <Column style={{ width: "50%", textAlign: "right" }}>
                        <Text style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>Plan limit: {maxSends.toLocaleString()} sends</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Perks Grid */}
          <Section style={{ padding: "0 28px 24px 28px" }}>
            <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: "0 0 12px 0" }}>
              Upgrade to Business to unlock:
            </Text>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style={{ width: "50%", verticalAlign: "top", paddingRight: "8px", paddingBottom: "10px" }}>
                    <Text style={{ fontSize: "12px", color: "#475569", margin: 0 }}>
                      <strong style={{ color: "#10b981" }}>✓</strong> Unlimited monthly sends
                    </Text>
                  </td>
                  <td data-id="__react-email-column" style={{ width: "50%", verticalAlign: "top", paddingLeft: "8px", paddingBottom: "10px" }}>
                    <Text style={{ fontSize: "12px", color: "#475569", margin: 0 }}>
                      <strong style={{ color: "#10b981" }}>✓</strong> Dedicated IP address
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td data-id="__react-email-column" style={{ width: "50%", verticalAlign: "top", paddingRight: "8px" }}>
                    <Text style={{ fontSize: "12px", color: "#475569", margin: 0 }}>
                      <strong style={{ color: "#10b981" }}>✓</strong> 99.99% SLA guarantee
                    </Text>
                  </td>
                  <td data-id="__react-email-column" style={{ width: "50%", verticalAlign: "top", paddingLeft: "8px" }}>
                    <Text style={{ fontSize: "12px", color: "#475569", margin: 0 }}>
                      <strong style={{ color: "#10b981" }}>✓</strong> Priority 24/7 Slack support
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 28px 28px 28px" }}>
            <Button
              href={upgradeUrl}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#0f172a",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Upgrade Workspace Plan ↗
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 28px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Lumen Notifications • Manage subscription quotas anytime in settings.
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
    <title>Usage Quota Warning</title>
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
                    <!-- Top Warning Banner -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(255,251,235);padding:18px 28px;border-bottom:1px solid rgb(254,243,199)">
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
                                    style="width:65%;vertical-align:middle;text-align:left">
                                    <p style="font-size:13px;font-weight:700;color:rgb(180,83,9);margin:0">
                                      ⚡ Usage Quota Alert
                                    </p>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:35%;vertical-align:middle;text-align:right">
                                    <span style="display:inline-block;font-size:11px;font-weight:700;color:rgb(180,83,9);background-color:rgb(254,243,199);border:1px solid rgb(253,230,138);border-radius:9999px;padding:3px 10px">
                                      85% Reached
                                    </span>
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
                          <td style="padding:28px 28px 20px 28px">
                            <h2 style="font-size:24px;font-weight:800;color:rgb(15,23,42);margin:0 0 8px 0;letter-spacing:-0.5px">
                              Approaching monthly quota
                            </h2>
                            <p style="font-size:13px;color:rgb(71,85,105);line-height:1.6;margin:0">
                              Your workspace has used <strong style="color:rgb(15,23,42)">8,500 of 10,000</strong> monthly email sends with 14 days remaining in your billing cycle.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Progress Bar Box -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 28px 24px 28px">
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:20px">
                              <tbody>
                                <tr>
                                  <td>
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
                                            style="width:50%;text-align:left">
                                            <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0">
                                              Monthly Email Volume
                                            </p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:50%;text-align:right">
                                            <p style="font-size:12px;font-family:monospace;font-weight:700;color:rgb(217,119,6);margin:0">
                                              8,500 / 10,000 (85%)
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-top:14px;padding-bottom:10px">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(226,232,240);border-radius:6px;height:10px;overflow:hidden">
                                      <tbody>
                                        <tr>
                                          <td style="width:85%;background:linear-gradient(90deg,rgb(245,158,11) 0%,rgb(244,63,94) 100%);height:10px;border-radius:6px"></td>
                                          <td style="width:15%"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
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
                                            style="width:50%;text-align:left">
                                            <p style="font-size:11px;color:rgb(148,163,184);margin:0">0 sends</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:50%;text-align:right">
                                            <p style="font-size:11px;color:rgb(148,163,184);margin:0">Plan limit: 10,000 sends</p>
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

                    <!-- Upgrade Perks Grid -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 28px 24px 28px">
                            <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0 0 12px 0">
                              Upgrade to Business to unlock:
                            </p>
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation">
                              <tbody style="width:100%">
                                <tr style="width:100%">
                                  <td
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:top;padding-right:8px;padding-bottom:10px">
                                    <p style="font-size:12px;color:rgb(71,85,105);margin:0">
                                      <strong style="color:rgb(16,185,129)">✓</strong> Unlimited monthly sends
                                    </p>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:top;padding-left:8px;padding-bottom:10px">
                                    <p style="font-size:12px;color:rgb(71,85,105);margin:0">
                                      <strong style="color:rgb(16,185,129)">✓</strong> Dedicated IP address
                                    </p>
                                  </td>
                                </tr>
                                <tr style="width:100%">
                                  <td
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:top;padding-right:8px">
                                    <p style="font-size:12px;color:rgb(71,85,105);margin:0">
                                      <strong style="color:rgb(16,185,129)">✓</strong> 99.99% SLA guarantee
                                    </p>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:top;padding-left:8px">
                                    <p style="font-size:12px;color:rgb(71,85,105);margin:0">
                                      <strong style="color:rgb(16,185,129)">✓</strong> Priority 24/7 Slack support
                                    </p>
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
                          <td style="padding:0 28px 28px 28px">
                            <a
                              href="https://lumen.co/settings/billing"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(15,23,42);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>Upgrade Workspace Plan ↗</span>
                            </a>
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
                          <td style="padding:18px 28px;background-color:rgb(248,250,252);border-top:1px solid rgb(226,232,240);text-align:center">
                            <p style="font-size:12px;color:rgb(148,163,184);margin:0">
                              Lumen Notifications • Manage subscription quotas anytime in settings.
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
  plainText: `⚡ Usage Quota Alert

85% Reached


APPROACHING MONTHLY QUOTA

Your workspace has used 8,500 of 10,000 monthly email sends with 14 days remaining in your billing cycle.

Monthly Email Volume

8,500 / 10,000 (85%)



0 sends

Plan limit: 10,000 sends

Upgrade to Business to unlock:

✓ Unlimited monthly sends

✓ Dedicated IP address

✓ 99.99% SLA guarantee

✓ Priority 24/7 Slack support

Upgrade Workspace Plan ↗ https://lumen.co/settings/billing

Lumen Notifications • Manage subscription quotas anytime in settings.`,
  usageCode: `import UsageLimitEmail from "@/templates/usage-limit";
import { reloop } from "@reloop/sdk";

// Trigger email when account exceeds 80% usage threshold
await reloop.emails.send({
  from: "notifications@lumen.co",
  to: "owner@startup.io",
  subject: "Usage Alert: You've used 85% of your monthly email limit",
  react: <UsageLimitEmail currentSends={8500} maxSends={10000} percentage={85} />,
});`,
};
