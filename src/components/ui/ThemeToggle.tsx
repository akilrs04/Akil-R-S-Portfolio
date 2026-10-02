"use client";

import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-white/80 dark:bg-[#121418]/85 border border-black/[0.07] dark:border-white/[0.08] text-neutral-900 dark:text-neutral-100 hover:bg-white dark:hover:bg-[#191b20] hover:border-black/[0.14] dark:hover:border-white/[0.16] hover:text-[#ff4d15] dark:hover:text-[#ff4d15] hover:rotate-[15deg] transition-all duration-250 cursor-pointer shadow-sm group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="transition-transform duration-250 text-neutral-100 group-hover:text-[#ff4d15]" size={18} />
      ) : (
        <Moon className="transition-transform duration-250 text-neutral-900 group-hover:text-[#ff4d15]" size={18} />
      )}
    </button>
  );
}
