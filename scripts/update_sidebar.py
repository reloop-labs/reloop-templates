target_path = "/Users/twinkal/Development/reloop-templates/src/components/doc-sidebar.tsx"

content = '''"use client";

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
  const gettingStarted = [
    { label: "Introduction", href: "#" },
    { label: "Installation", href: "#installation" },
    { label: "Usage", href: "#usage" },
    { label: "CLI & SDK", href: "https://reloop.sh/docs", external: true },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-zinc-200/80 dark:border-zinc-800/80 pr-4 pb-16 pt-2 select-none hidden md:block overflow-y-auto max-h-[calc(100vh-4rem)] sticky top-16 scrollbar-thin">
      <div className="space-y-6">
        {/* Getting Started Group */}
        <div>
          <h4 className="mb-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider">
            Getting Started
          </h4>
          <div className="space-y-0.5 text-sm">
            {gettingStarted.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-md px-2.5 py-1.5 font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/60 transition-colors text-xs"
              >
                <span>{item.label}</span>
              </a>
            ))}
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
                    {tpl.badge && (
                      <span className="shrink-0 text-[9px] font-medium px-1.5 py-0.2 rounded bg-zinc-200/70 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {tpl.badge}
                      </span>
                    )}
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
'''

with open(target_path, "w") as f:
    f.write(content)

print("Sidebar updated successfully.")
