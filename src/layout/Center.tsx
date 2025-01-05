// Center.tsx
import type { JSX, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "@/utils";

interface CenterProps {
  children: ReactNode;
  inline?: boolean;
  className?: string;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ children, inline = false, className }, ref): JSX.Element => {
    return (
      <div
        ref={ref}
        className={cn(
          inline ? "inline-flex" : "flex",
          "items-center justify-center",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
