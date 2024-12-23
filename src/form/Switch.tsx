import { forwardRef } from "react";
import {
  Switch as NextUISwitch,
  SwitchProps as SwitchRootProp,
} from "@nextui-org/react";

interface SwitchProps extends SwitchRootProp {
  width?: string | number;
  height?: string | number;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ width, height, style, ...props }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style,
    };

    return <NextUISwitch ref={ref} style={combinedStyle} {...props} />;
  },
);

Switch.displayName = "Switch";
