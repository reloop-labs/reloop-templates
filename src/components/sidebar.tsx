"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileCode,
  Folder,
  FolderOpen,
  ExternalLink,
  Search,
} from "lucide-react";
import { TEMPLATE_CATEGORIES } from "../templates/data";

interface SidebarProps {
  selectedTemplateId: string;
  onSelectTemplate: (id: string) => void;
}

export function Sidebar({ selectedTemplateId, onSelectTemplate }: SidebarProps) {
  // Open 01-getting-started and 02-auth-security by default
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "01-getting-started": true,
    "02-auth-security": true,
    "03-transactional": false,
    "04-lifecycle": false,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside className="w-72 h-screen flex flex-col bg-[#0b0c12] border-r border-[#171a26] select-none shrink-0 text-sm">
      {/* Brand Header */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-[#171a26]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-sm">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 12c-2-2.5-4-4-6.5-4a4.5 4.5 0 1 0 0 9c2.5 0 4.5-1.5 6.5-4zm0 0c2 2.5 4 4 6.5 4a4.5 4.5 0 1 0 0-9c-2.5 0-4.5 1.5-6.5 4z" />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-white tracking-tight">
            <span>reloop</span>
            <span className="text-slate-400 font-normal">templates</span>
          </div>
        </div>

        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40 text-indigo-300">
          preview
        </span>
      </div>

      {/* Filter / Search Bar */}
      <div className="p-3 border-b border-[#171a26]">
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-2.5 text-slate-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#12141e] text-slate-200 placeholder-slate-500 rounded-lg border border-[#1e2333] focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Folder Tree Navigation */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {TEMPLATE_CATEGORIES.map((category) => {
          const isOpen = openCategories[category.id] ?? false;
          const filteredItems = category.items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && filteredItems.length === 0) {
            return null;
          }

          return (
            <div key={category.id} className="space-y-0.5">
              {/* Category Folder Header */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 hover:bg-[#131622] rounded-md transition-colors group"
              >
                <div className="flex items-center gap-1.5 truncate">
                  {isOpen ? (
                    <FolderOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  ) : (
                    <Folder className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                  <span className="truncate">{category.name}</span>
                </div>
                {isOpen ? (
                  <ChevronDown className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              {/* Template Items */}
              {isOpen && (
                <div className="pl-3 pr-1 space-y-0.5 border-l border-[#1a1d2c] ml-3.5 my-0.5">
                  {filteredItems.map((item) => {
                    const isSelected = selectedTemplateId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectTemplate(item.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-lg transition-all text-left ${
                          isSelected
                            ? "bg-indigo-600/15 text-indigo-300 border border-indigo-500/30 font-medium"
                            : "text-slate-400 hover:text-slate-200 hover:bg-[#131622]"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileCode
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isSelected ? "text-indigo-400" : "text-slate-500"
                            }`}
                          />
                          <span className="truncate">{item.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      <div className="p-3 border-t border-[#171a26] bg-[#08090f] flex items-center justify-between text-xs text-slate-400">
        <a
          href="https://github.com/reloop-labs/reloop"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>
        <a
          href="https://reloop.sh"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-white transition-colors text-[11px]"
        >
          <span>reloop.sh</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </aside>
  );
}
