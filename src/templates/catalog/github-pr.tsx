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
  Row,
  Column,
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
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#010409", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "30px 0" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#0d1117", border: "1px solid #30363d", borderRadius: "12px", overflow: "hidden" }}>
          {/* Header */}
          <Section style={{ backgroundColor: "#161b22", padding: "16px 24px", borderBottom: "1px solid #30363d" }}>
            <Row>
              <Column>
                <Text style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  GitHub
                </Text>
              </Column>
              <Column align="right">
                <Text style={{ fontSize: "12px", color: "#8b949e", fontFamily: "monospace", margin: 0 }}>
                  {repo}#{prNumber}
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={{ padding: "24px" }}>
            {/* Merged Badge & Title */}
            <Text style={{ fontSize: "11px", fontWeight: "600", color: "#ffffff", backgroundColor: "#238636", borderRadius: "9999px", padding: "3px 10px", margin: "0 0 12px 0", display: "inline-block" }}>
              ✓ Merged
            </Text>
            <Text style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: "0 0 8px 0", lineHeight: "1.4" }}>
              {prTitle}
            </Text>
            <Text style={{ fontSize: "12px", color: "#8b949e", margin: "0 0 20px 0" }}>
              <strong style={{ color: "#ffffff" }}>@{author}</strong> merged 3 commits into <code style={{ backgroundColor: "#161b22", color: "#58a6ff", padding: "2px 6px", borderRadius: "4px", fontFamily: "monospace" }}>main</code> from <code style={{ backgroundColor: "#161b22", color: "#8b949e", padding: "2px 6px", borderRadius: "4px", fontFamily: "monospace" }}>feat/passkeys</code>
            </Text>

            {/* Changes Card */}
            <Section style={{ backgroundColor: "#161b22", border: "1px solid #30363d", borderRadius: "8px", padding: "16px", marginBottom: "20px" }}>
              <Row style={{ borderBottom: "1px solid #30363d", paddingBottom: "8px", marginBottom: "12px" }}>
                <Column>
                  <Text style={{ fontSize: "12px", fontWeight: "600", color: "#ffffff", margin: 0 }}>
                    Summary of changes
                  </Text>
                </Column>
                <Column align="right">
                  <Text style={{ fontSize: "11px", color: "#8b949e", fontFamily: "monospace", margin: 0 }}>
                    +482 -38 lines (8 files)
                  </Text>
                </Column>
              </Row>
              <Text style={{ fontSize: "12px", color: "#8b949e", margin: "0 0 12px 0", lineHeight: "1.5" }}>
                Implements WebAuthn Level 3 registration and assertion ceremonies with hardware key and biometric fallback. Passes all FIDO2 conformance test suites.
              </Text>

              {/* Code Diff Snippet */}
              <Section style={{ backgroundColor: "#0d1117", border: "1px solid #30363d", borderRadius: "6px", padding: "10px 12px", fontFamily: "monospace", fontSize: "11px" }}>
                <Text style={{ color: "#3fb950", margin: "0 0 4px 0" }}>+ import &#123; createPasskeyCredential &#125; from &quot;@reloop/auth&quot;;</Text>
                <Text style={{ color: "#3fb950", margin: "0 0 4px 0" }}>+ export const verifyAssertion = async (credential) =&gt; &#123; ... &#125;;</Text>
                <Text style={{ color: "#f85149", margin: 0 }}>- export const verifyLegacyPassword = async () =&gt; &#123; ... &#125;;</Text>
              </Section>
            </Section>

            {/* Status & CTA Row */}
            <Section style={{ borderTop: "1px solid #30363d", paddingTop: "16px" }}>
              <Row>
                <Column>
                  <Text style={{ fontSize: "12px", color: "#3fb950", fontWeight: "500", margin: 0 }}>
                    ✓ All 18 CI checks passed
                  </Text>
                </Column>
                <Column align="right">
                  <Link
                    href="https://github.com"
                    style={{ backgroundColor: "#21262d", color: "#c9d1d9", border: "1px solid #30363d", padding: "8px 16px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", textDecoration: "none", display: "inline-block" }}
                  >
                    View Pull Request &rarr;
                  </Link>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#161b22", padding: "16px 24px", borderTop: "1px solid #30363d" }}>
            <Row>
              <Column>
                <Text style={{ fontSize: "11px", color: "#8b949e", margin: 0 }}>
                  You received this notification because you subscribed to this repository.
                </Text>
              </Column>
              <Column align="right">
                <Link href="https://github.com" style={{ fontSize: "11px", color: "#58a6ff", textDecoration: "none" }}>
                  Notification settings
                </Link>
              </Column>
            </Row>
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
    <title>GitHub Pull Request</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(1,4,9);margin:0;padding:30px 0;">
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
            style="background-color:rgb(1,4,9);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Card Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:600px;margin-right:auto;margin-left:auto;background-color:rgb(13,17,23);border-radius:12px;border:1px solid rgb(48,54,61);overflow:hidden;text-align:left">
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
                      role="presentation"
                      style="background-color:rgb(22,27,34);border-bottom:1px solid rgb(48,54,61)">
                      <tbody>
                        <tr>
                          <td style="padding:16px 24px">
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
                                    <p style="font-size:14px;font-weight:700;color:rgb(255,255,255);margin:0">
                                      GitHub
                                    </p>
                                  </td>
                                  <td
                                    align="right"
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:middle;text-align:right">
                                    <p style="font-size:12px;color:rgb(139,148,158);font-family:monospace;margin:0">
                                      reloop-labs/reloop#412
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
                          <td style="padding:24px;text-align:left">
                            <p style="font-size:11px;font-weight:600;color:rgb(255,255,255);background-color:rgb(35,134,54);border-radius:9999px;padding:3px 10px;margin:0 0 12px 0;display:inline-block">
                              ✓ Merged
                            </p>
                            <h2 style="font-size:18px;font-weight:700;color:rgb(255,255,255);margin:0 0 8px 0;line-height:1.4">
                              feat(auth): Add Passkey &amp; WebAuthn biometric authentication
                            </h2>
                            <p style="font-size:12px;color:rgb(139,148,158);margin:0 0 20px 0">
                              <strong style="color:rgb(255,255,255)">@alex-developer</strong> merged 3 commits into <span style="background-color:rgb(22,27,34);color:rgb(88,166,255);padding:2px 6px;border-radius:4px;font-family:monospace">main</span> from <span style="background-color:rgb(22,27,34);color:rgb(139,148,158);padding:2px 6px;border-radius:4px;font-family:monospace">feat/passkeys</span>
                            </p>

                            <!-- Summary Card -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(22,27,34);border:1px solid rgb(48,54,61);border-radius:8px;margin-bottom:20px">
                              <tbody>
                                <tr>
                                  <td style="padding:16px">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-bottom:1px solid rgb(48,54,61);padding-bottom:8px;margin-bottom:12px">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="font-size:12px;font-weight:600;color:rgb(255,255,255);text-align:left">
                                            Summary of changes
                                          </td>
                                          <td align="right" data-id="__react-email-column" style="font-size:11px;color:rgb(139,148,158);font-family:monospace;text-align:right">
                                            +482 -38 lines (8 files)
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <p style="font-size:12px;color:rgb(139,148,158);margin:0 0 12px 0;line-height:1.5">
                                      Implements WebAuthn Level 3 registration and assertion ceremonies with hardware key and biometric fallback. Passes all FIDO2 conformance test suites.
                                    </p>

                                    <!-- Code Diff Box -->
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:rgb(13,17,23);border:1px solid rgb(48,54,61);border-radius:6px">
                                      <tbody>
                                        <tr>
                                          <td style="padding:10px 12px;font-family:monospace;font-size:11px">
                                            <p style="color:rgb(63,185,80);margin:0 0 4px 0">+ import &#123; createPasskeyCredential &#125; from &quot;@reloop/auth&quot;;</p>
                                            <p style="color:rgb(63,185,80);margin:0 0 4px 0">+ export const verifyAssertion = async (credential) =&gt; &#123; ... &#125;;</p>
                                            <p style="color:rgb(248,81,73);margin:0">- export const verifyLegacyPassword = async () =&gt; &#123; ... &#125;;</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- Status & CTA -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border-top:1px solid rgb(48,54,61);padding-top:16px">
                              <tbody style="width:100%">
                                <tr style="width:100%">
                                  <td data-id="__react-email-column" style="vertical-align:middle;text-align:left">
                                    <p style="font-size:12px;color:rgb(63,185,80);font-weight:500;margin:0">
                                      ✓ All 18 CI checks passed
                                    </p>
                                  </td>
                                  <td align="right" data-id="__react-email-column" style="vertical-align:middle;text-align:right">
                                    <a
                                      href="https://github.com"
                                      target="_blank"
                                      style="background-color:rgb(33,38,45);color:rgb(201,209,217);border:1px solid rgb(48,54,61);padding:8px 16px;border-radius:6px;font-size:12px;font-weight:600;text-decoration:none;display:inline-block">
                                      View Pull Request &rarr;
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
                      style="background-color:rgb(22,27,34);border-top:1px solid rgb(48,54,61)">
                      <tbody>
                        <tr>
                          <td style="padding:16px 24px">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tbody style="width:100%">
                                <tr style="width:100%">
                                  <td data-id="__react-email-column" style="font-size:11px;color:rgb(139,148,158);text-align:left">
                                    You received this notification because you subscribed to this repository.
                                  </td>
                                  <td align="right" data-id="__react-email-column" style="text-align:right">
                                    <a href="https://github.com" target="_blank" style="font-size:11px;color:rgb(88,166,255);text-decoration:none">
                                      Notification settings
                                    </a>
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
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
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
