"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  X,
  Sparkles,
  Shield,
  CreditCard,
  Bell,
  Code,
  ArrowRight,
  CornerDownLeft,
  FileText,
  Compass,
} from "lucide-react";
import { ALL_TEMPLATES } from "../templates/registry";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (id: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  keywords: string;
}

const TEMPLATE_KEYWORDS: Record<string, string> = {
  "amazon-invoice": "amazon order invoice ecommerce receipt shopping shipping tracking delivery",
  "stripe-receipt": "stripe payment receipt billing invoice saas subscription transaction credit card",
  "vercel-deployment": "vercel deploy git nextjs build developer domain production preview url",
  "linear-issue": "linear issue ticket task notification priority bug tracking project management",
  "github-pr": "github pull request pr merge git code review developer diff commits",
  "airbnb-reservation": "airbnb booking travel reservation trip itinerary vacation stay checkin host",
  "notion-invite": "notion workspace team invite collaboration productivity notes document workspace",
  "figma-comment": "figma design canvas comment notification mentions review vector ui mockup",
  "raycast-extension": "raycast store extension dark mode obsidian shortcut kbd mac command prompt",
  "magic-link": "magic link authentication login passwordless email security signin token",
  "otp-code": "otp verification 2fa two factor code pin auth security number digits",
  "new-device-alert": "new device signin alert login location security ip warning audit",
  "reset-password": "reset password forgot credentials account auth security recovery change",
  "api-key-created": "api key created secret token credentials auth security developer access revoke prefix",
  "payment-failed": "payment failed dunning billing card decline stripe subscription overdue invoice",
  "usage-limit": "usage quota limit warning meter capacity upgrade saas tier 85 percent threshold",
  "workspace-invite": "workspace invite member team join organization saas collaborate",
  "founder-welcome": "founder welcome ceo letter onboarding personal message greeting ceo note",
  "weekly-digest": "weekly digest newsletter analytics metrics summary performance stats report",
  "hello-world": "hello world starter minimal simple basic boilerplate clean",
  "lumen-welcome": "lumen welcome onboarding getting started setup analytics amber",
  "lumen-otp": "lumen otp verification code 2fa two factor pin auth security 6 digit lumen.co amber",
  "lumen-magic-link": "lumen magic link passwordless signin login authentication session lumen.co amber",
  "lumen-reset-password": "lumen reset password forgot credentials security account recovery lumen.co amber",
  "lumen-invite": "lumen team workspace invite member collaboration join organization lumen.co amber",
  "lumen-usage-80": "lumen usage limit quota 80 warning tier meter billing amber lumen.co",
  "lumen-usage-100": "lumen usage limit quota 100 exceeded upgrade billing amber lumen.co",
  "lumen-api-key": "lumen api key created secret token credentials auth security developer access revoke amber lumen.co",
  "lumen-invoice": "lumen invoice payment receipt billing subscription renew pro plan visa card amber lumen.co",
  "lumen-digest": "lumen weekly analytics digest traffic pageviews unique visitors report performance stats amber lumen.co",
  "lumen-new-device": "lumen new device signin login alert location ip security audit warning amber lumen.co",
  "lumen-payment-failed": "lumen payment failed dunning billing decline card overdue action required grace period amber lumen.co",
};

const ALL_SEARCH_ITEMS: SearchItem[] = [
  {
    id: "introduction",
    title: "Introduction & Showcase",
    description: "Overview of production-ready templates, featured brands, and universal email client compatibility.",
    category: "Getting Started",
    keywords: "intro introduction overview getting started brands showcase documentation home",
  },
  ...ALL_TEMPLATES.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    category: t.category,
    keywords: TEMPLATE_KEYWORDS[t.id] || "",
  })),
];

function getCategoryIcon(category: string) {
  switch (category) {
    case "Brands & Recreations":
      return <Sparkles className="w-4 h-4 text-purple-500 shrink-0" />;
    case "Auth & Security":
      return <Shield className="w-4 h-4 text-emerald-500 shrink-0" />;
    case "SaaS & Billing":
      return <CreditCard className="w-4 h-4 text-blue-500 shrink-0" />;
    case "Growth & Onboarding":
      return <Bell className="w-4 h-4 text-amber-500 shrink-0" />;
    case "Getting Started":
      return <Compass className="w-4 h-4 text-indigo-500 shrink-0" />;
    default:
      return <FileText className="w-4 h-4 text-zinc-400 shrink-0" />;
  }
}

