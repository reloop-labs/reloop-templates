import React from "react";
import { ShieldAlert, AlertTriangle, MapPin, Smartphone, Lock, Check } from "lucide-react";
import { EmailTemplate } from "../types";

export function NewDeviceAlertPreview() {
  return (
    <div className="w-full max-w-[580px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Alert Header */}
      <div className="bg-amber-500/10 dark:bg-amber-500/15 border-b border-amber-200/80 dark:border-amber-900/50 px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-amber-900 dark:text-amber-300">Security Alert</div>
          <div className="text-xs text-amber-700 dark:text-amber-400">New login from unrecognized device</div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Did you just sign in?
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            We noticed a successful login to your Reloop account from a device or location we haven&apos;t seen before.
          </p>
        </div>

        {/* Device Information Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-zinc-800">
            <span className="text-zinc-500 font-medium">When</span>
            <span className="font-semibold text-zinc-900 dark:text-white">Today at 3:42 PM UTC</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-zinc-800">
            <span className="text-zinc-500 font-medium">Device / Browser</span>
            <span className="font-semibold text-zinc-900 dark:text-white">Firefox 129 on Linux Ubuntu</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-zinc-800">
            <span className="text-zinc-500 font-medium">Approximate Location</span>
            <span className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              Frankfurt, Germany
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500 font-medium">IP Address</span>
            <span className="font-mono text-zinc-900 dark:text-white">85.214.132.11</span>
          </div>
        </div>

        {/* Dual Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 font-medium text-xs text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Yes, this was me</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 font-semibold text-xs text-white shadow-sm transition-colors"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>No, lock my account</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const newDeviceAlertTemplate: EmailTemplate = {
  id: "new-device-alert",
  title: "New Device Login Alert",
  category: "Auth & Security",
  description: "Real-time security notice alerting users to logins from unfamiliar devices, IP addresses, or foreign geolocations.",
  component: NewDeviceAlertPreview,
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

interface NewDeviceAlertProps {
  time?: string;
  device?: string;
  location?: string;
  ip?: string;
  verifyUrl?: string;
  lockUrl?: string;
}

export default function NewDeviceAlertEmail({
  time = "Today at 3:42 PM UTC",
  device = "Firefox 129 on Linux Ubuntu",
  location = "Frankfurt, Germany",
  ip = "85.214.132.11",
  verifyUrl = "https://reloop.sh/security/verify",
  lockUrl = "https://reloop.sh/security/lock",
}: NewDeviceAlertProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "580px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
          {/* Header Banner */}
          <Section style={{ backgroundColor: "#fef3c7", padding: "18px 28px", borderBottom: "1px solid #fde68a" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#f59e0b", textAlign: "center", lineHeight: "32px", color: "#ffffff", fontSize: "16px" }}>
                      ⚠️
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle", paddingLeft: "12px" }}>
                    <Text style={{ fontSize: "12px", fontWeight: "700", color: "#78350f", margin: 0 }}>
                      Security Alert
                    </Text>
                    <Text style={{ fontSize: "12px", color: "#92400e", margin: 0 }}>
                      New login from unrecognized device
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "28px 28px 20px 28px" }}>
            <Text style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: "0 0 6px 0", letterSpacing: "-0.5px" }}>
              Did you just sign in?
            </Text>
            <Text style={{ fontSize: "13px", color: "#475569", margin: 0, lineHeight: "1.5" }}>
              We noticed a successful login to your Reloop account from a device or location we haven't seen before.
            </Text>
          </Section>

          {/* Details Card */}
          <Section style={{ padding: "0 28px 24px 28px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "8px 0" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>When</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", margin: 0 }}>{time}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Device / Browser</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", margin: 0 }}>{device}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Approximate Location</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", margin: 0 }}>📍 {location}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0 0 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>IP Address</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontFamily: "monospace", color: "#0f172a", margin: 0 }}>{ip}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Dual Action Buttons */}
          <Section style={{ padding: "0 28px 28px 28px" }}>
            <Row>
              <Column style={{ width: "48%", verticalAlign: "top" }}>
                <Button
                  href={verifyUrl}
                  style={{
                    display: "block",
                    width: "100%",
                    backgroundColor: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "#334155",
                    padding: "12px 0",
                    borderRadius: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  ✓ Yes, this was me
                </Button>
              </Column>
              <Column style={{ width: "4%" }} />
              <Column style={{ width: "48%", verticalAlign: "top" }}>
                <Button
                  href={lockUrl}
                  style={{
                    display: "block",
                    width: "100%",
                    backgroundColor: "#e11d48",
                    color: "#ffffff",
                    padding: "12px 0",
                    borderRadius: "10px",
                    fontWeight: "700",
                    fontSize: "13px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  🔒 No, lock my account
                </Button>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 28px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Reloop Security Team • Notifications regarding your account security cannot be disabled.
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
    <title>New Device Login Alert</title>
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
              style="max-width:580px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(226,232,240);overflow:hidden;text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Top Alert Header -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(254,243,199);padding:18px 28px;border-bottom:1px solid rgb(253,230,138)">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:middle">
                                    <span style="display:inline-block;width:32px;height:32px;border-radius:50%;background-color:rgb(245,158,11);color:rgb(255,255,255);font-size:16px;line-height:32px;text-align:center">
                                      ⚠️
                                    </span>
                                  </td>
                                  <td style="vertical-align:middle;padding-left:12px">
                                    <p style="font-size:12px;font-weight:700;color:rgb(120,53,15);margin:0">
                                      Security Alert
                                    </p>
                                    <p style="font-size:12px;color:rgb(146,64,14);margin:0">
                                      New login from unrecognized device
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
                          <td style="padding:28px 28px 20px 28px">
                            <h2 style="font-size:22px;font-weight:800;color:rgb(15,23,42);margin:0 0 6px 0;letter-spacing:-0.5px">
                              Did you just sign in?
                            </h2>
                            <p style="font-size:13px;color:rgb(71,85,105);margin:0;line-height:1.5">
                              We noticed a successful login to your Reloop account from a device or location we haven't seen before.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Device Details Box -->
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">When</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(15,23,42);margin:0">Today at 3:42 PM UTC</p>
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Device / Browser</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(15,23,42);margin:0">Firefox 129 on Linux Ubuntu</p>
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Approximate Location</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(15,23,42);margin:0">📍 Frankfurt, Germany</p>
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">IP Address</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-family:monospace;color:rgb(15,23,42);margin:0">85.214.132.11</p>
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

                    <!-- Dual Action Buttons -->
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
                                    style="width:48%;vertical-align:top">
                                    <a
                                      href="https://reloop.sh/security/verify"
                                      style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(255,255,255);border:1px solid rgb(203,213,225);border-radius:10px;color:rgb(51,65,85);font-size:13px;font-weight:600;text-align:center;padding:12px 16px">
                                      <span>✓ Yes, this was me</span>
                                    </a>
                                  </td>
                                  <td data-id="__react-email-column" style="width:4%"></td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:48%;vertical-align:top">
                                    <a
                                      href="https://reloop.sh/security/lock"
                                      style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(225,29,72);border-radius:10px;color:rgb(255,255,255);font-size:13px;font-weight:700;text-align:center;padding:12px 16px">
                                      <span>🔒 No, lock my account</span>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
                              Reloop Security Team • Notifications regarding your account security cannot be disabled.
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
  usageCode: `import NewDeviceAlertEmail from "@/templates/new-device-alert";
import { reloop } from "@reloop/sdk";

// Trigger security notice on suspicious login
await reloop.emails.send({
  from: "security@reloop.sh",
  to: "user@example.com",
  subject: "Security alert: New login from Frankfurt, Germany",
  react: <NewDeviceAlertEmail location="Frankfurt, Germany" ip="85.214.132.11" />,
});`,
};
