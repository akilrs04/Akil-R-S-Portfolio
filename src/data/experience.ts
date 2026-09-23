import { Experience, Education } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Engineer",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    period: "2024 — Present",
    current: true,
    description: [
      "Architected and deployed scalable Next.js and microservice platforms supporting 100k+ monthly active users.",
      "Engineered real-time collaboration features reducing user latency by 45%.",
      "Mentored junior engineers and established automated CI/CD deployment pipelines.",
    ],
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    companyUrl: "https://technova.example.com",
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Apex Digital Labs",
    location: "Bangalore, India",
    period: "2022 — 2024",
    current: false,
    description: [
      "Developed high-converting, responsive landing pages and user dashboards with React and TypeScript.",
      "Improved Core Web Vitals across client portals, boosting average PageSpeed scores to 95+.",
      "Integrated GraphQL client states and REST APIs for complex data synchronization.",
    ],
    skills: ["React", "JavaScript", "REST APIs", "Tailwind CSS", "Jest"],
    companyUrl: "https://apexdigital.example.com",
  },
];

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Visvesvaraya Technological University",
    period: "2018 — 2022",
    location: "Karnataka, India",
    highlights: [
      "Graduated with First Class with Distinction",
      "Lead Developer for the University Open-Source Club",
    ],
  },
];
