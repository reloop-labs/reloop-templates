"use client";

import React from "react";
import { TEMPLATE_CATEGORIES } from "../templates/registry";

interface DocSidebarProps {
  currentTemplateId: string;
  onSelectTemplate: (id: string) => void;
}

export function DocSidebar({
  currentTemplateId,
  onSelectTemplate,
}: DocSidebarProps) {
  const isIntro = currentTemplateId === "introduction";

  return (
    <aside className="w-64 shrink-0 border-r border-zinc-200/80 dark:border-zinc-800/80 pr-4 pb-16 pt-2 select-none hidden md:block overflow-y-auto max-h-[calc(100vh-4rem)] sticky top-16 scrollbar-thin">
      <div className="space-y-6">
        {/* Getting Started Group */}
        <div>
          <h4 className="mb-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider">
            Getting Started
          </h4>
          <div className="space-y-0.5 text-sm">
            <button
              type="button"
              onClick={() => onSelectTemplate("introduction")}
              className={`w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs font-medium transition-all ${
                isIntro
                  ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50 shadow-2xs"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/50"
              }`}
            >
              <span>Introduction</span>
            </button>
          </div>
        </div>

        {/* 4 Template Categories */}
        {TEMPLATE_CATEGORIES.map((category) => (
          <div key={category.name}>
            <h4 className="mb-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider">
              {category.name}
            </h4>
            <div className="space-y-0.5 text-sm">
              {category.templates.map((tpl) => {
                const isSelected = currentTemplateId === tpl.id;
                return (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => onSelectTemplate(tpl.id)}
                    className={`w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50 shadow-2xs"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/50"
                    }`}
                  >
                    <span className="truncate">{tpl.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
