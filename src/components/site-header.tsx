"use client";

import React, { useState } from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Search, Plus, ExternalLink, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-black/95">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo & Nav Links */}
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 group">
            <Logo className="w-8 h-8 transition-transform group-hover:scale-105" />
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-50">
                Reloop
              </span>
              <span className="text-zinc-400 dark:text-zinc-500 text-sm font-medium">
                Templates
              </span>
              <span className="hidden sm:inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                v0.1
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-zinc-900 dark:text-zinc-50 font-semibold"
            >
              Templates
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Blocks
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Charts
            </a>
            <a
              href="https://reloop.sh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              <span>Reloop.sh</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>

        {/* Right: Search, GitHub, Theme, New */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search documentation input */}
          <div className="relative hidden sm:flex items-center">
            <Search className="w-3.5 h-3.5 absolute left-3 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="h-8 w-44 lg:w-64 rounded-md border border-zinc-200 bg-zinc-50/50 pl-8 pr-12 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-700 transition-all"
            />
            <kbd className="pointer-events-none absolute right-2 top-1.5 hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-200 bg-white px-1.5 font-mono text-[10px] font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
              ⌘K
            </kbd>
          </div>

          {/* GitHub Stars Button */}
          <a
            href="https://github.com/reloop-labs/reloop-templates"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>124k</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* + New Button */}
          <a
            href="https://console.reloop.sh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center gap-1 rounded-md bg-zinc-900 px-3 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-600 dark:text-zinc-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
