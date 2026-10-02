import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[#ff4d15] hover:bg-[#e63e07] text-white shadow-[0_4px_14px_rgba(255,77,21,0.35)] hover:shadow-[0_6px_20px_rgba(255,77,21,0.5)] brightness-100 hover:brightness-105",
  secondary:
    "bg-white dark:bg-[#121418] text-neutral-900 dark:text-white border border-black/[0.07] dark:border-white/[0.08] hover:bg-neutral-50 dark:hover:bg-[#191b20] hover:border-black/[0.14] dark:hover:border-white/[0.16]",
  outline:
    "bg-transparent text-neutral-900 dark:text-white border border-black/[0.14] dark:border-white/[0.16] hover:border-[#ff4d15] hover:text-[#ff4d15]",
  ghost:
    "bg-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-5 py-2.5 text-[0.95rem] rounded-lg",
  lg: "px-7 py-3.5 text-[1.05rem] rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  icon,
  ...props
}: ButtonProps) {
  const combinedClassName = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 no-underline cursor-pointer whitespace-nowrap active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {icon && <span className="inline-flex items-center">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
