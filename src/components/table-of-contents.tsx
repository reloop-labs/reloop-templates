'use client';

import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export function TableOfContents() {
  const items = [
    { label: 'Preview', href: '#preview' },
    { label: 'Installation', href: '#installation' },
    { label: 'Usage', href: '#usage' },
  ];

  return (
    <div className="hidden xl:block w-64 shrink-0 pl-6 select-none space-y-6 pt-2">
      {/* On This Page Nav */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider">
          On This Page
        </h4>
        <ul className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
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

      {/* Reloop Template Editor Callout Card */}
      <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/50 text-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            Reloop Editor
          </span>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50">
            Visual Builder
          </span>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-[11px]">
          Customize layouts, brand c olors, dynamic merge tags, and
          preview live email rendering in Reloop&apos;s template
          editor.
        </p>
        <a
          href="https://reloop.sh/dashboard/templates"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-zinc-900 px-3 py-2 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-[11px] shadow-2xs group"
        >
          <span>Customize in Reloop</span>
          <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
        </a>
      </div>
    </div>
  );
}
