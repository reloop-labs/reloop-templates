import React from "react";
import { Key, ShieldAlert, ExternalLink, MapPin, Globe, Clock, ShieldCheck, AlertCircle } from "lucide-react";
import { EmailTemplate } from "../types";

export function ApiKeyCreatedPreview() {
  return (
    <div className="w-full max-w-[580px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Top Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base tracking-tight">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shadow-xs">
              <Key className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Security Notice
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-900/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Key Active</span>
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            A new API key was created on your account.
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Hey <strong className="text-zinc-900 dark:text-zinc-100">there</strong>, a new secret API key named{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">&ldquo;Production Key&rdquo;</strong> was just generated on your Reloop account. If you initiated this, no further action is required.
          </p>
        </div>

        {/* Key Prefix Display Box */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-6 text-center space-y-2">
          <div className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-zinc-900 dark:text-white">
            rl_live_abc1<span className="text-zinc-400 dark:text-zinc-600">••••••••</span>
          </div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Key Identifier: Production Key
          </div>
        </div>

        {/* Metadata Details Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30 p-4 divide-y divide-zinc-200/70 dark:divide-zinc-800/80 text-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Created At
            </span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              May 6, 2026 at 15:27 UTC
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" /> Location
            </span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              San Francisco, CA, United States
            </span>
          </div>
          <div className="flex items-center justify-between pt-3">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-500" /> IP Address
            </span>
            <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">
              192.168.1.1
            </span>
          </div>
        </div>

        {/* CTA Action */}
        <div>
          <a
            href="https://reloop.sh/dashboard/settings/api-keys"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 font-mono text-xs uppercase tracking-wider font-bold shadow-md transition-all gap-2"
          >
            <span>Manage API Keys</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Security Alert Warning */}
        <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 text-xs">
          <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-900 dark:text-amber-300/90 leading-relaxed">
            If you did not generate this key, someone may have unauthorized access. Revoke this key immediately from your dashboard and rotate your credentials.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-500 space-y-1">
          <div>Reloop Security Team • 440 N Barranca Ave #4133 Covina, CA 91723</div>
          <div>Need assistance? Contact security@reloop.sh</div>
        </div>
      </div>
    </div>
  );
}

export const apiKeyCreatedTemplate: EmailTemplate = {
  id: "api-key-created",
  title: "API Key Created",
  category: "Auth & Security",
  description: "Security alert notifying account owners when a new API credential is generated, including key prefix, creator IP, and instant revocation action.",
  badge: "Security",
  component: ApiKeyCreatedPreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
  Hr,
  Link,
  Preview,
} from "@react-email/components";

interface ApiKeyCreatedEmailProps {
  fullName?: string;
  keyName?: string;
  keyPrefix?: string;
  createdAt?: string;
  ipAddress?: string;
  location?: string;
  manageKeysUrl?: string;
}

export default function ApiKeyCreatedEmail({
  fullName = "User",
  keyName = "Production Key",
  keyPrefix = "rl_live_abc1",
  createdAt = "May 6, 2026 at 15:27 UTC",
  ipAddress = "192.168.1.1",
  location = "San Francisco, CA",
  manageKeysUrl = "https://reloop.sh/dashboard/settings/api-keys",
}: ApiKeyCreatedEmailProps) {
  const firstName = fullName ? fullName.split(" ")[0] : "there";

  return (
    <Html lang="en">
      <Head />
      <Preview>Security Notice: A new API key was created on your Reloop account.</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Top Header Label */}
          <Section style={labelSection}>
            <Text style={labelText}>SECURITY NOTICE</Text>
          </Section>

          {/* Heading */}
          <Section style={headingSection}>
            <Heading style={heading}>
              A new API key was{" "}
              <span style={headingMuted}>created on your account.</span>
            </Heading>
          </Section>

          <Hr style={hr} />

          {/* Message Body */}
          <Section style={contentSection}>
            <Text style={salutation}>
              Hey, <strong>{firstName}.</strong>
            </Text>
            <Text style={paragraph}>
              A new API key named <strong>&ldquo;{keyName}&rdquo;</strong> was just created on your Reloop account. If this was you, no action is needed.
            </Text>
          </Section>

          {/* Key Prefix Display Box */}
          <Section style={keyBox}>
            <Text style={keyText}>{keyPrefix}••••••••</Text>
            <Text style={keySub}>{keyName}</Text>
          </Section>

          {/* Details Table */}
          <Section style={detailsBox}>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={detailTdBorder}>
                    <Text style={detailLabel}>CREATED AT</Text>
                    <Text style={detailValue}>{createdAt}</Text>
                  </td>
                  <td style={{ ...detailTdBorder, textAlign: "right" }}>
                    <Text style={detailLabel}>LOCATION</Text>
                    <Text style={detailValue}>{location}</Text>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={detailTdBottom}>
                    <Text style={detailLabel}>IP ADDRESS</Text>
                    <Text style={detailValue}>{ipAddress}</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Button */}
          <Section style={buttonSection}>
            <Button style={button} href={manageKeysUrl}>
              MANAGE API KEYS
            </Button>
          </Section>

          {/* Warning / Advisory */}
          <Section style={warningSection}>
            <Text style={warningText}>
              If you didn&apos;t create this key, revoke it immediately from your API keys settings and contact our support team.
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              If you'd like to report an issue, reach out to{" "}
              <Link href="https://reloop.sh/help" style={footerLink}>
                Reloop Help
              </Link>
              .
            </Text>
            <Text style={footerText}>
              <Link href="https://reloop.sh/settings/notifications" style={footerLink}>
                Manage your notification settings
              </Link>
            </Text>
            <Text style={{ ...footerText, marginTop: "16px" }}>
              Copyright © 2026 Reloop Inc. All rights reserved.
              <br />
              440 N Barranca Ave #4133 Covina, CA 91723
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  maxWidth: "580px",
  margin: "0 auto",
  padding: "36px 32px",
};

