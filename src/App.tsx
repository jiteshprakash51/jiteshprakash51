import { useEffect } from "react";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import GitHubAnalytics from "./components/GitHubAnalytics";
import ExportCenter from "./components/ExportCenter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Terminal, Code, Cpu, Shield, Download, Mail } from "lucide-react";

export default function App() {
  // Smooth scroll support
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const navLinks = [
    { name: "Mainframe", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Analytics", href: "#github-analytics" },
    { name: "Export Center", href: "#export-center" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden font-sans">
      
      {/* Animated Cybernetic Particle Background Canvas */}
      <Background />

      {/* Floating Glassmorphism Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 select-none">
        <nav className="max-w-7xl mx-auto bg-slate-950/70 backdrop-blur-md border border-slate-900/80 px-6 py-3 rounded-full flex items-center justify-between shadow-lg">
          
          {/* Logo / Name trigger */}
          <a href="#" className="flex items-center gap-2 group">
            <Terminal size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="font-mono text-xs font-black tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              JITESHPRAKASH_HQ
            </span>
          </a>

          {/* Nav Links List */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick CTA anchor to export center */}
          <div>
            <a
              href="#export-center"
              className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full font-mono text-[9px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5"
            >
              <Download size={10} />
              <span>Get Profile Configs</span>
            </a>
          </div>

        </nav>
      </header>

      {/* Master Sections Content Wrapper */}
      <main className="relative">
        
        {/* Section 1: Hero Mainframe */}
        <Hero />

        {/* Section Divider Accent Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent" />

        {/* Section 2: About Biography & Credentials */}
        <About />

        {/* Section Divider Accent Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent" />

        {/* Section 3: Featured Projects */}
        <Projects />

        {/* Section Divider Accent Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent" />

        {/* Section 4: Technical Stack Grid */}
        <TechStack />

        {/* Section Divider Accent Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent" />

        {/* Section 5: Advanced GitHub Analytics */}
        <GitHubAnalytics />

        {/* Section Divider Accent Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent" />

        {/* Section 6: Mainframe Export Terminal */}
        <ExportCenter />

        {/* Section Divider Accent Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent" />

        {/* Section 7: Encrypted Contact Form */}
        <Contact />

      </main>

      {/* Footer copyright, local clocks and connection logs */}
      <Footer />

    </div>
  );
}
