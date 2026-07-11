// ============================================================
// portfolioData.js — Centralized configuration for Akshansh Ranjan's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Akshansh Ranjan",
  firstName: "Akshansh",
  brandName: "Akshansh Ranjan",
  title: "Full Stack Developer & AI Engineer",
  location: "Hyderabad, India",
  phone: "+91 98350 14501",
  emails: {
    primary: "akshanshranjan007@gmail.com",
    secondary: "akshanshranjan007@gmail.com",
  },
  summary:
    "EEE undergrad with a CS minor at BITS Pilani, building production-grade AI systems and full-stack applications — from LangGraph multi-agent orchestration to distributed microservice architectures with RabbitMQ event queues and real-time collaboration backends.",
  resumeSdeUrl: "/Akshansh_Ranjan_Resume_SDE.pdf",
  resumeAiUrl: "/Akshansh_Ranjan_Resume_AI_ML.pdf",
};

export const socialLinks = {
  github: "https://github.com/Akshansh0519",
  linkedin: "https://www.linkedin.com/in/akshansh-ranjan-2022ba2a1/",
  leetcode: "https://leetcode.com/u/AkshanshRanjan/",
  codeforces: "https://codeforces.com/profile/ZappyCoder",
};

export const heroContent = {
  greeting: "Hi, I'm Akshansh Ranjan",
  titleHighlight: "Full Stack & AI Engineer",
  subtitle:
    "I engineer scalable AI applications and distributed full-stack platforms — bridging autonomous LangGraph agents with real-time collaborative systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: `mailto:akshanshranjan007@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Akshansh,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`,
  },
  ctaResumeSde: { text: "Resume (SDE)", href: "/Akshansh_Ranjan_Resume_SDE.pdf" },
  ctaResumeAi: { text: "Resume (AI/ML)", href: "/Akshansh_Ranjan_Resume_AI_ML.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Akshansh Ranjan</span>, an EEE undergrad with a Computer Science minor at <strong>BITS Pilani, Hyderabad Campus</strong>. I specialize in <span class="text-black font-black">building robust microservice architectures</span> and production-grade AI systems — bridging multi-agent LLM orchestration with event-driven backends and real-time collaborative dashboards.`,
  techStack: ["Python", "Node.js", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into production systems",
  description:
    "A structured, research-informed approach to building scalable AI and full-stack systems from concept to deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by studying system requirements, reviewing relevant papers, and evaluating modern architectural patterns — from RAG pipelines to distributed message queues.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting clean system diagrams, API contracts, database schemas, and agent topologies — prioritizing scalability, fault tolerance, and developer experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing production-grade code with type safety, async patterns, test coverage, and CI/CD pipelines across Python backends, Node.js services, and React frontends.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Containerizing with Docker Compose, deploying to Railway/Vercel, setting up GitHub Actions, and monitoring with structured logging and regression test suites.",
    },
  ],
  endText: "Ship it.",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript" },
        { name: "Python" },
        { name: "C++" },
        { name: "SQL" },
        { name: "Java" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js / Express" },
        { name: "FastAPI" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Prisma ORM" },
        { name: "Sequelize ORM" },
        { name: "Redis" },
        { name: "RabbitMQ / AMQP" },
        { name: "Socket.io / WebSocket" },
        { name: "BullMQ" },
        { name: "Axios / REST" },
        { name: "Nodemailer" },
      ],
    },
    {
      title: "AI / LLM",
      skills: [
        { name: "LangGraph" },
        { name: "LangSmith" },
        { name: "RAG Pipelines" },
        { name: "MCP (Model Context Protocol)" },
        { name: "ChromaDB" },
        { name: "Groq / Gemini API" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "Next.js 14" },
        { name: "Tailwind CSS" },
        { name: "Redux Toolkit" },
        { name: "Radix UI" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub" },
        { name: "Docker / Compose" },
        { name: "GitHub Actions CI/CD" },
        { name: "Vercel / Render" },
        { name: "CloudAMQP" },
        { name: "Aiven (MySQL Cloud)" },
        { name: "Upstash.io" },
        { name: "Postman" },
      ],
    },
    {
      title: "CS Core & Concepts",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "OOP & Design Patterns" },
        { name: "Database Systems" },
        { name: "Operating Systems" },
        { name: "Machine Learning" },
        { name: "Distributed Systems" },
      ],
    },
  ],
};

