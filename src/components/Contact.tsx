import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, ShieldAlert, Cpu, Terminal, Sparkles, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [transmissionStatus, setTransmissionStatus] = useState<"idle" | "transmitting" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTransmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setTransmissionStatus("transmitting");
    setLogs(["[INIT] Secure routing protocol established...", "[SYNC] Decrypting SSL packet handshakes..."]);

    setTimeout(() => {
      setLogs((prev) => [...prev, "[LOAD] Packaging transmitter metadata...", "[POST] Pushing payload packets to mail server..."]);
    }, 800);

    setTimeout(() => {
      setLogs((prev) => [...prev, "[SUCCESS] Transmission received at contact@jiteshprakash.com.np"]);
      setTransmissionStatus("success");
    }, 2000);
  };

  return (
    <section id="contact" className="w-full py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="font-mono text-xs text-rose-400 tracking-widest uppercase mb-2">
            {"// NODE_06: DIRECT ENCRYPTED FREQUENCY"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Encrypted Transmitter
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-rose-500 to-purple-600 mt-4 mx-auto lg:mx-0 rounded" />
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Informational Text Column (5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white font-sans mb-3">Transmission Gateway</h3>
              <p className="font-sans text-sm md:text-base text-slate-400 leading-relaxed">
                Connect directly through secure sub-space packets. This terminal routes logs straight to my centralized inbox at <span className="text-cyan-400 font-bold break-all">contact@jiteshprakash.com.np</span>.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs bg-slate-950/60 border border-slate-900 p-6 rounded-xl">
              <div className="text-slate-500 uppercase tracking-widest font-bold mb-2">SYSTEM PARAMETERS:</div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Terminal size={14} className="text-purple-400" />
                <span>SSL_PORT: 465 (SECURE)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Cpu size={14} className="text-cyan-400" />
                <span>ROUTING: KATHMANDU_RELAY_v3</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <ShieldAlert size={14} className="text-emerald-400" />
                <span>ENCRYPTION: SHIELD_AES_256_GCM</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Shell Form Column (7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-slate-950/85 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative"
          >
            {transmissionStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4 font-mono"
              >
                <div className="inline-flex p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full mb-4 animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-white font-bold text-lg">TRANS_COMPLETE</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed font-sans">
                  Your encrypted payload was compiled, serialized, and successfully dispatched to the mainframe network hosts. Standby for sync reply.
                </p>

                <div className="bg-slate-950 border border-slate-900 rounded-lg p-4 text-[11px] text-emerald-400 text-left max-w-md mx-auto space-y-1">
                  {logs.map((log, lIdx) => (
                    <div key={lIdx}>{log}</div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setTransmissionStatus("idle");
                    setFormData({ name: "", email: "", message: "" });
                    setLogs([]);
                  }}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold uppercase rounded text-slate-300 transition-colors"
                >
                  TRANSMIT_NEW_PAYLOAD
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleTransmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block font-bold">NAME_VECTOR</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={transmissionStatus === "transmitting"}
                      className="w-full bg-slate-950 border border-slate-900 rounded-lg px-4 py-3 font-mono text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. Neo Smith"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block font-bold">EMAIL_HOST</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={transmissionStatus === "transmitting"}
                      className="w-full bg-slate-950 border border-slate-900 rounded-lg px-4 py-3 font-mono text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g. neo@matrix.org"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block font-bold">TRANSMISSION_BODY</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={transmissionStatus === "transmitting"}
                    className="w-full bg-slate-950 border border-slate-900 rounded-lg px-4 py-3 font-mono text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Describe your design parameters, AI goals, or technical scopes..."
                  />
                </div>

                {/* Submit / Status Block */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                  {transmissionStatus === "transmitting" ? (
                    <div className="font-mono text-[11px] text-purple-400 animate-pulse flex items-center gap-2">
                      <Sparkles size={14} className="animate-spin" />
                      <span>DISPATCHING SSL PACKETS...</span>
                    </div>
                  ) : (
                    <div className="font-mono text-[10px] text-slate-600 tracking-wider">
                      // DIRECT PUSH CAPABILITIES ENABLED
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={transmissionStatus === "transmitting"}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-mono text-xs font-bold tracking-wider uppercase rounded transition-all duration-300 shadow-[0_4px_15px_rgba(244,63,94,0.2)] hover:shadow-[0_4px_20px_rgba(244,63,94,0.4)] disabled:opacity-50"
                  >
                    Transmit Signal
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
