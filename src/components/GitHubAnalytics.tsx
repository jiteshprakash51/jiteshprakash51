import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Play, RotateCcw, Trophy, Flame, BarChart3, Users, BookOpen, Sparkles, Code2 } from "lucide-react";

// Generate fake random grid of 40 columns x 7 rows representing commits
const initialGrid = Array.from({ length: 40 }, () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
);

export default function GitHubAnalytics() {
  const [grid, setGrid] = useState<number[][]>(initialGrid);
  const [snakeBody, setSnakeBody] = useState<Array<{ x: number; y: number }>>([
    { x: 3, y: 3 },
    { x: 2, y: 3 },
    { x: 1, y: 3 }
  ]);
  const [snakeDir, setSnakeDir] = useState<{ x: number; y: number }>({ x: 1, y: 0 });
  const [isSnakeRunning, setIsSnakeRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<"graph" | "trophies" | "metrics">("graph");

  // Snake engine loop
  useEffect(() => {
    if (!isSnakeRunning) return;

    const interval = setInterval(() => {
      setSnakeBody((prevBody) => {
        const head = prevBody[0];
        
        // Randomize direction occasionally to make it feel natural
        let nextDir = { ...snakeDir };
        if (Math.random() < 0.2) {
          const dirs = [
            { x: 1, y: 0 },
            { x: -1, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: -1 }
          ];
          // Filter out opposite direction to prevent hitting self instantly
          const validDirs = dirs.filter(
            (d) => d.x !== -snakeDir.x || d.y !== -snakeDir.y
          );
          nextDir = validDirs[Math.floor(Math.random() * validDirs.length)];
          setSnakeDir(nextDir);
        }

        // Calculate new head
        let newHeadX = head.x + nextDir.x;
        let newHeadY = head.y + nextDir.y;

        // Wrap around grid boundaries
        if (newHeadX >= 40) newHeadX = 0;
        if (newHeadX < 0) newHeadX = 39;
        if (newHeadY >= 7) newHeadY = 0;
        if (newHeadY < 0) newHeadY = 6;

        const newHead = { x: newHeadX, y: newHeadY };
        const newBody = [newHead, ...prevBody.slice(0, -1)];

        // Update grid intensity where snake eats
        setGrid((prevGrid) => {
          const nextGrid = prevGrid.map((col) => [...col]);
          // Boost current coordinates
          nextGrid[newHeadX][newHeadY] = Math.min(4, nextGrid[newHeadX][newHeadY] + 1);
          return nextGrid;
        });

        return newBody;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isSnakeRunning, snakeDir]);

  const resetSnake = () => {
    setIsSnakeRunning(false);
    setSnakeBody([
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 }
    ]);
    setSnakeDir({ x: 1, y: 0 });
    setGrid(Array.from({ length: 40 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))));
  };

  // Check if grid block is part of snake body
  const isSnakeCell = (x: number, y: number) => {
    return snakeBody.some((segment) => segment.x === x && segment.y === y);
  };

  const isSnakeHead = (x: number, y: number) => {
    return snakeBody[0].x === x && snakeBody[0].y === y;
  };

  return (
    <section id="github-analytics" className="w-full py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            {"// NODE_04: GITHUB ADVANCED TELEMETRY"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Live Mainframe Analytics
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-500 mt-4 mx-auto lg:mx-0 rounded" />
        </motion.div>

        {/* Custom Tab Panel Selection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex border-b border-slate-900 mb-10 overflow-x-auto select-none gap-2"
        >
          <button
            onClick={() => setActiveTab("graph")}
            className={`px-6 py-3 font-mono text-xs font-bold tracking-wider uppercase transition-all border-b-2 flex items-center gap-2 ${
              activeTab === "graph"
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <Play size={12} />
            <span>CONTRIBUTION_SNAKE</span>
          </button>
          <button
            onClick={() => setActiveTab("trophies")}
            className={`px-6 py-3 font-mono text-xs font-bold tracking-wider uppercase transition-all border-b-2 flex items-center gap-2 ${
              activeTab === "trophies"
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <Trophy size={12} />
            <span>OBSIDIAN_TROPHIES</span>
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={`px-6 py-3 font-mono text-xs font-bold tracking-wider uppercase transition-all border-b-2 flex items-center gap-2 ${
              activeTab === "metrics"
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <BarChart3 size={12} />
            <span>METRICS_LOG</span>
          </button>
        </motion.div>

        {/* Tab 1: Interactive Contribution Snake */}
        {activeTab === "graph" && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-950/60 backdrop-blur-md border border-slate-900 rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  Visual contribution board
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  TACTICAL CONTRIBUTION MATRIX WITH INTEGRATED AUTOMATED PATHFINDER
                </p>
              </div>

              {/* Game Controllers */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSnakeRunning(!isSnakeRunning)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold tracking-wider rounded uppercase transition-colors flex items-center gap-2"
                >
                  <Play size={12} fill="white" />
                  <span>{isSnakeRunning ? "PAUSE_SNAKE" : "RUN_SNAKE_AI"}</span>
                </button>
                <button
                  onClick={resetSnake}
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded border border-slate-800 transition-colors"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[640px] flex flex-col gap-1.5 select-none">
                <div className="flex gap-1.5">
                  {grid.map((col, xIdx) => (
                    <div key={xIdx} className="flex flex-col gap-1.5">
                      {col.map((intensity, yIdx) => {
                        let colorClass = "bg-slate-900";
                        if (intensity === 1) colorClass = "bg-emerald-950/60";
                        if (intensity === 2) colorClass = "bg-emerald-900/60";
                        if (intensity === 3) colorClass = "bg-emerald-700/80";
                        if (intensity === 4) colorClass = "bg-emerald-500";

                        // Snake overlays
                        if (isSnakeHead(xIdx, yIdx)) {
                          colorClass = "bg-cyan-400 shadow-[0_0_8px_#22d3ee]";
                        } else if (isSnakeCell(xIdx, yIdx)) {
                          colorClass = "bg-purple-500 shadow-[0_0_6px_#a78bfa]";
                        }

                        return (
                          <div
                            key={yIdx}
                            className={`w-3.5 h-3.5 rounded-[2px] transition-all duration-150 ${colorClass}`}
                            title={`Commits: ${intensity}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-slate-900/80 pt-6 mt-6 gap-4 font-mono text-[10px]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-slate-900 rounded-[2px]" />
                  <span className="text-slate-500">No Commits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-emerald-500 rounded-[2px]" />
                  <span className="text-slate-500">Max Commits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-cyan-400 rounded-[2px]" />
                  <span className="text-slate-500">Snake Head</span>
                </div>
              </div>
              <div className="text-slate-500">
                // CRON: 0 */24 * * * // TARGET: JITESHPRAKASH51
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Obsidian Trophies */}
        {activeTab === "trophies" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Trophy 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 hover:border-purple-500/30 transition-colors flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4">
                <Trophy size={18} className="text-yellow-400" />
                <span className="font-mono text-[10px] text-yellow-500 font-bold bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">RANK: S</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 font-sans">Multi-Threaded Assistant</h4>
                <p className="text-xs text-slate-500 font-mono uppercase mb-3">AI CORE ORCHESTRATION</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Rewarded for continuous development on NLP systems, including custom localized speech bots.
                </p>
              </div>
            </motion.div>

            {/* Trophy 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4">
                <Trophy size={18} className="text-cyan-400" />
                <span className="font-mono text-[10px] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">RANK: A</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 font-sans">Civic Architect</h4>
                <p className="text-xs text-slate-500 font-mono uppercase mb-3">TRANSPARENCY LEDGER</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Granted for creating immutable budget auditors and civic platforms for community transparency.
                </p>
              </div>
            </motion.div>

            {/* Trophy 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.19 }}
              className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4">
                <Trophy size={18} className="text-emerald-400" />
                <span className="font-mono text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">RANK: S</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 font-sans">Silicon Sculptor</h4>
                <p className="text-xs text-slate-500 font-mono uppercase mb-3">ROBOTICS HARDWARE</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Rewarded for building hardware loop logic using Raspberry Pi and Arduino microcontrollers.
                </p>
              </div>
            </motion.div>

            {/* Trophy 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 hover:border-indigo-500/30 transition-colors flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4">
                <Trophy size={18} className="text-indigo-400" />
                <span className="font-mono text-[10px] text-indigo-500 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">RANK: B</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 font-sans">Fortress Auditor</h4>
                <p className="text-xs text-slate-500 font-mono uppercase mb-3">SECURITY DIAGNOSTICS</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Awarded for ongoing mastery of networks, vulnerability scans, and security architectures.
                </p>
              </div>
            </motion.div>

          </div>
        )}

        {/* Tab 3: Metrics Log / Stats */}
        {activeTab === "metrics" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Followers, repos, etc */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-slate-950/60 border border-slate-900 p-6 rounded-xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">01 // AUDIENCE NODES</span>
                <Users size={14} className="text-cyan-400" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-900/60 pb-3">
                  <span className="text-xs text-slate-400">FOLLOWERS</span>
                  <span className="font-mono text-sm font-bold text-white">51+</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-900/60 pb-3">
                  <span className="text-xs text-slate-400">ACTIVE REPOSITORIES</span>
                  <span className="font-mono text-sm font-bold text-white">18+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">TOTAL COMMITS (YTD)</span>
                  <span className="font-mono text-sm font-bold text-white">430+</span>
                </div>
              </div>
            </motion.div>

            {/* Streak metrics */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-slate-950/60 border border-slate-900 p-6 rounded-xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">02 // CONTINUOUS LOGIC</span>
                <Flame size={14} className="text-rose-500 animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-900/60 pb-3">
                  <span className="text-xs text-slate-400">CURRENT STREAK</span>
                  <span className="font-mono text-sm font-bold text-rose-400">14 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-900/60 pb-3">
                  <span className="text-xs text-slate-400">MAX STREAK</span>
                  <span className="font-mono text-sm font-bold text-white">38 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">ACTIVE DAYS RATIO</span>
                  <span className="font-mono text-sm font-bold text-cyan-400">82.4%</span>
                </div>
              </div>
            </motion.div>

            {/* Language distribution metrics */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.19 }}
              className="bg-slate-950/60 border border-slate-900 p-6 rounded-xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">03 // SYNTACTIC DENSITY</span>
                <Code2 size={14} className="text-purple-400" />
              </div>
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Python</span>
                    <span className="font-mono text-slate-300">45%</span>
                  </div>
                  <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">TypeScript / JS</span>
                    <span className="font-mono text-slate-300">35%</span>
                  </div>
                  <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: "35%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Other Logic</span>
                    <span className="font-mono text-slate-300">20%</span>
                  </div>
                  <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: "20%" }} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}
