"use client";

import React, { useState } from "react";
import { SiteHeader } from "../components/site-header";
import { DocSidebar } from "../components/doc-sidebar";
import { TableOfContents } from "../components/table-of-contents";
import { CopyPageDropdown } from "../components/copy-page-dropdown";
import { TemplateHeroTabs } from "../components/template-hero-tabs";
import { InstallationSection } from "../components/installation-section";
import { UsageSection } from "../components/usage-section";

export default function Page() {
  const [currentTemplateId, setCurrentTemplateId] = useState("hello-world");

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
            onSelectTemplate={setCurrentTemplateId}
          />

          {/* Center Main Content */}
          <main className="min-w-0 flex-1 px-4 sm:px-8 lg:px-12 pb-24">
            {/* Title & Actions Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Hello World
              </h1>
              <CopyPageDropdown />
            </div>

            {/* Subtitle */}
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl pb-6">
              The official starter email template for Reloop. Featuring responsive table layout, deliverability optimizations, and full dark mode compatibility.
            </p>

            {/* Hero 3-Tabs Preview / HTML / Typescript-React */}
            <div id="preview" className="pt-2">
              <TemplateHeroTabs />
            </div>

            {/* Installation Section */}
            <InstallationSection />

            {/* Usage Section */}
            <UsageSection />
          </main>

          {/* Right "On This Page" Table of Contents */}
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
