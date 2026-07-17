import { motion } from "motion/react";
import { projectsData } from "../data/profileData";
import { Bot, ShieldCheck, CreditCard, GraduationCap, ArrowUpRight, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, any> = {
  Bot: Bot,
  ShieldAlert: ShieldCheck,
  CreditCard: CreditCard,
  GraduationCap: GraduationCap,
};

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
            {"// NODE_02: EXPERIMENTAL LAB & PROTOCOLS"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Featured Startup Systems
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 mx-auto lg:mx-0 rounded" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const IconComponent = iconMap[project.icon] || Bot;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-slate-950/75 border border-slate-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden hover:border-slate-800 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.04)]"
              >
                {/* Neon Top Edge Accent */}
                <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r ${project.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Main Content */}
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Project Icon Frame */}
                      <div className={`p-3 bg-gradient-to-br ${project.color} bg-opacity-10 rounded-xl text-white border border-white/10 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-0.5">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded border tracking-wider ${
                      project.status === "ONLINE" 
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                        : project.status === "STABLE"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    }`}>
                      ● {project.status}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="font-sans text-sm md:text-base text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Tech Specs checklist */}
                  <div className="mb-6">
                    <h4 className="font-mono text-[10px] text-slate-500 tracking-wider uppercase mb-3">KEY LOGIC DIRECTIVES:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer specs / Tech Pills and Link */}
                <div className="border-t border-slate-900/80 pt-6 mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] bg-slate-900/60 hover:bg-slate-900 px-2 py-0.5 rounded border border-slate-900 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-400 flex items-center gap-1 group/link transition-colors"
                  >
                    <span>SOURCE_CODE</span>
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
