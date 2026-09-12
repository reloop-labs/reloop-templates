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
  badge: "Security",
  description: "Real-time security notice alerting users to logins from unfamiliar devices, IP addresses, or foreign geolocations.",
  component: NewDeviceAlertPreview,
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

interface NewDeviceAlertProps {
  device?: string;
  location?: string;
  ip?: string;
}

export default function NewDeviceAlertEmail({
  device = "Firefox 129 on Linux",
  location = "Frankfurt, Germany",
  ip = "85.214.132.11",
}: NewDeviceAlertProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#fafafa", fontFamily: "sans-serif", margin: 0, padding: "20px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #e4e4e7" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#b45309", margin: "0 0 12px" }}>
            Security Alert: New sign-in detected
          </Text>
          <Text style={{ fontSize: "14px", color: "#3f3f46", margin: "0 0 20px" }}>
            We noticed a new login to your account:
          </Text>
          <Section style={{ background: "#f4f4f5", padding: "16px", borderRadius: "8px", fontSize: "13px", lineHeight: "1.8", color: "#27272a" }}>
            <div><strong>Device:</strong> {device}</div>
            <div><strong>Location:</strong> {location}</div>
            <div><strong>IP:</strong> {ip}</div>
          </Section>
          <Hr style={{ margin: "24px 0", borderColor: "#e4e4e7" }} />
          <Button href="https://reloop.sh/security/lock" style={{ background: "#e11d48", color: "#ffffff", padding: "12px 20px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
            Lock Account Immediately
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#fafafa;font-family:sans-serif;margin:0;padding:20px;">
  <table align="center" width="560" style="background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="color:#b45309;font-size:20px;margin:0 0 12px;">Security Alert: New sign-in detected</h2>
        <p style="color:#3f3f46;font-size:14px;margin:0 0 20px;">A login occurred from an unrecognized device:</p>
        <div style="background:#f4f4f5;padding:16px;border-radius:8px;font-size:13px;line-height:1.8;color:#27272a;">
          <strong>Device:</strong> Firefox 129 on Linux<br>
          <strong>Location:</strong> Frankfurt, Germany<br>
          <strong>IP:</strong> 85.214.132.11
        </div>
        <hr style="margin:24px 0;border:none;border-top:1px solid #e4e4e7;">
        <a href="https://reloop.sh/security/lock" style="display:inline-block;background:#e11d48;color:#ffffff;padding:12px 20px;border-radius:6px;font-weight:bold;text-decoration:none;">Lock Account Immediately</a>
      </td>
    </tr>
  </table>
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
