export interface TemplateItem {
  id: string;
  name: string;
  filename: string;
  category: string;
  description: string;
  badge?: string;
  isNew?: boolean;
}

export interface CategoryGroup {
  id: string;
  name: string;
  items: TemplateItem[];
}

export const TEMPLATE_CATEGORIES: CategoryGroup[] = [
  {
    id: "01-getting-started",
    name: "01-Getting Started",
    items: [
      {
        id: "hello-world",
        name: "hello-world",
        filename: "hello-world.tsx",
        category: "01-Getting Started",
        description: "Official introductory template welcoming developers to Reloop Templates.",
        badge: "Official",
      },
      {
        id: "minimal-text",
        name: "minimal-text",
        filename: "minimal-text.tsx",
        category: "01-Getting Started",
        description: "High deliverability, typography-focused plain layout.",
      },
    ],
  },
  {
    id: "02-auth-security",
    name: "02-Auth & Security",
    items: [
      {
        id: "magic-link",
        name: "magic-link",
        filename: "magic-link.tsx",
        category: "02-Auth & Security",
        description: "Passwordless authentication with secure one-click sign in.",
      },
      {
        id: "reset-password",
        name: "reset-password",
        filename: "reset-password.tsx",
        category: "02-Auth & Security",
        description: "Time-limited token for account recovery.",
      },
      {
        id: "two-factor-code",
        name: "two-factor-code",
        filename: "two-factor-code.tsx",
        category: "02-Auth & Security",
        description: "6-digit OTP verification code with security advisory.",
      },
    ],
  },
  {
    id: "03-transactional",
    name: "03-Transactional",
    items: [
      {
        id: "invoice-receipt",
        name: "invoice-receipt",
        filename: "invoice-receipt.tsx",
        category: "03-Transactional",
        description: "Detailed breakdown of subscription renewal and tax invoice.",
      },
      {
        id: "workspace-invite",
        name: "workspace-invite",
        filename: "workspace-invite.tsx",
        category: "03-Transactional",
        description: "Invitation to collaborate on a Reloop project.",
      },
    ],
  },
  {
    id: "04-lifecycle",
    name: "04-Lifecycle",
    items: [
      {
        id: "product-update",
        name: "product-update",
        filename: "product-update.tsx",
        category: "04-Lifecycle",
        description: "Changelog and feature release announcement for customers.",
      },
      {
        id: "weekly-digest",
        name: "weekly-digest",
        filename: "weekly-digest.tsx",
        category: "04-Lifecycle",
        description: "Summary of emails delivered, bounce rates, and delivery analytics.",
      },
    ],
  },
];
