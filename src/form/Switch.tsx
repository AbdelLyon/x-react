import type { JSX } from "react";
import { forwardRef } from "react";
import type { SwitchProps as SwitchRootProp } from "@nextui-org/switch";
import { Switch as SwitchRoot } from "@nextui-org/switch";

type SwitchProps = {
  width?: string | number;
  height?: string | number;
} & SwitchRootProp;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ width, height, style, ...props }, ref): JSX.Element => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style,
    };

    return <SwitchRoot ref={ref} style={combinedStyle} {...props} />;
  },
);

Switch.displayName = "Switch";
