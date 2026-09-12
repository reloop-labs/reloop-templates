import React from "react";
import { Download, CheckCircle2, CreditCard } from "lucide-react";
import { EmailTemplate } from "../types";

export function StripeReceiptPreview() {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0c0d12] dark:border-zinc-800 dark:text-zinc-100">
      {/* Stripe Brand Accent Header */}
      <div className="h-2 w-full bg-[#635bff]" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Top Meta */}
        <div className="flex justify-between items-center pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="w-7 h-7 rounded-lg bg-[#635bff] text-white flex items-center justify-center text-xs font-black">
              S
            </div>
            <span>Acme Corp</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">Invoice #INV-2026-089</span>
        </div>

        {/* Amount & Status */}
        <div className="space-y-1">
          <div className="text-xs font-medium text-zinc-500">Amount paid</div>
          <div className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">$120.00</div>
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium pt-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Paid on Sep 12, 2026</span>
          </div>
        </div>

        {/* Summary Table */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-100 dark:divide-zinc-800 text-xs">
          <div className="p-3.5 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/30 font-medium">
            <span>Description</span>
            <span>Qty / Amount</span>
          </div>
          <div className="p-3.5 flex justify-between items-center">
            <div>
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">Pro Plan (Monthly)</div>
              <div className="text-[11px] text-zinc-500">Sep 12, 2026 – Oct 12, 2026</div>
            </div>
            <span className="font-medium">$100.00</span>
          </div>
          <div className="p-3.5 flex justify-between items-center">
            <div>
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">Additional Seats (2x)</div>
              <div className="text-[11px] text-zinc-500">$10/seat per month</div>
            </div>
            <span className="font-medium">$20.00</span>
          </div>
          <div className="p-3.5 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/30">
            <span className="text-zinc-500">Subtotal</span>
            <span>$120.00</span>
          </div>
          <div className="p-3.5 flex justify-between items-center font-bold text-sm bg-zinc-50 dark:bg-zinc-900/60">
            <span>Total Paid</span>
            <span>$120.00</span>
          </div>
        </div>

        {/* Payment Method Card */}
        <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <CreditCard className="w-4 h-4 text-zinc-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Mastercard ending in 4242</span>
          </div>
          <span className="text-zinc-500 font-mono text-[11px]">Exp 12/28</span>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#635bff] hover:bg-[#5349e0] text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Invoice PDF</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-50 dark:bg-[#101218] p-6 border-t border-zinc-100 dark:border-zinc-800 text-center text-[11px] text-zinc-500 space-y-1">
        <p>Receipt sent to billing@acmecorp.com via Stripe</p>
        <p className="text-[10px] text-zinc-400">Questions? Reply to this email or visit our Help Center.</p>
      </div>
    </div>
  );
}

export const stripeReceiptTemplate: EmailTemplate = {
  id: "stripe-receipt",
  title: "Stripe Payment Receipt",
  category: "Brands & Recreations",
  description: "Itemized SaaS subscription invoice with payment method badge, billing breakdown, and downloadable PDF receipt link.",
  component: StripeReceiptPreview,
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
  Hr,
} from "@react-email/components";

