import React from "react";
import { GitBranch, GitCommit, CheckCircle, ExternalLink, Clock } from "lucide-react";
import { EmailTemplate } from "../types";

export function VercelDeploymentPreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#000000] dark:border-zinc-800 dark:text-zinc-100">
      {/* Vercel Header with Triangle */}
      <div className="p-6 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Vercel Triangle */}
          <svg className="w-6 h-6 fill-current text-black dark:text-white" viewBox="0 0 75 65">
            <path d="M37.5 0L75 65H0z" />
          </svg>
          <span className="font-bold text-sm tracking-tight">Vercel</span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <CheckCircle className="w-3 h-3" />
          <span>Production Ready</span>
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Deployment Succeeded
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            Your project <strong className="text-zinc-900 dark:text-white">reloop-templates</strong> was deployed to production.
          </p>
        </div>

        {/* Live Domain Card */}
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-medium text-zinc-500">Domains</div>
            <a href="https://templates.reloop.sh" target="_blank" rel="noreferrer" className="text-xs font-semibold text-zinc-900 dark:text-white hover:underline flex items-center gap-1 mt-0.5">
              <span>templates.reloop.sh</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            Latest
          </span>
        </div>

        {/* Deployment Meta Table */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs divide-y divide-zinc-100 dark:divide-zinc-800">
          <div className="p-3 flex justify-between items-center">
            <span className="text-zinc-500 flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5" />
              <span>Branch</span>
            </span>
            <span className="font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900">main</span>
          </div>
          <div className="p-3 flex justify-between items-center">
            <span className="text-zinc-500 flex items-center gap-1.5">
              <GitCommit className="w-3.5 h-3.5" />
              <span>Commit</span>
            </span>
            <span className="font-mono text-zinc-700 dark:text-zinc-300">8bb0ab1 (Move star icon)</span>
          </div>
          <div className="p-3 flex justify-between items-center">
            <span className="text-zinc-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Build Duration</span>
            </span>
            <span className="font-mono text-zinc-700 dark:text-zinc-300">22s</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold text-xs hover:opacity-90 transition-opacity"
          >
            Inspect Deployment
          </a>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-950 p-4 border-t border-zinc-100 dark:border-zinc-900 text-center text-[11px] text-zinc-500">
        Notifications from Vercel • To adjust preferences, visit Account Settings.
      </div>
    </div>
  );
}

export const vercelDeploymentTemplate: EmailTemplate = {
  id: "vercel-deployment",
  title: "Vercel Deployment Alert",
  category: "Brands & Recreations",
  description: "Stark monochrome, high-contrast deployment card with commit hash, branch badge, build metrics, and inspect logs CTA.",
  component: VercelDeploymentPreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Row,
  Column,
  Link,
} from "@react-email/components";

