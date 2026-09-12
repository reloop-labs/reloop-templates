"use client";

import React, { useState } from "react";
import { HelloWorldTemplate } from "../templates/hello-world/template";
import { DevicePreset } from "./topbar";

interface PreviewCanvasProps {
  devicePreset: DevicePreset;
  currentTemplateId: string;
}

export function PreviewCanvas({ devicePreset }: PreviewCanvasProps) {
  // Preset pixel widths
  const getPresetWidth = () => {
    switch (devicePreset) {
      case "mobile":
        return "max-w-[390px]";
      case "tablet":
        return "max-w-[768px]";
      case "desktop":
      default:
        return "max-w-[1024px]";
    }
  };

  const getPresetLabel = () => {
    switch (devicePreset) {
      case "mobile":
        return "Mobile • 390px";
      case "tablet":
        return "Tablet • 768px";
      case "desktop":
      default:
        return "Desktop • 1024px";
    }
  };

  return (
    <div className="relative flex-1 h-[calc(100vh-3.5rem)] overflow-y-auto bg-canvas-dots p-6 sm:p-10 flex flex-col items-center justify-start">
      {/* Viewport size indicator badge */}
      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121520]/80 backdrop-blur border border-[#212638] text-[11px] font-mono text-slate-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>{getPresetLabel()}</span>
      </div>

      {/* Frame Container with simulated drag handles */}
      <div
        className={`relative w-full ${getPresetWidth()} transition-all duration-300 ease-out bg-[#07080d] rounded-2xl border border-[#1b1f2e] shadow-2xl p-4 sm:p-6`}
      >
        {/* Top Handle */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-700/60 rounded-full" />

        {/* Left Handle */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-slate-700/60 rounded-full" />

        {/* Right Handle */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-slate-700/60 rounded-full" />

        {/* Bottom Handle */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-700/60 rounded-full" />

        {/* Rendered Template */}
        <div className="w-full flex justify-center py-2">
          <HelloWorldTemplate />
        </div>
      </div>
    </div>
  );
}
