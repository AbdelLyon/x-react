import "../image/image.es.js";
import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { Popover as y, PopoverTrigger as v, PopoverContent as l } from "@nextui-org/react";
const P = d(
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
  }, m) => /* @__PURE__ */ c(
    y,
    {
      ref: m,
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
