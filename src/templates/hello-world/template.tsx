import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";

export function HelloWorldTemplate() {
  return (
    <div className="w-full max-w-[600px] mx-auto my-8 bg-[#0d0f15] border border-[#1e2232] rounded-2xl overflow-hidden shadow-2xl text-[#e2e8f0] font-sans">
      {/* Top Banner / Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Header */}
      <div className="px-8 pt-8 pb-4 flex items-center justify-between border-b border-[#181c28]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            {/* Reloop Infinity / Loop Icon */}
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12c-2-2.5-4-4-6.5-4a4.5 4.5 0 1 0 0 9c2.5 0 4.5-1.5 6.5-4zm0 0c2 2.5 4 4 6.5 4a4.5 4.5 0 1 0 0-9c-2.5 0-4.5 1.5-6.5 4z" />
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">reloop</span>
        </div>
        <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Template v0.1.0
        </span>
      </div>

      {/* Hero Visual Accent */}
      <div className="relative mx-8 mt-6 rounded-xl overflow-hidden bg-gradient-to-b from-[#161a28] to-[#0d0f15] border border-[#212638] p-8 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 uppercase">
            Hello World
          </h1>
          <p className="text-sm text-slate-400 max-w-[420px] leading-relaxed">
            Welcome to the new era of transactional email design. Built for high deliverability, dynamic variables, and developer happiness.
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="px-8 py-6 space-y-6">
        <div>
          <h2 className="text-base font-semibold text-slate-200 mb-2">
            Ready to test your email workflow?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            This is the official starter template in <span className="text-indigo-300 font-medium">reloop-templates</span>. It serves as your baseline for crafting pixel-perfect, cross-client responsive emails that render flawlessly across Outlook, Gmail, Apple Mail, and mobile clients.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-[#131622] border border-[#1f2438] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-slate-200">Rock-Solid HTML</div>
              <div className="text-[11px] text-slate-400">Battle-tested table layout under the hood</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#131622] border border-[#1f2438] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-slate-200">Dark Mode Ready</div>
              <div className="text-[11px] text-slate-400">Automatic media queries for dark mail clients</div>
            </div>
          </div>
        </div>

        {/* Quick Start Terminal Snippet */}
        <div className="rounded-xl bg-[#090b10] border border-[#1b1f2e] p-4 text-xs font-mono text-slate-300 space-y-1.5">
          <div className="flex items-center gap-1.5 text-slate-500 pb-1 border-b border-[#1b1f2e] text-[11px]">
            <Terminal className="w-3.5 h-3.5" />
            <span>reloop-cli send --template hello-world</span>
          </div>
          <div className="text-emerald-400 pt-1">✔ Template compiled in 14ms</div>
          <div className="text-slate-400">✉ Sent to: developer@company.com</div>
          <div className="text-slate-500">Status: 200 OK • Message ID: msg_88f920a1</div>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-2 text-center">
          <a
            href="https://reloop.sh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 active:scale-[0.98]"
          >
            <span>Confirm & Launch Email</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-slate-500 mt-2">
            Button not working? Copy this URL: <span className="underline text-slate-400">https://reloop.sh/verify?token=demo</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-6 bg-[#0a0c12] border-t border-[#181c28] text-center space-y-3">
        <p className="text-xs text-slate-500">
          You received this email because you are testing the Reloop template preview environment.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
          <a href="#" className="hover:text-white transition-colors underline">Documentation</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors underline">GitHub</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors underline">Unsubscribe</a>
        </div>
        <p className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} Reloop Labs, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
