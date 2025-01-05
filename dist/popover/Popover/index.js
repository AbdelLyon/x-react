import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { Popover as y, PopoverTrigger as v, PopoverContent as l } from "@nextui-org/react";
const P = m(
  ({
    trigger: i,
    contentClassName: t,
    popoverContentProps: e,
    radius: n = "sm",
    motionProps: a = {
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
    offset: p = 10,
    placement: s = "bottom",
    ...o
  }, c) => /* @__PURE__ */ d(
    y,
    {
      ref: c,
      motionProps: a,
      offset: p,
      placement: s,
      radius: n,
      isOpen: o.isOpen,
      ...o,
      children: [
        /* @__PURE__ */ r(v, { children: i }),
        /* @__PURE__ */ r(l, { className: t, ...e, children: o.children })
      ]
    }
  )
);
P.displayName = "Popover";
export {
  P as Popover
};
//# sourceMappingURL=index.js.map
