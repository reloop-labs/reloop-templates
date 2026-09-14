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
  description: "Deep obsidian theme with purple accents, priority pill, assignee avatar, and keyboard shortcut hint.",
  component: LinearIssuePreview,
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

export default function LinearIssueEmail({
  issueId = "REL-241",
  title = "Optimize template compile time for Next.js 16",
  author = "Twinkal",
  assignee = "Alex Rivera",
  cycle = "Cycle 42 (Current)",
}: {
  issueId?: string;
  title?: string;
  author?: string;
  assignee?: string;
  cycle?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#08090c", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "30px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#0f1117", border: "1px solid #1f2230", borderRadius: "12px", overflow: "hidden" }}>
          {/* Header */}
          <Section style={{ padding: "20px 24px", borderBottom: "1px solid #181a24" }}>
            <Row>
              <Column>
                <Text style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  Linear
                </Text>
              </Column>
              <Column align="right">
                <Text style={{ fontSize: "11px", fontWeight: "600", color: "#fb7185", backgroundColor: "rgba(225, 29, 72, 0.15)", border: "1px solid rgba(225, 29, 72, 0.3)", borderRadius: "9999px", padding: "2px 8px", margin: 0 }}>
                  ● High Priority
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={{ padding: "24px" }}>
            <Text style={{ fontSize: "12px", fontFamily: "monospace", color: "#8a8f98", margin: "0 0 6px 0" }}>
              {issueId}
            </Text>
            <Text style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: "0 0 16px 0", lineHeight: "1.4" }}>
              {title}
            </Text>

            {/* Comment Box */}
            <Section style={{ backgroundColor: "#141722", border: "1px solid #232738", borderRadius: "8px", padding: "16px", marginBottom: "20px" }}>
              <Text style={{ fontSize: "12px", fontWeight: "700", color: "#ffffff", margin: "0 0 6px 0" }}>
                {author} commented:
              </Text>
              <Text style={{ fontSize: "13px", color: "#b4bac5", margin: 0, lineHeight: "1.5" }}>
                Migrated template builder to parallel SWC transforms. Build time dropped to 210ms.
              </Text>
            </Section>

            {/* Meta: Assignee & Cycle */}
            <Section style={{ backgroundColor: "#12141d", border: "1px solid #1c202e", borderRadius: "8px", padding: "12px 16px", marginBottom: "24px" }}>
              <Row>
                <Column style={{ width: "50%" }}>
                  <Text style={{ fontSize: "11px", color: "#626875", margin: "0 0 2px 0" }}>Assignee</Text>
                  <Text style={{ fontSize: "12px", fontWeight: "600", color: "#ffffff", margin: 0 }}>{assignee}</Text>
                </Column>
                <Column style={{ width: "50%" }} align="right">
                  <Text style={{ fontSize: "11px", color: "#626875", margin: "0 0 2px 0" }}>Cycle</Text>
                  <Text style={{ fontSize: "12px", fontWeight: "600", color: "#ffffff", margin: 0 }}>{cycle}</Text>
                </Column>
              </Row>
            </Section>

            {/* CTA Button */}
            <Section style={{ textAlign: "center" }}>
              <Button
                href="https://linear.app"
                style={{ backgroundColor: "#5e6ad2", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none", display: "inline-block", width: "100%", textAlign: "center" }}
              >
                Open Issue in Linear &rarr;
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#0b0c10", padding: "14px 24px", borderTop: "1px solid #181a24", textAlign: "center" }}>
            <Text style={{ fontSize: "11px", color: "#626875", margin: 0 }}>
              Press O then I in Linear to view notifications.
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
    <title>Linear Issue Update</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(8,9,12);margin:0;padding:30px 0;">
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
            style="background-color:rgb(8,9,12);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:560px;margin-right:auto;margin-left:auto;background-color:rgb(15,17,23);border-radius:12px;border:1px solid rgb(31,34,48);overflow:hidden;text-align:left">
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
                          <td style="padding:20px 24px;border-bottom:1px solid rgb(24,26,36)">
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
                                      Linear
                                    </p>
                                  </td>
                                  <td
                                    align="right"
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:middle;text-align:right">
                                    <p style="font-size:11px;font-weight:600;color:rgb(251,113,133);background-color:rgba(225,29,72,0.15);border:1px solid rgba(225,29,72,0.3);border-radius:9999px;padding:2px 8px;margin:0;display:inline-block">
                                      ● High Priority
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Content -->
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
                            <p style="font-size:12px;font-family:monospace;color:rgb(138,143,152);margin:0 0 6px 0">
                              REL-241
                            </p>
                            <h2 style="font-size:18px;font-weight:700;color:rgb(255,255,255);margin:0 0 16px 0;line-height:1.4">
                              Optimize template compile time for Next.js 16
                            </h2>

                            <!-- Comment Card -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(20,23,34);border:1px solid rgb(35,39,56);border-radius:8px;margin-bottom:20px">
                              <tbody>
                                <tr>
                                  <td style="padding:16px">
                                    <p style="font-size:12px;font-weight:700;color:rgb(255,255,255);margin:0 0 6px 0">
                                      Twinkal commented:
                                    </p>
                                    <p style="font-size:13px;color:rgb(180,186,197);margin:0;line-height:1.5">
                                      Migrated template builder to parallel SWC transforms. Build time dropped to 210ms.
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- Meta Card -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(18,20,29);border:1px solid rgb(28,32,46);border-radius:8px;margin-bottom:24px">
                              <tbody>
                                <tr>
                                  <td style="padding:12px 16px">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="width:50%;text-align:left">
                                            <p style="font-size:11px;color:rgb(98,104,117);margin:0 0 2px 0">Assignee</p>
                                            <p style="font-size:12px;font-weight:600;color:rgb(255,255,255);margin:0">Alex Rivera</p>
                                          </td>
                                          <td align="right" data-id="__react-email-column" style="width:50%;text-align:right">
                                            <p style="font-size:11px;color:rgb(98,104,117);margin:0 0 2px 0">Cycle</p>
                                            <p style="font-size:12px;font-weight:600;color:rgb(255,255,255);margin:0">Cycle 42 (Current)</p>
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
                                  <td align="center">
                                    <a
                                      href="https://linear.app"
                                      target="_blank"
                                      style="background-color:rgb(94,106,210);color:rgb(255,255,255);padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;display:block;text-align:center">
                                      Open Issue in Linear &rarr;
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
                      style="background-color:rgb(11,12,16);border-top:1px solid rgb(24,26,36)">
                      <tbody>
                        <tr>
                          <td style="padding:14px 24px;text-align:center">
                            <p style="font-size:11px;color:rgb(98,104,117);margin:0">
                              Press O then I in Linear to view notifications.
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
  plainText: `Linear

● High Priority

REL-241


OPTIMIZE TEMPLATE COMPILE TIME FOR NEXT.JS 16

Twinkal commented:

Migrated template builder to parallel SWC transforms. Build time dropped to 210ms.

Assignee

Alex Rivera

Cycle

Cycle 42 (Current)

Open Issue in Linear → https://linear.app

Press O then I in Linear to view notifications.`,
  usageCode: `import LinearIssueEmail from "@/templates/linear-issue";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@linear.app",
  to: "dev@company.com",
  subject: "REL-241: Optimize template compile time",
  react: <LinearIssueEmail issueId="REL-241" author="Twinkal" />,
});`,
};
