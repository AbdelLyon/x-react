/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p, useState as f } from "react";
import { Popover as v, PopoverTrigger as u, PopoverContent as y } from "@nextui-org/react";
import { B as x } from "../Button-CFcBPnF9.js";
import { cn as P } from "../utils/x-react.es.js";
const d = p(
  ({
    trigger: i,
    contentClassName: n,
    popoverContentProps: a,
    radius: s = "sm",
    motionProps: t = {
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
    offset: c = 10,
    placement: l = "bottom",
    ...r
  }, m) => /* @__PURE__ */ e.jsxs(
    v,
    {
      ref: m,
      motionProps: t,
      offset: c,
      placement: l,
      radius: s,
      isOpen: r.isOpen,
      ...r,
      children: [
        /* @__PURE__ */ e.jsx(u, { children: i }),
        /* @__PURE__ */ e.jsx(y, { className: n, ...a, children: r.children })
      ]
    }
  )
);
d.displayName = "Popover";
const h = p(({ trigger: i, links: n, onPress: a, classNameLinks: s, ...t }, c) => {
  const [l, r] = f(!1), m = (o) => {
    a && (a(o), r(!1));
  };
  return /* @__PURE__ */ e.jsx(
    d,
    {
      ref: c,
      trigger: i,
      isOpen: l,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...t,
      children: n.map((o) => /* @__PURE__ */ e.jsx(
        x,
        {
          onPress: () => m(o),
          startContent: o.icon,
          className: P("w-full flex justify-start gap-2", s),
          variant: t.variant,
          color: t.color,
          children: o.label
        },
        o.label
      ))
    }
  );
});
h.displayName = "PopoverNavigation";
export {
  d as Popover,
  h as PopoverNavigation
};
