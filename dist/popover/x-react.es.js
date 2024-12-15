/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m } from "react";
import { Popover as c, PopoverTrigger as d, PopoverContent as y } from "@nextui-org/react";
const v = m(
  ({
    trigger: t,
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
    ...r
  }, s) => /* @__PURE__ */ o.jsxs(
    c,
    {
      ref: s,
      motionProps: a,
      offset: n,
      placement: p,
      ...r,
      children: [
        /* @__PURE__ */ o.jsx(d, { children: t }),
        /* @__PURE__ */ o.jsx(y, { className: i, ...e, children: r.children })
      ]
    }
  )
);
v.displayName = "Popover";
export {
  v as Popover
};
