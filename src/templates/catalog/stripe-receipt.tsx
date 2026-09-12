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
  badge: "Popular",
  description: "The gold-standard SaaS invoice with violet/slate accents, itemized seat breakdown, card info, and PDF download button.",
  component: StripeReceiptPreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Row,
  Column,
} from "@react-email/components";

export default function StripeReceiptEmail({
  amount = "$120.00",
  invoiceNumber = "INV-2026-089",
  cardLast4 = "4242",
}: {
  amount?: string;
  invoiceNumber?: string;
  cardLast4?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f4f6f8", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "30px auto", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <Section style={{ height: "6px", backgroundColor: "#635bff" }} />
          
          <Section style={{ padding: "32px" }}>
            <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Invoice #{invoiceNumber}</Text>
            <Heading style={{ fontSize: "28px", fontWeight: "800", color: "#1e293b", margin: "8px 0" }}>{amount}</Heading>
            <Text style={{ fontSize: "14px", color: "#16a34a", fontWeight: "600", margin: "0 0 24px 0" }}>✓ Paid on Sep 12, 2026</Text>

            <Section style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "16px", marginBottom: "24px" }}>
              <Row>
                <Column><Text style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>Pro Plan (Monthly)</Text></Column>
                <Column align="right"><Text style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>$100.00</Text></Column>
              </Row>
              <Row style={{ marginTop: "12px" }}>
                <Column><Text style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>Additional Seats (2x)</Text></Column>
                <Column align="right"><Text style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>$20.00</Text></Column>
              </Row>
            </Section>

            <Button href="https://reloop.sh/invoice" style={{ backgroundColor: "#635bff", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
              Download Invoice PDF
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Stripe Receipt</title></head>
<body style="background:#f4f6f8;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="560" style="background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;" cellpadding="0" cellspacing="0">
    <tr><td style="height:6px;background:#635bff;"></td></tr>
    <tr>
      <td style="padding:32px;">
        <span style="font-size:12px;color:#64748b;">Invoice #INV-2026-089</span>
        <h1 style="font-size:32px;margin:8px 0;color:#1e293b;">$120.00</h1>
        <p style="color:#16a34a;font-weight:600;margin:0 0 24px;">✓ Paid on Sep 12, 2026</p>
        <table width="100%" style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin-bottom:24px;">
          <tr><td><strong>Pro Plan (Monthly)</strong></td><td align="right"><strong>$100.00</strong></td></tr>
          <tr><td><strong>Additional Seats (2x)</strong></td><td align="right"><strong>$20.00</strong></td></tr>
        </table>
        <a href="#" style="background:#635bff;color:#fff;padding:12px 24px;border-radius:8px;font-weight:600;text-decoration:none;display:inline-block;">Download Invoice PDF</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import StripeReceiptEmail from "@/templates/stripe-receipt";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "billing@acmecorp.com",
  to: "finance@customer.com",
  subject: "Receipt for Invoice #INV-2026-089",
  react: <StripeReceiptEmail amount="$120.00" cardLast4="4242" />,
});`,
};
