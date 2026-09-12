"use client";

import React from "react";
import { HELLO_WORLD_CODE } from "../templates/hello-world/code-snippet";

export function CodeViewer() {
  const lines = HELLO_WORLD_CODE.trim().split("\n");

  return (
    <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-y-auto bg-[#07080d] p-6">
      <div className="max-w-4xl mx-auto rounded-xl border border-[#1b1f2e] bg-[#0b0d14] overflow-hidden shadow-2xl">
        <div className="px-4 py-2.5 bg-[#0e1019] border-b border-[#1b1f2e] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>hello-world.tsx</span>
          <span>TypeScript / React</span>
        </div>

        <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed">
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="w-10 pr-4 select-none text-right text-slate-600 font-mono text-[11px]">
                    {idx + 1}
                  </td>
                  <td className="text-slate-300 font-mono whitespace-pre">
                    {/* Basic keyword coloring */}
                    {formatLine(line)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function formatLine(line: string) {
  // Simple token formatting for readability
  if (line.trim().startsWith("//") || line.trim().startsWith("/*")) {
    return <span className="text-slate-500 italic">{line}</span>;
  }
  if (line.includes("import ") || line.includes("export ") || line.includes("return ") || line.includes("const ") || line.includes("function ")) {
    return <span className="text-purple-400">{line}</span>;
  }
  if (line.includes("<") && line.includes(">")) {
    return <span className="text-indigo-300">{line}</span>;
  }
  return <span>{line}</span>;
}
