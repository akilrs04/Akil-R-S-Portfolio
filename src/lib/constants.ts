import { NavItem, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Akil R S",
  title: "Akil R S — Product Designer & Engineer",
  description: "I have years of experience working on useful and mindful products together with startups and known brands.",
  url: "https://akil-rs.dev",
  ogImage: "/images/capsules/capsule-bw-portrait.jpg",
  author: "Akil R S",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Twitter",
    url: "https://twitter.com",
    username: "agero_design",
    iconName: "twitter",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    username: "agero-studio",
    iconName: "linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com",
    username: "agero-agency",
    iconName: "github",
  },
  {
    platform: "Email",
    url: "mailto:hello@agero.design",
    username: "hello@agero.design",
    iconName: "mail",
  },
];