const labelSection: React.CSSProperties = {
  marginBottom: "12px",
};

const labelText: React.CSSProperties = {
  color: "#707070",
  fontSize: "12px",
  fontFamily: "Courier, monospace",
  fontWeight: 600,
  letterSpacing: "0.2em",
  margin: 0,
  textTransform: "uppercase",
};

const headingSection: React.CSSProperties = {
  marginBottom: "24px",
};

const heading: React.CSSProperties = {
  color: "#0e0e0e",
  fontFamily: "Georgia, serif",
  fontSize: "30px",
  fontWeight: "normal",
  lineHeight: "1.25",
  margin: 0,
};

const headingMuted: React.CSSProperties = {
  color: "#707070",
};

const hr: React.CSSProperties = {
  borderColor: "#e0e0e0",
  margin: "24px 0",
};

const contentSection: React.CSSProperties = {
  marginBottom: "24px",
};

const salutation: React.CSSProperties = {
  color: "#0e0e0e",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 12px 0",
};

const paragraph: React.CSSProperties = {
  color: "#555555",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
};

const keyBox: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: "14px",
  padding: "24px 20px",
  textAlign: "center",
  backgroundColor: "#fafafa",
  margin: "24px 0",
};

const keyText: React.CSSProperties = {
  color: "#0e0e0e",
  fontFamily: "Courier, monospace",
  fontSize: "22px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  margin: "0 0 6px 0",
};

const keySub: React.CSSProperties = {
  color: "#707070",
  fontFamily: "Courier, monospace",
  fontSize: "11px",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  margin: 0,
};

const detailsBox: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: "14px",
  padding: "20px 24px",
  margin: "20px 0 28px 0",
};

const detailTdBorder: React.CSSProperties = {
  borderBottom: "1px solid #e0e0e0",
  paddingBottom: "14px",
  verticalAlign: "top",
};

const detailTdBottom: React.CSSProperties = {
  paddingTop: "14px",
  verticalAlign: "top",
};

const detailLabel: React.CSSProperties = {
  color: "#707070",
  fontFamily: "Courier, monospace",
  fontSize: "11px",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  margin: "0 0 4px 0",
};

const detailValue: React.CSSProperties = {
  color: "#0e0e0e",
  fontSize: "14px",
  fontWeight: 600,
  margin: 0,
};

const buttonSection: React.CSSProperties = {
  textAlign: "center",
  margin: "28px 0",
};

const button: React.CSSProperties = {
  backgroundColor: "#0e0e0e",
  borderRadius: "12px",
  color: "#ffffff",
  display: "inline-block",
  fontFamily: "Courier, monospace",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  padding: "14px 28px",
  textDecoration: "none",
  textTransform: "uppercase",
};

const warningSection: React.CSSProperties = {
  margin: "20px 0",
};

const warningText: React.CSSProperties = {
  color: "#555555",
  fontSize: "13px",
  lineHeight: "1.6",
  margin: 0,
};

const footerSection: React.CSSProperties = {
  marginTop: "24px",
};

const footerText: React.CSSProperties = {
  color: "#707070",
  fontSize: "12px",
  lineHeight: "22px",
  margin: 0,
};

