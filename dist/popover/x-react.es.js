/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as c } from "react";
import { Popover as d, PopoverTrigger as y, PopoverContent as v } from "@nextui-org/react";
const x = c(
  ({
    trigger: t,
    contentClassName: i,
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
    offset: s = 10,
    placement: p = "bottom",
    ...o
  }, m) => /* @__PURE__ */ r.jsxs(
    d,
    {
      ref: m,
      motionProps: a,
      offset: s,
      placement: p,
      radius: n,
      isOpen: o.isOpen,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(y, { children: t }),
        /* @__PURE__ */ r.jsx(v, { className: i, ...e, children: o.children })
      ]
    }
  )
);
x.displayName = "Popover";
export {
  x as Popover
};
