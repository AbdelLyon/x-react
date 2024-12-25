// src/components/ui/layout/Section.tsx
import type { ReactNode, ForwardedRef } from "react";
import { forwardRef } from "react";
import { cn } from "@/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
}

export const Section = forwardRef(
  (
    { children, spacing = "md", className }: SectionProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const sectionClasses = cn(
      {
        "py-4": spacing === "sm",
        "py-8": spacing === "md",
        "py-12": spacing === "lg",
        "py-16": spacing === "xl",
      },
      className,
    );

    return (
      <section ref={ref} className={sectionClasses}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
