import React from "react";
import { GitPullRequest, Check, ExternalLink, GitCommit, FileCode2 } from "lucide-react";
import { EmailTemplate } from "../types";

export function GitHubPRPreview() {
  return (
    <div className="w-full max-w-[620px] mx-auto bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl text-[#c9d1d9] font-sans">
      {/* GitHub Top Bar */}
      <div className="bg-[#161b22] px-6 py-4 border-b border-[#30363d] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="font-semibold text-sm text-white">GitHub</span>
        </div>
        <span className="text-xs text-[#8b949e] font-mono">reloop-labs/reloop#412</span>
      </div>

      <div className="p-6 space-y-5">
        {/* PR State Pill & Title */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#238636] text-white mb-2.5">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Merged</span>
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            feat(auth): Add Passkey &amp; WebAuthn biometric authentication
          </h2>
          <div className="flex items-center gap-2 mt-1.5 text-xs text-[#8b949e]">
            <span className="text-white font-medium">@alex-developer</span> merged 3 commits into{" "}
            <code className="px-1.5 py-0.5 rounded bg-[#161b22] text-[#58a6ff] font-mono">main</code> from{" "}
            <code className="px-1.5 py-0.5 rounded bg-[#161b22] text-[#8b949e] font-mono">feat/passkeys</code>
          </div>
        </div>

        {/* PR Review Body Card */}
        <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-4 text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#30363d]">
            <span className="font-semibold text-white">Summary of changes</span>
            <span className="text-[#8b949e] font-mono text-[11px]">+482 -38 lines (8 files)</span>
          </div>
          <p className="text-[#8b949e] leading-relaxed">
            Implements WebAuthn Level 3 registration and assertion ceremonies with hardware key and biometric fallback. Passes all FIDO2 conformance test suites.
          </p>
          
          {/* Diff preview box */}
          <div className="bg-[#0d1117] border border-[#30363d] rounded p-2.5 font-mono text-[11px] space-y-1 overflow-x-auto">
            <div className="text-[#3fb950]">+ import &#123; createPasskeyCredential &#125; from &quot;@reloop/auth&quot;;</div>
            <div className="text-[#3fb950]">+ export const verifyAssertion = async (credential) =&gt; &#123; ... &#125;;</div>
            <div className="text-[#f85149]">- export const verifyLegacyPassword = async () =&gt; &#123; ... &#125;;</div>
          </div>
        </div>

        {/* Checks & Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-[#30363d] text-xs">
          <div className="flex items-center gap-2 text-[#3fb950]">
            <Check className="w-4 h-4" />
            <span className="font-medium">All 18 CI checks passed</span>
          </div>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] font-medium transition-colors border border-[#30363d]"
          >
            <span>View Pull Request</span>
            <ExternalLink className="w-3 h-3 text-[#8b949e]" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-[#161b22] border-t border-[#30363d] text-[11px] text-[#8b949e] flex justify-between items-center">
        <span>You received this notification because you subscribed to this repository.</span>
        <a href="#" className="text-[#58a6ff] hover:underline">Notification settings</a>
      </div>
    </div>
  );
}

export const githubPRTemplate: EmailTemplate = {
  id: "github-pr",
  title: "GitHub Pull Request",
  category: "Brands & Recreations",
  badge: "Popular",
  description: "GitHub dark theme pull request notification with code diff highlights, status badges, and commit details.",
  component: GitHubPRPreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr,
} from "@react-email/components";

interface GitHubPREmailProps {
  prNumber?: number;
  prTitle?: string;
  author?: string;
  repo?: string;
}

export default function GitHubPREmail({
  prNumber = 412,
  prTitle = "feat(auth): Add Passkey & WebAuthn biometric authentication",
  author = "alex-developer",
  repo = "reloop-labs/reloop",
}: GitHubPREmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#0d1117", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", background: "#161b22", border: "1px solid #30363d", borderRadius: "10px", padding: "24px" }}>
          <Text style={{ color: "#8b949e", fontSize: "12px", margin: "0 0 12px" }}>
            {repo}#{prNumber}
          </Text>
          <Text style={{ color: "#ffffff", fontSize: "18px", fontWeight: "bold", margin: "0 0 12px" }}>
            {prTitle}
          </Text>
          <Text style={{ color: "#8b949e", fontSize: "13px" }}>
            Merged by <strong style={{ color: "#ffffff" }}>@{author}</strong>
          </Text>
          <Hr style={{ borderColor: "#30363d", margin: "20px 0" }} />
          <Link href="https://github.com" style={{ background: "#238636", color: "#fff", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", fontSize: "13px", fontWeight: "bold" }}>
            View on GitHub
          </Link>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#0d1117;font-family:sans-serif;margin:0;padding:24px;color:#c9d1d9;">
  <table align="center" width="600" style="background:#161b22;border:1px solid #30363d;border-radius:10px;padding:24px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <span style="display:inline-block;padding:4px 10px;background:#238636;color:#fff;border-radius:12px;font-size:12px;font-weight:bold;">Merged</span>
        <h2 style="color:#ffffff;font-size:18px;margin:12px 0 8px;">feat(auth): Add Passkey &amp; WebAuthn biometric authentication</h2>
        <p style="color:#8b949e;font-size:13px;margin:0 0 16px;">reloop-labs/reloop#412 by @alex-developer (+482 -38 lines)</p>
        <div style="background:#0d1117;border:1px solid #30363d;border-radius:6px;padding:12px;font-family:monospace;font-size:12px;margin-bottom:20px;">
          <div style="color:#3fb950;">+ import { createPasskeyCredential } from "@reloop/auth";</div>
          <div style="color:#3fb950;">+ export const verifyAssertion = async () => { ... };</div>
          <div style="color:#f85149;">- export const verifyLegacyPassword = async () => { ... };</div>
        </div>
        <a href="https://github.com" style="display:inline-block;background:#21262d;color:#c9d1d9;border:1px solid #30363d;padding:10px 18px;border-radius:6px;font-size:13px;text-decoration:none;font-weight:bold;">View Pull Request</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import GitHubPREmail from "@/templates/github-pr";
import { reloop } from "@reloop/sdk";

// Send GitHub-style Pull Request review alert
await reloop.emails.send({
  from: "notifications@github.com",
  to: "dev-team@yourcompany.com",
  subject: "reloop-labs/reloop#412 feat(auth): Add Passkey & WebAuthn",
  react: <GitHubPREmail prNumber={412} author="alex-developer" />,
});`,
};
