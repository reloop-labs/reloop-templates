target_path = "/Users/twinkal/Development/reloop-templates/src/app/page.tsx"

content = '''"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SiteHeader } from "../components/site-header";
import { DocSidebar } from "../components/doc-sidebar";
import { TableOfContents } from "../components/table-of-contents";
import { CopyPageDropdown } from "../components/copy-page-dropdown";
import { TemplateHeroTabs } from "../components/template-hero-tabs";
import { InstallationSection } from "../components/installation-section";
import { UsageSection } from "../components/usage-section";
import { getTemplateById, getAdjacentTemplates } from "../templates/registry";

function TemplatesDocContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const templateParam = searchParams.get("template") || "amazon-invoice";
  const [currentTemplateId, setCurrentTemplateId] = useState(templateParam);

  useEffect(() => {
    const p = searchParams.get("template");
    if (p) {
      setCurrentTemplateId(p);
    }
  }, [searchParams]);

  const currentTemplate = getTemplateById(currentTemplateId);
  const adjacent = getAdjacentTemplates(currentTemplate.id);

  const handleSelectTemplate = (id: string) => {
    setCurrentTemplateId(id);
    const newUrl = `/?template=${id}`;
    window.history.pushState(null, "", newUrl);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Top Navbar */}
      <SiteHeader />

      {/* Main Documentation Container */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex pt-6">
          {/* Left Sidebar */}
          <DocSidebar
            currentTemplateId={currentTemplate.id}
            onSelectTemplate={handleSelectTemplate}
          />

          {/* Center Main Content */}
          <main className="min-w-0 flex-1 px-4 sm:px-8 lg:px-12 pb-24">
            {/* Title & Actions Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {currentTemplate.title}
                </h1>
                {currentTemplate.badge && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                    {currentTemplate.badge}
                  </span>
                )}
              </div>
              <CopyPageDropdown
                template={currentTemplate}
                onPrev={() => handleSelectTemplate(adjacent.prev.id)}
                onNext={() => handleSelectTemplate(adjacent.next.id)}
              />
            </div>

            {/* Subtitle */}
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl pb-6">
              {currentTemplate.description}
            </p>

            {/* Hero 3-Tabs Preview / HTML / Typescript-React */}
            <div id="preview" className="pt-2">
              <TemplateHeroTabs template={currentTemplate} />
            </div>

            {/* Installation Section */}
            <InstallationSection template={currentTemplate} />

            {/* Usage Section */}
            <UsageSection template={currentTemplate} />
          </main>

          {/* Right "On This Page" Table of Contents */}
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-black" />}>
      <TemplatesDocContent />
    </Suspense>
  );
}
'''

with open(target_path, "w") as f:
    f.write(content)

print("Page updated successfully.")
