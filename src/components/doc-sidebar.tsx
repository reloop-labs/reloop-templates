"use client";

import React from "react";

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
    { label: "CLI & Deployment", href: "#" },
    { label: "Changelog", href: "#", hasDot: true },
  ];

  const templates = [
    { id: "hello-world", label: "Hello World", isNew: false },
    { id: "magic-link", label: "Magic Link", isNew: true },
    { id: "reset-password", label: "Password Reset", isNew: false },
    { id: "two-factor-code", label: "Two Factor Code", isNew: false },
    { id: "invoice-receipt", label: "Invoice Receipt", isNew: false },
    { id: "workspace-invite", label: "Workspace Invite", isNew: false },
    { id: "product-update", label: "Product Update", isNew: false },
    { id: "weekly-digest", label: "Weekly Digest", isNew: false },
  ];

  return (
    <aside className="w-56 shrink-0 border-r border-zinc-200/80 dark:border-zinc-800/80 pr-4 pb-12 pt-2 select-none hidden md:block">
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
                className="flex items-center justify-between rounded-md px-2.5 py-1.5 font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/60 transition-colors text-xs"
              >
                <span>{item.label}</span>
                {item.hasDot && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Templates Catalog */}
        <div>
          <h4 className="mb-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider">
            Templates
          </h4>
          <div className="space-y-0.5 text-sm">
            {templates.map((tpl) => {
              const isSelected = currentTemplateId === tpl.id;
              return (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => onSelectTemplate(tpl.id)}
                  className={`w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  <span>{tpl.label}</span>
                  {tpl.isNew && (
                    <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400">
                      New
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
