import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff4d15",
          "orange-hover": "#e63e07",
          "orange-light": "#fff2ee",
        },
        dark: {
          pill: "#16171a",
          "pill-hover": "#26282f",
          notch: "#141518",
        },
        canvas: {
          primary: "#fbfbfa",
          secondary: "#f4f4f3",
          tertiary: "#ebebea",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
        serif: ["var(--font-serif)", "'Newsreader'", "'Playfair Display'", "serif"],
      },
      boxShadow: {
        capsule: "0 6px 18px rgba(0, 0, 0, 0.15)",
        pill: "0 4px 16px rgba(0, 0, 0, 0.14)",
      },
      borderRadius: {
        xl: "20px",
        "2xl": "32px",
      },
    },
  },
  plugins: [],
};

export default config;
