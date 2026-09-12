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
  badge: "New",
  description: "Airbnb reservation confirmation with destination hero, check-in timestamps, smart lock code, and itinerary CTA.",
  component: AirbnbReservationPreview,
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

interface AirbnbReservationEmailProps {
  guestName?: string;
  destination?: string;
  reservationCode?: string;
  checkInDate?: string;
  keylessCode?: string;
}

export default function AirbnbReservationEmail({
  guestName = "Alex",
  destination = "Oslo",
  reservationCode = "HM892K9",
  checkInDate = "Thu, Oct 15, 2026",
  keylessCode = "*4920#",
}: AirbnbReservationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ background: "#f7f7f7", fontFamily: "sans-serif", margin: 0, padding: "20px" }}>
        <Container style={{ maxWidth: "580px", margin: "0 auto", background: "#ffffff", borderRadius: "16px", padding: "32px", border: "1px solid #eaeaea" }}>
          <Text style={{ color: "#FF385C", fontSize: "20px", fontWeight: "bold", margin: "0 0 16px" }}>airbnb</Text>
          <Text style={{ fontSize: "24px", fontWeight: "bold", color: "#222222", margin: "0 0 8px" }}>
            You're going to {destination}!
          </Text>
          <Text style={{ fontSize: "14px", color: "#717171", margin: "0 0 24px" }}>
            Reservation code: {reservationCode}
          </Text>
          <Section style={{ background: "#FFF8F6", border: "1px solid #FFEBE6", borderRadius: "12px", padding: "16px", marginBottom: "24px" }}>
            <Text style={{ margin: 0, fontSize: "13px", color: "#FF385C", fontWeight: "bold" }}>
              Keyless Entry Code: {keylessCode}
            </Text>
          </Section>
          <Button href="https://airbnb.com" style={{ background: "#FF385C", color: "#fff", padding: "14px 24px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            View Full Itinerary
          </Button>
        </Container>
      </Body>
    </Html>
  );
}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#f7f7f7;font-family:sans-serif;margin:0;padding:20px;">
  <table align="center" width="580" style="background:#ffffff;border:1px solid #eaeaea;border-radius:16px;padding:32px;" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h1 style="color:#FF385C;font-size:20px;margin:0 0 16px;">airbnb</h1>
        <h2 style="font-size:24px;color:#222222;margin:0 0 8px;">You're going to Oslo!</h2>
        <p style="font-size:14px;color:#717171;margin:0 0 24px;">Reservation code: <strong>HM892K9</strong></p>
        <table width="100%" style="background:#FFF8F6;border:1px solid #FFEBE6;border-radius:12px;padding:16px;margin-bottom:24px;">
          <tr>
            <td style="font-size:14px;color:#FF385C;font-weight:bold;">Keyless Entry Code: *4920#</td>
          </tr>
        </table>
        <a href="https://airbnb.com" style="display:block;background:#FF385C;color:#ffffff;text-align:center;padding:14px;border-radius:8px;font-weight:bold;text-decoration:none;">View Full Itinerary</a>
      </td>
    </tr>
  </table>
</body>
</html>`,
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
