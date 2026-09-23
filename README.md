# Akil R S Portfolio

A modern, high-performance personal portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Vanilla CSS Design Tokens**.

---

## 📁 Project Architecture & Directory Layout

```
Akil R S Portfolio/
├── public/                     # Static assets accessible from the root URL
│   ├── images/
│   │   ├── avatar/             # Profile photos & headshots
│   │   └── projects/           # Project screenshots & thumbnails
│   ├── icons/                  # Tech stack & custom SVG icons
│   └── resume.pdf              # Downloadable resume
│
├── src/
│   ├── app/                    # Next.js App Router (pages, layouts, metadata)
│   │   ├── layout.tsx          # Root layout (HTML, body, global providers, font setup)
│   │   ├── page.tsx            # Main portfolio homepage (One-page / Hub)
│   │   ├── globals.css         # Global resets, typography, and utility classes
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── error.tsx           # Global error boundary
│   │   ├── loading.tsx         # Global loading UI
│   │   ├── projects/           # Sub-routes for project details
│   │   │   ├── page.tsx        # All projects archive view
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Dynamic project detail page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Contact form API endpoint
│   │
│   ├── components/             # Reusable UI & section components
│   │   ├── common/             # Global layout & reusable elements
│   │   │   ├── Navbar.tsx      # Responsive header with smooth scroll links
│   │   │   ├── Footer.tsx      # Footer with socials and copyright
│   │   │   ├── Button.tsx      # Reusable styled button component
│   │   │   └── Container.tsx   # Max-width layout container
│   │   ├── home/               # Homepage specific sections
│   │   │   ├── HeroSection.tsx # Introduction, headline, CTA buttons, social links
│   │   │   ├── AboutSection.tsx# Biography, highlights, stats
│   │   │   ├── SkillsSection.tsx# Categorized tech stack & competencies
│   │   │   ├── ExperienceSection.tsx # Career / education timeline
│   │   │   ├── ProjectsSection.tsx # Featured project showcase
│   │   │   └── ContactSection.tsx # Interactive contact form
│   │   └── ui/                 # Micro-components and interactive UI
│   │       ├── ThemeToggle.tsx # Light/Dark mode switcher
│   │       └── ProjectCard.tsx # Individual project preview card
│   │
│   ├── data/                   # Structured portfolio content (easy to update)
│   │   ├── personal.ts         # Name, titles, bio, contact info, social links
│   │   ├── projects.ts         # Portfolio projects list with tags, links, and descriptions
│   │   ├── skills.ts           # Skills categorized by frontend, backend, tools, etc.
│   │   └── experience.ts       # Work experience and education history
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTheme.ts         # Theme switching hook (light/dark with persistence)
│   │   └── useScrollSpy.ts     # Active section tracking for navbar
│   │
│   ├── lib/                    # Utility functions & helpers
│   │   ├── constants.ts        # Site metadata, navigation items
│   │   └── utils.ts            # Class name helpers, formatters
│   │
│   ├── types/                  # TypeScript interfaces & types
│   │   ├── project.ts          # Project data model
│   │   ├── experience.ts       # Experience data model
│   │   └── index.ts            # Common shared types
│   │
│   └── styles/                 # Modular styles & design tokens
│       ├── variables.css       # Color palettes, dark mode tokens, spacing, typography
│       └── components/         # CSS modules for custom component styles
│
├── .env.example                # Example environment variables
├── .gitignore                  # Git ignore rules for Next.js & node_modules
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies & scripts
└── tsconfig.json               # TypeScript compiler options
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Customization

- **Personal Details & Bio**: Edit [`src/data/personal.ts`](file:///e:/Portfolio%20Template/Akil%20R%20S%20Portfolio/src/data/personal.ts).
- **Projects**: Add, remove, or update items in [`src/data/projects.ts`](file:///e:/Portfolio%20Template/Akil%20R%20S%20Portfolio/src/data/projects.ts).
- **Skills**: Update categories and proficiencies in [`src/data/skills.ts`](file:///e:/Portfolio%20Template/Akil%20R%20S%20Portfolio/src/data/skills.ts).
- **Experience**: Edit work history in [`src/data/experience.ts`](file:///e:/Portfolio%20Template/Akil%20R%20S%20Portfolio/src/data/experience.ts).
- **Colors & Tokens**: Adjust CSS variables in [`src/styles/variables.css`](file:///e:/Portfolio%20Template/Akil%20R%20S%20Portfolio/src/styles/variables.css).
