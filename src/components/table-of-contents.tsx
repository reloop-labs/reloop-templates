"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export function TableOfContents() {
  const items = [
    { label: "Preview", href: "#preview" },
    { label: "Installation", href: "#installation" },
    { label: "Usage", href: "#usage" },
    { label: "Composition", href: "#" },
    { label: "Variables & Props", href: "#" },
    { label: "Deliverability", href: "#" },
    { label: "API Reference", href: "#" },
  ];

  return (
    <div className="hidden xl:block w-64 shrink-0 pl-6 select-none space-y-8">
      {/* On This Page Nav */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider">
          On This Page
        </h4>
        <ul className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors block py-0.5"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Deploy on Vercel Callout Card (exactly as in shadcn screenshot 1 & 3) */}
      <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 text-xs space-y-3">
        <div className="font-semibold text-zinc-900 dark:text-zinc-100">
          Deploy your Reloop templates on Vercel
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-[11px]">
          Trusted by developers. Reloop provides high-throughput email delivery infrastructure and live template previews at scale.
        </p>
        <a
          href="https://vercel.com/new/clone?repository-url=https://github.com/reloop-labs/reloop-templates"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-white border border-zinc-200 px-3 py-1.5 font-medium text-zinc-900 hover:bg-zinc-50 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900 transition-colors text-[11px] shadow-2xs"
        >
          <span>Deploy Now</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
