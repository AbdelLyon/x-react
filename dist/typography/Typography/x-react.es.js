import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/x-react.es.js";
const VARIANT_STYLES = {
  h1: "text-4xl md:text-5xl font-bold",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-2xl md:text-3xl font-bold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-semibold",
  h6: "text-base md:text-lg font-semibold",
  base: "text-base",
  small: "text-sm",
  caption: "text-xs",
  overline: "text-xs uppercase tracking-wider"
};
const WEIGHT_STYLES = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
};
const ALIGN_STYLES = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify"
};
const Typography = forwardRef(
  ({
    children,
    as: Component = "p",
    variant = "base",
    weight,
    align,
    color,
    truncate,
    className,
    ...props
  }, ref) => {
    const classes = cn(
      VARIANT_STYLES[variant],
      weight && WEIGHT_STYLES[weight],
      align && ALIGN_STYLES[align],
      color !== void 0 && `text-${color}`,
      truncate !== void 0 && "truncate",
      className
    );
    return /* @__PURE__ */ jsx(Component, { ref, className: classes, ...props, children });
  }
);
Typography.displayName = "Typography";
export {
  Typography
};
