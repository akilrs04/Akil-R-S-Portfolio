export * from "./project";
export * from "./experience";

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    icon?: string;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  iconName?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  location: string;
  email: string;
  phone?: string;
  status?: string;
  availableForHire: boolean;
  socials: SocialLink[];
}
