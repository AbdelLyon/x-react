import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Popover as Popover$1, PopoverTrigger, PopoverContent } from "@nextui-org/react";
const Popover = forwardRef(
  ({
    trigger,
    contentClassName,
    popoverContentProps,
    radius = "sm",
    motionProps = {
      variants: {
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            y: { duration: 0.1 },
            opacity: { duration: 0.15 }
          }
        },
        exit: {
          y: "10%",
          opacity: 0,
          transition: {
            y: { duration: 0 },
            opacity: { duration: 0.1 }
          }
        }
      }
    },
    offset = 10,
    placement = "bottom",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      Popover$1,
      {
        ref,
        motionProps,
        offset,
        placement,
        radius,
        isOpen: props.isOpen,
        ...props,
        children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { children: trigger }),
          /* @__PURE__ */ jsx(PopoverContent, { className: contentClassName, ...popoverContentProps, children: props.children })
        ]
      }
    );
  }
);
Popover.displayName = "Popover";
export {
  Popover
};
