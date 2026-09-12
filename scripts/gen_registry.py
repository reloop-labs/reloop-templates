import os

target_path = "/Users/twinkal/Development/reloop-templates/src/templates/registry.ts"

content = '''import { EmailTemplate } from "./types";
import { amazonInvoiceTemplate } from "./catalog/amazon-invoice";
import { stripeReceiptTemplate } from "./catalog/stripe-receipt";
import { vercelDeploymentTemplate } from "./catalog/vercel-deployment";
import { linearIssueTemplate } from "./catalog/linear-issue";
import { githubPRTemplate } from "./catalog/github-pr";
import { airbnbReservationTemplate } from "./catalog/airbnb-reservation";
import { magicLinkTemplate } from "./catalog/magic-link";
import { otpCodeTemplate } from "./catalog/otp-code";
import { newDeviceAlertTemplate } from "./catalog/new-device-alert";
import { resetPasswordTemplate } from "./catalog/reset-password";
import { paymentFailedTemplate } from "./catalog/payment-failed";
import { usageLimitTemplate } from "./catalog/usage-limit";
import { workspaceInviteTemplate } from "./catalog/workspace-invite";
import { founderWelcomeTemplate } from "./catalog/founder-welcome";
import { weeklyDigestTemplate } from "./catalog/weekly-digest";
import { helloWorldTemplate } from "./catalog/hello-world";

export const ALL_TEMPLATES: EmailTemplate[] = [
  // Brands & Recreations
  amazonInvoiceTemplate,
  stripeReceiptTemplate,
  vercelDeploymentTemplate,
  linearIssueTemplate,
  githubPRTemplate,
  airbnbReservationTemplate,

  // Auth & Security
  magicLinkTemplate,
  otpCodeTemplate,
  newDeviceAlertTemplate,
  resetPasswordTemplate,

  // SaaS & Billing
  paymentFailedTemplate,
  usageLimitTemplate,
  workspaceInviteTemplate,

  // Growth & Onboarding
  founderWelcomeTemplate,
  weeklyDigestTemplate,
  helloWorldTemplate,
];

export const TEMPLATES_BY_ID: Record<string, EmailTemplate> = Object.fromEntries(
  ALL_TEMPLATES.map((t) => [t.id, t])
);

export interface CategoryGroup {
  name: "Brands & Recreations" | "Auth & Security" | "SaaS & Billing" | "Growth & Onboarding";
  templates: EmailTemplate[];
}

export const TEMPLATE_CATEGORIES: CategoryGroup[] = [
  {
    name: "Brands & Recreations",
    templates: [
      amazonInvoiceTemplate,
      stripeReceiptTemplate,
      vercelDeploymentTemplate,
      linearIssueTemplate,
      githubPRTemplate,
      airbnbReservationTemplate,
    ],
  },
  {
    name: "Auth & Security",
    templates: [
      magicLinkTemplate,
      otpCodeTemplate,
      newDeviceAlertTemplate,
      resetPasswordTemplate,
    ],
  },
  {
    name: "SaaS & Billing",
    templates: [
      paymentFailedTemplate,
      usageLimitTemplate,
      workspaceInviteTemplate,
    ],
  },
  {
    name: "Growth & Onboarding",
    templates: [
      founderWelcomeTemplate,
      weeklyDigestTemplate,
      helloWorldTemplate,
    ],
  },
];

export function getTemplateById(id?: string): EmailTemplate {
  if (id && TEMPLATES_BY_ID[id]) {
    return TEMPLATES_BY_ID[id];
  }
  return amazonInvoiceTemplate;
}

export function getAdjacentTemplates(id: string): { prev: EmailTemplate; next: EmailTemplate } {
  const index = ALL_TEMPLATES.findIndex((t) => t.id === id);
  if (index === -1) {
    return {
      prev: ALL_TEMPLATES[ALL_TEMPLATES.length - 1],
      next: ALL_TEMPLATES[1] || ALL_TEMPLATES[0],
    };
  }

  const prevIndex = (index - 1 + ALL_TEMPLATES.length) % ALL_TEMPLATES.length;
  const nextIndex = (index + 1) % ALL_TEMPLATES.length;

  return {
    prev: ALL_TEMPLATES[prevIndex],
    next: ALL_TEMPLATES[nextIndex],
  };
}
'''

with open(target_path, "w") as f:
    f.write(content)

print("Registry generated successfully.")
