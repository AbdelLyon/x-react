import { forwardRef } from "react";
import {
  Textarea as TextareaRoot,
  TextAreaProps as TextAreaRootProps,
} from "@nextui-org/react";

interface TextareaProps extends TextAreaRootProps {
  width?: string | number;
  height?: string | number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ width, height, style, ...props }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style,
    };

    return <TextareaRoot ref={ref} style={combinedStyle} {...props} />;
  },
);

Textarea.displayName = "Textarea";
