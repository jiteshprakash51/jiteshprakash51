import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { techStackData } from "../data/profileData";
import { Code2, Database, Laptop, Terminal, Cpu, Shield } from "lucide-react";

type FilterCategory = "all" | "languages" | "web" | "databases" | "hardware" | "tools" | "security";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const categories = [
    { id: "all", name: "ALL_SYSTEMS", icon: Code2 },
    { id: "languages", name: "SYNTAX", icon: Terminal },
    { id: "web", name: "WEB_RUNTIMES", icon: Laptop },
    { id: "databases", name: "DATABASES", icon: Database },
    { id: "hardware", name: "ROBOTICS_CORE", icon: Cpu },
    { id: "security", name: "CYBER_SECURITY", icon: Shield }
  ];

  const filteredTech = techStackData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="tech-stack" className="w-full py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">
            {"// NODE_03: COGNITIVE SKILLS & STACK"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Technical Architectures
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-400 mt-4 mx-auto lg:mx-0 rounded" />
        </motion.div>

        {/* Tab Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12 select-none"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as FilterCategory)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                    : "bg-slate-950/60 border-slate-900 text-slate-500 hover:text-slate-300 hover:border-slate-800"
                }`}
              >
                <Icon size={12} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-950/75 border border-slate-900 rounded-xl p-6 flex flex-col justify-between hover:border-slate-800 transition-colors"
              >
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-md font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {tech.name}
                    </span>
                    
                    {/* Mastery percentage widget */}
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      LVL: <span className="text-emerald-400">{tech.level}%</span>
                    </span>
                  </div>

                  {/* Technical description */}
                  <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                    {tech.description}
                  </p>
                </div>

                {/* Micro level gauge */}
                <div className="space-y-1">
                  <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Extra tech badge cloud block */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 p-6 bg-slate-950/40 border border-slate-900 rounded-xl"
        >
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4">ADDITIONAL CONTEXT &amp; PARADIGMS</div>
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs bg-slate-950 border border-slate-900 text-slate-400 px-3 py-1 rounded">Artificial Intelligence (AI)</span>
            <span className="font-mono text-xs bg-slate-950 border border-slate-900 text-slate-400 px-3 py-1 rounded">Machine Learning (ML)</span>
            <span className="font-mono text-xs bg-slate-950 border border-slate-900 text-slate-400 px-3 py-1 rounded">Computer Vision</span>
            <span className="font-mono text-xs bg-slate-950 border border-slate-900 text-slate-400 px-3 py-1 rounded">Network Security Auditing</span>
            <span className="font-mono text-xs bg-slate-950 border border-slate-900 text-slate-400 px-3 py-1 rounded">IoT Circuit Design</span>
            <span className="font-mono text-xs bg-slate-950 border border-slate-900 text-slate-400 px-3 py-1 rounded">VS Code</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