const footerLink: React.CSSProperties = {
  color: "#707070",
  textDecoration: "underline",
};`,
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Security Alert: A new API key was created</title>
  </head>
  <body style="background-color:#f6f9fc;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;margin:0;padding:40px 0">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;margin:0 auto;background-color:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:36px 32px">
      <tbody>
        <tr>
          <td>
            <p style="color:#707070;font-size:12px;font-family:Courier, monospace;font-weight:600;letter-spacing:0.2em;margin:0 0 12px 0;text-transform:uppercase">
              SECURITY NOTICE
            </p>
            <h1 style="color:#0e0e0e;font-family:Georgia, serif;font-size:30px;font-weight:normal;line-height:1.25;margin:0 0 24px 0">
              A new API key was <span style="color:#707070">created on your account.</span>
            </h1>
            <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0" />
            <p style="color:#0e0e0e;font-size:15px;line-height:1.6;margin:0 0 12px 0">
              Hey, <strong>User.</strong>
            </p>
            <p style="color:#555555;font-size:15px;line-height:1.6;margin:0 0 24px 0">
              A new API key named <strong>“Production Key”</strong> was just created on your Reloop account. If this was you, no action is needed.
            </p>
            
            <!-- Key Prefix Display -->
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e0e0e0;border-radius:14px;padding:24px 20px;text-align:center;background-color:#fafafa;margin:24px 0">
              <tbody>
                <tr>
                  <td>
                    <p style="color:#0e0e0e;font-family:Courier, monospace;font-size:22px;font-weight:600;letter-spacing:0.08em;margin:0 0 6px 0">
                      rl_live_abc1••••••••
                    </p>
                    <p style="color:#707070;font-family:Courier, monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0">
                      Production Key
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Details Card -->
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e0e0e0;border-radius:14px;padding:20px 24px;margin:20px 0 28px 0">
              <tbody>
                <tr>
                  <td style="border-bottom:1px solid #e0e0e0;padding-bottom:14px;vertical-align:top">
                    <p style="color:#707070;font-family:Courier, monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 4px 0">CREATED AT</p>
                    <p style="color:#0e0e0e;font-size:14px;font-weight:600;margin:0">May 6, 2026 at 15:27 UTC</p>
                  </td>
                  <td align="right" style="border-bottom:1px solid #e0e0e0;padding-bottom:14px;vertical-align:top">
                    <p style="color:#707070;font-family:Courier, monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 4px 0">LOCATION</p>
                    <p style="color:#0e0e0e;font-size:14px;font-weight:600;margin:0">San Francisco, CA</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:14px;vertical-align:top">
                    <p style="color:#707070;font-family:Courier, monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 4px 0">IP ADDRESS</p>
                    <p style="color:#0e0e0e;font-size:14px;font-weight:600;margin:0">192.168.1.1</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Manage Keys CTA Button -->
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="text-align:center;margin:28px 0">
              <tbody>
                <tr>
                  <td>
                    <a href="https://reloop.sh/dashboard/settings/api-keys" target="_blank" style="background-color:#0e0e0e;border-radius:12px;color:#ffffff;display:inline-block;font-family:Courier, monospace;font-size:12px;font-weight:700;letter-spacing:0.1em;padding:14px 28px;text-decoration:none;text-transform:uppercase">
                      MANAGE API KEYS
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <p style="color:#555555;font-size:13px;line-height:1.6;margin:20px 0">
              If you didn&#x27;t create this key, revoke it immediately from your API keys settings and contact our support team.
            </p>

            <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0" />

            <!-- Footer -->
            <p style="color:#707070;font-size:12px;line-height:22px;margin:0">
              If you'd like to report an issue, reach out to <a href="https://reloop.sh/help" style="color:#707070;text-decoration:underline">Reloop Help</a>.
            </p>
            <p style="color:#707070;font-size:12px;line-height:22px;margin:0">
              <a href="https://reloop.sh/settings/notifications" style="color:#707070;text-decoration:underline">Manage your notification settings</a>
            </p>
            <p style="color:#707070;font-size:12px;line-height:22px;margin:16px 0 0 0">
              Copyright © 2026 Reloop Inc. All rights reserved.<br />440 N Barranca Ave #4133 Covina, CA 91723
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`,
  usageCode: `import ApiKeyCreatedEmail from "@/templates/api-key-created";
import { reloop } from "@reloop/sdk";

// Trigger automatic security advisory when an API token is created
await reloop.emails.send({
  from: "security@reloop.sh",
  to: "developer@company.com",
  subject: "Security Alert: New API key created",
  react: (
    <ApiKeyCreatedEmail
      fullName="Alex Rivers"
      keyName="Production Key"
      keyPrefix="rl_live_abc1"
      createdAt="May 6, 2026 at 15:27 UTC"
      location="San Francisco, CA"
      ipAddress="192.168.1.1"
      manageKeysUrl="https://reloop.sh/dashboard/settings/api-keys"
    />
  ),
});`,
};
