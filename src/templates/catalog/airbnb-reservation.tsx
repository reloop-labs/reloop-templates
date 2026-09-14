import React from "react";
import { Calendar, MapPin, KeyRound, Star, ChevronRight, User } from "lucide-react";
import { EmailTemplate } from "../types";

export function AirbnbReservationPreview() {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl text-zinc-900 font-sans dark:bg-[#121214] dark:border-zinc-800 dark:text-zinc-100">
      {/* Brand Header */}
      <div className="p-6 sm:p-8 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 fill-[#FF385C]" viewBox="0 0 32 32">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 4.144 8.784 5.37 13.064 1.305 4.549.92 8.423-1.077 10.973C23.774 31.626 20.34 32 16 32c-4.34 0-7.774-.374-9.577-2.669-1.997-2.55-2.382-6.424-1.077-10.973 1.226-4.28 3.416-9.234 5.37-13.064l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.42 0-2.483.712-3.567 2.651l-.547 1.052c-1.895 3.715-4.053 8.599-5.244 12.757-1.127 3.931-.767 7.085.877 8.934C9.07 30.134 12.012 30 16 30s6.93.134 8.481-1.606c1.644-1.849 2.004-5.003.877-8.934-1.191-4.158-3.349-9.042-5.244-12.757l-.547-1.052C18.483 3.712 17.42 3 16 3zm0 9c3.314 0 6 2.686 6 6 0 2.222-1.22 4.148-3.033 5.167L18.4 22.8A3.993 3.993 0 0 0 20 18c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.916 1.353 3.515 3.167 3.896l-.567.967C12.78 21.852 12 19.922 12 18c0-3.314 2.686-6 6-6z" />
          </svg>
          <span className="font-bold text-lg tracking-tight text-[#FF385C]">airbnb</span>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-[#FF385C] dark:bg-rose-950/40 dark:text-rose-400">
          Reservation Confirmed
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            You&apos;re going to Oslo!
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Reservation code: <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">HM892K9</span>
          </p>
        </div>

        {/* Listing Banner Card */}
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="h-40 bg-gradient-to-tr from-amber-700 via-rose-600 to-indigo-800 relative flex items-end p-4 text-white">
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative z-10">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-black/40 backdrop-blur-md uppercase tracking-wider">Entire loft</span>
              <h3 className="text-base font-bold mt-1 text-white">Modern Scandinavian Penthouse with Fjord View</h3>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1 text-zinc-900 dark:text-zinc-200 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              4.98 (124 reviews)
            </span>
            <span>Oslo Sentrum, Norway</span>
          </div>
        </div>

        {/* Dates & Smart Lock Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-500 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Check-in</span>
            </div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">Thu, Oct 15, 2026</div>
            <div className="text-zinc-500">After 3:00 PM</div>
          </div>
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-500 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Checkout</span>
            </div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">Mon, Oct 19, 2026</div>
            <div className="text-zinc-500">11:00 AM</div>
          </div>
        </div>

        {/* Smart Lock Keycode Card */}
        <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900 border border-rose-200 dark:border-rose-900 flex items-center justify-center text-[#FF385C]">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-900 dark:text-white">Keyless Self Check-in</div>
              <div className="text-xs text-zinc-500">Smart Lock keypad entry code</div>
            </div>
          </div>
          <div className="font-mono text-sm font-bold tracking-widest px-3 py-1 rounded-md bg-white dark:bg-zinc-900 border border-rose-200 dark:border-rose-900 text-[#FF385C]">
            *4920#
          </div>
        </div>

        {/* Action Button */}
        <a
          href="#"
          className="block w-full text-center py-3 rounded-xl bg-[#FF385C] hover:bg-[#e0314f] text-white font-semibold text-sm transition-colors shadow-sm"
        >
          View Itinerary &amp; Host Guide
        </a>
      </div>
    </div>
  );
}

export const airbnbReservationTemplate: EmailTemplate = {
  id: "airbnb-reservation",
  title: "Airbnb Booking Itinerary",
  category: "Brands & Recreations",
  description: "Airbnb reservation confirmation with destination hero, check-in timestamps, smart lock code, and itinerary CTA.",
  component: AirbnbReservationPreview,
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

interface AirbnbReservationEmailProps {
  guestName?: string;
  destination?: string;
  reservationCode?: string;
  listingTitle?: string;
  checkInDate?: string;
  checkInTime?: string;
  checkoutDate?: string;
  checkoutTime?: string;
  keylessCode?: string;
  location?: string;
}

export default function AirbnbReservationEmail({
  guestName = "Alex",
  destination = "Oslo",
  reservationCode = "HM892K9",
  listingTitle = "Modern Scandinavian Penthouse with Fjord View",
  checkInDate = "Thu, Oct 15, 2026",
  checkInTime = "After 3:00 PM",
  checkoutDate = "Mon, Oct 19, 2026",
  checkoutTime = "11:00 AM",
  keylessCode = "*4920#",
  location = "Oslo Sentrum, Norway",
}: AirbnbReservationEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f7f7f9", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "16px", overflow: "hidden" }}>
          {/* Header */}
          <Section style={{ padding: "24px 32px", borderBottom: "1px solid #f3f4f6" }}>
            <Row>
              <Column style={{ width: "50%", verticalAlign: "middle" }}>
                <Text style={{ fontSize: "20px", fontWeight: "800", color: "#FF385C", margin: 0, letterSpacing: "-0.5px" }}>
                  airbnb
                </Text>
              </Column>
              <Column style={{ width: "50%", verticalAlign: "middle", textAlign: "right" }}>
                <Text style={{ display: "inline-block", fontSize: "12px", fontWeight: "600", color: "#FF385C", backgroundColor: "#FFF0F2", border: "1px solid #FFE0E5", borderRadius: "9999px", padding: "4px 12px", margin: 0 }}>
                  Reservation Confirmed
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "32px 32px 24px 32px" }}>
            <Text style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 6px 0", letterSpacing: "-0.5px" }}>
              You're going to {destination}!
            </Text>
            <Text style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
              Reservation code: <strong style={{ color: "#111827", fontFamily: "monospace" }}>{reservationCode}</strong>
            </Text>
          </Section>

          {/* Hero Banner Card */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", backgroundColor: "#0f172a" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "28px 24px", background: "linear-gradient(135deg, #b45309 0%, #e11d48 50%, #4338ca 100%)", color: "#ffffff" }}>
                    <Text style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#ffffff", backgroundColor: "rgba(0,0,0,0.35)", padding: "4px 8px", borderRadius: "4px", margin: "0 0 8px 0" }}>
                      Entire loft
                    </Text>
                    <Text style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
                      {listingTitle}
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 20px", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                    <Row>
                      <Column style={{ width: "50%" }}>
                        <Text style={{ fontSize: "12px", fontWeight: "600", color: "#111827", margin: 0 }}>
                          ★ 4.98 (124 reviews)
                        </Text>
                      </Column>
                      <Column style={{ width: "50%", textAlign: "right" }}>
                        <Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                          {location}
                        </Text>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Check-in / Checkout Grid */}
          <Section style={{ padding: "0 32px 20px 32px" }}>
            <Row>
              <Column style={{ width: "48%", verticalAlign: "top" }}>
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "14px 16px" }}>
                  <tbody>
                    <tr>
                      <td>
                        <Text style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 4px 0" }}>
                          Check-in
                        </Text>
                        <Text style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: "0 0 2px 0" }}>
                          {checkInDate}
                        </Text>
                        <Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                          {checkInTime}
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
              <Column style={{ width: "4%" }} />
              <Column style={{ width: "48%", verticalAlign: "top" }}>
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "14px 16px" }}>
                  <tbody>
                    <tr>
                      <td>
                        <Text style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 4px 0" }}>
                          Checkout
                        </Text>
                        <Text style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: "0 0 2px 0" }}>
                          {checkoutDate}
                        </Text>
                        <Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                          {checkoutTime}
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
            </Row>
          </Section>

          {/* Smart Lock Keycode Card */}
          <Section style={{ padding: "0 32px 24px 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: "#FFF8F9", border: "1px solid #FFE0E5", borderRadius: "12px", padding: "16px 20px" }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <Text style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px 0" }}>
                      Keyless Self Check-in
                    </Text>
                    <Text style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                      Smart Lock keypad entry code
                    </Text>
                  </td>
                  <td style={{ textAlign: "right", verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", fontFamily: "monospace", fontSize: "15px", fontWeight: "700", color: "#FF385C", backgroundColor: "#ffffff", border: "1px solid #FFD0D8", borderRadius: "8px", padding: "6px 14px", letterSpacing: "1px" }}>
                      {keylessCode}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Button */}
          <Section style={{ padding: "0 32px 32px 32px" }}>
            <Button
              href="https://airbnb.com"
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#FF385C",
                color: "#ffffff",
                padding: "14px 0",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              View Itinerary &amp; Host Guide
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "20px 32px", backgroundColor: "#f9fafb", borderTop: "1px solid #f3f4f6", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>
              Airbnb, Inc. • 888 Brannan St, San Francisco, CA 94103
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
    <title>Airbnb Booking Itinerary</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:rgb(247,247,249);margin:0;padding:32px 0;">
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
            style="background-color:rgb(247,247,249);margin:0;text-align:center;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
            <!-- Main Container -->
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:600px;margin-right:auto;margin-left:auto;background-color:rgb(255,255,255);border-radius:16px;border:1px solid rgb(229,231,235);overflow:hidden;text-align:left">
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
                          <td style="padding:24px 32px;border-bottom:1px solid rgb(243,244,246)">
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
                                    <p style="font-size:20px;font-weight:800;color:rgb(255,56,92);margin:0;letter-spacing:-0.5px">
                                      airbnb
                                    </p>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:50%;vertical-align:middle;text-align:right">
                                    <span style="display:inline-block;font-size:12px;font-weight:600;color:rgb(255,56,92);background-color:rgb(255,240,242);border:1px solid rgb(255,224,229);border-radius:9999px;padding:4px 12px">
                                      Reservation Confirmed
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Heading & Reservation Code -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:32px 32px 24px 32px">
                            <h2 style="font-size:26px;font-weight:800;color:rgb(17,24,39);margin:0 0 6px 0;letter-spacing:-0.5px">
                              You're going to Oslo!
                            </h2>
                            <p style="font-size:14px;color:rgb(107,114,128);margin:0">
                              Reservation code: <strong style="color:rgb(17,24,39);font-family:monospace">HM892K9</strong>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Destination Banner -->
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
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="border-radius:12px;overflow:hidden;border:1px solid rgb(229,231,235)">
                              <tbody>
                                <tr>
                                  <td style="padding:28px 24px;background:linear-gradient(135deg,rgb(180,83,9) 0%,rgb(225,29,72) 50%,rgb(67,56,202) 100%);color:rgb(255,255,255)">
                                    <span style="display:inline-block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgb(255,255,255);background-color:rgba(0,0,0,0.35);padding:4px 8px;border-radius:4px">
                                      Entire loft
                                    </span>
                                    <h3 style="font-size:18px;font-weight:700;color:rgb(255,255,255);margin:8px 0 0 0;line-height:1.3">
                                      Modern Scandinavian Penthouse with Fjord View
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding:12px 20px;background-color:rgb(249,250,251);border-top:1px solid rgb(229,231,235)">
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
                                            style="width:50%;text-align:left">
                                            <p style="font-size:12px;font-weight:600;color:rgb(17,24,39);margin:0">
                                              ★ 4.98 (124 reviews)
                                            </p>
                                          </td>
                                          <td
                                            data-id="__react-email-column"
                                            style="width:50%;text-align:right">
                                            <p style="font-size:12px;color:rgb(107,114,128);margin:0">
                                              Oslo Sentrum, Norway
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

                    <!-- Check-in & Checkout 2-Column Section -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 20px 32px">
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
                                    style="width:48%;vertical-align:top">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(249,250,251);border:1px solid rgb(229,231,235);border-radius:12px;padding:14px 16px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:rgb(156,163,175);margin:0 0 4px 0">
                                              Check-in
                                            </p>
                                            <p style="font-size:14px;font-weight:700;color:rgb(17,24,39);margin:0 0 2px 0">
                                              Thu, Oct 15, 2026
                                            </p>
                                            <p style="font-size:12px;color:rgb(107,114,128);margin:0">
                                              After 3:00 PM
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td data-id="__react-email-column" style="width:4%"></td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:48%;vertical-align:top">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="background-color:rgb(249,250,251);border:1px solid rgb(229,231,235);border-radius:12px;padding:14px 16px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:rgb(156,163,175);margin:0 0 4px 0">
                                              Checkout
                                            </p>
                                            <p style="font-size:14px;font-weight:700;color:rgb(17,24,39);margin:0 0 2px 0">
                                              Mon, Oct 19, 2026
                                            </p>
                                            <p style="font-size:12px;color:rgb(107,114,128);margin:0">
                                              11:00 AM
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

                    <!-- Keyless Smart Lock Card -->
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
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color:rgb(255,248,249);border:1px solid rgb(255,224,229);border-radius:12px;padding:16px 20px">
                              <tbody style="width:100%">
                                <tr style="width:100%">
                                  <td
                                    data-id="__react-email-column"
                                    style="width:65%;vertical-align:middle">
                                    <p style="font-size:13px;font-weight:700;color:rgb(17,24,39);margin:0 0 2px 0">
                                      Keyless Self Check-in
                                    </p>
                                    <p style="font-size:12px;color:rgb(107,114,128);margin:0">
                                      Smart Lock keypad entry code
                                    </p>
                                  </td>
                                  <td
                                    data-id="__react-email-column"
                                    style="width:35%;text-align:right;vertical-align:middle">
                                    <span style="display:inline-block;font-family:monospace;font-size:15px;font-weight:700;color:rgb(255,56,92);background-color:rgb(255,255,255);border:1px solid rgb(255,208,216);border-radius:8px;padding:6px 14px;letter-spacing:1px">
                                      *4920#
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Button -->
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0 32px 32px 32px">
                            <a
                              href="https://airbnb.com"
                              style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:rgb(255,56,92);border-radius:10px;color:rgb(255,255,255);font-size:14px;font-weight:700;text-align:center;padding:14px 20px">
                              <span>View Itinerary &amp; Host Guide</span>
                            </a>
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
                          <td style="padding:20px 32px;background-color:rgb(249,250,251);border-top:1px solid rgb(243,244,246);text-align:center">
                            <p style="font-size:12px;color:rgb(156,163,175);margin:0">
                              Airbnb, Inc. • 888 Brannan St, San Francisco, CA 94103
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
  plainText: `airbnb

Reservation Confirmed


YOU'RE GOING TO OSLO!

Reservation code: HM892K9

Entire loft


MODERN SCANDINAVIAN PENTHOUSE WITH FJORD VIEW

★ 4.98 (124 reviews)

Oslo Sentrum, Norway

Check-in

Thu, Oct 15, 2026

After 3:00 PM

Checkout

Mon, Oct 19, 2026

11:00 AM

Keyless Self Check-in

Smart Lock keypad entry code

*4920#

View Itinerary & Host Guide https://airbnb.com

Airbnb, Inc. • 888 Brannan St, San Francisco, CA 94103`,
  usageCode: `import AirbnbReservationEmail from "@/templates/airbnb-reservation";
import { reloop } from "@reloop/sdk";

// Send Airbnb-style travel booking itinerary
await reloop.emails.send({
  from: "automated@airbnb.com",
  to: "guest@example.com",
  subject: "Reservation Confirmed: Modern Scandinavian Penthouse in Oslo",
  react: <AirbnbReservationEmail guestName="Alex Morgan" destination="Oslo" />,
});`,
};
