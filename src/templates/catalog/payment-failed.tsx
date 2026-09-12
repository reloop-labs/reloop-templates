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
  badge: "High ROI",
  description: "Urgent dunning notification warning customers of a declined charge, grace period timeline, and a direct 1-click update link.",
  component: PaymentFailedPreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
} from "@react-email/components";

interface PaymentFailedEmailProps {
  customerName?: string;
  amount?: string;
  cardLast4?: string;
  updateUrl?: string;
}

export default function PaymentFailedEmail({
  customerName = "Alex",
  amount = "$79.00",
  cardLast4 = "4242",
  updateUrl = "https://reloop.sh/billing/update",
}: PaymentFailedEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#fdf2f2", fontFamily: "sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", background: "#ffffff", borderRadius: "12px", padding: "32px", border: "1px solid #fecdd3" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#e11d48", margin: "0 0 12px" }}>
            Payment Failed for your Reloop subscription
          </Text>
          <Text style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: "0 0 20px" }}>
            Hi {customerName}, we could not process your recurring charge of <strong>{amount}</strong> using Visa ending in {cardLast4}.
          </Text>
          <Section style={{ background: "#fff1f2", padding: "16px", borderRadius: "8px", margin: "0 0 24px" }}>
            <Text style={{ margin: 0, fontSize: "13px", color: "#9f1239" }}>
              Please update your billing information within 3 days to maintain uninterrupted service.
            </Text>
          </Section>
          <Button href={updateUrl} style={{ background: "#e11d48", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            Update Payment Method
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#fdf2f2;font-family:sans-serif;margin:0;padding:24px;">
  <table align="center" width="560" style="background:#ffffff;border:1px solid #fecdd3;border-radius:12px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h2 style="font-size:20px;color:#e11d48;margin:0 0 12px;">Payment Failed for your Reloop subscription</h2>
        <p style="color:#4b5563;font-size:14px;line-height:1.6;margin:0 0 20px;">We were unable to charge <strong>$79.00</strong> to your card ending in 4242.</p>
        <div style="background:#fff1f2;padding:16px;border-radius:8px;margin-bottom:24px;color:#9f1239;font-size:13px;">
          Please update your payment method to prevent account disruption.
        </div>
        <a href="https://reloop.sh/billing" style="display:block;text-align:center;background:#e11d48;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;">Update Payment Method</a>
      </td>
    </tr>
  </table>
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
