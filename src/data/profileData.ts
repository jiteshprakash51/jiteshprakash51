import { Project, TechItem, ExportableFile } from "../types";

export const projectsData: Project[] = [
  {
    id: "jarvis",
    title: "PWJARVIS",
    category: "Robotics & Artificial Intelligence",
    description: "An intelligent robotic agent built using Raspberry Pi and other microcontrollers. Fully capable of spatial movement, following user instructions, interactive speech synthesis, computer vision-based object/face recognition, and LLM reasoning.",
    tech: ["Raspberry Pi", "Python", "OpenCV", "Gemini API", "PyTTSx3", "Hardware Controls"],
    features: ["Speech Recognition & Local Synthesis", "Interactive Vision & Object Recognition", "Autonomous Pathing & Motor Logic", "Real-Time Conversational LLM Reasoning"],
    status: "ONLINE",
    icon: "Bot",
    color: "from-cyan-500 to-blue-600",
    link: "https://github.com/jiteshprakash51"
  },
  {
    id: "corruption",
    title: "Corruption Controller",
    category: "Civic Technology",
    description: "A centralized public ledger and transparency dashboard that indexes civic spending, tracks financial allocations, and empowers citizen auditing networks in Nepal.",
    tech: ["React", "TypeScript", "Node.js", "Supabase", "TailwindCSS"],
    features: ["Dynamic Budget Visualizers", "Anonymous Whistleblowing Gateway", "Public Audit Progress Tracking", "Immutable Ledger Simulation"],
    status: "ONLINE",
    icon: "ShieldAlert",
    color: "from-purple-500 to-indigo-600",
    link: "https://github.com/jiteshprakash51"
  },
  {
    id: "seementor",
    title: "SEE Mentor AI",
    category: "EdTech Intelligence",
    description: "An AI-powered mentoring and predictive analysis system designed to help Nepalese high schoolers master the Secondary Education Examination (SEE) syllabus.",
    tech: ["Python", "Gemini API", "React", "TypeScript", "FastAPI"],
    features: ["Syllabus-aligned Practice Simulators", "Instant Automated Grading", "Cognitive Gap Analysis Reports", "Interactive Virtual Teacher Module"],
    status: "STABLE",
    icon: "GraduationCap",
    color: "from-rose-500 to-pink-600",
    link: "https://github.com/jiteshprakash51"
  }
];

export const techStackData: TechItem[] = [
  // Languages
  { name: "Python", category: "languages", level: 95, iconName: "Python", description: "Primary language for AI agent pipelines, robotics scripting, and data orchestration." },
  { name: "TypeScript", category: "languages", level: 88, iconName: "TypeScript", description: "Type-safe development for complex interactive web apps and full-stack servers." },
  { name: "JavaScript", category: "languages", level: 90, iconName: "JavaScript", description: "Core web interactive development and lightweight server scripting." },
  
  // Web Frameworks
  { name: "React", category: "web", level: 85, iconName: "React", description: "Building highly modular, elegant interfaces and complex state dashboards." },
  { name: "Node.js", category: "web", level: 82, iconName: "Node.js", description: "Scalable backend event engines and microservices creation." },
  
  // Databases
  { name: "Supabase", category: "databases", level: 80, iconName: "Supabase", description: "PostgreSQL orchestration, real-time database syncing, and security policies." },
  
  // Hardware / Robotics
  { name: "Raspberry Pi", category: "hardware", level: 90, iconName: "Cpu", description: "Single-board computer server nodes, hardware controller interfaces, and vision pipelines." },
  { name: "Arduino", category: "hardware", level: 85, iconName: "Cpu", description: "Microcontroller orchestration, sensor arrays integration, and real-time physical loops." },

  // Cybersecurity
  { name: "Penetration Testing", category: "security", level: 88, iconName: "Shield", description: "Vulnerability analysis, web security exploits, and training on HackTheBox labs." },
  { name: "Cryptography", category: "security", level: 82, iconName: "Shield", description: "Symmetric and asymmetric encryption, secure key exchange, and hash functions." },
  { name: "Reverse Engineering", category: "security", level: 75, iconName: "Terminal", description: "Decompiling binaries, x86/ARM assembly debugging, and security audits." },
  { name: "Network Security", category: "security", level: 85, iconName: "Terminal", description: "Traffic interception, port diagnostics, SSL/TLS handshake protocols, and firewalls." },
  
  // Dev Tools / Security
  { name: "Linux", category: "tools", level: 88, iconName: "Terminal", description: "Bash terminal automation, developer server environment, and system diagnostics." },
  { name: "Docker", category: "tools", level: 75, iconName: "Docker", description: "Containerized deployment of local servers and network sandboxes." },
  { name: "Git & GitHub", category: "tools", level: 92, iconName: "Github", description: "Distributed version control, collaborative workflows, and GitHub Actions automation." }
];

