import React from "react";
import styles from "@/styles/components/button.module.css";
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
    styles.button,
    styles[variant],
    styles[size],
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
