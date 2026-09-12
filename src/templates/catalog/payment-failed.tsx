import React from "react";
import { AlertCircle, CreditCard, ArrowRight, ShieldAlert } from "lucide-react";
import { EmailTemplate } from "../types";

export function PaymentFailedPreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0d0f14] dark:border-zinc-800 dark:text-zinc-100">
      {/* Top Rose Bar */}
      <div className="h-2 w-full bg-rose-500" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Warning Icon & Status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">Billing Notice</span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
            Payment Past Due
          </span>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Action required: Payment failed
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
            We were unable to process your payment for your Reloop Pro subscription renewal.
          </p>
        </div>

        {/* Failed Charge Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-4 space-y-3 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200/70 dark:border-zinc-800">
            <span className="text-zinc-500">Plan</span>
            <span className="font-bold text-zinc-900 dark:text-white">Reloop Pro (Monthly)</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200/70 dark:border-zinc-800">
            <span className="text-zinc-500">Attempted Amount</span>
            <span className="font-bold text-zinc-900 dark:text-white">$79.00 USD</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-zinc-200/70 dark:border-zinc-800">
            <span className="text-zinc-500">Card on File</span>
            <span className="font-medium text-zinc-900 dark:text-white flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-zinc-400" />
              Visa ending in 4242
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500">Failure Reason</span>
            <span className="font-semibold text-rose-600 dark:text-rose-400">Card expired or declined</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm shadow-md transition-colors gap-2"
          >
            <span>Update Payment Method</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grace Period Warning */}
        <div className="p-3.5 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 text-xs text-amber-800 dark:text-amber-300">
          <span className="font-semibold">Grace Period:</span> We will retry this charge in 3 days. Your service will remain uninterrupted until then.
        </div>
      </div>
    </div>
  );
}

