import React from "react";
import { AlertCircle, ArrowUpRight, MessageSquare } from "lucide-react";
import { EmailTemplate } from "../types";

export function LinearIssuePreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-[#08090c] border border-[#1e2029] rounded-2xl overflow-hidden shadow-2xl text-[#d0d6e0] font-sans">
      {/* Linear Header */}
      <div className="px-6 py-4 border-b border-[#181a24] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#5e6ad2] flex items-center justify-center text-white text-[10px] font-bold">
            L
          </div>
          <span className="font-semibold text-xs text-white">Linear</span>
        </div>
        <span className="text-[11px] font-mono text-[#8a8f98]">REL-241</span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Issue Title & Status */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#f2994a]/15 text-[#f2994a] text-[10px] font-semibold border border-[#f2994a]/30">
              High Priority
            </span>
            <span className="px-2 py-0.5 rounded bg-[#5e6ad2]/15 text-[#8b95e5] text-[10px] font-semibold border border-[#5e6ad2]/30">
              In Progress
            </span>
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Optimize template compile time for Next.js 16
          </h2>
        </div>

        {/* Issue Comment Card */}
        <div className="bg-[#10121a] border border-[#1f2230] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-[11px] font-bold text-white flex items-center justify-center">
                T
              </div>
              <span className="text-xs font-semibold text-white">Twinkal</span>
            </div>
            <span className="text-[11px] text-[#8a8f98]">10 mins ago</span>
          </div>

          <p className="text-xs text-[#b4bac5] leading-relaxed">
            I’ve migrated the template builder to use parallel SWC transforms. Build time dropped from 1.2s to 210ms across all templates.
          </p>
        </div>

        {/* Assigned Details */}
        <div className="grid grid-cols-2 gap-3 text-xs bg-[#0d0f15] p-3.5 rounded-xl border border-[#191b26]">
          <div>
            <div className="text-[11px] text-[#8a8f98]">Assignee</div>
            <div className="font-medium text-white mt-0.5">Twinkal P.</div>
          </div>
          <div>
            <div className="text-[11px] text-[#8a8f98]">Cycle</div>
            <div className="font-medium text-white mt-0.5">Cycle 42 (Current)</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-[#5e6ad2] hover:bg-[#4f5ac4] text-white text-xs font-semibold transition-colors shadow-sm shadow-[#5e6ad2]/30"
          >
            <span>Open Issue in Linear</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="bg-[#0b0c10] px-6 py-3 border-t border-[#181a24] text-center text-[10px] text-[#626875]">
        Press <kbd className="bg-[#181a24] px-1.5 py-0.5 rounded text-white font-mono">O</kbd> then <kbd className="bg-[#181a24] px-1.5 py-0.5 rounded text-white font-mono">I</kbd> in Linear to view notifications.
      </div>
    </div>
  );
}

export const linearIssueTemplate: EmailTemplate = {
  id: "linear-issue",
  title: "Linear Issue Update",
  category: "Brands & Recreations",
  badge: "Trendy",
  description: "Deep obsidian theme with purple accents, priority pill, assignee avatar, and keyboard shortcut hint.",
  component: LinearIssuePreview,
  code: `import React from "react";
import { Html, Head, Body, Container, Section, Heading, Text, Button } from "@react-email/components";

export default function LinearIssueEmail({
  issueId = "REL-241",
  title = "Optimize template compile time for Next.js 16",
  author = "Twinkal",
}: {
  issueId?: string;
  title?: string;
  author?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#08090c", fontFamily: "sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "40px auto", backgroundColor: "#0f1117", border: "1px solid #1f2230", borderRadius: "12px", padding: "28px" }}>
          <Text style={{ color: "#8a8f98", fontSize: "12px", margin: 0 }}>{issueId}</Text>
          <Heading style={{ color: "#ffffff", fontSize: "20px", margin: "8px 0 16px" }}>{title}</Heading>
          <Section style={{ backgroundColor: "#141722", border: "1px solid #232738", borderRadius: "8px", padding: "16px", marginBottom: "20px" }}>
            <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: "13px", margin: "0 0 6px" }}>{author} commented:</Text>
            <Text style={{ color: "#b4bac5", fontSize: "13px", margin: 0 }}>
              Migrated template builder to parallel SWC transforms. Build time dropped to 210ms.
            </Text>
          </Section>
          <Button href="https://linear.app" style={{ backgroundColor: "#5e6ad2", color: "#ffffff", padding: "10px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "13px", textDecoration: "none" }}>
            Open Issue in Linear
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Linear Issue</title></head>
<body style="background:#08090c;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="560" style="background:#0f1117;border:1px solid #1f2230;border-radius:12px;padding:24px;color:#d0d6e0;" cellpadding="0" cellspacing="0">
    <tr><td><span style="color:#8a8f98;font-size:12px;">REL-241</span></td></tr>
    <tr><td><h2 style="color:#fff;margin:8px 0 16px;">Optimize template compile time for Next.js 16</h2></td></tr>
    <tr>
      <td style="background:#141722;border:1px solid #232738;border-radius:8px;padding:16px;">
        <strong style="color:#fff;font-size:13px;">Twinkal commented:</strong>
        <p style="color:#b4bac5;font-size:13px;margin:6px 0 0;">Migrated template builder to parallel SWC transforms.</p>
      </td>
    </tr>
    <tr><td style="padding-top:20px;"><a href="#" style="background:#5e6ad2;color:#fff;padding:10px 20px;border-radius:8px;font-weight:bold;text-decoration:none;display:inline-block;">Open Issue in Linear</a></td></tr>
  </table>
</body>
</html>`,
  usageCode: `import LinearIssueEmail from "@/templates/linear-issue";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@linear.app",
  to: "dev@company.com",
  subject: "REL-241: Optimize template compile time",
  react: <LinearIssueEmail issueId="REL-241" author="Twinkal" />,
});`,
};
