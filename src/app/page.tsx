import React from "react";
import { TemplatesClientPage } from "../components/templates-client-page";

export default async function Page(props: {
  searchParams: Promise<{ template?: string }>;
}) {
  const searchParams = await props.searchParams;
  const initialTemplateId = searchParams?.template || "amazon-invoice";

  return <TemplatesClientPage initialTemplateId={initialTemplateId} />;
}