export const paymentFailedTemplate: EmailTemplate = {
  id: "payment-failed",
  title: "Payment Failed (Dunning)",
  category: "SaaS & Billing",
  description: "Urgent dunning notification warning customers of a declined charge, grace period timeline, and a direct 1-click update link.",
  component: PaymentFailedPreview,
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

interface PaymentFailedEmailProps {
  customerName?: string;
  planName?: string;
  amount?: string;
  cardLast4?: string;
  failureReason?: string;
  updateUrl?: string;
}

export default function PaymentFailedEmail({
  customerName = "Alex",
  planName = "Reloop Pro (Monthly)",
  amount = "$79.00 USD",
  cardLast4 = "4242",
  failureReason = "Card expired or declined",
  updateUrl = "https://reloop.sh/billing/update",
}: PaymentFailedEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #fecdd3", borderRadius: "16px", overflow: "hidden" }}>
          {/* Top Rose Accent Bar */}
          <div style={{ height: "6px", width: "100%", backgroundColor: "#f43f5e" }} />

          {/* Header */}
          <Section style={{ padding: "28px 32px 20px 32px" }}>
            <Row>
              <Column style={{ width: "60%", verticalAlign: "middle" }}>
                <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <div style={{ width: "34px", height: "34px", borderRadius: "10px", backgroundColor: "#ffe4e6", textAlign: "center", lineHeight: "34px", color: "#e11d48", fontSize: "16px" }}>
                          ⚠️
                        </div>
                      </td>
                      <td style={{ verticalAlign: "middle", paddingLeft: "10px" }}>
                        <Text style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", margin: 0, letterSpacing: "-0.3px" }}>
                          Billing Notice
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
              <Column style={{ width: "40%", verticalAlign: "middle", textAlign: "right" }}>
                <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", color: "#be123c", backgroundColor: "#ffe4e6", border: "1px solid #fecdd3", borderRadius: "9999px", padding: "4px 10px" }}>
                  Payment Past Due
                </span>
              </Column>
            </Row>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <Text style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
              Action required: Payment failed
            </Text>
            <Text style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Hi {customerName}, we were unable to process your recurring renewal for <strong>{planName}</strong>.
            </Text>
          </Section>

          {/* Failed Charge Card */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "8px 0" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Plan</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: 0 }}>{planName}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Attempted Amount</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", margin: 0 }}>{amount}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Card on File</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", margin: 0 }}>💳 Visa ending in {cardLast4}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0 0 0", borderTop: "1px solid #edf2f7" }}>
                    <Row>
                      <Column style={{ width: "40%" }}>
                        <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Failure Reason</Text>
                      </Column>
                      <Column style={{ width: "60%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#e11d48", margin: 0 }}>{failureReason}</Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <Button
              href={updateUrl}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#e11d48",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Update Payment Method →
            </Button>
          </Section>

          {/* Grace Period Box */}
          <Section style={{ padding: "0 32px 28px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", padding: "14px 18px" }}>
              <tbody>
                <tr>
                  <td>
                    <Text style={{ fontSize: "12px", color: "#92400e", margin: 0, lineHeight: "1.5" }}>
                      <strong>Grace Period:</strong> We will automatically retry this charge in 3 days. Your service and template delivery will remain uninterrupted until then.
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "18px 32px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
              Reloop Billing Services • Questions? Contact billing@reloop.sh
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
    <title>Payment Failed (Dunning)</title>
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
              style="max-width:560px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(254,205,211);overflow:hidden;text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Top Rose Bar -->
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="height:6px;background-color:rgb(244,63,94)"></td>
                        </tr>
                      </tbody>
                    </table>

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
                          <td style="padding:28px 32px 20px 32px">
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
                                    style="width:60%;vertical-align:middle;text-align:left">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody>
                                        <tr>
                                          <td style="vertical-align:middle">
                                            <span style="display:inline-block;width:34px;height:34px;border-radius:10px;background-color:rgb(255,228,230);color:rgb(225,29,72);font-size:16px;line-height:34px;text-align:center">
                                              ⚠️
                                            </span>
                                          </td>
                                          <td style="vertical-align:middle;padding-left:10px">
                                            <p style="font-size:15px;font-weight:700;color:rgb(15,23,42);margin:0;letter-spacing:-0.3px">
                                              Billing Notice
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:40%;vertical-align:middle;text-align:right">
                                    <span style="display:inline-block;font-size:11px;font-weight:700;color:rgb(190,18,60);background-color:rgb(255,228,230);border:1px solid rgb(254,205,211);border-radius:9999px;padding:4px 10px">
                                      Payment Past Due
                                    </span>
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
                          <td style="padding:0 32px 24px 32px">
                            <h2 style="font-size:24px;font-weight:800;color:rgb(15,23,42);margin:0 0 8px 0;letter-spacing:-0.5px">
                              Action required: Payment failed
                            </h2>
                            <p style="font-size:14px;color:rgb(71,85,105);line-height:1.6;margin:0">
                              Hi Alex, we were unable to process your recurring renewal for <strong>Reloop Pro (Monthly)</strong>.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Failed Breakdown Card -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 24px 32px">
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Plan</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0">Reloop Pro (Monthly)</p>
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Attempted Amount</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:700;color:rgb(15,23,42);margin:0">$79.00 USD</p>
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Card on File</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(15,23,42);margin:0">💳 Visa ending in 4242</p>
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
                                            <p style="font-size:12px;color:rgb(100,116,139);margin:0">Failure Reason</p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:60%;text-align:right">
                                            <p style="font-size:12px;font-weight:600;color:rgb(225,29,72);margin:0">Card expired or declined</p>
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
                          <td style="padding:0 32px 24px 32px">
                            <a
                              href="https://reloop.sh/billing/update"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(225,29,72);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>Update Payment Method →</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Grace Period Warning Box -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 28px 32px">
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(255,251,235);border:1px solid rgb(253,230,138);border-radius:12px;padding:14px 18px">
                              <tbody>
                                <tr>
                                  <td>
                                    <p style="font-size:12px;color:rgb(146,64,14);margin:0;line-height:1.5">
                                      <strong>Grace Period:</strong> We will automatically retry this charge in 3 days. Your service and template delivery will remain uninterrupted until then.
                                    </p>
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
                          <td style="padding:18px 32px;background-color:rgb(248,250,252);border-top:1px solid rgb(226,232,240);text-align:center">
                            <p style="font-size:12px;color:rgb(148,163,184);margin:0">
                              Reloop Billing Services • Questions? Contact billing@reloop.sh
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
  usageCode: `import PaymentFailedEmail from "@/templates/payment-failed";
import { reloop } from "@reloop/sdk";

// Trigger dunning sequence on webhook invoice.payment_failed
await reloop.emails.send({
  from: "billing@reloop.sh",
  to: "finance@company.com",
  subject: "Urgent: Payment failed for Reloop Pro",
  react: <PaymentFailedEmail customerName="Alex" amount="$79.00" />,
});`,
};
