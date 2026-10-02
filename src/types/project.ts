export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images?: string[];
  tags: string[];
  category: "Full-Stack" | "Frontend" | "Backend" | "AI/ML" | "Mobile" | string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  technologies: string[];
  completedAt: string;
}
