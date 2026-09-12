"use client";

import React, { useState } from "react";
import { EmailTemplate } from "../templates/types";
import { Copy, Check, Monitor, Tablet, Smartphone } from "lucide-react";

export type HeroTab = "preview" | "html" | "react";
export type ViewportMode = "desktop" | "tablet" | "mobile";

interface TemplateHeroTabsProps {
  template: EmailTemplate;
}

export function TemplateHeroTabs({ template }: TemplateHeroTabsProps) {
  const [activeTab, setActiveTab] = useState<HeroTab>("preview");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [copiedCode, setCopiedCode] = useState(false);

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-[390px]";
      case "tablet":
        return "max-w-[640px]";
      case "desktop":
      default:
        return "w-full max-w-[800px]";
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const htmlLines = (template.html || "").trim().split("\n");
  const reactLines = (template.code || "").trim().split("\n");
  const TemplateComponent = template.component;

  return (
    <div className="space-y-4">
      {/* Tab Navigation Header (Base UI / React Aria / Radix UI style in shadcn) */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`pb-2.5 transition-all relative ${
              activeTab === "preview"
                ? "text-zinc-900 dark:text-zinc-50 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-zinc-900 dark:after:bg-zinc-50"
                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("html")}
            className={`pb-2.5 transition-all relative ${
              activeTab === "html"
                ? "text-zinc-900 dark:text-zinc-50 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-zinc-900 dark:after:bg-zinc-50"
                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            HTML
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("react")}
            className={`pb-2.5 transition-all relative ${
              activeTab === "react"
                ? "text-zinc-900 dark:text-zinc-50 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-zinc-900 dark:after:bg-zinc-50"
                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            Typescript/React
          </button>
        </div>

        {/* Viewport switcher (when Preview tab is active) */}
        {activeTab === "preview" && (
          <div className="flex items-center gap-1 pb-1 text-zinc-500 dark:text-zinc-400">
            <button
              type="button"
              onClick={() => setViewport("desktop")}
              title="Desktop view"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "desktop"
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                  : "hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setViewport("tablet")}
              title="Tablet view"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "tablet"
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                  : "hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setViewport("mobile")}
              title="Mobile view"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === "mobile"
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                  : "hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Main Hero Card Container */}
      <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 overflow-hidden shadow-2xs">
        {activeTab === "preview" && (
          <div className="min-h-[420px] p-4 sm:p-8 bg-zinc-50/80 dark:bg-zinc-900/40 flex items-center justify-center transition-all">
            <div className={`${getViewportWidth()} transition-all duration-300 ease-out`}>
              <TemplateComponent />
            </div>
          </div>
        )}

        {/* HTML Tab */}
        {activeTab === "html" && (
          <div className="relative bg-zinc-950 text-zinc-100 p-4 font-mono text-xs max-h-[500px] overflow-y-auto">
            <button
              type="button"
              onClick={() => handleCopy(template.html)}
              className="absolute right-4 top-4 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              title="Copy HTML"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <pre className="overflow-x-auto leading-relaxed">
              {htmlLines.map((line, idx) => (
                <div key={idx} className="flex gap-4 hover:bg-white/[0.02]">
                  <span className="w-8 text-right select-none text-zinc-600">{idx + 1}</span>
                  <span className="text-zinc-300 whitespace-pre">{line}</span>
                </div>
              ))}
            </pre>
          </div>
        )}

        {/* Typescript / React Tab */}
        {activeTab === "react" && (
          <div className="relative bg-zinc-950 text-zinc-100 p-4 font-mono text-xs max-h-[500px] overflow-y-auto">
            <button
              type="button"
              onClick={() => handleCopy(template.code)}
              className="absolute right-4 top-4 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              title="Copy TypeScript"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <pre className="overflow-x-auto leading-relaxed">
              {reactLines.map((line, idx) => (
                <div key={idx} className="flex gap-4 hover:bg-white/[0.02]">
                  <span className="w-8 text-right select-none text-zinc-600">{idx + 1}</span>
                  <span className="text-zinc-300 whitespace-pre">{line}</span>
                </div>
              ))}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
