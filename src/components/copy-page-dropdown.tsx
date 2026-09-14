"use client";

import React, { useState, useRef, useEffect } from "react";
import { EmailTemplate } from "../templates/types";
import { Copy, ChevronDown, Check, ArrowLeft, ArrowRight, FileText, Sparkles, MessageSquare } from "lucide-react";

interface CopyPageDropdownProps {
  template: EmailTemplate;
  onPrev?: () => void;
  onNext?: () => void;
}

export function CopyPageDropdown({ template, onPrev, onNext }: CopyPageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyLink = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://templates.reloop.sh";
    const shareableUrl = `${origin}?template=${template.id}`;
    navigator.clipboard.writeText(shareableUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyMarkdown = () => {
    const md = `# ${template.title}\n\n${template.description}\n\n\`\`\`tsx\n${template.code}\n\`\`\`\n`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(template.html || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPlainText = () => {
    navigator.clipboard.writeText(template.plainText || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyReact = () => {
    navigator.clipboard.writeText(template.code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-1.5" ref={dropdownRef}>
      {/* Copy Page Dropdown Button */}
      <div className="relative inline-block text-left">
        <div className="inline-flex rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-2xs">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900 rounded-l-md transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-500" />
            )}
            <span>Copy Page</span>
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="border-l border-zinc-200 px-1.5 py-1.5 text-zinc-500 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 rounded-r-md transition-colors"
            aria-expanded={isOpen}
            aria-label="More options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 z-50 mt-1.5 w-56 origin-top-right rounded-lg border border-zinc-200 bg-white p-1 text-xs shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <button
              type="button"
              onClick={() => {
                handleCopyHtml();
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-zinc-500" />
              <span>Copy HTML</span>
            </button>
            <button
              type="button"
              onClick={() => {
                handleCopyPlainText();
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-500" />
              <span>Copy Plain Text</span>
            </button>
            <button
              type="button"
              onClick={() => {
                handleCopyReact();
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-zinc-500" />
              <span>Copy React / TSX</span>
            </button>
            <div className="my-1 border-t border-zinc-100 dark:border-zinc-800" />
            <button
              type="button"
              onClick={() => {
                handleCopyMarkdown();
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-500" />
              <span>View as Markdown</span>
            </button>
            <a
              href={`https://v0.dev?q=${encodeURIComponent("Create an email template like " + template.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
              <span>Open in v0</span>
            </a>
            <a
              href={`https://chatgpt.com/?q=${encodeURIComponent("Explain how to use this email template: " + template.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-zinc-500" />
              <span>Open in ChatGPT</span>
            </a>
            <a
              href={`https://claude.ai/new?q=${encodeURIComponent("Explain how to use this email template: " + template.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
              <span>Open in Claude</span>
            </a>
            <a
              href={`https://scira.app?q=${encodeURIComponent("Reloop email template " + template.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
              <span>Open in Scira</span>
            </a>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={onPrev}
        title="Previous Template"
        className="p-1.5 rounded-md border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        title="Next Template"
        className="p-1.5 rounded-md border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 transition-colors"
      >
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