export function SearchModal({ isOpen, onClose, onSelectTemplate }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return ALL_SEARCH_ITEMS;
    }

    return ALL_SEARCH_ITEMS.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchId = item.id.toLowerCase().includes(q);
      const matchKeywords = item.keywords.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchCategory || matchId || matchKeywords;
    });
  }, [query]);

  // Reset query and active index on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset active index when search results change
  useEffect(() => {
    setActiveIndex(0);
  }, [filteredItems]);

  // Ensure active element is scrolled into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector<HTMLElement>(`[data-search-index="${activeIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const handleSelect = (id: string) => {
    onSelectTemplate(id);
    onClose();
  };

  // Keyboard navigation within the modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (filteredItems.length === 0 ? 0 : (prev + 1) % filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (filteredItems.length === 0 ? 0 : prev === 0 ? filteredItems.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[activeIndex]) {
        handleSelect(filteredItems[activeIndex].id);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search templates"
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:pt-[12vh] bg-black/60 backdrop-blur-xs transition-opacity duration-150 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/70 flex flex-col max-h-[85vh] sm:max-h-[600px] transition-all transform animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search templates, brands, or keywords..."
            className="w-full h-13 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-50 dark:placeholder:text-zinc-500"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 rounded transition-colors cursor-pointer"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex h-5 items-center rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              ESC
            </kbd>
          )}
        </div>

        {/* Quick Brands Suggestions when query is empty */}
        {!query && (
          <div className="px-4 py-2.5 bg-zinc-50/70 dark:bg-zinc-900/40 border-b border-zinc-100 dark:border-zinc-900/60 flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none">
            <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 shrink-0 mr-1">
              Popular:
            </span>
            {[
              { id: "github-pr", name: "GitHub" },
              { id: "linear-issue", name: "Linear" },
              { id: "notion-invite", name: "Notion" },
              { id: "figma-comment", name: "Figma" },
              { id: "raycast-extension", name: "Raycast" },
              { id: "stripe-receipt", name: "Stripe" },
              { id: "amazon-invoice", name: "Amazon" },
            ].map((brand) => (
              <button
                key={brand.id}
                type="button"
                onClick={() => handleSelect(brand.id)}
                className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/80 transition-colors shrink-0 cursor-pointer"
              >
                <span>{brand.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin"
          role="listbox"
        >
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center">
              <Search className="w-8 h-8 mx-auto text-zinc-300 dark:text-zinc-700 mb-2.5" />
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                No templates found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 max-w-xs mx-auto">
                Try searching for <span className="font-semibold text-zinc-600 dark:text-zinc-400">github</span>,{" "}
                <span className="font-semibold text-zinc-600 dark:text-zinc-400">stripe</span>,{" "}
                <span className="font-semibold text-zinc-600 dark:text-zinc-400">auth</span>, or{" "}
                <span className="font-semibold text-zinc-600 dark:text-zinc-400">receipt</span>.
              </p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  data-search-index={index}
                  onClick={() => handleSelect(item.id)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full text-left flex items-start gap-3 p-2.5 rounded-lg transition-all group cursor-pointer ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900/50"
                  }`}
                  role="option"
                  aria-selected={isActive}
                >
                  <div className="mt-0.5 p-1 rounded-md bg-white border border-zinc-200/80 shadow-2xs dark:bg-zinc-950 dark:border-zinc-800">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold truncate ${
                          isActive
                            ? "text-zinc-900 dark:text-zinc-50"
                            : "text-zinc-800 dark:text-zinc-200"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="inline-flex items-center rounded-sm bg-zinc-100 px-1.5 py-0.2 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5 leading-normal">
                      {item.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className="shrink-0 flex items-center gap-1 text-[10px] text-zinc-400 dark:text-zinc-500 self-center">
                      <span className="hidden sm:inline">Open</span>
                      <CornerDownLeft className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer with keyboard navigation hints */}
        <div className="px-4 py-2 bg-zinc-50/80 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="font-mono font-medium text-zinc-700 dark:text-zinc-300">
              {filteredItems.length}
            </span>
            <span>{filteredItems.length === 1 ? "result" : "templates available"}</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-mono text-[9px] dark:border-zinc-800 dark:bg-zinc-950">
                ↑
              </kbd>
              <kbd className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-mono text-[9px] dark:border-zinc-800 dark:bg-zinc-950">
                ↓
              </kbd>
              <span>navigate</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-mono text-[9px] dark:border-zinc-800 dark:bg-zinc-950">
                ↵
              </kbd>
              <span>select</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-mono text-[9px] dark:border-zinc-800 dark:bg-zinc-950">
                esc
              </kbd>
              <span>close</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
