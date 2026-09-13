"use client";

import React from "react";
import { Code2, ExternalLink, CheckCircle2, Zap } from "lucide-react";
import { ALL_TEMPLATES } from "../templates/registry";

interface IntroductionPageProps {
  onSelectTemplate: (id: string) => void;
}

export function IntroductionPage({ onSelectTemplate }: IntroductionPageProps) {
  const featuredBrandIds = [
    "github-pr",
    "linear-issue",
    "notion-invite",
    "figma-comment",
    "raycast-extension",
    "stripe-receipt",
    "vercel-deployment",
    "amazon-invoice",
    "airbnb-reservation",
  ];

  const featuredTemplates = featuredBrandIds
    .map((id) => ALL_TEMPLATES.find((t) => t.id === id))
    .filter(Boolean);

  return (
    <div className="space-y-14 pb-20">
      {/* 1. Hero Overview Section */}
      <section id="overview" className="space-y-5 pt-2 scroll-mt-20">
        <div className="space-y-3 max-w-3xl">
          <h1 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.25]">
            Production-grade email templates for modern software teams.
          </h1>
          <p className="text-[13.5px] leading-[1.7] text-zinc-500 dark:text-zinc-400 max-w-[640px]">
            Designing transactional emails that render consistently across Gmail, Apple Mail,
            Outlook, and mobile clients is notoriously hard. Reloop Templates gives you
            battle-tested, pixel-perfect email designs inspired by iconic tech brands like{" "}
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">GitHub</span>,{" "}
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Linear</span>,{" "}
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Notion</span>,{" "}
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Figma</span>,{" "}
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Raycast</span>, and{" "}
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Stripe</span>.
          </p>
        </div>

        {/* Feature Highlights — refined horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-5 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 flex gap-3.5">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center">
              <CheckCircle2 className="w-[18px] h-[18px] text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 space-y-1">
              <h3 className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-none pt-1">
                Email Compiled XHTML
              </h3>
              <p className="text-[12.5px] leading-5 text-zinc-500 dark:text-zinc-400">
                Strict XHTML 1.0 Transitional markup with isolated section tables and
                percentage-based columns.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 flex gap-3.5">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center">
              <Code2 className="w-[18px] h-[18px] text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 space-y-1">
              <h3 className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-none pt-1">
                Dual Format Output
              </h3>
              <p className="text-[12.5px] leading-5 text-zinc-500 dark:text-zinc-400">
                Every template comes with complete React Email source and inlined production HTML.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 flex gap-3.5">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-900/30 flex items-center justify-center">
              <Zap className="w-[18px] h-[18px] text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 space-y-1">
              <h3 className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-none pt-1">
                Visual & Code Parity
              </h3>
              <p className="text-[12.5px] leading-5 text-zinc-500 dark:text-zinc-400">
                100% fidelity between Reloop&apos;s drag-and-drop builder and raw HTML editing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Reloop Visual Builder Banner — Plain Light (moved up) */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-7 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-[560px]">
          <h3 className="text-[18px] font-semibold tracking-[-0.015em] text-zinc-900 dark:text-zinc-50 leading-tight">
            Customize any template visually in Reloop
          </h3>
          <p className="text-[13.5px] leading-6 text-zinc-500 dark:text-zinc-400">
            Drag-and-drop sections, tweak inline typography, inject dynamic variables, and preview
            real-time responsive rendering — without writing boilerplate markup.
          </p>
        </div>

        <a
          href="https://reloop.sh/dashboard/templates"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 text-[13.5px] font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shrink-0 shadow-sm"
        >
          <span>Open Reloop Editor</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      </div>

      {/* 3. Featured Brand Templates — Plain, centered titles */}
      <section id="featured-brands" className="space-y-5 scroll-mt-20">
        <div>
          <h2 className="text-[22px] sm:text-[23px] font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-50 leading-none">
            Featured Brand Recreations
          </h2>
          <p className="text-[13px] leading-5 text-zinc-500 dark:text-zinc-400 mt-2 max-w-[560px]">
            Handcrafted templates modeled after the iconic notification flows of world-class
            products. Each one is a perfect starting point.
          </p>
        </div>

        {/* Grid — plain bigger cards, title centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTemplates.map((template) => {
            if (!template) return null;
            return (
              <button
                key={template.id}
                onClick={() => onSelectTemplate(template.id)}
                className="flex items-center justify-center text-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-6 min-h-[72px] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-[14px] font-medium tracking-[-0.01em] leading-tight text-zinc-900 dark:text-zinc-100">
                  {template.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
