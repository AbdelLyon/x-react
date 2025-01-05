import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx } from 'react/jsx-runtime';

// src/typography/Typography.tsx
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
var VARIANT_STYLES = {
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
var WEIGHT_STYLES = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
};
var ALIGN_STYLES = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify"
};
var Typography = forwardRef(
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

export { Typography };
//# sourceMappingURL=typography.js.map
//# sourceMappingURL=typography.js.map