"use client";

import React, { useState } from "react";
import { EmailTemplate } from "../templates/types";
import { Copy, Check } from "lucide-react";

interface UsageSectionProps {
  template: EmailTemplate;
}

export function UsageSection({ template }: UsageSectionProps) {
  const [copied, setCopied] = useState(false);

  const usageCode = template.usageCode || `import TemplateEmail from "@/templates/${template.id}";
import { reloop } from "@reloop/sdk";

await reloop.emails.send({
  from: "notifications@yourdomain.com",
  to: "user@example.com",
  subject: "Notification from Reloop",
  react: <TemplateEmail />,
});`;

  const lines = usageCode.trim().split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(usageCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="usage" className="space-y-4 pt-8 scroll-mt-20">
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Usage
      </h3>

      <div className="relative rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 p-4 font-mono text-xs overflow-hidden shadow-2xs">
        <button
          type="button"
          onClick={handleCopy}
          className="absolute right-4 top-4 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          title="Copy usage code"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>

        <pre className="overflow-x-auto leading-relaxed">
          {lines.map((line, idx) => (
            <div key={idx} className="flex gap-4 hover:bg-white/[0.02]">
              <span className="w-6 text-right select-none text-zinc-600">{idx + 1}</span>
              <span className="text-zinc-300 whitespace-pre">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
