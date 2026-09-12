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
  const sections = [
    { label: "Introduction", href: "#" },
    { label: "Components", href: "#", isActive: false },
    { label: "Installation", href: "#installation" },
    { label: "Theming", href: "#" },
    { label: "CLI", href: "#" },
    { label: "Typeset", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Registry", href: "#" },
    { label: "Changelog", href: "#", hasDot: true },
  ];

  const templates = [
    { id: "hello-world", label: "Hello World" },
    { id: "magic-link", label: "Magic Link" },
    { id: "reset-password", label: "Password Reset" },
    { id: "two-factor-code", label: "Two Factor Code" },
    { id: "invoice-receipt", label: "Invoice Receipt" },
    { id: "workspace-invite", label: "Workspace Invite" },
    { id: "product-update", label: "Product Update" },
    { id: "weekly-digest", label: "Weekly Digest" },
  ];

  return (
    <aside className="w-60 shrink-0 border-r border-zinc-200/80 dark:border-zinc-800/80 pr-4 pb-12 pt-6 select-none hidden md:block">
      {/* Sections Group */}
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider">
            Sections
          </h4>
          <div className="space-y-0.5 text-sm">
            {sections.map((sec) => (
              <a
                key={sec.label}
                href={sec.href}
                className="flex items-center justify-between rounded-md px-2.5 py-1.5 font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/60 transition-colors"
              >
                <span>{sec.label}</span>
                {sec.hasDot && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Templates / Components Group */}
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
                  className={`w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-left font-medium transition-all ${
                    isSelected
                      ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  <span>{tpl.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
