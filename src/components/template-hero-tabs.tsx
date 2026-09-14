"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { EmailTemplate } from "../templates/types";
import { Copy, Check, Monitor, Tablet, Smartphone } from "lucide-react";

export type HeroTab = "preview" | "html" | "plaintext" | "react";
export type ViewportMode = "desktop" | "tablet" | "mobile";

interface TemplateHeroTabsProps {
  template: EmailTemplate;
}

export function TemplateHeroTabs({ template }: TemplateHeroTabsProps) {
  const [activeTab, setActiveTab] = useState<HeroTab>("preview");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [copiedCode, setCopiedCode] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(480);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-[360px]";
      case "tablet":
        return "max-w-[480px]";
      case "desktop":
      default:
        return "max-w-[600px]";
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleIframeLoad = () => {
    try {
      if (iframeRef.current?.contentWindow?.document?.body) {
        const doc = iframeRef.current.contentWindow.document;
        const bodyHeight = doc.body.getBoundingClientRect().height;
        const scrollHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
        const calculated = Math.max(bodyHeight, scrollHeight);
        if (calculated > 60) {
          setIframeHeight(Math.ceil(calculated) + 8);
        }
      }
    } catch {
      // Fallback
    }
  };

  // Inject clean centering reset into srcDoc so the email is the only layer
  const processedHtml = useMemo(() => {
    if (!template.html) return "";
    const styleInjection = `
      <style id="__reloop_preview_style__">
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          background: transparent !important;
        }
        body {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          padding: 8px 0 !important;
          box-sizing: border-box !important;
        }
        body > table,
        body > div > table {
          margin-left: auto !important;
          margin-right: auto !important;
        }
        ::-webkit-scrollbar { display: none; }
      </style>
    `;
    if (template.html.includes("<head>")) {
      return template.html.replace("<head>", `<head>${styleInjection}`);
    } else if (template.html.includes("<head />")) {
      return template.html.replace("<head />", `<head>${styleInjection}</head>`);
    } else if (template.html.includes("<html>")) {
      return template.html.replace("<html>", `<html><head>${styleInjection}</head>`);
    }
    return styleInjection + template.html;
  }, [template.html]);

  useEffect(() => {
    handleIframeLoad();
  }, [template.id, processedHtml, viewport]);

  const htmlLines = (template.html || "").trim().split("\n");
  const plainTextLines = (template.plainText || "").trim().split("\n");
  const reactLines = (template.code || "").trim().split("\n");

  return (
    <div className="space-y-4">
      {/* Tab Navigation Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-5 text-sm font-medium">
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
            onClick={() => setActiveTab("plaintext")}
            className={`pb-2.5 transition-all relative ${
              activeTab === "plaintext"
                ? "text-zinc-900 dark:text-zinc-50 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-zinc-900 dark:after:bg-zinc-50"
                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            Plain Text
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

      {/* Preview Tab — Single Layer: The email card itself is the only layer */}
      {activeTab === "preview" && (
        <div className="py-2 flex justify-center">
          <div className={`${getViewportWidth()} w-full transition-all duration-300 ease-out flex justify-center mx-auto`}>
            <iframe
              ref={iframeRef}
              srcDoc={processedHtml}
              onLoad={handleIframeLoad}
              title={`Preview of ${template.title}`}
              className="w-full border-0 bg-transparent transition-all duration-300"
              style={{ height: `${iframeHeight}px`, minHeight: "320px" }}
            />
          </div>
        </div>
      )}

      {/* Code Tabs Container (HTML / Plain Text / React) */}
      {activeTab !== "preview" && (
        <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 overflow-hidden shadow-2xs">
          {/* HTML Tab */}
          {activeTab === "html" && (
            <div className="relative bg-zinc-950 text-zinc-100 p-4 font-mono text-xs max-h-[550px] overflow-y-auto">
              <button
                type="button"
                onClick={() => handleCopy(template.html)}
                className="absolute right-4 top-4 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors z-10"
                title="Copy HTML"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <pre className="overflow-x-auto leading-relaxed">
                {htmlLines.map((line, idx) => (
                  <div key={idx} className="flex gap-4 hover:bg-white/[0.02]">
                    <span className="w-8 text-right select-none text-zinc-600 shrink-0">{idx + 1}</span>
                    <span className="text-zinc-300 whitespace-pre">{line}</span>
                  </div>
                ))}
              </pre>
            </div>
          )}

          {/* Plain Text Tab */}
          {activeTab === "plaintext" && (
            <div className="relative bg-zinc-950 text-zinc-100 p-4 font-mono text-xs max-h-[550px] overflow-y-auto">
              <button
                type="button"
                onClick={() => handleCopy(template.plainText || "")}
                className="absolute right-4 top-4 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors z-10"
                title="Copy Plain Text"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <pre className="overflow-x-auto leading-relaxed whitespace-pre-wrap">
                {plainTextLines.map((line, idx) => (
                  <div key={idx} className="flex gap-4 hover:bg-white/[0.02]">
                    <span className="w-8 text-right select-none text-zinc-600 shrink-0">{idx + 1}</span>
                    <span className="text-zinc-300">{line || " "}</span>
                  </div>
                ))}
              </pre>
            </div>
          )}

          {/* Typescript / React Tab */}
          {activeTab === "react" && (
            <div className="relative bg-zinc-950 text-zinc-100 p-4 font-mono text-xs max-h-[550px] overflow-y-auto">
              <button
                type="button"
                onClick={() => handleCopy(template.code)}
                className="absolute right-4 top-4 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors z-10"
                title="Copy TypeScript"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <pre className="overflow-x-auto leading-relaxed">
                {reactLines.map((line, idx) => (
                  <div key={idx} className="flex gap-4 hover:bg-white/[0.02]">
                    <span className="w-8 text-right select-none text-zinc-600 shrink-0">{idx + 1}</span>
                    <span className="text-zinc-300 whitespace-pre">{line}</span>
                  </div>
                ))}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