export const exportableFiles: ExportableFile[] = [
  {
    name: "README.md",
    path: "README.md",
    language: "markdown",
    description: "The main, world-class cybernetic developer landing page for your GitHub profile.",
    content: `<!--
  SPDX-License-Identifier: Apache-2.0
  jiteshprakash51 Cybernetic GitHub Headquarters
  Designed in collaboration with Google AI Studio (Apple x Linear x Cyberpunk theme)
-->

<div align="center">
  
  <!-- Banner Asset -->
  <img src="assets/banner.svg" width="100%" alt="Jitesh Prakash Chaudhary Cybernetic Banner" />

  <br />
  
  <!-- Floating Quick Status Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/System-ACTIVE-10B981?style=for-the-badge&logo=cpu&logoColor=white&labelColor=0F172A" alt="System Active" />
    <img src="https://img.shields.io/badge/Location-NEPAL%20%F0%9F%87%B3%F0%9F%87%B5-22D3EE?style=for-the-badge&logo=googlemaps&logoColor=white&labelColor=0F172A" alt="Location Nepal" />
    <img src="https://img.shields.io/badge/Role-AI%20%26%20ROBOTICS-7C3AED?style=for-the-badge&logo=nvidia&logoColor=white&labelColor=0F172A" alt="Role AI &amp; Robotics" />
    <img src="https://img.shields.io/badge/Status-STUDENT%20INNOVATOR-F43F5E?style=for-the-badge&logo=academia&logoColor=white&labelColor=0F172A" alt="Status" />
  </p>

</div>

---

## 🌌 SYSTEM CHRONOLOGY & DECODING

\`\`\`yaml
[Host Connection]: jiteshprakash51@mainframe.local
[Secure Key Sync]: DECRYPTED_AES256
[Coordinates]   : 27.7172° N, 85.3240° E (Kathmandu, Nepal)
[Current Role]  : Robotics Builder, AI Systems Developer & Cybersecurity Enthusiast
[Academia]      : SEE completed at Lahan Paragon Public School (3.9 GPA)
                 Currently studying +2 Science (Physical group) at KMC Bagbazar
[Goal]          : Engineering High-Integrity Digital Solutions and Intelligent Machine Networks
\`\`\`

Welcome to my digital headquarters. I am **Jitesh Prakash Chaudhary**, an AI and robotics builder bridging the gap between high-performance software systems and intelligent physical machinery. My work combines machine intelligence, security diagnostics, and interactive digital ecosystems.

---

## 🛠️ CYBERNETIC COGNITION (TECH STACK)

<div align="center">
  <table width="100%">
    <tr>
      <td width="50%" valign="top">
        <h3>⚡ CORE CORE ARCHITECTURES</h3>
        <p>Languages &amp; Runtimes used to orchestrate neural logic and backend pipelines:</p>
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
      </td>
      <td width="50%" valign="top">
        <h3>💾 COGNITIVE STORAGE, HARDWARE &amp; SECURITY</h3>
        <p>Database orchestration, cyber hardware, and active security protocols:</p>
        <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
        <img src="https://img.shields.io/badge/Raspberry%20Pi-C51A4A?style=for-the-badge&logo=raspberrypi&logoColor=white" alt="Raspberry Pi" />
        <img src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white" alt="Arduino" />
        <img src="https://img.shields.io/badge/HackTheBox-9FEF00?style=for-the-badge&logo=hackthebox&logoColor=black" alt="HackTheBox" />
        <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
      </td>
    </tr>
  </table>
</div>

---

## 🤖 COGNITIVE NODES (FEATURED PROJECTS)

### 1. [🤖 PWJARVIS](https://github.com/jiteshprakash51)
*Interactive Raspberry Pi Intelligent Robot*
> An advanced physical robotic assistant operating on Raspberry Pi. Integrates motor-driven movement control, speaker-assisted speech synthesis, computer vision camera recognition, and real-time reasoning via LLM integration to safely execute complex instructions.
\`\`\`bash
$ python pwjarvis.py --mode=robotics-neural
> PWJarvis online. Connected to hardware motors & vision relays...
\`\`\`

### 2. [🏛️ Corruption Controller](https://github.com/jiteshprakash51)
*Transparency & Accountable Civic Platform*
> Civic-tech intelligence engine designed to index and cross-reference public funds, building systemic integrity and empowering local communities in Nepal with un-biased data-driven audit pathways.

### 3. [📚 SEE Mentor AI](https://github.com/jiteshprakash51)
*Intelligent Student Learning Assistant*
> AI-driven personalized tutoring system tailored specifically to high school students in Nepal preparing for Secondary Education Examinations (SEE), making elite exam preparation and mentorship widely accessible.

---

## 🔒 CYBERSECURITY OPERATIONS (HACKTHEBOX)

I am actively sharpening my security and offensive hacking skills through direct simulation modules:
- **Penetration Testing**: Inspecting, testing, and exploiting complex machine and web vulnerabilities.
- **Cryptography**: Analyzing encryptions, symmetric/asymmetric algorithms, and security handshakes.
- **Reverse Engineering**: Decompiling executables and investigating assembly scripts.
- **Network Security**: Packet analysis, secure routing configurations, and deep port monitoring.

---

## 📊 LIVE NEURAL TELEMETRY (GITHUB METRICS)

<div align="center">

  <!-- GitHub Trophies -->
  <h3>🏆 DIGITAL TROPHIES</h3>
  <img src="https://github-profile-trophy.vercel.app/?username=jiteshprakash51&theme=darkhub&no-bg=true&no-frame=true&margin-w=10" alt="Jitesh's Trophies" width="100%" />

  <br /><br />

  <!-- GitHub Stats & Languages -->
  <table width="100%">
    <tr>
      <td width="50%" align="center">
        <h4>⚡ Core Mainframe Stats</h4>
        <img src="https://github-readme-stats.vercel.app/api?username=jiteshprakash51&show_icons=true&theme=tokyonight&bg_color=0B0F1D&hide_border=true&title_color=22D3EE&icon_color=7C3AED" alt="Jitesh's GitHub Stats" width="95%" />
      </td>
      <td width="50%" align="center">
        <h4>🧪 Syntactic Distribution</h4>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jiteshprakash51&layout=compact&theme=tokyonight&bg_color=0B0F1D&hide_border=true&title_color=22D3EE" alt="Jitesh's Top Languages" width="95%" />
      </td>
    </tr>
  </table>

  <br />

  <!-- Contribution Streak -->
  <table width="100%">
    <tr>
      <td width="100%" align="center">
        <h4>📈 Continuous Execution Streak</h4>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=jiteshprakash51&theme=tokyonight&background=0B0F1D&hide_border=true&ring=7C3AED&fire=22D3EE" alt="Jitesh's Streak" width="90%" />
      </td>
    </tr>
  </table>

</div>

---

## 🎮 NEURAL CONTRIBUTION PATHWAY (SNAKE)

Here is a visual map of my continuous coding contributions, dynamically navigated by our cybernetic contribution snake:

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jiteshprakash51/jiteshprakash51/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/jiteshprakash51/jiteshprakash51/output/github-contribution-grid-snake.svg" />
    <img alt="GitHub contribution grid snake animation" src="https://raw.githubusercontent.com/jiteshprakash51/jiteshprakash51/output/github-contribution-grid-snake.svg" width="100%" />
  </picture>
</div>

---

## 🌐 CONNECT WITH ME

Select one of the connection vectors below to sync with my mainframe:

\`\`\`
[MAIN ENCRYPTION VECTOR] : jitesh@jiteshprakash.com.np
[SUPPORT FREQUENCY]      : info@jiteshprakash.com.np
[SECURE DIRECT VECTOR]   : contact@jiteshprakash.com.np
[CENTRAL NETWORK ORG]    : org@jiteshprakash.com.np
\`\`\`

<p align="center">
  <a href="https://github.com/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://linkedin.com/in/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://x.com/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /></a>
  <a href="https://instagram.com/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
  <a href="https://facebook.com/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" /></a>
  <a href="https://threads.net/@jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Threads-000000?style=for-the-badge&logo=threads&logoColor=white" alt="Threads" /></a>
  <a href="https://youtube.com/@jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" /></a>
  <a href="https://t.me/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" /></a>
  <a href="https://discord.gg/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a>
  <a href="https://reddit.com/user/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit" /></a>
  <a href="https://huggingface.co/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="Hugging Face" /></a>
  <a href="https://kaggle.com/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle" /></a>
  <a href="https://dev.to/jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="Dev.to" /></a>
  <a href="https://hashnode.com/@jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" alt="Hashnode" /></a>
  <a href="https://medium.com/@jiteshprakash51" target="_blank"><img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium" /></a>
</p>

<br />

<div align="center">
  <sub><i>// Powered by Antigravity Agent • Designed with absolute structural intent //</i></sub>
</div>`
  },
  {
    name: "snake.yml",
    path: ".github/workflows/snake.yml",
    language: "yaml",
    description: "GitHub Actions workflow to automatically generate the contribution snake animation SVG daily.",
    content: `name: generate-snake

on:
  schedule:
    - cron: "0 */24 * * *" 
  workflow_dispatch:
  push:
    branches:
    - master
    - main

jobs:
  generate:
    permissions: 
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5
    
    steps:
      - name: generate-github-contribution-grid-snake
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: jiteshprakash51
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark&color_snake=#22D3EE&color_dots=#0F172A,#1E293B,#334155,#475569,#7C3AED
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          
      - name: push github-contribution-grid-snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`
  },
  {
    name: "metrics.yml",
    path: ".github/workflows/metrics.yml",
    language: "yaml",
    description: "GitHub Actions workflow integrating lowlighter/metrics to render user stats, trophies, languages, and coding patterns.",
    content: `# Visit https://github.com/lowlighter/metrics/blob/master/action.yml for full configuration options
name: Metrics
on:
  schedule: [{cron: "0 0 * * *"}]
  workflow_dispatch:
  push: {branches: ["master", "main"]}

jobs:
  github-metrics:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: General Metrics
        uses: lowlighter/metrics@latest
        with:
          token: \${{ secrets.METRICS_TOKEN }}
          user: jiteshprakash51
          template: classic
          base: header, activity, community, repositories, metadata
          config_timezone: Asia/Kathmandu
          
          plugin_languages: yes
          plugin_languages_analysis_timeout: 15
          plugin_languages_categories: markup, programming
          plugin_languages_colors: github
          plugin_languages_limit: 8
          plugin_languages_recent_categories: markup, programming
          plugin_languages_recent_days: 14
          plugin_languages_recent_load: 300
          plugin_languages_sections: most-used
          plugin_languages_threshold: 0%
          
          plugin_lines: yes
          plugin_lines_sections: base
          
          plugin_habits: yes
          plugin_habits_from: 200
          plugin_habits_days: 14
          plugin_habits_facts: yes
          plugin_habits_charts: yes
          
          plugin_starlists: yes
          plugin_starlists_limit: 2
          
          plugin_topics: yes
          plugin_topics_limit: 15
          plugin_topics_sort: stars
          
          plugin_trophies: yes
          plugin_trophies_skin: obsidian
          plugin_trophies_layout: flat
`
  }
];
