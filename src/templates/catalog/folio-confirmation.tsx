import React from "react";
import type { EmailTemplate } from "../types";
import { FOLIO_CONFIRMATION_CODE, FOLIO_CONFIRMATION_HTML } from "../folio-confirmation/content";

function FolioConfirmationPreview() {
  return <iframe title="Folio Account Confirmation" srcDoc={FOLIO_CONFIRMATION_HTML} style={{ width: "100%", height: "850px", border: 0 }} />;
}

export const folioConfirmationTemplate: EmailTemplate = {
  id: "folio-confirmation",
  title: "Folio Account Confirmation",
  category: "Account Confirmation",
  description: "A considered first step for a creative workspace. Plum accents, an account details panel, and a clear invitation to confirm your email.",
  component: FolioConfirmationPreview,
  code: FOLIO_CONFIRMATION_CODE,
  html: FOLIO_CONFIRMATION_HTML,
  plainText: `FOLIO

ACCOUNT CONFIRMATION

A space for your next idea.

You’re almost in. Confirm your email address to finish setting up your Folio account.

YOUR ACCOUNT
alex@example.com
Awaiting email confirmation

Confirm my email: https://example.com/confirm-email

Button not opening? Use this confirmation link: https://example.com/confirm-email

Didn’t create a Folio account? You can ignore this email. Your address won’t be confirmed unless you follow the link.

Folio / A little room to create.
An account message, sent to alex@example.com.`,
  usageCode: `import FolioConfirmationEmail from "@/templates/folio-confirmation/email";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "accounts@yourdomain.com",
  to: "user@example.com",
  subject: "Confirm your email for Folio",
  react: <FolioConfirmationEmail email="user@example.com" confirmationUrl="https://yourdomain.com/confirm-email?token=YOUR_TOKEN" />,
});`,
};
