'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface TableOfContentsProps {
  isIntroduction?: boolean;
}

export function TableOfContents({
  isIntroduction = false,
}: TableOfContentsProps) {
  const introItems = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    {
      label: 'Featured Brands',
      href: '#featured-brands',
      id: 'featured-brands',
    },
  ];

  const templateItems = [
    { label: 'Preview & Code', href: '#preview', id: 'preview' },
  ];

  const items = isIntroduction ? introItems : templateItems;
  const [activeId, setActiveId] = useState<string>(
    items[0]?.id || 'preview',
  );

  useEffect(() => {
    setActiveId(items[0]?.id || 'preview');
  }, [isIntroduction]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = isIntroduction
          ? ['featured-brands', 'overview']
          : ['preview'];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isIntroduction]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      setActiveId(id);
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <aside className="hidden xl:block w-64 shrink-0 pl-6 select-none space-y-6 pt-2 sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
      {/* On This Page Nav */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider">
          On This Page
        </h4>
        <ul className="space-y-1 text-xs">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block py-1 transition-colors ${
                    isActive
                      ? 'font-medium text-zinc-900 dark:text-zinc-100 border-l-2 border-zinc-900 dark:border-zinc-100 pl-2.5 -ml-2.5'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
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
          Customize layouts, brand colors, dynamic merge tags, and
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
        </a>
      </div>
    </aside>
  );
}
