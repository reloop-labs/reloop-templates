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
  badge: "Popular",
  description: "Stark monochrome, high-contrast deployment card with commit hash, branch badge, build metrics, and inspect logs CTA.",
  component: VercelDeploymentPreview,
  code: `import React from "react";
import { Html, Head, Body, Container, Section, Heading, Text, Button, Row, Column } from "@react-email/components";

export default function VercelDeploymentEmail({
  projectName = "reloop-templates",
  domain = "templates.reloop.sh",
  commitSha = "8bb0ab1",
}: {
  projectName?: string;
  domain?: string;
  commitSha?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "40px auto", border: "1px solid #eaeaea", borderRadius: "8px", padding: "24px" }}>
          <Text style={{ fontSize: "14px", fontWeight: "bold", margin: "0 0 16px 0" }}>▲ Vercel</Text>
          <Heading style={{ fontSize: "20px", fontWeight: "bold" }}>Deployment Succeeded</Heading>
          <Text style={{ fontSize: "14px", color: "#666" }}>
            Your project <strong>{projectName}</strong> was deployed to production.
          </Text>
          <Section style={{ backgroundColor: "#fafafa", border: "1px solid #eaeaea", borderRadius: "6px", padding: "16px", margin: "20px 0" }}>
            <Text style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>{domain}</Text>
            <Text style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#888" }}>Commit: {commitSha} (main)</Text>
          </Section>
          <Button href={\`https://\${domain}\`} style={{ backgroundColor: "#000000", color: "#ffffff", padding: "10px 20px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
            Inspect Deployment
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Vercel Deployment Succeeded</title></head>
<body style="font-family:sans-serif;background:#fff;margin:0;padding:24px;">
  <table align="center" width="560" style="border:1px solid #eaeaea;border-radius:8px;padding:24px;" cellpadding="0" cellspacing="0">
    <tr><td><strong style="font-size:16px;">▲ Vercel</strong></td></tr>
    <tr><td><h2 style="margin:16px 0 8px;">Deployment Succeeded</h2></td></tr>
    <tr><td><p style="color:#666;font-size:14px;">Your project <strong>reloop-templates</strong> is live.</p></td></tr>
    <tr>
      <td style="background:#fafafa;border:1px solid #eaeaea;padding:16px;border-radius:6px;">
        <strong style="font-size:14px;">templates.reloop.sh</strong><br>
        <span style="color:#888;font-size:12px;">Branch: main • Commit: 8bb0ab1</span>
      </td>
    </tr>
    <tr><td style="padding-top:20px;"><a href="#" style="background:#000;color:#fff;padding:10px 20px;border-radius:6px;font-weight:bold;text-decoration:none;display:inline-block;">Inspect Deployment</a></td></tr>
  </table>
</body>
</html>`,
  usageCode: `import VercelDeploymentEmail from "@/templates/vercel-deployment";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@yourdomain.com",
  to: "developer@company.com",
  subject: "Production deployment succeeded for reloop-templates",
  react: <VercelDeploymentEmail projectName="reloop-templates" domain="templates.reloop.sh" />,
});`,
};
