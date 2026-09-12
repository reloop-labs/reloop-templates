"use client";

import React from "react";
import {
  Code,
  Eye,
  Monitor,
  Smartphone,
  Tablet,
  Moon,
  Send,
  Copy,
  Check,
  PanelLeft,
  FileCode,
} from "lucide-react";

export type ViewMode = "preview" | "code";
export type DevicePreset = "desktop" | "tablet" | "mobile";

interface TopbarProps {
  currentFilename: string;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  devicePreset: DevicePreset;
  onDevicePresetChange: (preset: DevicePreset) => void;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onSendTestEmail: () => void;
  onCopyCode: () => void;
  isCopied: boolean;
}

export function Topbar({
  currentFilename,
  viewMode,
  onViewModeChange,
  devicePreset,
  onDevicePresetChange,
  isSidebarOpen,
  onToggleSidebar,
  onSendTestEmail,
  onCopyCode,
  isCopied,
}: TopbarProps) {
  return (
    <header className="h-14 bg-[#0b0c12] border-b border-[#171a26] px-4 flex items-center justify-between shrink-0 select-none z-20">
      {/* Left section: Sidebar toggle & Current template filename */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-[#151824] transition-colors"
        >
          <PanelLeft className="w-4 h-4" />
        </button>

        <div className="h-4 w-[1px] bg-[#1d2130]" />

        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <FileCode className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-medium text-slate-200">{currentFilename}</span>
        </div>
      </div>

      {/* Center section: View Mode toggle (Preview / Code) */}
      <div className="flex items-center bg-[#131520] border border-[#1d2130] rounded-lg p-0.5 shadow-inner">
        <button
          type="button"
          onClick={() => onViewModeChange("preview")}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-md font-medium transition-all ${
            viewMode === "preview"
              ? "bg-[#212638] text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Preview</span>
        </button>

        <button
          type="button"
          onClick={() => onViewModeChange("code")}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-md font-medium transition-all ${
            viewMode === "code"
              ? "bg-[#212638] text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Code</span>
        </button>
      </div>

      {/* Right section: Responsive Viewport Controls & Actions */}
      <div className="flex items-center gap-2.5">
        {/* Device Viewport switchers (when preview is active) */}
        {viewMode === "preview" && (
          <div className="flex items-center bg-[#131520] border border-[#1d2130] rounded-lg p-0.5 text-slate-400">
            <button
              type="button"
              onClick={() => onDevicePresetChange("desktop")}
              title="Desktop View (100%)"
              className={`p-1.5 rounded-md transition-all ${
                devicePreset === "desktop"
                  ? "bg-[#212638] text-white"
                  : "hover:text-slate-200"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDevicePresetChange("tablet")}
              title="Tablet View (768px)"
              className={`p-1.5 rounded-md transition-all ${
                devicePreset === "tablet"
                  ? "bg-[#212638] text-white"
                  : "hover:text-slate-200"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDevicePresetChange("mobile")}
              title="Mobile View (375px)"
              className={`p-1.5 rounded-md transition-all ${
                devicePreset === "mobile"
                  ? "bg-[#212638] text-white"
                  : "hover:text-slate-200"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Copy Code button */}
        {viewMode === "code" && (
          <button
            type="button"
            onClick={onCopyCode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151824] hover:bg-[#1d2233] border border-[#212638] text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        )}

        <div className="h-4 w-[1px] bg-[#1d2130]" />

        {/* Dark mode badge indicator */}
        <div className="p-1.5 rounded-lg text-slate-400 bg-[#131520] border border-[#1d2130]" title="Dark theme">
          <Moon className="w-3.5 h-3.5 text-slate-300" />
        </div>

        {/* Send Test Email action button */}
        <button
          type="button"
          onClick={onSendTestEmail}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-medium transition-all shadow-sm shadow-indigo-600/20"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send</span>
        </button>
      </div>
    </header>
  );
}
