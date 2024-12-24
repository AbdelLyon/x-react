import { forwardRef } from "react";
import type {
  SwitchProps as SwitchRootProp} from "@nextui-org/react";
import {
  Switch as NextUISwitch
} from "@nextui-org/react";

type SwitchProps = {
  width?: string | number;
  height?: string | number;
} & SwitchRootProp

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
