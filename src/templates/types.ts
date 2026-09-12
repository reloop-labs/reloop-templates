import React from "react";

export interface EmailTemplate {
  id: string;
  title: string;
  category: "Brands & Recreations" | "Auth & Security" | "SaaS & Billing" | "Growth & Onboarding";
  description: string;
  badge?: string;
  component: React.ComponentType;
  code: string;
  html: string;
  usageCode: string;
}
