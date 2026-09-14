import React from "react";

export interface EmailTemplate {
  id: string;
  title: string;
  category:
    | "Brands & Recreations"
    | "Auth & Security"
    | "SaaS & Billing"
    | "Growth & Onboarding"
    | "Lumen Suite";
  description: string;
  badge?: string;
  component: React.ComponentType;
  code: string;
  html: string;
  plainText: string;
  usageCode: string;
}
