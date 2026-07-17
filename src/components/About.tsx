import { motion } from "motion/react";
import { User, Mail, Globe, Milestone, Shield, Award, Map } from "lucide-react";

export default function About() {
  const emails = [
    { label: "Main Encryption Vector", address: "jitesh@jiteshprakash.com.np", desc: "For direct personal collaborations." },
    { label: "Support Frequency", address: "info@jiteshprakash.com.np", desc: "For general inquiries or assistance." },
    { label: "Secure Direct Vector", address: "contact@jiteshprakash.com.np", desc: "For secure high-priority requests." },
    { label: "Central Network Org", address: "org@jiteshprakash.com.np", desc: "For organization-level syncups." }
  ];

  return (
    <section id="about" className="w-full py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            {"// NODE_01: CREDENTIALS & ROADMAP"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            System Identity &amp; Mission
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-cyan-400 mt-4 mx-auto lg:mx-0 rounded" />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Biography Card (7 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-slate-950/60 backdrop-blur-md border border-slate-900 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-slate-800 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                  <User size={18} />
                </div>
                <h3 className="text-xl font-bold text-white">The Tech Builder from Nepal</h3>
              </div>
              
              <div className="space-y-4 font-sans text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  As an ambitious student and future computer engineer located in Kathmandu, Nepal, I focus on the synthesis of artificial intelligence, robotic hardware, and cybersecurity. 
                </p>
                <p>
                  I believe that the next wave of human productivity will be driven by localized, intelligent physical networks. My mission is to engineer high-integrity digital engines that are transparent, secure, and accessible to communities in developing nations.
                </p>
                <p>
                  Whether translating natural language into automated hardware directives (like in PWJARVIS), auditing public systems for corruption (like in Corruption Controller), or optimizing examination mentorship (like in SEE Mentor AI), my work centers on solving critical structural challenges.
                </p>
              </div>
            </div>

            {/* Quick stats footer */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-900/80 pt-6 mt-8 font-mono text-xs">
              <div>
                <div className="text-slate-500 mb-1">ORIGIN</div>
                <div className="text-cyan-400 font-bold flex items-center gap-1">
                  <span>Kathmandu, NP</span>
                  <span>🇳🇵</span>
                </div>
              </div>
              <div>
                <div className="text-slate-500 mb-1">CORE STUDY</div>
                <div className="text-purple-400 font-bold">Comp. Engineering</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-slate-500 mb-1">PORTFOLIO URL</div>
                <a 
                  href="https://jiteshprakash.com.np" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white hover:text-cyan-400 font-bold transition-colors"
                >
                  jiteshprakash.com.np
                </a>
              </div>
            </div>
          </motion.div>

          {/* Core Archetypes / Badges Card (5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Scholastic Chronology Passport */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-950 to-slate-900/90 border border-slate-900 rounded-xl p-6 relative hover:border-slate-800 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400 border border-rose-500/20">
                  <Award size={18} />
                </div>
                <h4 className="text-md font-bold text-white font-sans">Scholastic Milestone</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-rose-500/30 pl-3.5 space-y-1">
                  <span className="font-mono text-[10px] text-rose-400 block font-bold">SECONDARY EDUCATION EXAM (SEE)</span>
                  <span className="font-sans text-sm font-bold text-white block">Lahan Paragon Public School</span>
                  <span className="font-mono text-[11px] text-slate-400 block">Graduated with a pristine <span className="text-emerald-400 font-bold">3.9 GPA</span></span>
                </div>

                <div className="border-l-2 border-purple-500/30 pl-3.5 space-y-1">
                  <span className="font-mono text-[10px] text-purple-400 block font-bold">HIGHER SECONDARY (+2 SCIENCE)</span>
                  <span className="font-sans text-sm font-bold text-white block">Kathmandu Model College (KMC)</span>
                  <span className="font-mono text-[11px] text-slate-400 block">Bagbazar, Kathmandu • <span className="text-cyan-400 font-semibold">Physical Group</span></span>
                </div>
              </div>
            </motion.div>

            {/* Cybersecurity Operations Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">HACKTHEBOX SECURITY OPS</span>
                <Shield size={14} className="text-emerald-400" />
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-[10px] text-slate-400">
                <div className="bg-slate-950/90 border border-slate-900 px-3 py-2 rounded">
                  <div className="text-emerald-400 font-bold mb-0.5">PENTESTING</div>
                  <div>Web & Labs</div>
                </div>
                <div className="bg-slate-950/90 border border-slate-900 px-3 py-2 rounded">
                  <div className="text-cyan-400 font-bold mb-0.5">CRYPTO</div>
                  <div>Keys & Hashing</div>
                </div>
                <div className="bg-slate-950/90 border border-slate-900 px-3 py-2 rounded">
                  <div className="text-purple-400 font-bold mb-0.5">REVERSING</div>
                  <div>ARM/x86 Assembly</div>
                </div>
                <div className="bg-slate-950/90 border border-slate-900 px-3 py-2 rounded">
                  <div className="text-rose-400 font-bold mb-0.5">NET_SEC</div>
                  <div>Port Diagnostics</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed font-sans">
                Active learning and training pathway solving CTF challenges and scanning secure systems.
              </div>
            </motion.div>
          </div>

        </div>

        {/* Transmission Channels (Interactive Email Bento) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8"
        >
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-900 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Transmission Frequencies</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">ESTABLISHING CRYPTOGRAPHIC ROUTING NETWORKS</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emails.map((e, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-slate-950/90 border border-slate-900/80 hover:border-emerald-500/20 p-5 rounded-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="mb-4">
                    <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase block mb-1">
                      {e.label}
                    </span>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                  <div>
                    <a 
                      href={`mailto:${e.address}`}
                      className="font-mono text-xs text-white group-hover:text-emerald-400 font-bold transition-colors block break-all"
                    >
                      {e.address}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