// AI & Research Section Data (replaces Content Creator)
export const aiResearch = {
  badge: "AI & Research",
  heading: "Research, Hackathons & Innovation",
  description:
    "Where engineering meets academia — publishing research, competing at the frontier, and building intelligent production systems.",
  categories: [
    {
      title: "IEEE Conference Paper",
      description:
        "Published and presented an original research paper on Deep Learning-based Power Transformer Fault Analysis at GCON–IEEE, IIT Guwahati.",
      stats: "Jun 2026 · IIT Guwahati",
      link: null,
    },
    {
      title: "Meta PyTorch Hackathon Finalist",
      description:
        "Selected as a finalist at the Meta PyTorch OpenEnv Hackathon × Scaler — among 800 teams chosen from 31,000+ registrations nationwide.",
      stats: "800 / 31,000+ Teams",
      link: "https://github.com/Akshansh0519/BluffBuster_env",
    },
    {
      title: "ML Internship @ AI Gurukul",
      description:
        "Fine-tuned XLM-Roberta for code-mixed NLP across 5 Indian languages, achieving 91% weighted F1-score. Built a PDF RAG chatbot using Gemini API + BM25 retrieval.",
      stats: "91% Weighted F1-Score",
      link: null,
    },
    {
      title: "Open Source Engineering",
      description:
        "Actively building production-grade open-source projects at the intersection of distributed systems, AI orchestration, microservice architectures, and real-time collaboration.",
      stats: "7 Public Repos",
      link: "https://github.com/Akshansh0519",
    },
  ],
};

// Leadership / Activities Data
export const leadershipList = [
  {
    title: "IEEE GCON Conference — IIT Guwahati",
    description:
      "Published and presented an original research paper on DL-based Power Transformer Fault Analysis at GCON–IEEE, IIT Guwahati, contributing to the intersection of deep learning and power systems engineering.",
    role: "First Author & Presenter",
    badge: "Research",
  },
  {
    title: "Meta PyTorch OpenEnv Hackathon × Scaler",
    description:
      "Reached the finals as one of 800 teams selected from 31,000+ registrations. Built BluffBuster — an adversarial RL environment using GRPO-trained examiner agents for educational bluff detection.",
    role: "Team Lead",
    badge: "Hackathon",
  },
  {
    title: "ML Intern @ AI Gurukul",
    description:
      "Worked remotely on production NLP systems — fine-tuning transformer models for multilingual classification, building retrieval-augmented generation pipelines, and designing end-to-end NLP data pipelines.",
    role: "Machine Learning Intern",
    badge: "Industry",
  },
  {
    title: "Football Team Representative",
    description:
      "Represented school and college football teams — demonstrating teamwork, discipline, and competitive drive both on and off the field.",
    role: "Team Player",
    badge: "Sports",
  },
];

