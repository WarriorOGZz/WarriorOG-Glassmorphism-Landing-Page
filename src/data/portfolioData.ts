import { Project, JournalEntry, TechSkill, ExplorationItem } from '../types';

export const warriorDetails = {
  name: "WarriorOG",
  title: "Full-Stack Developer & Creator",
  location: "India",
  avatarUrl: "https://github.com/WarriorOGZz.png",
  bio: "I'm WarriorOG, a student and self-taught full-stack developer from India who enjoys building modern digital experiences. My journey into programming started with curiosity and has grown into a passion for creating websites, applications, Discord bots, and tools that are both visually appealing and highly functional.",
  philosophy: "I believe that every line of code should have a purpose. I aim to write clean, maintainable, and scalable code while focusing on performance, accessibility, and user experience. Rather than simply making something work, I strive to create products that feel polished, intuitive, and enjoyable to use.",
  roles: ["Full-Stack Dev", "Discord Bot Developer", "API Architect", "UI/UX Builder"],
  email: "warriororgzz@gmail.com",
  github: "https://github.com/WarriorOGZz",
  discord: "0kxs",
  twitter: "https://x.com",
};

export const projectsData: Project[] = [
  {
    id: "botify-core",
    title: "Botify Core",
    category: "Discord Infrastructure",
    subtitle: "Automated Discord Bot Framework & Live Dashboard",
    description: "An advanced, event-driven Discord bot infrastructure built with Node.js and TypeScript. Features real-time command routing, sharding support, web dashboard synchronization via WebSockets, and database persistence with MongoDB.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "TypeScript", "Discord.js", "MongoDB", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://aetheria.space",
    featured: true,
    colSpanDesktop: 7,
    aspectRatio: "aspect-[16/10]",
  },
  {
    id: "aetheria-cloud",
    title: "Aetheria Cloud Gateway",
    category: "Full-Stack Web App",
    subtitle: "REST API Platform & Realtime Developer Workspace",
    description: "A sleek full-stack workspace application featuring high-speed REST endpoints, JWT authentication, rate limiting, and custom analytics visualization built with React, Express, and MySQL.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Express", "MySQL", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://aetheria.space",
    featured: true,
    colSpanDesktop: 5,
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "nexus-ui",
    title: "Nexus UI System",
    category: "UI/UX Design & Frontend",
    subtitle: "Fluid Liquid Glass Component Library",
    description: "A modern design system emphasizing liquid glass aesthetics, accessible micro-interactions, responsive grid layouts, and hardware-accelerated Framer Motion animations.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    githubUrl: "https://github.com",
    liveUrl: "https://aetheria.space",
    featured: true,
    colSpanDesktop: 5,
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "omni-pterodactyl-panel",
    title: "Omni Panel Suite",
    category: "Backend & Automation",
    subtitle: "Pterodactyl & Vercel Automated Management Suite",
    description: "Custom orchestration tool designed to automate server deployments, monitor CPU/RAM metrics in real time, and streamline containerized game & bot hosting across cloud nodes.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Pterodactyl API", "Vercel", "SQLite", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://aetheria.space",
    featured: true,
    colSpanDesktop: 7,
    aspectRatio: "aspect-[16/10]",
  },
];

export const techSkillsData: TechSkill[] = [
  // Frontend
  { name: "React & React 19", category: "Frontend", icon: "Code2", level: "Advanced", description: "Hooks, Context, State Management, Custom Reusable UI Architectures" },
  { name: "Next.js", category: "Frontend", icon: "Globe", level: "Proficient", description: "Server Side Rendering, App Router, Dynamic API Proxy Routes" },
  { name: "TypeScript", category: "Frontend", icon: "FileCode", level: "Advanced", description: "Strict Typing, Generic Interfaces, Modular Codebases" },
  { name: "Tailwind CSS v4", category: "Frontend", icon: "Palette", level: "Expert", description: "Custom Theme Tokens, Responsive Liquid Layouts, Utility Design" },
  { name: "HTML5 & CSS3", category: "Frontend", icon: "Layout", level: "Expert", description: "Semantic Markup, Modern Flexbox/Grid, Glassmorphism FX" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "Server", level: "Advanced", description: "Asynchronous I/O, Event Loop Optimization, Middleware Design" },
  { name: "Express.js", category: "Backend", icon: "Cpu", level: "Advanced", description: "RESTful Endpoint Architecture, Authentication, Middleware Pipeline" },
  { name: "Discord.js", category: "Backend", icon: "Bot", level: "Expert", description: "Custom Bot Bots, Slash Commands, Sharding & WebSocket Events" },
  { name: "REST APIs", category: "Backend", icon: "Network", level: "Expert", description: "API Gateways, Rate Limiting, JSON Payload Serialization" },

  // Databases
  { name: "MongoDB", category: "Databases", icon: "Database", level: "Proficient", description: "NoSQL Document Modeling, Mongoose Schemas, Aggregations" },
  { name: "MySQL", category: "Databases", icon: "Table", level: "Proficient", description: "Relational Queries, Foreign Keys, Indexing & Performance" },
  { name: "SQLite", category: "Databases", icon: "HardDrive", level: "Advanced", description: "Lightweight Embedded Storage, Fast Local Query Execution" },

  // Tools
  { name: "Git & GitHub", category: "Tools", icon: "GitBranch", level: "Expert", description: "Version Control, Pull Requests, Automated Workflows" },
  { name: "VS Code & Postman", category: "Tools", icon: "Terminal", level: "Expert", description: "Environment Workflows, API Inspection & Debugging" },
  { name: "Vercel & Pterodactyl", category: "Tools", icon: "Cloud", level: "Advanced", description: "Serverless Deployments, Container Management, Process Monitoring" },
];