export default function VercelDeploymentEmail({
  projectName = "reloop-templates",
  domain = "templates.reloop.sh",
  branch = "main",
  commitSha = "8bb0ab1 (Move star icon)",
  duration = "22s",
}: {
  projectName?: string;
  domain?: string;
  branch?: string;
  commitSha?: string;
  duration?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#fafafa", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "30px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
          {/* Header */}
          <Section style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6" }}>
            <Row>
              <Column>
                <Text style={{ fontSize: "14px", fontWeight: "700", color: "#000000", margin: 0 }}>
                  ▲ Vercel
                </Text>
              </Column>
              <Column align="right">
                <Text style={{ fontSize: "11px", fontWeight: "600", color: "#059669", backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "9999px", padding: "2px 8px", margin: 0 }}>
                  ✓ Production Ready
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={{ padding: "28px 24px" }}>
            <Text style={{ fontSize: "20px", fontWeight: "700", color: "#111827", margin: "0 0 6px 0" }}>
              Deployment Succeeded
            </Text>
            <Text style={{ fontSize: "13px", color: "#4b5563", margin: "0 0 20px 0", lineHeight: "1.5" }}>
              Your project <strong>{projectName}</strong> was deployed to production.
            </Text>

            {/* Domains Card */}
            <Section style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "14px 16px", marginBottom: "16px" }}>
              <Row>
                <Column>
                  <Text style={{ fontSize: "11px", fontWeight: "500", color: "#6b7280", margin: "0 0 4px 0" }}>
                    Domains
                  </Text>
                  <Link href={\`https://\${domain}\`} style={{ fontSize: "13px", fontWeight: "600", color: "#111827", textDecoration: "none" }}>
                    {domain} &rarr;
                  </Link>
                </Column>
                <Column align="right">
                  <Text style={{ fontSize: "10px", fontFamily: "monospace", backgroundColor: "#e5e7eb", borderRadius: "4px", padding: "2px 6px", color: "#374151", margin: 0 }}>
                    Latest
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Meta Details Table */}
            <Section style={{ border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden", marginBottom: "24px" }}>
              <Row style={{ padding: "10px 14px", borderBottom: "1px solid #f3f4f6" }}>
                <Column><Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Branch</Text></Column>
                <Column align="right"><Text style={{ fontSize: "12px", fontFamily: "monospace", color: "#111827", margin: 0 }}>{branch}</Text></Column>
              </Row>
              <Row style={{ padding: "10px 14px", borderBottom: "1px solid #f3f4f6" }}>
                <Column><Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Commit</Text></Column>
                <Column align="right"><Text style={{ fontSize: "12px", fontFamily: "monospace", color: "#111827", margin: 0 }}>{commitSha}</Text></Column>
              </Row>
              <Row style={{ padding: "10px 14px" }}>
                <Column><Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Build Duration</Text></Column>
                <Column align="right"><Text style={{ fontSize: "12px", fontFamily: "monospace", color: "#111827", margin: 0 }}>{duration}</Text></Column>
              </Row>
            </Section>

            {/* CTA Button */}
            <Section style={{ textAlign: "center" }}>
              <Button
                href="https://vercel.com"
                style={{ backgroundColor: "#000000", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none", display: "inline-block", width: "100%", textAlign: "center" }}
              >
                Inspect Deployment
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#f9fafb", padding: "16px 24px", borderTop: "1px solid #f3f4f6", textAlign: "center" }}>
            <Text style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>
              Notifications from Vercel • To adjust preferences, visit Account Settings.
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
    <title>Vercel Deployment Succeeded</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(250,250,250);margin:0;padding:30px 0;">
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
            style="background-color:rgb(250,250,250);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Card Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:560px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:12px;border:1px solid rgb(229,231,235);overflow:hidden;text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Header -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:20px 24px;border-bottom:1px solid rgb(243,244,246)">
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
                                    style="width:50%;vertical-align:middle;text-align:left">
                                    <p style="font-size:14px;font-weight:700;color:rgb(0,0,0);margin:0">
                                      ▲ Vercel
                                    </p>
                                  </td>
                                  <td
                                    align="right"
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:middle;text-align:right">
                                    <p style="font-size:11px;font-weight:600;color:rgb(5,150,105);background-color:rgb(236,253,245);border:1px solid rgb(167,243,208);border-radius:9999px;padding:2px 8px;margin:0;display:inline-block">
                                      ✓ Production Ready
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Main Content -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:28px 24px;text-align:left">
                            <h2 style="font-size:20px;font-weight:700;color:rgb(17,24,39);margin:0 0 6px 0">
                              Deployment Succeeded
                            </h2>
                            <p style="font-size:13px;color:rgb(75,85,99);margin:0 0 20px 0;line-height:1.5">
                              Your project <strong>reloop-templates</strong> was deployed to production.
                            </p>

                            <!-- Domains Card -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(249,250,251);border:1px solid rgb(229,231,235);border-radius:8px;margin-bottom:16px">
                              <tbody>
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
                                            style="text-align:left">
                                            <p style="font-size:11px;font-weight:500;color:rgb(107,114,128);margin:0 0 4px 0">
                                              Domains
                                            </p>
                                            <a
                                              href="https://templates.reloop.sh"
                                              target="_blank"
                                              style="font-size:13px;font-weight:600;color:rgb(17,24,39);text-decoration:none">
                                              templates.reloop.sh &rarr;
                                            </a>
                                          </td>
                                          <td
                                            align="right"
                                            data-id="__react-email-column"
                                            style="text-align:right">
                                            <span style="font-size:10px;font-family:monospace;background-color:rgb(229,231,235);border-radius:4px;padding:2px 6px;color:rgb(55,65,81)">
                                              Latest
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- Meta Details Table -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border:1px solid rgb(229,231,235);border-radius:8px;overflow:hidden;margin-bottom:24px">
                              <tbody>
                                <tr>
                                  <td style="padding:10px 14px;border-bottom:1px solid rgb(243,244,246)">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="font-size:12px;color:rgb(107,114,128);text-align:left">Branch</td>
                                          <td align="right" data-id="__react-email-column" style="font-size:12px;font-family:monospace;color:rgb(17,24,39);text-align:right">main</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:10px 14px;border-bottom:1px solid rgb(243,244,246)">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="font-size:12px;color:rgb(107,114,128);text-align:left">Commit</td>
                                          <td align="right" data-id="__react-email-column" style="font-size:12px;font-family:monospace;color:rgb(17,24,39);text-align:right">8bb0ab1 (Move star icon)</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:10px 14px">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="font-size:12px;color:rgb(107,114,128);text-align:left">Build Duration</td>
                                          <td align="right" data-id="__react-email-column" style="font-size:12px;font-family:monospace;color:rgb(17,24,39);text-align:right">22s</td>
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
                                  <td align="center">
                                    <a
                                      href="https://vercel.com"
                                      target="_blank"
                                      style="background-color:rgb(0,0,0);color:rgb(255,255,255);padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;display:block;text-align:center">
                                      Inspect Deployment
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
                      role="presentation"
                      style="background-color:rgb(249,250,251);border-top:1px solid rgb(243,244,246)">
                      <tbody>
                        <tr>
                          <td style="padding:16px 24px;text-align:center">
                            <p style="font-size:11px;color:rgb(107,114,128);margin:0">
                              Notifications from Vercel • To adjust preferences, visit Account Settings.
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
  plainText: `▲ Vercel

✓ Production Ready


DEPLOYMENT SUCCEEDED

Your project reloop-templates was deployed to production.

Domains

templates.reloop.sh → https://templates.reloop.sh Latest

Branch main

Commit 8bb0ab1 (Move star icon)

Build Duration 22s

Inspect Deployment https://vercel.com

Notifications from Vercel • To adjust preferences, visit Account Settings.`,
  usageCode: `import VercelDeploymentEmail from "@/templates/vercel-deployment";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@yourdomain.com",
  to: "developer@company.com",
  subject: "Production deployment succeeded for reloop-templates",
  react: <VercelDeploymentEmail projectName="reloop-templates" domain="templates.reloop.sh" />,
});`,
};