// Internships / Work Experience Data
export const internshipsList = [
  {
    organization: "AI Gurukul",
    role: "Machine Learning Intern",
    duration: "May 2025 – Jul 2025 · Remote",
    skills: [
      "Multilingual NLP (5 Indian Languages)",
      "Fine-tuning Transformer Models",
      "RAG Pipeline Design",
      "NLP Data Pipeline Engineering",
      "Model Evaluation (F1, Confusion Matrix)",
    ],
    tech: ["Python", "XLM-Roberta", "Gemini API", "BM25", "Hugging Face", "PyTorch"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    desc: "Breaking complex distributed systems problems into clean, testable, modular solutions across AI and backend engineering.",
  },
  {
    name: "System Thinking",
    desc: "Designing end-to-end architectures — from LangGraph state machines to Redis rate limiters and BullMQ worker queues.",
  },
  {
    name: "Research Mindset",
    desc: "IEEE-published researcher comfortable with NLP papers, reward shaping, fine-tuning experiments, and academic writing.",
  },
  {
    name: "Communication",
    desc: "Presenting research at IEEE conferences, writing production-grade documentation, and collaborative code reviews.",
  },
  {
    name: "Team Collaboration",
    desc: "Hackathon finalist, BITS Pilani CS minor student working across AI, distributed systems, and web engineering.",
  },
  {
    name: "Adaptability",
    desc: "Rapidly switching between LangGraph multi-agent systems, Socket.IO real-time apps, and Next.js frontends.",
  },
  {
    name: "Attention to Detail",
    desc: "Writing 95-test regression suites, enforcing Redis sliding-window rate limiting, and pixel-perfect UI dashboards.",
  },
  {
    name: "Continuous Learning",
    desc: "Exploring RAG pipelines, MCP microservices, GRPO training, and production-grade backend distributed patterns.",
  },
];

// Projects Data
export const projects = [
  {
    id: "orqflow",
    number: "01",
    badge: " Flagship Project",
    title: "OrqFlow",
    description:
      "Production-grade autonomous multi-agent AI orchestration platform. A LangGraph supervisor dynamically routes complex tasks to specialist agents (Researcher, Analyst, Coder, Responder), each equipped with real external tools via the Model Context Protocol (MCP). Features 4-tier LLM failover (Groq 70B → Groq 8B → Gemini 2.5 Flash → Gemini 1.5 Flash), Redis rate-limiting, async PostgreSQL memory, and an 11-endpoint FastAPI backend with SSE streaming — validated by a 95-test regression suite.",
    techTags: [
      "FastAPI",
      "LangGraph",
      "Python",
      "Redis",
      "PostgreSQL",
      "Docker",
      "MCP",
      "Groq",
      "Gemini",
    ],
    links: {
      github: "https://github.com/Akshansh0519/OrqFlow",
      demo: null, // Add live demo URL when available
    },
    isFlagship: true,
  },
  {
    id: "syncnexus",
    number: "02",
    badge: null,
    title: "SyncNexus",
    description:
      "Production-grade real-time collaborative workspace with a RAG AI assistant. Integrates ChromaDB vector search, BullMQ background workers with exponential backoff, and Socket.IO Redis adapter for cross-instance delivery. Features direct-to-S3 uploads (never touching Node.js memory), O(log N) cursor pagination, and 768-dimensional Gemini embeddings retrieving top-5 chunks with exact metadata citations.",
    techTags: ["Node.js", "Socket.IO", "ChromaDB", "BullMQ", "Redis", "PostgreSQL", "Prisma", "Gemini"],
    links: {
      github: "https://github.com/Akshansh0519/SyncNexus", // Confirm URL
      demo: "https://sync-nexus.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "linkforge",
    number: "03",
    badge: null,
    title: "LinkForge",
    description:
      "Production-grade URL shortener & analytics engine. Implements Redis cache-aside pattern cutting redirect latency from 45ms to 8ms, a sliding-window rate limiter using Redis sorted sets (O(log n) per request), and an async click analytics pipeline tracking geography, device, and referrer. Containerized with Docker Compose and deployed on Railway via GitHub Actions CI/CD.",
    techTags: ["Express", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker", "GitHub Actions"],
    links: {
      github: "https://github.com/Akshansh0519/LinkForge",
      demo: null, // Add live demo URL when available
    },
    isFlagship: false,
  },
  {
    id: "skyelite",
    number: "04",
    badge: " Microservice Architecture",
    title: "SkyElite — Flight Booking Platform",
    description:
      "Production-grade distributed flight booking platform built on a 3-microservice architecture. The Flights Service manages a normalized MySQL schema via Sequelize ORM with full CRUD and seat-inventory operations. The Booking Service implements strict ACID 2-phase commit transactions with distributed idempotency keys to eliminate duplicate bookings under concurrent load. Post-payment, an event envelope is published to a RabbitMQ queue decoupling the Notification Service, which consumes it asynchronously via Nodemailer to dispatch a full responsive HTML E-Ticket (boarding gate, route, fare, baggage info) to the passenger's inbox. A Next.js 16 portal provides a live search, booking, and payment UI with real-time status transitions.",
    techTags: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize ORM",
      "RabbitMQ",
      "Next.js 16",
      "TypeScript",
      "Nodemailer",
      "Axios",
      "CloudAMQP",
      "Aiven",
      "Render",
    ],
    links: {
      github: "https://github.com/Akshansh0519/Flight_Search_API",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "axiom-pulse",
    number: "05",
    badge: null,
    title: "Axiom Pulse",
    description:
      "Pixel-perfect crypto token discovery dashboard built with Next.js 14. Features enterprise SSO via NextAuth.js with Google + GitHub OAuth 2.0, WebSocket mock live token price updates with seamless Tailwind transitions, and atomic Radix UI component architecture. Achieved Lighthouse >90 (Desktop) via skeleton loading states and component memoization.",
    techTags: ["Next.js 14", "TypeScript", "NextAuth.js", "OAuth 2.0", "Radix UI", "Tailwind CSS", "Redux"],
    links: {
      github: "https://github.com/Akshansh0519/Axiom_Pulse",
      demo: "https://axiom-pulse-webapp.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "bluffbuster",
    number: "06",
    badge: " Hackathon · Meta PyTorch",
    title: "BluffBuster — The Examiner",
    description:
      "Adversarial RL environment for the Meta PyTorch OpenEnv Hackathon × Scaler (800 teams / 31,000+ registrations). A GRPO-trained LLM examiner agent learns to design diagnostic questions that expose confident bluffing across 7 student styles and 10 ML topics — using information-gain reward shaping and calibrated terminal scoring without any human-designed rules.",
    techTags: ["Python", "TRL GRPO", "Unsloth", "OpenEnv", "Qwen2.5-7B", "Weights & Biases", "Pydantic"],
    links: {
      github: "https://github.com/Akshansh0519/BluffBuster_env",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "shopsense",
    number: "07",
    badge: null,
    title: "ShopSense",
    description:
      "Production-grade hybrid e-commerce recommendation engine built on the H&M Personalized Fashion dataset. Fuses 6 distinct models (Popularity, Item-Item CF, ALS, BPR, NLP Content Embeddings, Hybrid Ensemble) with Maximal Marginal Relevance (MMR) reranking for diversity — all evaluated with rigorous offline metrics and served through a Redis-cached FastAPI microservice.",
    techTags: ["Python", "FastAPI", "Redis", "MLflow", "scikit-learn", "ALS", "BPR", "MMR"],
    links: {
      github: "https://github.com/Akshansh0519/ShopSense",
      demo: "https://shop-sense-five.vercel.app/",
    },
    isFlagship: false,
  },
];

// Education Data
export const education = {
  degree: "B.E. Electrical & Electronics Engineering",
  minor: "Minor in Computer Science",
  institution: "BITS Pilani, Hyderabad Campus",
  cgpa: "8.02",
  graduation: "2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Operating Systems",
    "Artificial Intelligence",
    "Machine Learning",
  ],
};

// Footer Content
export const footerContent = {
  taglines: [
    "Full Stack & AI Engineering",
    "Python · Node.js · React · LangGraph",
    "Building Production-Grade Systems",
  ],
  credential: "B.E. EEE + CS Minor · BITS Pilani · CGPA 8.02",
  copyright: `© ${new Date().getFullYear()} Akshansh Ranjan | Built with React`,
};

// EmailJS Configuration
// Set up at https://www.emailjs.com/ — create a free account, then fill in:
// VITE_EMAILJS_SERVICE_ID → your Email Service ID
// VITE_EMAILJS_TEMPLATE_ID → your Email Template ID  
// VITE_EMAILJS_PUBLIC_KEY → your Public Key
// Add these as environment variables in a .env file at project root
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
