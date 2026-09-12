"use client";

import React, { useState } from "react";
import { EmailTemplate } from "../templates/types";
import { Copy, Check, Terminal } from "lucide-react";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

interface InstallationSectionProps {
  template: EmailTemplate;
}

export function InstallationSection({ template }: InstallationSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState<"command" | "manual">("command");
  const [packageManager, setPackageManager] = useState<PackageManager>("bun");
  const [copied, setCopied] = useState(false);

  const getCommand = () => {
    switch (packageManager) {
      case "pnpm":
        return `pnpm dlx reloop-cli add ${template.id}`;
      case "npm":
        return `npx reloop-cli add ${template.id}`;
      case "yarn":
        return `yarn dlx reloop-cli add ${template.id}`;
      case "bun":
      default:
        return `bunx --bun reloop-cli add ${template.id}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="installation" className="space-y-4 pt-8 scroll-mt-20">
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
        <span>Installation</span>
      </h3>

      {/* Command / Manual Tabs */}
      <div className="flex items-center gap-4 text-sm font-medium border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <button
          type="button"
          onClick={() => setActiveSubTab("command")}
          className={`transition-colors ${
            activeSubTab === "command"
              ? "text-zinc-900 dark:text-zinc-50 font-semibold"
              : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          Command
        </button>
        <button
          type="button"
          onClick={() => setActiveSubTab("manual")}
          className={`transition-colors ${
            activeSubTab === "manual"
              ? "text-zinc-900 dark:text-zinc-50 font-semibold"
              : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          Manual
        </button>
      </div>

      {activeSubTab === "command" ? (
        <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-4 space-y-3 shadow-2xs">
          {/* Package Manager Pills */}
          <div className="flex items-center gap-2 text-xs font-medium">
            <div className="p-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            {(["pnpm", "npm", "yarn", "bun"] as PackageManager[]).map((pm) => (
              <button
                key={pm}
                type="button"
                onClick={() => setPackageManager(pm)}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  packageManager === pm
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-2xs"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {pm}
              </button>
            ))}
          </div>

          {/* Terminal Command Line with copy */}
          <div className="flex items-center justify-between font-mono text-xs bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/80 rounded-lg px-3.5 py-2.5 text-zinc-900 dark:text-zinc-100">
            <code>{getCommand()}</code>
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              title="Copy command"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-2">
          <p>
            Copy the template component from the{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              Typescript/React
            </span>{" "}
            tab above into your project at:
          </p>
          <code className="block p-2 rounded bg-zinc-100 dark:bg-zinc-900 font-mono text-zinc-900 dark:text-zinc-200">
            src/templates/{template.id}.tsx
          </code>
        </div>
      )}
    </div>
  );
}
