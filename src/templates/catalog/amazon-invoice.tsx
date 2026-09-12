import React from "react";
import { Package, Truck, ArrowRight, ExternalLink } from "lucide-react";
import { EmailTemplate } from "../types";

export function AmazonInvoicePreview() {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#0f1117] dark:border-zinc-800 dark:text-zinc-100">
      {/* Header */}
      <div className="bg-[#131921] px-6 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-xl tracking-tight text-white">amazon</span>
          <span className="text-[#febd69] font-medium text-xs">.com</span>
        </div>
        <span className="text-xs text-zinc-300 font-mono">Order #114-8921820-4109823</span>
      </div>

      {/* Delivery Status Banner */}
      <div className="bg-[#f0f2f2] dark:bg-[#1a1f2c] px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#febd69] flex items-center justify-center text-zinc-900 shrink-0">
          <Truck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-[#007600] dark:text-emerald-400">Arriving Tomorrow by 8 PM</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">Track package &amp; view delivery updates</div>
        </div>
      </div>

      {/* Main Order Info */}
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Hi Alex,</h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            Thank you for your order. We’ll send a confirmation when your items ship.
          </p>
        </div>

        {/* Item Details Card */}
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 space-y-4">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
              <Package className="w-8 h-8 text-zinc-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                Sony WH-1000XM5 Wireless Noise-Canceling Headphones
              </h4>
              <div className="text-[11px] text-zinc-500 mt-0.5">Color: Black • Quantity: 1</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mt-2">$348.00</div>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-xs">
            <span className="text-zinc-500">Sold by: Amazon.com Services LLC</span>
            <a href="#" className="text-[#007185] dark:text-sky-400 font-medium hover:underline flex items-center gap-1">
              <span>View or manage order</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Order Summary & Shipping Address Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          {/* Shipping Address */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-3.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
            <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Shipping Address</div>
            <div className="text-zinc-600 dark:text-zinc-400">Alex Morgan</div>
            <div className="text-zinc-600 dark:text-zinc-400">452 Market Street, Suite 400</div>
            <div className="text-zinc-600 dark:text-zinc-400">San Francisco, CA 94105</div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-3.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
            <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Order Summary</div>
            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
              <span>Item Subtotal:</span>
              <span>$348.00</span>
            </div>
            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
              <span>Shipping &amp; Handling:</span>
              <span className="text-[#007600] dark:text-emerald-400 font-medium">FREE</span>
            </div>
            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
              <span>Estimated Tax:</span>
              <span>$29.58</span>
            </div>
            <div className="pt-1.5 border-t border-zinc-200 dark:border-zinc-700 flex justify-between font-bold text-zinc-900 dark:text-zinc-100 text-sm">
              <span>Order Total:</span>
              <span>$377.58</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#f0f2f2] dark:bg-[#131921] px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-[11px] text-zinc-500 space-y-2">
        <p>Need help with your order? Visit the Customer Service portal.</p>
        <p className="text-[10px] text-zinc-400">© 2026 Amazon.com, Inc. or its affiliates. All rights reserved.</p>
      </div>
    </div>
  );
}

export const amazonInvoiceTemplate: EmailTemplate = {
  id: "amazon-invoice",
  title: "Amazon Order Invoice",
  category: "Brands & Recreations",
  badge: "Popular",
  description: "The classic e-commerce order confirmation and receipt with delivery tracker, itemized breakdown, and shipping details.",
  component: AmazonInvoicePreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
  Link,
} from "@react-email/components";

export default function AmazonInvoiceEmail({
  customerName = "Alex Morgan",
  orderNumber = "114-8921820-4109823",
  itemName = "Sony WH-1000XM5 Wireless Headphones",
  itemPrice = "$348.00",
  orderTotal = "$377.58",
}: {
  customerName?: string;
  orderNumber?: string;
  itemName?: string;
  itemPrice?: string;
  orderTotal?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f6f6f6", fontFamily: "sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "20px auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "1px solid #e0e0e0" }}>
          {/* Amazon Header */}
          <Section style={{ backgroundColor: "#131921", padding: "16px 24px" }}>
            <Row>
              <Column>
                <Text style={{ color: "#ffffff", fontSize: "22px", fontWeight: "bold", margin: 0 }}>
                  amazon<span style={{ color: "#febd69" }}>.com</span>
                </Text>
              </Column>
              <Column align="right">
                <Text style={{ color: "#d5d9d9", fontSize: "12px", margin: 0 }}>
                  Order #{orderNumber}
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Delivery Tracker */}
          <Section style={{ backgroundColor: "#f0f2f2", padding: "14px 24px", borderBottom: "1px solid #d5d9d9" }}>
            <Text style={{ color: "#007600", fontSize: "14px", fontWeight: "bold", margin: 0 }}>
              ✓ Arriving Tomorrow by 8 PM
            </Text>
          </Section>

          {/* Body Content */}
          <Section style={{ padding: "24px" }}>
            <Heading style={{ fontSize: "18px", margin: "0 0 8px 0" }}>Hi {customerName},</Heading>
            <Text style={{ color: "#555", fontSize: "14px", margin: "0 0 20px 0" }}>
              Thank you for your order. We will notify you when your items are on the way.
            </Text>

            {/* Line Item */}
            <Section style={{ border: "1px solid #e0e0e0", borderRadius: "6px", padding: "16px" }}>
              <Text style={{ fontWeight: "bold", fontSize: "14px", margin: "0 0 4px 0" }}>{itemName}</Text>
              <Text style={{ color: "#888", fontSize: "12px", margin: "0 0 8px 0" }}>Qty: 1</Text>
              <Text style={{ fontWeight: "bold", fontSize: "14px", margin: 0 }}>{itemPrice}</Text>
            </Section>

            {/* Summary */}
            <Section style={{ marginTop: "24px", padding: "16px", backgroundColor: "#fafafa", borderRadius: "6px" }}>
              <Row>
                <Column><Text style={{ margin: 0, fontWeight: "bold" }}>Total Before Tax:</Text></Column>
                <Column align="right"><Text style={{ margin: 0 }}>{itemPrice}</Text></Column>
              </Row>
              <Row>
                <Column><Text style={{ margin: "8px 0", fontWeight: "bold", fontSize: "16px" }}>Order Total:</Text></Column>
                <Column align="right"><Text style={{ margin: "8px 0", fontWeight: "bold", fontSize: "16px" }}>{orderTotal}</Text></Column>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Amazon Order Confirmation</title></head>
<body style="background:#f6f6f6;font-family:sans-serif;margin:0;padding:20px;">
  <table align="center" width="600" style="background:#ffffff;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;" cellpadding="0" cellspacing="0">
    <tr style="background:#131921;color:#fff;">
      <td style="padding:16px 24px;"><strong>amazon</strong><span style="color:#febd69">.com</span></td>
      <td align="right" style="padding:16px 24px;font-size:12px;color:#ccc;">Order #114-8921820-4109823</td>
    </tr>
    <tr style="background:#f0f2f2;border-bottom:1px solid #d5d9d9;">
      <td colspan="2" style="padding:12px 24px;color:#007600;font-weight:bold;font-size:14px;">✓ Arriving Tomorrow by 8 PM</td>
    </tr>
    <tr>
      <td colspan="2" style="padding:24px;">
        <h2 style="margin:0 0 10px;">Hi Alex,</h2>
        <p style="color:#555;font-size:14px;">Thank you for your order.</p>
        <table width="100%" style="border:1px solid #e0e0e0;border-radius:6px;padding:16px;margin:20px 0;">
          <tr>
            <td><strong>Sony WH-1000XM5 Headphones</strong><br><span style="color:#888;font-size:12px;">Qty: 1</span></td>
            <td align="right"><strong>$348.00</strong></td>
          </tr>
        </table>
        <table width="100%" style="background:#fcfcfc;padding:12px;border-radius:6px;">
          <tr><td>Order Total:</td><td align="right"><strong>$377.58</strong></td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  usageCode: `import AmazonInvoiceEmail from "@/templates/amazon-invoice";
import { reloop } from "@reloop/sdk";

// Send Amazon-style order receipt
await reloop.emails.send({
  from: "orders@yourstore.com",
  to: "alex@example.com",
  subject: "Your Amazon.com order of Sony WH-1000XM5",
  react: <AmazonInvoiceEmail customerName="Alex Morgan" orderTotal="$377.58" />,
});`,
};
