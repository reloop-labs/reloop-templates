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
  description: "Weekly performance report summarizing delivery volume, inbox placement KPIs, and top-converting email templates.",
  component: WeeklyDigestPreview,
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

interface WeeklyDigestProps {
  totalSent?: string;
  deliveryRate?: string;
  openRate?: string;
  dateRange?: string;
  analyticsUrl?: string;
}

export default function WeeklyDigestEmail({
  totalSent = "142,850",
  deliveryRate = "99.94%",
  openRate = "42.8%",
  dateRange = "Sep 5 - Sep 12, 2026",
  analyticsUrl = "https://reloop.sh/analytics",
}: WeeklyDigestProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Header Accent */}
          <Section style={{ backgroundColor: "#4f46e5", padding: "28px 32px" }}>
            <Row>
              <Column style={{ width: "65%", verticalAlign: "bottom" }}>
                <Text style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#c7d2fe", margin: "0 0 4px 0" }}>
                  Weekly Report
                </Text>
                <Text style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", margin: "0 0 4px 0", letterSpacing: "-0.5px" }}>
                  Email Delivery Digest
                </Text>
                <Text style={{ fontSize: "12px", color: "#c7d2fe", margin: 0 }}>
                  {dateRange}
                </Text>
              </Column>
              <Column style={{ width: "35%", verticalAlign: "bottom", textAlign: "right" }}>
                <Text style={{ fontSize: "11px", color: "#c7d2fe", margin: "0 0 2px 0" }}>
                  Overall Health
                </Text>
                <Text style={{ fontSize: "14px", fontWeight: "700", color: "#6ee7b7", margin: 0 }}>
                  99.94% Optimal
                </Text>
              </Column>
            </Row>
          </Section>

          {/* KPI Stats Grid (3 Columns) */}
          <Section style={{ padding: "28px 32px 20px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
              <tbody style={{ width: "100%" }}>
                <tr style={{ width: "100%" }}>
                  <td data-id="__react-email-column" style={{ width: "31%", verticalAlign: "top" }}>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <Text style={{ fontSize: "11px", color: "#64748b", margin: "0 0 4px 0" }}>Sent</Text>
                            <Text style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 4px 0" }}>{totalSent}</Text>
                            <Text style={{ fontSize: "10px", fontWeight: "600", color: "#059669", margin: 0 }}>+12.4%</Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td data-id="__react-email-column" style={{ width: "3.5%" }}></td>
                  <td data-id="__react-email-column" style={{ width: "31%", verticalAlign: "top" }}>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <Text style={{ fontSize: "11px", color: "#64748b", margin: "0 0 4px 0" }}>Delivered</Text>
                            <Text style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 4px 0" }}>{deliveryRate}</Text>
                            <Text style={{ fontSize: "10px", fontWeight: "600", color: "#059669", margin: 0 }}>Zero dropouts</Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td data-id="__react-email-column" style={{ width: "3.5%" }}></td>
                  <td data-id="__react-email-column" style={{ width: "31%", verticalAlign: "top" }}>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <Text style={{ fontSize: "11px", color: "#64748b", margin: "0 0 4px 0" }}>Open Rate</Text>
                            <Text style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 4px 0" }}>{openRate}</Text>
                            <Text style={{ fontSize: "10px", fontWeight: "600", color: "#059669", margin: 0 }}>+3.2%</Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Top Performing Templates Card */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
              <tbody>
                <tr>
                  <td style={{ backgroundColor: "#f8fafc", padding: "12px 16px", borderBottom: "1px solid #e2e8f0" }}>
                    <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: 0 }}>
                      Top Performing Templates
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 16px", borderBottom: "1px solid #f1f5f9" }}>
                    <Row>
                      <Column style={{ width: "65%" }}>
                        <Text style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a", margin: "0 0 2px 0" }}>
                          Magic Link Verification
                        </Text>
                        <Text style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>
                          Auth &amp; Security
                        </Text>
                      </Column>
                      <Column style={{ width: "35%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "700", color: "#059669", margin: "0 0 2px 0" }}>
                          84.2% Clicks
                        </Text>
                        <Text style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>
                          64,210 sent
                        </Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 16px" }}>
                    <Row>
                      <Column style={{ width: "65%" }}>
                        <Text style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a", margin: "0 0 2px 0" }}>
                          Amazon Order Receipt
                        </Text>
                        <Text style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>
                          Transactional
                        </Text>
                      </Column>
                      <Column style={{ width: "35%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "700", color: "#4f46e5", margin: "0 0 2px 0" }}>
                          62.8% Opens
                        </Text>
                        <Text style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>
                          48,920 sent
                        </Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 32px 28px 32px" }}>
            <Button
              href={analyticsUrl}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              View Full Analytics Dashboard →
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 32px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Reloop Analytics Digest • Automatically generated every Monday morning.
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
    <title>Weekly Analytics Digest</title>
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
              style="max-width:600px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(226,232,240);overflow:hidden;text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Header Banner -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(79,70,229);padding:28px 32px">
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
                                    style="width:65%;vertical-align:bottom;text-align:left">
                                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgb(199,210,254);margin:0 0 4px 0;display:block">
                                      Weekly Report
                                    </span>
                                    <h2 style="font-size:22px;font-weight:800;color:rgb(255,255,255);margin:0 0 4px 0;letter-spacing:-0.5px">
                                      Email Delivery Digest
                                    </h2>
                                    <p style="font-size:12px;color:rgb(199,210,254);margin:0">
                                      Sep 5 - Sep 12, 2026
                                    </p>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:35%;vertical-align:bottom;text-align:right">
                                    <p style="font-size:11px;color:rgb(199,210,254);margin:0 0 2px 0">
                                      Overall Health
                                    </p>
                                    <p style="font-size:14px;font-weight:700;color:rgb(110,231,183);margin:0">
                                      99.94% Optimal
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- KPI Cards (3 Columns) -->
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
                                    style="width:31%;vertical-align:top">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:14px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:0 0 4px 0">Sent</p>
                                            <p style="font-size:20px;font-weight:800;color:rgb(15,23,42);margin:0 0 4px 0">142,850</p>
                                            <p style="font-size:10px;font-weight:600;color:rgb(5,150,105);margin:0">+12.4%</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td data-id="__react-email-column" style="width:3.5%"></td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:31%;vertical-align:top">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:14px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:0 0 4px 0">Delivered</p>
                                            <p style="font-size:20px;font-weight:800;color:rgb(15,23,42);margin:0 0 4px 0">99.94%</p>
                                            <p style="font-size:10px;font-weight:600;color:rgb(5,150,105);margin:0">Zero dropouts</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td data-id="__react-email-column" style="width:3.5%"></td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:31%;vertical-align:top">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:12px;padding:14px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:0 0 4px 0">Open Rate</p>
                                            <p style="font-size:20px;font-weight:800;color:rgb(15,23,42);margin:0 0 4px 0">42.8%</p>
                                            <p style="font-size:10px;font-weight:600;color:rgb(5,150,105);margin:0">+3.2%</p>
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

                    <!-- Top Performing Templates Table -->
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
                              style="border:1px solid rgb(226,232,240);border-radius:12px;overflow:hidden">
                              <tbody>
                                <tr>
                                  <td style="background-color:rgb(248,250,252);padding:12px 16px;border-bottom:1px solid rgb(226,232,240)">
                                    <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0">
                                      Top Performing Templates
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:14px 16px;border-bottom:1px solid rgb(241,245,249)">
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
                                            style="width:65%;text-align:left">
                                            <p style="font-size:13px;font-weight:600;color:rgb(15,23,42);margin:0 0 2px 0">
                                              Magic Link Verification
                                            </p>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:0">
                                              Auth &amp; Security
                                            </p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:35%;text-align:right">
                                            <p style="font-size:12px;font-weight:700;color:rgb(5,150,105);margin:0 0 2px 0">
                                              84.2% Clicks
                                            </p>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:0">
                                              64,210 sent
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:14px 16px">
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
                                            style="width:65%;text-align:left">
                                            <p style="font-size:13px;font-weight:600;color:rgb(15,23,42);margin:0 0 2px 0">
                                              Amazon Order Receipt
                                            </p>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:0">
                                              Transactional
                                            </p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:35%;text-align:right">
                                            <p style="font-size:12px;font-weight:700;color:rgb(79,70,229);margin:0 0 2px 0">
                                              62.8% Opens
                                            </p>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:0">
                                              48,920 sent
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
                          <td style="padding:0 32px 28px 32px">
                            <a
                              href="https://reloop.sh/analytics"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(79,70,229);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>View Full Analytics Dashboard →</span>
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
                          <td style="padding:18px 32px;background-color:rgb(248,250,252);border-top:1px solid rgb(226,232,240);text-align:center">
                            <p style="font-size:12px;color:rgb(148,163,184);margin:0">
                              Reloop Analytics Digest • Automatically generated every Monday morning.
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
