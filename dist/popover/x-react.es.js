/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as c } from "react";
import { Popover as d, PopoverTrigger as y, PopoverContent as v } from "@nextui-org/react";
const x = c(
  ({
    trigger: r,
    content: t,
    contentClassName: i,
    popoverContentProps: e,
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
    offset: n = 10,
    placement: p = "bottom",
    ...s
  }, m) => /* @__PURE__ */ o.jsxs(
    d,
    {
      ref: m,
      motionProps: a,
      offset: n,
      placement: p,
      ...s,
      children: [
        /* @__PURE__ */ o.jsx(y, { children: r }),
        /* @__PURE__ */ o.jsx(v, { className: i, ...e, children: t })
      ]
    }
  )
);
x.displayName = "Popover";
export {
  x as Popover
};
