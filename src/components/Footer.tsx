import { useEffect, useState } from "react";
import { Terminal, Shield, RefreshCw } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950/80 backdrop-blur-md py-12 px-4 md:px-8 select-none font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-slate-500">
        
        {/* Left Side: Brand Credits */}
        <div className="flex items-center gap-3">
          <Terminal size={14} className="text-cyan-400" />
          <div className="text-center md:text-left">
            <span className="text-white font-bold block">Jitesh Prakash Chaudhary</span>
            <span className="text-[10px] text-slate-600 block">© {new Date().getFullYear()} • ALL FREQUENCIES SECURED</span>
          </div>
        </div>

        {/* Center Side: Real-time clock relay */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="text-[10px] text-slate-600 block">KATHMANDU CLOCK</span>
            <span className="text-white font-bold block font-mono">{time || "00:00:00"}</span>
          </div>
          <div className="h-6 w-[1px] bg-slate-900" />
          <div className="text-center">
            <span className="text-[10px] text-slate-600 block">COPROCESSOR</span>
            <span className="text-cyan-400 font-bold block">INTEL_NODE_51</span>
          </div>
        </div>

        {/* Right Side: Security status badge */}
        <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold bg-emerald-500/5 px-3 py-1.5 rounded border border-emerald-500/10">
          <Shield size={12} />
          <span>STABLE CONNECTIVITY (SSL_GCM_256)</span>
        </div>

      </div>
    </footer>
  );
}
