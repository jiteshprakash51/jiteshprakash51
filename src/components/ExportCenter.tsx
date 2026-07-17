import { useState } from "react";
import { motion } from "motion/react";
import { exportableFiles } from "../data/profileData";
import { FileCode, Copy, Check, Eye, Download, Info } from "lucide-react";

export default function ExportCenter() {
  const [selectedFileIdx, setSelectedFileIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState<"code" | "render">("code");

  const activeFile = exportableFiles[selectedFileIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Trigger file download helper
  const handleDownload = () => {
    const blob = new Blob([activeFile.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = activeFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="export-center" className="w-full py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
            {"// NODE_05: REPOSITORY DEPLOYMENT CORE"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Mainframe Export Terminal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mt-4 mx-auto lg:mx-0 rounded" />
        </motion.div>

        {/* Export Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* File Explorer Selector Column (4 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 bg-slate-950/60 backdrop-blur-md border border-slate-900 rounded-2xl p-6 space-y-6"
          >
            <div>
              <h3 className="text-md font-bold text-white font-sans mb-1">Configuration Trees</h3>
              <p className="text-xs text-slate-500 font-mono uppercase">CHOOSE REPOSITORY MODULES TO EXTRACT</p>
            </div>

            <div className="space-y-2 select-none">
              {exportableFiles.map((file, idx) => {
                const isSelected = selectedFileIdx === idx;
                return (
                  <button
                    key={file.name}
                    onClick={() => {
                      setSelectedFileIdx(idx);
                      setCopied(false);
                      setPreviewMode("code");
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl font-mono text-xs transition-all duration-300 border text-left ${
                      isSelected
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                        : "bg-slate-950/80 border-slate-950 hover:border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FileCode size={14} className={isSelected ? "text-cyan-400" : "text-slate-500"} />
                      <div className="truncate">
                        <span className="font-bold block">{file.name}</span>
                        <span className="text-[10px] text-slate-500 block truncate font-mono">{file.path}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Helper Instructions Block */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-900 flex items-start gap-3">
              <Info size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-sans text-xs font-bold text-white block">Automated Setup</span>
                <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                  These files are pre-generated at their respective directories inside this workspace. Copy them directly or download them for your GitHub profile repository (`jiteshprakash51`).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code Viewer Terminal (8 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 bg-slate-950/85 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col h-[580px]"
          >
            
            {/* Terminal Header Bar */}
            <div className="bg-slate-900/90 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/60 select-none">
              
              {/* File Title and Stats */}
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-white uppercase">{activeFile.name}</span>
                <span className="font-mono text-[10px] text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">{activeFile.language}</span>
              </div>

              {/* Toolbar Buttons */}
              <div className="flex items-center gap-2 font-mono text-[11px]">
                
                {/* Code vs Render Mode Switcher */}
                {activeFile.name === "README.md" && (
                  <div className="flex bg-slate-950 rounded border border-slate-900 p-0.5">
                    <button
                      onClick={() => setPreviewMode("code")}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-colors ${
                        previewMode === "code" ? "bg-slate-900 text-cyan-400 font-bold" : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      CODE_VIEW
                    </button>
                    <button
                      onClick={() => setPreviewMode("render")}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-colors ${
                        previewMode === "render" ? "bg-slate-900 text-cyan-400 font-bold" : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      LIVE_README_PREVIEW
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-800 flex items-center gap-1.5 transition-colors font-bold"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-800 flex items-center gap-1.5 transition-colors font-bold"
                >
                  <Download size={12} />
                  <span>EXTRACT</span>
                </button>

              </div>

            </div>

            {/* Terminal View Body */}
            <div className="flex-1 overflow-auto p-6 font-mono text-xs md:text-sm text-slate-300 leading-relaxed bg-[#050811]/95">
              {previewMode === "code" ? (
                <pre className="whitespace-pre">
                  <code>{activeFile.content}</code>
                </pre>
              ) : (
                /* Live render visualizer preview for README */
                <div className="font-sans prose prose-invert max-w-none text-slate-300 select-text p-2">
                  <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl space-y-6">
                    <div className="text-center">
                      <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg max-w-md mx-auto mb-4 font-mono text-xs text-slate-500">
                        [LIVE PREVIEW: assets/banner.svg]
                      </div>
                      <iframe 
                        src="/assets/banner.svg" 
                        className="w-full h-44 rounded-lg border border-slate-800 overflow-hidden bg-[#030712] shadow-2xl" 
                        title="Banner Render" 
                      />
                    </div>

                    <div className="border-t border-slate-900 pt-6">
                      <div className="font-mono text-xs text-cyan-400 uppercase font-semibold mb-2">{"// COGNITION STATUS"}</div>
                      <h3 className="text-xl font-bold text-white mb-2">Jitesh Prakash Chaudhary</h3>
                      <p className="text-xs text-slate-400">Robotics Builder &amp; AI Systems Architect • Kathmandu, Nepal 🇳🇵</p>
                    </div>

                    <div className="border-t border-slate-900 pt-6">
                      <h4 className="font-mono text-xs text-slate-500 uppercase font-bold mb-3">EXPERIMENTAL NODES</h4>
                      <ul className="space-y-2 text-xs">
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-400">»</span>
                          <span>🤖 PWJARVIS — Intelligent Raspberry Pi robot with movement &amp; vision</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-400">»</span>
                          <span>🏛️ Corruption Controller — Civic audit transparency ledger portal</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-400">»</span>
                          <span>📚 SEE Mentor AI — Mentoring &amp; predictive SEE study companion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Custom footer specs info */}
            <div className="bg-slate-900/40 border-t border-slate-800/40 px-6 py-3 font-mono text-[10px] text-slate-500 tracking-wider flex justify-between items-center select-none">
              <span>{activeFile.description}</span>
              <span>PATH: {activeFile.path}</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
