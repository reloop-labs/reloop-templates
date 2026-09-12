import React from "react";
import { EmailTemplate } from "../types";

export function RaycastExtensionPreview() {
  return (
    <div className="w-full bg-[#0c0d12] py-10 px-4 flex justify-center text-zinc-100 font-sans">
      <div className="w-full max-w-[560px] bg-[#14151f] border border-[#232533] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle Crimson Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff3b30]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Raycast Header Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232533]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#ff3b30] flex items-center justify-center text-white font-bold text-xs shadow-md">
              R
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">Raycast Store</span>
          </div>
          <span className="text-[11px] font-mono text-[#ff6363] bg-[#ff3b30]/10 px-2 py-0.5 rounded border border-[#ff3b30]/30">
            Published
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold tracking-tight text-white mb-2">
          Your extension is now live
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          Congratulations! Your extension <strong className="text-white">&ldquo;Reloop Tools&rdquo;</strong> has passed review and is now available to thousands of Raycast developers worldwide.
        </p>

        {/* Extension Info Card */}
        <div className="border border-[#282a3a] bg-[#1a1c29] rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                RT
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Reloop Tools</div>
                <div className="text-xs text-zinc-400">by @developer &bull; Developer Tools</div>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded">
              v1.0.0
            </span>
          </div>

          <div className="text-xs text-zinc-300 bg-[#12131d] rounded-lg p-3 border border-[#232533] flex items-center justify-between font-mono">
            <span>raycast://extensions/reloop/tools</span>
            <span className="text-[10px] text-zinc-500">Fast install</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-6">
          <a
            href="https://raycast.com/store"
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full text-center bg-[#ff3b30] hover:bg-[#e0342a] text-white text-sm font-medium py-3 px-6 rounded-xl transition-colors shadow-lg shadow-[#ff3b30]/20"
          >
            View on Raycast Store
          </a>
        </div>

        {/* Shortcut Hint */}
        <div className="text-xs text-zinc-500 text-center flex items-center justify-center gap-1.5 mb-8">
          <span>Search and run commands instantly with</span>
          <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded font-mono text-[10px] border border-zinc-700">⌘</kbd>
          <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded font-mono text-[10px] border border-zinc-700">K</kbd>
        </div>

        {/* Footer */}
        <div className="border-t border-[#232533] pt-5 text-[11px] text-zinc-500 flex items-center justify-between">
          <span>Raycast Technologies Inc.</span>
          <a href="https://raycast.com" className="hover:text-zinc-400">raycast.com</a>
        </div>
      </div>
    </div>
  );
}

export const raycastExtensionTemplate: EmailTemplate = {
  id: "raycast-extension",
  title: "Raycast Extension Published",
  category: "Brands & Recreations",
  description: "Sleek obsidian dark-mode announcement celebrating store extension approval with shortcut chips, metadata pill, and CTA button.",
  component: RaycastExtensionPreview,
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
} from "@react-email/components";

export default function RaycastExtensionEmail() {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#0c0d12", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#14151f", borderRadius: "16px", border: "1px solid #232533", padding: "32px" }}>
          {/* Header */}
          <Section style={{ marginBottom: "24px", borderBottom: "1px solid #232533", paddingBottom: "16px" }}>
            <Row>
              <Column style={{ width: "32px" }}>
                <div style={{ width: "28px", height: "28px", backgroundColor: "#ff3b30", borderRadius: "8px", color: "#ffffff", fontWeight: "bold", fontSize: "13px", textAlign: "center", lineHeight: "28px" }}>
                  R
                </div>
              </Column>
              <Column style={{ paddingLeft: "10px" }}>
                <Text style={{ margin: 0, fontWeight: "600", fontSize: "14px", color: "#ffffff" }}>
                  Raycast Store
                </Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <span style={{ fontSize: "11px", color: "#ff6363", backgroundColor: "rgba(255,59,48,0.15)", padding: "4px 8px", borderRadius: "4px" }}>
                  Published
                </span>
              </Column>
            </Row>
          </Section>

          {/* Heading */}
          <Heading style={{ fontSize: "20px", fontWeight: "600", color: "#ffffff", margin: "0 0 10px 0" }}>
            Your extension is now live
          </Heading>

          <Text style={{ fontSize: "14px", color: "#9ca3af", lineHeight: "1.6", margin: "0 0 24px 0" }}>
            Congratulations! Your extension <strong style={{ color: "#ffffff" }}>&ldquo;Reloop Tools&rdquo;</strong> has passed review and is now available to thousands of Raycast developers worldwide.
          </Text>

          {/* Extension Card */}
          <Section style={{ backgroundColor: "#1a1c29", border: "1px solid #282a3a", borderRadius: "12px", padding: "20px", marginBottom: "24px" }}>
            <Row>
              <Column style={{ width: "48px" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "#6366f1", borderRadius: "10px", color: "#ffffff", fontWeight: "bold", fontSize: "14px", textAlign: "center", lineHeight: "40px" }}>
                  RT
                </div>
              </Column>
              <Column style={{ paddingLeft: "12px" }}>
                <Text style={{ margin: "0 0 4px 0", fontWeight: "600", fontSize: "14px", color: "#ffffff" }}>
                  Reloop Tools
                </Text>
                <Text style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>
                  by @developer &bull; Developer Tools
                </Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <span style={{ fontSize: "11px", color: "#d1d5db", backgroundColor: "#2d3042", padding: "3px 8px", borderRadius: "4px", fontFamily: "monospace" }}>
                  v1.0.0
                </span>
              </Column>
            </Row>
          </Section>

          {/* CTA Button */}
          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Button
              href="https://raycast.com/store"
              style={{
                backgroundColor: "#ff3b30",
                color: "#ffffff",
                borderRadius: "10px",
                fontWeight: "500",
                fontSize: "14px",
                padding: "12px 24px",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              View on Raycast Store
            </Button>
          </Section>

          <Hr style={{ borderColor: "#232533", margin: "24px 0" }} />

          {/* Footer */}
          <Text style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>
            Raycast Technologies Inc. &bull; <Link href="https://raycast.com" style={{ color: "#9ca3af" }}>raycast.com</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--$--><html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Your Raycast extension is live</title>
  </head>
  <body style="background-color:#0c0d12;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#14151f;border-radius:16px;border:1px solid #232533;padding:32px">
      <tbody>
        <tr>
          <td>
            <!-- Header Bar -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-bottom:24px;border-bottom:1px solid #232533;padding-bottom:16px">
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style="width:32px;vertical-align:middle">
                    <div style="width:28px;height:28px;background-color:#ff3b30;border-radius:8px;color:#ffffff;font-weight:bold;font-size:13px;text-align:center;line-height:28px">
                      R
                    </div>
                  </td>
                  <td data-id="__react-email-column" style="padding-left:10px;vertical-align:middle">
                    <p style="margin:0;font-weight:600;font-size:14px;color:#ffffff">Raycast Store</p>
                  </td>
                  <td data-id="__react-email-column" align="right" style="vertical-align:middle;text-align:right">
                    <span style="font-size:11px;color:#ff6363;background-color:rgba(255,59,48,0.15);padding:4px 8px;border-radius:4px">
                      Published
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Heading -->
            <h2 style="font-size:20px;font-weight:600;color:#ffffff;margin:0 0 10px 0">
              Your extension is now live
            </h2>

            <p style="font-size:14px;color:#9ca3af;line-height:1.6;margin:0 0 24px 0">
              Congratulations! Your extension <strong style={{ color: "#ffffff" }}>&ldquo;Reloop Tools&rdquo;</strong> has passed review and is now available to thousands of Raycast developers worldwide.
            </p>

            <!-- Extension Card -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#1a1c29;border:1px solid #282a3a;border-radius:12px;padding:20px;margin-bottom:24px">
              <tbody>
                <tr>
                  <td data-id="__react-email-column" style="width:48px;vertical-align:middle">
                    <div style="width:40px;height:40px;background-color:#6366f1;border-radius:10px;color:#ffffff;font-weight:bold;font-size:14px;text-align:center;line-height:40px">
                      RT
                    </div>
                  </td>
                  <td data-id="__react-email-column" style="padding-left:12px;vertical-align:middle">
                    <p style="margin:0 0 4px 0;font-weight:600;font-size:14px;color:#ffffff">
                      Reloop Tools
                    </p>
                    <p style="margin:0;font-size:12px;color:#9ca3af">
                      by @developer &bull; Developer Tools
                    </p>
                  </td>
                  <td data-id="__react-email-column" align="right" style="vertical-align:middle;text-align:right">
                    <span style="font-size:11px;color:#d1d5db;background-color:#2d3042;padding:3px 8px;border-radius:4px;font-family:monospace">
                      v1.0.0
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- CTA Button -->
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-bottom:24px">
              <tbody>
                <tr>
                  <td align="center" style="text-align:center">
                    <a href="https://raycast.com/store" target="_blank" style="background-color:#ff3b30;color:#ffffff;border-radius:10px;font-weight:500;font-size:14px;padding:12px 28px;display:inline-block;text-align:center;text-decoration:none">
                      View on Raycast Store
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <hr style="border:none;border-top:1px solid #232533;margin:24px 0" />

            <!-- Footer -->
            <p style="font-size:11px;color:#6b7280;margin:0">
              Raycast Technologies Inc. &bull; <a href="https://raycast.com" style="color:#9ca3af">raycast.com</a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html><!--/$-->`,
  usageCode: `import RaycastExtensionEmail from "@/templates/raycast-extension";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@yourdomain.com",
  to: "developer@example.com",
  subject: "Your Raycast extension is live",
  react: <RaycastExtensionEmail />,
});`,
};
