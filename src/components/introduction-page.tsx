"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";
import { ALL_TEMPLATES, TEMPLATE_CATEGORIES } from "../templates/registry";

interface IntroductionPageProps {
  onSelectTemplate: (id: string) => void;
}

export function IntroductionPage({ onSelectTemplate }: IntroductionPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

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

  const filteredTemplates =
    activeCategory === "All"
      ? ALL_TEMPLATES
      : ALL_TEMPLATES.filter((t) => t.category === activeCategory);

  const categories = [
    "All",
    "Brands & Recreations",
    "Auth & Security",
    "SaaS & Billing",
    "Growth & Onboarding",
  ];

  const brandStyles: Record<string, { bg: string; text: string; border: string; brandName: string }> = {
    "github-pr": {
      bg: "bg-zinc-900 dark:bg-zinc-950",
      text: "text-white",
      border: "border-zinc-800",
      brandName: "GitHub",
    },
    "linear-issue": {
      bg: "bg-[#5e6ad2]/10",
      text: "text-[#5e6ad2] dark:text-[#8b95ff]",
      border: "border-[#5e6ad2]/30",
      brandName: "Linear",
    },
    "notion-invite": {
      bg: "bg-zinc-100 dark:bg-zinc-800",
      text: "text-zinc-900 dark:text-zinc-100",
      border: "border-zinc-300 dark:border-zinc-700",
      brandName: "Notion",
    },
    "figma-comment": {
      bg: "bg-[#0c8ce9]/10",
      text: "text-[#0c8ce9]",
      border: "border-[#0c8ce9]/30",
      brandName: "Figma",
    },
    "raycast-extension": {
      bg: "bg-[#ff3b30]/10",
      text: "text-[#ff3b30]",
      border: "border-[#ff3b30]/30",
      brandName: "Raycast",
    },
    "stripe-receipt": {
      bg: "bg-[#635bff]/10",
      text: "text-[#635bff] dark:text-[#7a73ff]",
      border: "border-[#635bff]/30",
      brandName: "Stripe",
    },
    "vercel-deployment": {
      bg: "bg-black dark:bg-white",
      text: "text-white dark:text-black",
      border: "border-zinc-800 dark:border-zinc-200",
      brandName: "Vercel",
    },
    "amazon-invoice": {
      bg: "bg-[#ff9900]/10",
      text: "text-[#d97706] dark:text-[#fbbf24]",
      border: "border-[#ff9900]/30",
      brandName: "Amazon",
    },
    "airbnb-reservation": {
      bg: "bg-[#ff5a5f]/10",
      text: "text-[#ff5a5f]",
      border: "border-[#ff5a5f]/30",
      brandName: "Airbnb",
    },
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Overview Section */}
      <section id="overview" className="space-y-6 pt-4 scroll-mt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Curated Open-Source Collection</span>
          <span className="w-1 h-1 rounded-full bg-zinc-400" />
          <span className="text-zinc-500 dark:text-zinc-400 font-mono">19 Templates</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
            Production-grade email templates for modern software teams.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Designing transactional emails that render consistently across Gmail, Apple Mail,
            Outlook, and mobile clients is notoriously hard. Reloop Templates gives you
            battle-tested, pixel-perfect email designs inspired by iconic tech brands like{" "}
            <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">GitHub</strong>,{" "}
            <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Linear</strong>,{" "}
            <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Notion</strong>,{" "}
            <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Figma</strong>,{" "}
            <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Raycast</strong>, and{" "}
            <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Stripe</strong>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#featured-brands"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-colors shadow-xs"
          >
            <span>Explore Brand Templates</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://reloop.sh/dashboard/templates"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-2xs"
          >
            <span>Open Reloop Visual Editor</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Email Compiled XHTML</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Strict XHTML 1.0 Transitional markup with isolated section tables and percentage-based columns.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <Code2 className="w-4 h-4 text-indigo-500" />
              <span>Dual Format Output</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every template comes with complete React Email source code and inlined production HTML.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Visual & Code Parity</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              100% fidelity between Reloop&apos;s drag-and-drop visual builder and raw HTML code editing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Featured Brand Templates Showcase */}
      <section id="featured-brands" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Featured Brand Recreations
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Handcrafted templates modeled after the iconic notification flows of world-class products.
            </p>
          </div>
        </div>

        {/* 3x3 Responsive Grid of Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTemplates.map((template) => {
            if (!template) return null;
            const meta = brandStyles[template.id] || {
              bg: "bg-zinc-100 dark:bg-zinc-800",
              text: "text-zinc-900 dark:text-zinc-100",
              border: "border-zinc-300 dark:border-zinc-700",
              brandName: template.title.split(" ")[0],
            };

            return (
              <div
                key={template.id}
                onClick={() => onSelectTemplate(template.id)}
                className="group cursor-pointer rounded-2xl border border-zinc-200/80 bg-white p-5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-950 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Row: Brand Pill & Category */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${meta.bg} ${meta.text} ${meta.border}`}
                    >
                      {meta.brandName}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                      {template.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {template.description}
                    </p>
                  </div>

                  {/* Visual Card Mockup Snippet */}
                  <div className="h-28 rounded-lg border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-3 flex flex-col justify-center overflow-hidden pointer-events-none select-none">
                    <div className="w-12 h-2 rounded bg-zinc-200 dark:bg-zinc-700 mb-2" />
                    <div className="w-full h-3 rounded bg-zinc-300 dark:bg-zinc-600 mb-1.5" />
                    <div className="w-3/4 h-2.5 rounded bg-zinc-200 dark:bg-zinc-700 mb-3" />
                    <div className="w-20 h-5 rounded-md bg-zinc-900 dark:bg-zinc-100 opacity-80" />
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                  <span>View template</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Browse All Templates Directory */}
      <section id="browse-all" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Browse All Templates
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Explore the entire catalog of {ALL_TEMPLATES.length} production-ready email templates.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900/70 p-1 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 shadow-2xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Template List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className="group cursor-pointer rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950 p-4 hover:border-zinc-300 hover:shadow-xs dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  {template.category}
                </span>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mt-1">
                  {template.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {template.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-medium text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <span className="font-mono text-[11px]">{template.id}.tsx</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Reloop Visual Builder Banner */}
      <div className="rounded-2xl border border-indigo-200/60 bg-gradient-to-tr from-indigo-50/50 via-white to-purple-50/40 dark:border-indigo-900/40 dark:from-indigo-950/20 dark:via-zinc-950 dark:to-purple-950/20 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100/80 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reloop Email Editor</span>
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Customize any template visually in Reloop
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Drag-and-drop sections, inspect and adjust inline typography, inject dynamic variables,
            and preview real-time responsive rendering without writing boilerplate markup.
          </p>
        </div>

        <a
          href="https://reloop.sh/dashboard/templates"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-5 py-3 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shrink-0 shadow-sm"
        >
          <span>Open Reloop Editor</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
