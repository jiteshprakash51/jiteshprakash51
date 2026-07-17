import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Bot, Terminal, Shield, Cpu, MapPin, Zap, Activity } from "lucide-react";

const typingPhrases = [
  "AI Developer",
  "Robotics Enthusiast",
  "Cybersecurity Learner",
  "Python Developer",
  "Open Source Contributor",
  "Problem Solver",
  "Future Engineer",
  "Building Technology For Nepal"
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // System status state
  const [systemUptime, setSystemUptime] = useState("00:00:00");
  const [pingTime, setPingTime] = useState(24);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentPhrase) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      setTypingSpeed(300); // pause before next
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex, typingSpeed]);

  // Live telemetry timer
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Date.now() - start;
      const hours = Math.floor(diff / 3600000).toString().padStart(2, "0");
      const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, "0");
      const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, "0");
      setSystemUptime(`${hours}:${minutes}:${seconds}`);

      // Fluctuating ping
      setPingTime(Math.floor(22 + Math.random() * 5));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen py-24 flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: 3D Holographic Profile Frame & Title (5 columns) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Holographic Frame */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 mb-8 select-none group">
            {/* Outer Glowing Rotating Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            {/* Secondary Opposite Rotating Ring */}
            <motion.div
              className="absolute inset-2 rounded-full border border-dashed border-purple-500/30"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            />

            {/* Glowing Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500 filter drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 filter drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]" />

            {/* Glassmorphic Main Frame */}
            <div className="absolute inset-4 bg-slate-950/70 backdrop-blur-md border border-slate-800/80 rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 shadow-2xl transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-20" />
              
              {/* Radar Sweeping line */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-cyan-400/50 shadow-[0_0_8px_#22d3ee] z-20"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />

              {/* Holographic Neural Net Artwork Placeholder */}
              <div className="w-full h-full relative border border-slate-900 bg-slate-950/40 rounded flex flex-col items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-40 h-40 opacity-70 stroke-cyan-400/80 fill-none">
                  {/* Constellation web */}
                  <line x1="20" y1="30" x2="50" y2="15" strokeWidth="0.5" strokeDasharray="2 1" />
                  <line x1="50" y1="15" x2="80" y2="30" strokeWidth="0.5" strokeDasharray="2 1" />
                  <line x1="80" y1="30" x2="75" y2="70" strokeWidth="0.5" />
                  <line x1="75" y1="70" x2="50" y2="85" strokeWidth="0.5" />
                  <line x1="50" y1="85" x2="25" y2="70" strokeWidth="0.5" />
                  <line x1="25" y1="70" x2="20" y2="30" strokeWidth="0.5" />
                  <line x1="20" y1="30" x2="50" y2="50" strokeWidth="0.5" />
                  <line x1="50" y1="15" x2="50" y2="50" strokeWidth="0.5" />
                  <line x1="80" y1="30" x2="50" y2="50" strokeWidth="0.5" />
                  <line x1="75" y1="70" x2="50" y2="50" strokeWidth="0.5" />
                  <line x1="50" y1="85" x2="50" y2="50" strokeWidth="0.5" />
                  <line x1="25" y1="70" x2="50" y2="50" strokeWidth="0.5" />

                  {/* Pulsing core nodes */}
                  <motion.circle cx="50" cy="50" r="4" fill="#22d3ee" animate={{ r: [3, 6, 3] }} transition={{ repeat: Infinity, duration: 2 }} />
                  <circle cx="20" cy="30" r="2.5" fill="#a78bfa" />
                  <circle cx="50" cy="15" r="2" fill="#fff" />
                  <circle cx="80" cy="30" r="2.5" fill="#22d3ee" />
                  <circle cx="75" cy="70" r="3" fill="#a78bfa" />
                  <circle cx="50" cy="85" r="2" fill="#34d399" />
                  <circle cx="25" cy="70" r="2.5" fill="#22d3ee" />
                </svg>

                {/* Cyber labels */}
                <div className="absolute bottom-3 left-3 font-mono text-[9px] text-slate-500 tracking-wider">
                  SYS_ID: 51_CHAUDHARY
                </div>
                <div className="absolute top-3 right-3 font-mono text-[9px] text-emerald-400 tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  LOCK_ON
                </div>
              </div>
            </div>

            {/* Particle orbits */}
            <motion.div
              className="absolute -top-4 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full filter blur-[1px] shadow-[0_0_8px_#22d3ee]"
              animate={{ x: [0, 100, 0], y: [0, -30, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 right-1/4 w-2 h-2 bg-purple-500 rounded-full filter blur-[1px] shadow-[0_0_8px_#a78bfa]"
              animate={{ x: [0, -120, 0], y: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
          </div>

          {/* User Name with Premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs tracking-widest text-cyan-400 uppercase font-semibold mb-2">
              {"// CYBERNETIC COGNITION INITIATED"}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent mb-3">
              Jitesh Prakash Chaudhary
            </h1>
            <p className="font-sans text-lg text-slate-400 mb-6 max-w-md font-medium">
              Robotics Builder &amp; AI Systems Architect representing Nepal 🇳🇵
            </p>

            {/* CTA action hooks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#export-center"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.5)] border border-purple-500/20"
              >
                Get Profile Code
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-slate-800 hover:border-slate-700"
              >
                Explore Modules
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Terminal and Widgets (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Main Simulated Dev Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-slate-950/85 backdrop-blur-xl border border-slate-800/80 rounded-xl overflow-hidden shadow-2xl relative"
          >
            {/* Glowing neon shadow border */}
            <div className="absolute inset-0 border border-cyan-400/10 pointer-events-none rounded-xl" />

            {/* Window Header */}
            <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="font-mono text-xs text-slate-500 select-none flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-400" />
                jiteshprakash51@mainframe:~
              </div>
              <div className="w-12" /> {/* spacer */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm text-slate-300 min-h-[300px] flex flex-col justify-between">
              <div>
                {/* Code segment */}
                <div className="text-slate-500 mb-2">01 <span className="text-purple-400">import</span> {"{"} <span className="text-cyan-400">AI_Core</span>, <span className="text-emerald-400">Roboticist</span> {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-300">"nepal"</span>;</div>
                <div className="text-slate-500 mb-2">02 <span className="text-purple-400">const</span> developer <span className="text-rose-400">=</span> <span className="text-purple-400">new</span> <span className="text-cyan-400">AI_Core</span>({"{"}</div>
                <div className="text-slate-500 mb-2">03   name: <span className="text-emerald-300">"Jitesh Prakash Chaudhary"</span>,</div>
                
                {/* Typewriter active line */}
                <div className="flex items-center flex-wrap gap-1 mb-2">
                  <span className="text-slate-500">04</span>
                  <span className="text-slate-400 pl-4">focus:</span>
                  <span className="text-yellow-400 font-bold">"{typedText}"</span>
                  <span className="w-2 h-4 bg-cyan-400 animate-blink" />
                </div>

                <div className="text-slate-500 mb-2">05   origin: <span className="text-emerald-300">"Nepal 🇳🇵"</span>,</div>
                <div className="text-slate-500 mb-2">06   jarvisStatus: <span className="text-purple-400 font-bold">"ONLINE"</span></div>
                <div className="text-slate-500 mb-4">07 {"});"}</div>

                {/* Executable commands log */}
                <div className="border-t border-slate-900/60 pt-4 mt-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span>developer.init_neural_networks()</span>
                  </div>
                  <div className="text-cyan-400/80 pl-4">
                    [SUCCESS] Core neural matrix synchronized. 12 pathways stable.
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 pt-1">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span>developer.get_uptime()</span>
                  </div>
                  <div className="text-purple-400 pl-4">
                    [UPTIME] Mainframe operational: <span className="text-white font-bold">{systemUptime}</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="border-t border-slate-900/60 pt-4 mt-6 flex items-center justify-between text-slate-500 text-[10px] md:text-xs tracking-wider select-none">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ENV: PRODUCTION
                </span>
                <span>SECURE SHELL (AES_256)</span>
                <span className="text-cyan-400/80 font-bold">LATENCY: {pingTime}ms</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Bento Dashboard Row (3 mini widgets) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Widget 1: CPU Strength Meter */}
            <div className="bg-slate-950/70 backdrop-blur-md border border-slate-900 rounded-lg p-4 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">01 // TELEMETRY</span>
                <Activity size={14} className="text-purple-400 group-hover:animate-pulse" />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-slate-400">COGNITION</span>
                  <span className="text-purple-400 font-bold">85%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
            </div>

            {/* Widget 2: Hardware Nodes Sync */}
            <div className="bg-slate-950/70 backdrop-blur-md border border-slate-900 rounded-lg p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">02 // NODES</span>
                <Cpu size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-400">🤖 PWJARVIS</span>
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-400">📚 SEE MENTOR</span>
                  <span className="text-emerald-400 font-bold">STABLE</span>
                </div>
              </div>
            </div>

            {/* Widget 3: Geographic Coordinates Map */}
            <div className="bg-slate-950/70 backdrop-blur-md border border-slate-900 rounded-lg p-4 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">03 // GEOLOCATION</span>
                <MapPin size={14} className="text-emerald-400 group-hover:translate-y-[-2px] transition-transform duration-300" />
              </div>
              <div className="font-mono text-xs space-y-0.5">
                <div className="text-slate-300 font-bold">Kathmandu, NP</div>
                <div className="text-slate-500 text-[10px]">27.7172° N, 85.3240° E</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