export const journalEntriesData: JournalEntry[] = [
  {
    id: "code-purpose",
    title: "Every Line of Code Should Have a Purpose",
    subtitle: "A practical approach to intentional software design and code quality.",
    date: "JULY 2026",
    readTime: "4 MIN READ",
    category: "PHILOSOPHY",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    content: [
      "When I started programming, my primary goal was simply to make things work. If a function printed the right result or a button changed color, it felt like a triumph. However, as my projects grew in complexity, I realized that functionality is only half the battle.",
      "True craftsmanship comes from clarity, simplicity, and intention. Every line of code should earn its spot in your project. Bloated abstractions and copy-pasted boilerplate slow down build times and make debugging a nightmare.",
      "By keeping code concise, well-typed, and modular, we make our software easier to maintain and far more enjoyable to build upon."
    ]
  },
  {
    id: "discord-bot-scale",
    title: "Building Discord Bots for High Uptime & Scale",
    subtitle: "Architecting event-driven Node.js bots that never drop a heartbeat.",
    date: "JUNE 2026",
    readTime: "6 MIN READ",
    category: "BACKEND",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    content: [
      "Discord bot development is one of the best ways to learn asynchronous backend programming. Unlike traditional HTTP servers that respond only when requested, a Discord bot maintains a persistent WebSocket connection receiving thousands of gateway events per second.",
      "To keep bots reliable, I rely on clean command handlers, isolated event listeners, and rate-limit managers. Storing persistent server configurations in MongoDB or SQLite ensures zero state loss across restarts.",
      "Pterodactyl Panel combined with PM2 monitoring gives complete visibility into CPU spikes, memory leaks, and websocket heartbeats."
    ]
  },
  {
    id: "self-taught-journey",
    title: "The Self-Taught Developer's Mindset in India",
    subtitle: "Navigating continuous learning, curiosity, and project-based growth.",
    date: "MAY 2026",
    readTime: "5 MIN READ",
    category: "JOURNEY",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    content: [
      "Being self-taught requires discipline, curiosity, and a willingness to embrace mistakes as learning opportunities. Without a rigid syllabus, the internet becomes your university.",
      "Building real projects—from simple CLI tools to full-stack web applications—is the fastest way to bridge theoretical knowledge with practical execution.",
      "Every bug encountered is a masterclass in problem-solving. Embracing this mindset transforms daunting technical challenges into exciting puzzles."
    ]
  },
  {
    id: "ui-nuances",
    title: "Designing Digital Experiences That Feel Natural",
    subtitle: "How liquid glass, micro-interactions, and negative space elevate UI.",
    date: "APRIL 2026",
    readTime: "4 MIN READ",
    category: "DESIGN",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    content: [
      "UI design isn't just about pickings colors—it's about feedback, spatial rhythm, and tactile responsiveness. When a user clicks a button, hover effects and smooth transitions inform them that the system is responsive.",
      "By leveraging subtle glassmorphism backdrop blurs, controlled contrast ratios, and Framer Motion spring physics, web applications feel alive.",
      "The best interface is one that gets out of the user's way while providing delight at every interaction point."
    ]
  }
];

export const explorationItemsData: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "Cybernetic HUD UI",
    category: "Experimental Interface",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    description: "Futuristic telemetry HUD with animated data streams and reactive ambient lighting."
  },
  {
    id: "exp-2",
    title: "Bot Orchestration Nodes",
    category: "Infrastructure Visualizer",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    description: "Interactive node graph visualizing WebSocket payload distribution across distributed clusters."
  },
  {
    id: "exp-3",
    title: "Liquid Glass Dashboard",
    category: "UI System",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "Deep dark theme dashboard featuring frosted acrylic panels and gradient glow highlights."
  },
  {
    id: "exp-4",
    title: "REST Endpoint Inspector",
    category: "Developer Tooling",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight API benchmarking and JSON inspector utility built for quick backend debugging."
  },
  {
    id: "exp-5",
    title: "Aetheria Audio Visualizer",
    category: "Canvas Physics",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    description: "Real-time frequency audio synthesizer reacting to microphone inputs with fluid particles."
  },
  {
    id: "exp-6",
    title: "Minimalist Terminal Portfolio",
    category: "CLI Interface",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    description: "Interactive shell environment in the browser with custom command parsing and ASCII art."
  },
];
