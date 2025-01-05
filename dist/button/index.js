import { forwardRef } from 'react';
import { Button as Button$1, ButtonGroup } from '@nextui-org/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

// src/button/Button.tsx
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
var Button = forwardRef(
  ({
    fullWidth = false,
    isLoading = false,
    isDisabled = false,
    startContent,
    endContent,
    className = "",
    LinkComponent,
    variant = "solid",
    classNames = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href,
    children,
    target,
    rel,
    ...props
  }, ref) => {
    const baseStyles = cn(
      "transition-none font-normal border-1 rounded-md",
      fullWidth && "w-full",
      isLoading && "opacity-50 cursor-not-allowed",
      classNames.base,
      className
    );
    const Content = () => /* @__PURE__ */ jsxs(Fragment, { children: [
      startContent !== void 0 && /* @__PURE__ */ jsx("span", { className: cn("mr-2", classNames.beforeContent), children: startContent }),
      /* @__PURE__ */ jsx("span", { className: classNames.content, children }),
      endContent !== void 0 && /* @__PURE__ */ jsx("span", { className: cn("ml-2", classNames.afterContent), children: endContent })
    ] });
    const hasValidLink = href !== void 0 && href.length > 0 && LinkComponent !== void 0 && LinkComponent !== void 0;
    if (hasValidLink) {
      return /* @__PURE__ */ jsx(
        Button$1,
        {
          ref,
          ...props,
          as: LinkComponent,
          variant,
          className: baseStyles,
          href,
          rel: target === "_blank" ? "noopener noreferrer" : rel,
          target,
          children: /* @__PURE__ */ jsx(Content, {})
        }
      );
    }
    return /* @__PURE__ */ jsx(
      Button$1,
      {
        ref,
        ...props,
        variant,
        className: baseStyles,
        isDisabled,
        children: /* @__PURE__ */ jsx(Content, {})
      }
    );
  }
);
Button.displayName = "Button";
var Buttons = forwardRef(
  ({ buttons, ...props }, ref) => {
    return /* @__PURE__ */ jsx(ButtonGroup, { ref, ...props, children: buttons.map(({ key, label, buttonProps }) => /* @__PURE__ */ jsx(Button, { ...buttonProps, children: label }, key)) });
  }
);
Buttons.displayName = "Buttons";

export { Button, Buttons };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map