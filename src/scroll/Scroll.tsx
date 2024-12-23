import { forwardRef } from "react";
import { ScrollShadow, ScrollShadowProps } from "@nextui-org/react";

interface ScrollProps extends ScrollShadowProps {
  width?: string | number;
  height?: string | number;
}

export const Scroll = forwardRef<HTMLDivElement, ScrollProps>(
  ({ width = "100%", height = "100%", style, ...props }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style,
    };

    return <ScrollShadow ref={ref} style={combinedStyle} {...props} />;
  },
);

Scroll.displayName = "Scroll";