export default function StripeReceiptEmail({
  amount = "$120.00",
  invoiceNumber = "INV-2026-089",
  customerEmail = "billing@acmecorp.com",
}: {
  amount?: string;
  invoiceNumber?: string;
  customerEmail?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f4f6f8", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "24px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
          {/* Top Violet Bar */}
          <Section style={{ height: "6px", backgroundColor: "#635bff" }} />

          <Section style={{ padding: "32px" }}>
            {/* Header: Company & Invoice Number */}
            <Row style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "16px" }}>
              <Column>
                <Text style={{ fontSize: "16px", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                  Acme Corp
                </Text>
              </Column>
              <Column align="right">
                <Text style={{ fontSize: "12px", color: "#64748b", fontFamily: "monospace", margin: 0 }}>
                  Invoice #{invoiceNumber}
                </Text>
              </Column>
            </Row>

            {/* Amount Paid & Status */}
            <Section style={{ marginTop: "24px", marginBottom: "24px" }}>
              <Text style={{ fontSize: "12px", fontWeight: "500", color: "#64748b", margin: 0 }}>
                Amount paid
              </Text>
              <Text style={{ fontSize: "32px", fontWeight: "800", color: "#1e293b", margin: "4px 0 8px 0" }}>
                {amount}
              </Text>
              <Text style={{ fontSize: "13px", fontWeight: "600", color: "#16a34a", margin: 0 }}>
                ✓ Paid on Sep 12, 2026
              </Text>
            </Section>

            {/* Line Items Table */}
            <Section style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", marginBottom: "20px" }}>
              <Row style={{ backgroundColor: "#f8fafc", padding: "12px 16px", borderBottom: "1px solid #e2e8f0" }}>
                <Column><Text style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", margin: 0 }}>Description</Text></Column>
                <Column align="right"><Text style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", margin: 0 }}>Amount</Text></Column>
              </Row>
              <Row style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9" }}>
                <Column>
                  <Text style={{ fontSize: "13px", fontWeight: "600", color: "#1e293b", margin: 0 }}>Pro Plan (Monthly)</Text>
                  <Text style={{ fontSize: "11px", color: "#64748b", margin: "2px 0 0 0" }}>Sep 12, 2026 – Oct 12, 2026</Text>
                </Column>
                <Column align="right"><Text style={{ fontSize: "13px", fontWeight: "600", color: "#1e293b", margin: 0 }}>$100.00</Text></Column>
              </Row>
              <Row style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9" }}>
                <Column>
                  <Text style={{ fontSize: "13px", fontWeight: "600", color: "#1e293b", margin: 0 }}>Additional Seats (2x)</Text>
                  <Text style={{ fontSize: "11px", color: "#64748b", margin: "2px 0 0 0" }}>$10/seat per month</Text>
                </Column>
                <Column align="right"><Text style={{ fontSize: "13px", fontWeight: "600", color: "#1e293b", margin: 0 }}>$20.00</Text></Column>
              </Row>
              <Row style={{ backgroundColor: "#f8fafc", padding: "12px 16px" }}>
                <Column><Text style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: 0 }}>Total Paid</Text></Column>
                <Column align="right"><Text style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: 0 }}>{amount}</Text></Column>
              </Row>
            </Section>

            {/* Payment Method Card */}
            <Section style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "12px 16px", marginBottom: "24px" }}>
              <Row>
                <Column><Text style={{ fontSize: "12px", color: "#475569", margin: 0 }}>💳 Mastercard ending in 4242</Text></Column>
                <Column align="right"><Text style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace", margin: 0 }}>Exp 12/28</Text></Column>
              </Row>
            </Section>

            {/* Download Button */}
            <Section style={{ textAlign: "center" }}>
              <Button
                href="https://reloop.sh/invoice"
                style={{ backgroundColor: "#635bff", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "600", fontSize: "13px", textDecoration: "none", display: "inline-block" }}
              >
                Download Invoice PDF
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#f8fafc", padding: "20px 24px", borderTop: "1px solid #f1f5f9", textAlign: "center" }}>
            <Text style={{ fontSize: "11px", color: "#64748b", margin: "0 0 4px 0" }}>
              Receipt sent to {customerEmail} via Stripe
            </Text>
            <Text style={{ fontSize: "10px", color: "#94a3b8", margin: 0 }}>
              Questions? Reply to this email or visit our Help Center.
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
    <title>Stripe Receipt</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(244,246,248);margin:0;padding:24px 0;">
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
            style="background-color:rgb(244,246,248);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Card Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:560px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:12px;border:1px solid rgb(226,232,240);overflow:hidden;text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Violet Accent Bar -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="height:6px;background-color:rgb(99,91,255)"></td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Header Meta -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:24px 32px 16px 32px;border-bottom:1px solid rgb(241,245,249)">
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
                                    <p style="font-size:16px;font-weight:700;color:rgb(30,41,59);margin:0">
                                      Acme Corp
                                    </p>
                                  </td>
                                  <td
                                    align="right"
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:middle;text-align:right">
                                    <p style="font-size:12px;color:rgb(100,116,139);font-family:monospace;margin:0">
                                      Invoice #INV-2026-089
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Amount Paid -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:24px 32px;text-align:left">
                            <p style="font-size:12px;font-weight:500;color:rgb(100,116,139);margin:0">
                              Amount paid
                            </p>
                            <p style="font-size:32px;font-weight:800;color:rgb(30,41,59);margin:4px 0 8px 0">
                              $120.00
                            </p>
                            <p style="font-size:13px;font-weight:600;color:rgb(22,163,74);margin:0">
                              ✓ Paid on Sep 12, 2026
                            </p>

                            <!-- Line Items Table -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border:1px solid rgb(226,232,240);border-radius:8px;overflow:hidden;margin-top:24px;margin-bottom:20px">
                              <tbody>
                                <tr>
                                  <td style="background-color:rgb(248,250,252);padding:12px 16px;border-bottom:1px solid rgb(226,232,240)">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="font-size:11px;font-weight:600;color:rgb(100,116,139);text-align:left">Description</td>
                                          <td align="right" data-id="__react-email-column" style="font-size:11px;font-weight:600;color:rgb(100,116,139);text-align:right">Qty / Amount</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:12px 16px;border-bottom:1px solid rgb(241,245,249)">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="text-align:left">
                                            <p style="font-size:13px;font-weight:600;color:rgb(30,41,59);margin:0">Pro Plan (Monthly)</p>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:2px 0 0 0">Sep 12, 2026 – Oct 12, 2026</p>
                                          </td>
                                          <td align="right" data-id="__react-email-column" style="font-size:13px;font-weight:600;color:rgb(30,41,59);text-align:right">$100.00</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:12px 16px;border-bottom:1px solid rgb(241,245,249)">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="text-align:left">
                                            <p style="font-size:13px;font-weight:600;color:rgb(30,41,59);margin:0">Additional Seats (2x)</p>
                                            <p style="font-size:11px;color:rgb(100,116,139);margin:2px 0 0 0">$10/seat per month</p>
                                          </td>
                                          <td align="right" data-id="__react-email-column" style="font-size:13px;font-weight:600;color:rgb(30,41,59);text-align:right">$20.00</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="background-color:rgb(248,250,252);padding:12px 16px">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="font-size:14px;font-weight:700;color:rgb(30,41,59);text-align:left">Total Paid</td>
                                          <td align="right" data-id="__react-email-column" style="font-size:14px;font-weight:700;color:rgb(30,41,59);text-align:right">$120.00</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- Payment Method Card -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(248,250,252);border:1px solid rgb(226,232,240);border-radius:8px;margin-bottom:24px">
                              <tbody>
                                <tr>
                                  <td style="padding:12px 16px">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="font-size:12px;color:rgb(71,85,105);text-align:left">
                                            💳 Mastercard ending in 4242
                                          </td>
                                          <td align="right" data-id="__react-email-column" style="font-size:11px;color:rgb(100,116,139);font-family:monospace;text-align:right">
                                            Exp 12/28
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- Download Button -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation">
                              <tbody>
                                <tr>
                                  <td align="center" style="text-align:center">
                                    <a
                                      href="https://reloop.sh/invoice"
                                      target="_blank"
                                      style="background-color:rgb(99,91,255);color:rgb(255,255,255);padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;display:inline-block">
                                      Download Invoice PDF
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
                      style="background-color:rgb(248,250,252);border-top:1px solid rgb(241,245,249)">
                      <tbody>
                        <tr>
                          <td style="padding:20px 24px;text-align:center">
                            <p style="font-size:11px;color:rgb(100,116,139);line-height:1.5;margin:0 0 4px 0">
                              Receipt sent to billing@acmecorp.com via Stripe
                            </p>
                            <p style="font-size:10px;color:rgb(148,163,184);line-height:1.5;margin:0">
                              Questions? Reply to this email or visit our Help Center.
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
  usageCode: `import StripeReceiptEmail from "@/templates/stripe-receipt";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "billing@acmecorp.com",
  to: "finance@customer.com",
  subject: "Receipt for Invoice #INV-2026-089",
  react: <StripeReceiptEmail amount="$120.00" />,
});`,
};
