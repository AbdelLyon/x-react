// Stack.tsx
import type { JSX, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "@/utils";

interface StackProps {
  children: ReactNode;
  spacing?: number;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  className?: string;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { children, spacing = 4, align = "start", justify = "start", className },
    ref,
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col",
          `gap-${spacing}`,
          {
            "items-start": align === "start",
            "items-center": align === "center",
            "items-end": align === "end",
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between",
          },
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
