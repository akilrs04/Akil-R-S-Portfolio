import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend & UI",
    skills: [
      { name: "React / Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "HTML5 & Modern CSS", level: "Expert" },
      { name: "Tailwind CSS / CSS Modules", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Responsive Web Design", level: "Expert" },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: "Advanced" },
      { name: "Next.js API Routes", level: "Advanced" },
      { name: "PostgreSQL & Prisma", level: "Advanced" },
      { name: "REST & GraphQL APIs", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel & Cloudflare", level: "Advanced" },
      { name: "CI/CD Workflows", level: "Intermediate" },
      { name: "Jest & Testing Library", level: "Intermediate" },
      { name: "Vite / Webpack", level: "Advanced" },
    ],
  },
];
