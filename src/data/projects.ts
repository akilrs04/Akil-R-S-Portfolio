import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "modern-ecommerce-platform",
    title: "OmniStore E-Commerce",
    tagline: "High-performance full-stack marketplace with real-time checkout & analytics",
    description:
      "A next-generation e-commerce web application featuring server-rendered product catalogs, dynamic faceted filtering, Stripe payment processing, and an administrative metrics dashboard.",
    thumbnail: "/images/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    category: "Full-Stack",
    featured: true,
    liveUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/ecommerce",
    technologies: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS", "Prisma"],
    completedAt: "2025-11-15",
    stats: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Checkout Latency", value: "< 250ms" },
    ],
  },
  {
    id: "proj-2",
    slug: "ai-content-studio",
    title: "Nexus AI Studio",
    tagline: "Generative AI workspace for intelligent document synthesis and summarization",
    description:
      "Collaborative cloud workspace integrating LLM orchestration, vector embeddings with Pinecone, and markdown streaming for instant AI-assisted workflows.",
    thumbnail: "/images/projects/project2.png",
    tags: ["Next.js", "OpenAI API", "Vector DB", "Tailwind CSS"],
    category: "AI/ML",
    featured: true,
    liveUrl: "https://example.com/ai-studio",
    githubUrl: "https://github.com/example/nexus-ai",
    technologies: ["Next.js", "OpenAI API", "Pinecone", "Lucide Icons"],
    completedAt: "2025-08-10",
    stats: [
      { label: "Active Users", value: "1.2k+" },
      { label: "Tokens Processed", value: "15M+" },
    ],
  },
  {
    id: "proj-3",
    slug: "dev-analytics-dashboard",
    title: "PulseMetrics Cloud",
    tagline: "Real-time telemetry and API health monitoring dashboard for microservices",
    description:
      "Interactive data visualization platform that ingests event streams, monitors server uptime, and graphs latency trends using real-time WebSockets.",
    thumbnail: "/images/projects/project3.png",
    tags: ["React", "TypeScript", "WebSockets", "D3.js", "Node.js"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://example.com/pulse-metrics",
    githubUrl: "https://github.com/example/pulse-metrics",
    technologies: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    completedAt: "2025-04-20",
    stats: [
      { label: "Event Ingestion", value: "10k/sec" },
      { label: "Chart Refresh", value: "60 FPS" },
    ],
  },
];
