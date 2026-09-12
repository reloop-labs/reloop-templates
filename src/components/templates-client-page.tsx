"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "./site-header";
import { DocSidebar } from "./doc-sidebar";
import { TableOfContents } from "./table-of-contents";
import { CopyPageDropdown } from "./copy-page-dropdown";
import { TemplateHeroTabs } from "./template-hero-tabs";
import { IntroductionPage } from "./introduction-page";
import { getTemplateById, getAdjacentTemplates } from "../templates/registry";

interface TemplatesClientPageProps {
  initialTemplateId: string;
}

export function TemplatesClientPage({ initialTemplateId }: TemplatesClientPageProps) {
  const searchParams = useSearchParams();
  const [currentTemplateId, setCurrentTemplateId] = useState(initialTemplateId);

  useEffect(() => {
    const p = searchParams.get("template");
    if (p) {
      setCurrentTemplateId(p);
    } else {
      setCurrentTemplateId("introduction");
    }
  }, [searchParams]);

  const isIntro = currentTemplateId === "introduction";
  const currentTemplate = getTemplateById(isIntro ? "amazon-invoice" : currentTemplateId);
  const adjacent = getAdjacentTemplates(currentTemplate.id);

  const handleSelectTemplate = (id: string) => {
    setCurrentTemplateId(id);
    const newUrl = id === "introduction" ? "/" : `/?template=${id}`;
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
            currentTemplateId={currentTemplateId}
            onSelectTemplate={handleSelectTemplate}
          />

          {/* Center Main Content */}
          <main className="min-w-0 flex-1 px-4 sm:px-8 lg:px-12 pb-24">
            {isIntro ? (
              <IntroductionPage onSelectTemplate={handleSelectTemplate} />
            ) : (
              <>
                {/* Title & Actions Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {currentTemplate.title}
                    </h1>
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
                <div id="preview" className="pt-2 scroll-mt-20">
                  <TemplateHeroTabs template={currentTemplate} />
                </div>
              </>
            )}
          </main>

          {/* Right "On This Page" Table of Contents */}
          <TableOfContents isIntroduction={isIntro} />
        </div>
      </div>
    </div>
  );
}
