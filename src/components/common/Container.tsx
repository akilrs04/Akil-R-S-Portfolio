import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

export function Container({
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  const maxWidthClass =
    size === "sm"
      ? "max-w-3xl"
      : size === "md"
      ? "max-w-5xl"
      : size === "full"
      ? "max-w-full"
      : "container";

  return (
    <div className={cn(maxWidthClass, className)} {...props}>
      {children}
    </div>
  );
}
