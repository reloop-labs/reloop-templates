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
  description: "The classic e-commerce order confirmation and receipt with delivery tracker, itemized breakdown, and shipping details.",
  component: AmazonInvoicePreview,
  code: `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Row,
  Column,
  Link,
} from "@react-email/components";

export default function AmazonInvoiceEmail({
  customerName = "Alex Morgan",
  orderNumber = "114-8921820-4109823",
  itemName = "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
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
      <Body style={{ backgroundColor: "#f6f6f6", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "20px 0" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb" }}>
          {/* Header */}
          <Section style={{ backgroundColor: "#131921", padding: "16px 24px" }}>
            <Row>
              <Column>
                <Text style={{ color: "#ffffff", fontSize: "22px", fontWeight: "800", margin: 0 }}>
                  amazon<span style={{ color: "#febd69" }}>.com</span>
                </Text>
              </Column>
              <Column align="right">
                <Text style={{ color: "#d5d9d9", fontSize: "12px", fontFamily: "monospace", margin: 0 }}>
                  Order #{orderNumber}
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Delivery Tracker Banner */}
          <Section style={{ backgroundColor: "#f0f2f2", padding: "16px 24px", borderBottom: "1px solid #d5d9d9" }}>
            <Row>
              <Column style={{ width: "44px" }}>
                <div style={{ width: "36px", height: "36px", backgroundColor: "#febd69", borderRadius: "50%", textAlign: "center", lineHeight: "36px", fontSize: "18px" }}>
                  🚚
                </div>
              </Column>
              <Column style={{ paddingLeft: "12px" }}>
                <Text style={{ color: "#007600", fontSize: "14px", fontWeight: "700", margin: 0 }}>
                  Arriving Tomorrow by 8 PM
                </Text>
                <Text style={{ color: "#555555", fontSize: "12px", margin: "2px 0 0 0" }}>
                  Track package &amp; view delivery updates
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={{ padding: "24px" }}>
            <Text style={{ fontSize: "18px", fontWeight: "700", color: "#111111", margin: "0 0 6px 0" }}>
              Hi {customerName},
            </Text>
            <Text style={{ fontSize: "13px", color: "#555555", margin: "0 0 20px 0", lineHeight: "1.5" }}>
              Thank you for your order. We’ll send a confirmation when your items ship.
            </Text>

            {/* Product Card */}
            <Section style={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "16px", backgroundColor: "#ffffff" }}>
              <Row>
                <Column style={{ width: "64px" }}>
                  <div style={{ width: "64px", height: "64px", backgroundColor: "#f7f7f7", borderRadius: "6px", textAlign: "center", lineHeight: "64px", fontSize: "26px" }}>
                    📦
                  </div>
                </Column>
                <Column style={{ paddingLeft: "16px" }}>
                  <Text style={{ fontSize: "13px", fontWeight: "700", color: "#111111", margin: "0 0 4px 0" }}>
                    {itemName}
                  </Text>
                  <Text style={{ fontSize: "12px", color: "#666666", margin: "0 0 8px 0" }}>
                    Color: Black • Quantity: 1
                  </Text>
                  <Text style={{ fontSize: "14px", fontWeight: "700", color: "#111111", margin: 0 }}>
                    {itemPrice}
                  </Text>
                </Column>
              </Row>
              <Hr style={{ borderColor: "#f0f0f0", margin: "14px 0" }} />
              <Row>
                <Column>
                  <Text style={{ fontSize: "12px", color: "#666666", margin: 0 }}>
                    Sold by: Amazon.com Services LLC
                  </Text>
                </Column>
                <Column align="right">
                  <Link href="#" style={{ color: "#007185", fontSize: "12px", fontWeight: "600", textDecoration: "none" }}>
                    View or manage order &rarr;
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* 2-Column: Shipping Address & Order Summary */}
            <Section style={{ marginTop: "20px" }}>
              <Row>
                <Column style={{ width: "48%", backgroundColor: "#fafafa", border: "1px solid #eaeaea", borderRadius: "8px", padding: "14px", verticalAlign: "top" }}>
                  <Text style={{ fontSize: "12px", fontWeight: "700", color: "#111111", margin: "0 0 6px 0" }}>
                    Shipping Address
                  </Text>
                  <Text style={{ fontSize: "12px", color: "#555555", lineHeight: "1.6", margin: 0 }}>
                    Alex Morgan<br />
                    452 Market Street, Suite 400<br />
                    San Francisco, CA 94105
                  </Text>
                </Column>
                <Column style={{ width: "4%" }} />
                <Column style={{ width: "48%", backgroundColor: "#fafafa", border: "1px solid #eaeaea", borderRadius: "8px", padding: "14px", verticalAlign: "top" }}>
                  <Text style={{ fontSize: "12px", fontWeight: "700", color: "#111111", margin: "0 0 8px 0" }}>
                    Order Summary
                  </Text>
                  <Row style={{ fontSize: "12px", color: "#555555", lineHeight: "1.8" }}>
                    <Column><Text style={{ margin: 0 }}>Item Subtotal:</Text></Column>
                    <Column align="right"><Text style={{ margin: 0, color: "#111111" }}>{itemPrice}</Text></Column>
                  </Row>
                  <Row style={{ fontSize: "12px", color: "#555555", lineHeight: "1.8" }}>
                    <Column><Text style={{ margin: 0 }}>Shipping &amp; Handling:</Text></Column>
                    <Column align="right"><Text style={{ margin: 0, color: "#007600", fontWeight: "600" }}>FREE</Text></Column>
                  </Row>
                  <Row style={{ fontSize: "12px", color: "#555555", lineHeight: "1.8" }}>
                    <Column><Text style={{ margin: 0 }}>Estimated Tax:</Text></Column>
                    <Column align="right"><Text style={{ margin: 0, color: "#111111" }}>$29.58</Text></Column>
                  </Row>
                  <Hr style={{ borderColor: "#e0e0e0", margin: "6px 0" }} />
                  <Row>
                    <Column><Text style={{ fontSize: "13px", fontWeight: "700", color: "#111111", margin: 0 }}>Order Total:</Text></Column>
                    <Column align="right"><Text style={{ fontSize: "14px", fontWeight: "700", color: "#111111", margin: 0 }}>{orderTotal}</Text></Column>
                  </Row>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#f0f2f2", padding: "20px 24px", borderTop: "1px solid #e0e0e0", textAlign: "center" }}>
            <Text style={{ fontSize: "11px", color: "#777777", margin: "0 0 4px 0" }}>
              Need help with your order? Visit the Customer Service portal.
            </Text>
            <Text style={{ fontSize: "10px", color: "#999999", margin: 0 }}>
              &copy; 2026 Amazon.com, Inc. or its affiliates. All rights reserved.
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
    <title>Amazon Order Confirmation</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(243,244,246);margin:0;padding:20px 0;">
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
            style="background-color:rgb(243,244,246);margin:0rem;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Container Table (max-width: 600px) -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:600px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:12px;overflow:hidden;border:1px solid rgb(229,231,235);text-align:left">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <!-- Section 1: Header (Amazon logo + Order Number) -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="background-color:rgb(19,25,33)">
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
                                    <p style="font-size:22px;font-weight:800;letter-spacing:-0.5px;color:rgb(255,255,255);margin:0">
                                      amazon<span style="color:rgb(254,189,105);font-size:14px;font-weight:700">.com</span>
                                    </p>
                                  </td>
                                  <td
                                    align="right"
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:middle;text-align:right">
                                    <p style="font-size:12px;color:rgb(213,217,217);font-family:monospace;margin:0">
                                      Order #114-8921820-4109823
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Section 2: Delivery Status Banner -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="background-color:rgb(240,242,242);border-bottom:1px solid rgb(213,217,217)">
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
                                    style="width:40px;vertical-align:middle">
                                    <div style="width:36px;height:36px;background-color:rgb(254,189,105);border-radius:50%;text-align:center;line-height:36px;font-size:18px">
                                      🚚
                                    </div>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="padding-left:12px;vertical-align:middle;text-align:left">
                                    <p style="font-size:14px;font-weight:700;color:rgb(0,118,0);margin:0;line-height:1.2">
                                      Arriving Tomorrow by 8 PM
                                    </p>
                                    <p style="font-size:12px;color:rgb(85,85,85);margin:2px 0 0 0;line-height:1.4">
                                      Track package &amp; view delivery updates
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Section 3: Greeting and Main Order Details -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="background-color:rgb(255,255,255)">
                      <tbody>
                        <tr>
                          <td style="padding:24px;text-align:left">
                            <h2 style="font-size:18px;font-weight:700;color:rgb(17,17,17);margin:0 0 6px 0">
                              Hi Alex,
                            </h2>
                            <p style="font-size:13px;color:rgb(85,85,85);line-height:1.5;margin:0 0 20px 0">
                              Thank you for your order. We’ll send a confirmation when your items ship.
                            </p>

                            <!-- Product Box -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border:1px solid rgb(224,224,224);border-radius:8px;background-color:rgb(255,255,255);margin-bottom:20px">
                              <tbody>
                                <tr>
                                  <td style="padding:16px">
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
                                            style="width:64px;vertical-align:top">
                                            <div style="width:64px;height:64px;background-color:rgb(247,247,247);border-radius:6px;border:1px solid rgb(238,238,238);text-align:center;line-height:64px;font-size:26px">
                                              📦
                                            </div>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="padding-left:16px;vertical-align:top;text-align:left">
                                            <p style="font-size:13px;font-weight:700;color:rgb(17,17,17);line-height:1.4;margin:0 0 4px 0">
                                              Sony WH-1000XM5 Wireless Noise-Canceling Headphones
                                            </p>
                                            <p style="font-size:12px;color:rgb(102,102,102);margin:0 0 8px 0">
                                              Color: Black • Quantity: 1
                                            </p>
                                            <p style="font-size:14px;font-weight:700;color:rgb(17,17,17);margin:0">
                                              $348.00
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <hr style="border:none;border-top:1px solid rgb(240,240,240);margin:14px 0" />
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
                                            style="font-size:12px;color:rgb(102,102,102);text-align:left">
                                            Sold by: Amazon.com Services LLC
                                          </td>
                                          <td
                                            align="right"
                                            data-id="__react-email-column"
                                            style="text-align:right">
                                            <a
                                              href="https://amazon.com"
                                              target="_blank"
                                              style="color:rgb(0,113,133);font-size:12px;font-weight:600;text-decoration:none">
                                              View or manage order &rarr;
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- Two Columns: Shipping Address & Order Summary -->
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
                                    style="width:48%;background-color:rgb(250,250,250);border:1px solid rgb(234,234,234);border-radius:8px;padding:14px;vertical-align:top;text-align:left">
                                    <p style="font-size:12px;font-weight:700;color:rgb(17,17,17);margin:0 0 6px 0">
                                      Shipping Address
                                    </p>
                                    <p style="font-size:12px;color:rgb(85,85,85);line-height:1.6;margin:0">
                                      Alex Morgan<br />
                                      452 Market Street, Suite 400<br />
                                      San Francisco, CA 94105
                                    </p>
                                  </td>
                                  <td style="width:4%"></td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:48%;background-color:rgb(250,250,250);border:1px solid rgb(234,234,234);border-radius:8px;padding:14px;vertical-align:top;text-align:left">
                                    <p style="font-size:12px;font-weight:700;color:rgb(17,17,17);margin:0 0 8px 0">
                                      Order Summary
                                    </p>
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="font-size:12px;color:rgb(85,85,85);line-height:1.8">
                                      <tbody>
                                        <tr>
                                          <td style="text-align:left">Item Subtotal:</td>
                                          <td align="right" style="color:rgb(17,17,17);text-align:right">$348.00</td>
                                        </tr>
                                        <tr>
                                          <td style="text-align:left">Shipping &amp; Handling:</td>
                                          <td align="right" style="color:rgb(0,118,0);font-weight:600;text-align:right">FREE</td>
                                        </tr>
                                        <tr>
                                          <td style="text-align:left">Estimated Tax:</td>
                                          <td align="right" style="color:rgb(17,17,17);text-align:right">$29.58</td>
                                        </tr>
                                        <tr>
                                          <td colspan="2" style="border-top:1px solid rgb(224,224,224);padding-top:6px;margin-top:6px">
                                            <table
                                              align="center"
                                              width="100%"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation">
                                              <tbody>
                                                <tr>
                                                  <td style="font-size:13px;font-weight:700;color:rgb(17,17,17);text-align:left">
                                                    Order Total:
                                                  </td>
                                                  <td align="right" style="font-size:14px;font-weight:700;color:rgb(17,17,17);text-align:right">
                                                    $377.58
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

                    <!-- Section 4: Footer -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="background-color:rgb(240,242,242);border-top:1px solid rgb(224,224,224)">
                      <tbody>
                        <tr>
                          <td style="padding:20px 24px;text-align:center">
                            <p style="font-size:11px;color:rgb(119,119,119);line-height:1.5;margin:0 0 4px 0">
                              Need help with your order? Visit the Customer Service portal.
                            </p>
                            <p style="font-size:10px;color:rgb(153,153,153);line-height:1.5;margin:0">
                              &copy; 2026 Amazon.com, Inc. or its affiliates. All rights reserved.
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
  plainText: `amazon.com

Order #114-8921820-4109823

🚚

Arriving Tomorrow by 8 PM

Track package & view delivery updates


HI ALEX,

Thank you for your order. We’ll send a confirmation when your items ship.

📦

Sony WH-1000XM5 Wireless Noise-Canceling Headphones

Color: Black • Quantity: 1

\$348.00

----------------------------------------

Sold by: Amazon.com Services LLC View or manage order → https://amazon.com

Shipping Address

Alex Morgan
452 Market Street, Suite 400
San Francisco, CA 94105

Order Summary

Item Subtotal: \$348.00 Shipping & Handling: FREE Estimated Tax: \$29.58

Order Total: \$377.58

Need help with your order? Visit the Customer Service portal.

© 2026 Amazon.com, Inc. or its affiliates. All rights reserved.`,
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
