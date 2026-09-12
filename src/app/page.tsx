"use client";

import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Topbar, ViewMode, DevicePreset } from "../components/topbar";
import { PreviewCanvas } from "../components/preview-canvas";
import { CodeViewer } from "../components/code-viewer";
import { HELLO_WORLD_CODE } from "../templates/hello-world/code-snippet";
import { CheckCircle2, X } from "lucide-react";

export default function HomePage() {
  const [selectedTemplateId, setSelectedTemplateId] = useState("hello-world");
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [devicePreset, setDevicePreset] = useState<DevicePreset>("desktop");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("developer@reloop.sh");

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(HELLO_WORLD_CODE);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Clipboard fallback
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSendSuccess(true);
    setTimeout(() => {
      setSendSuccess(false);
      setShowSendModal(false);
    }, 1800);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#090a0f]">
      {/* Collapsible Left Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          selectedTemplateId={selectedTemplateId}
          onSelectTemplate={(id) => setSelectedTemplateId(id)}
        />
      )}

      {/* Main View Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navbar */}
        <Topbar
          currentFilename="hello-world.tsx"
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          devicePreset={devicePreset}
          onDevicePresetChange={setDevicePreset}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onSendTestEmail={() => setShowSendModal(true)}
          onCopyCode={handleCopyCode}
          isCopied={isCopied}
        />

        {/* Content Body: Preview or Code */}
        {viewMode === "preview" ? (
          <PreviewCanvas
            devicePreset={devicePreset}
            currentTemplateId={selectedTemplateId}
          />
        ) : (
          <CodeViewer />
        )}
      </div>

      {/* Send Test Email Modal */}
      {showSendModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0f111a] border border-[#212638] rounded-2xl shadow-2xl p-6 text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#1b1f2e] mb-4">
              <h3 className="text-sm font-semibold text-white">Send Test Email</h3>
              <button
                type="button"
                onClick={() => setShowSendModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {sendSuccess ? (
              <div className="py-6 flex flex-col items-center text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-bounce" />
                <h4 className="text-sm font-semibold text-white">Test email dispatched!</h4>
                <p className="text-xs text-slate-400">Sent hello-world.tsx to {recipientEmail}</p>
              </div>
            ) : (
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Recipient Address
                  </label>
                  <input
                    type="email"
                    required
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#161926] border border-[#24293d] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="p-3 rounded-lg bg-[#141624] border border-[#1e2236] text-[11px] text-slate-400 space-y-1">
                  <div className="font-semibold text-slate-300">Template Preview Mode</div>
                  <div>This will render the Hello World template and simulate SMTP delivery via Reloop.</div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSendModal(false)}
                    className="px-3.5 py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all active:scale-[0.98]"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
