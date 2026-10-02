import React from "react";
import type { EmailTemplate } from "../types";
import { RELAY_VERIFICATION_CODE, RELAY_VERIFICATION_HTML } from "../relay-verification/content";

function RelayVerificationPreview() {
  return <iframe title="Relay Account Verification" srcDoc={RELAY_VERIFICATION_HTML} style={{ width: "100%", height: "850px", border: 0 }} />;
}

export const relayVerificationTemplate: EmailTemplate = {
  id: "relay-verification",
  title: "Relay Account Verification",
  category: "Account Confirmation",
  description: "Two ways to verify a new account: a direct link or a six-digit code. A navy header and blue code panel keep each option easy to find.",
  component: RelayVerificationPreview,
  code: RELAY_VERIFICATION_CODE,
  html: RELAY_VERIFICATION_HTML,
  plainText: `RELAY
ACCOUNT SETUP

Hi Alex,

One quick check. Then you’re in.

Verify your email to activate your Relay account. Choose the button below, or enter the code on your verification screen.

Verify my account: https://example.com/verify-account

OR USE YOUR VERIFICATION CODE
482916

Keep this code private. It verifies access to your account.

Not your signup? Leave the account unverified and let us know:
https://example.com/report-signup

Relay · A place to connect.
You received this email because an account was created with your address.`,
  usageCode: `import RelayVerificationEmail from "@/templates/relay-verification/email";
import { reloop } from "@reloop/sdk";

// Supply the verification code and links issued by your authentication service.
await reloop.emails.send({
  from: "accounts@yourdomain.com",
  to: "user@example.com",
  subject: "Verify your Relay account",
  react: <RelayVerificationEmail
    name="Alex"
    verificationUrl="https://yourdomain.com/verify?token=YOUR_TOKEN"
    verificationCode="YOUR_CODE"
    reportUrl="https://yourdomain.com/report-signup"
  />,
});`,
};
