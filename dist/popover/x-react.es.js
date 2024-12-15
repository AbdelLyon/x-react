/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as c } from "react";
import { Popover as p, PopoverTrigger as l, PopoverContent as v } from "@nextui-org/react";
import { B as y } from "../Button-CFcBPnF9.js";
const d = c(
  ({
    trigger: e,
    contentClassName: i,
    popoverContentProps: a,
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
    offset: n = 10,
    placement: s = "bottom",
    ...o
  }, m) => /* @__PURE__ */ r.jsxs(
    p,
    {
      ref: m,
      motionProps: t,
      offset: n,
      placement: s,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(l, { children: e }),
        /* @__PURE__ */ r.jsx(v, { className: i, ...a, children: o.children })
      ]
    }
  )
);
d.displayName = "Popover";
const u = c(({ trigger: e, links: i, onPress: a, ...t }, n) => {
  const s = (o) => {
    a && a(o);
  };
  return /* @__PURE__ */ r.jsx(
    d,
    {
      ref: n,
      trigger: e,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...t,
      children: i.map((o) => /* @__PURE__ */ r.jsx(
        y,
        {
          onPress: () => s(o),
          startContent: o.icon,
          className: t.classNameLinks,
          variant: t.variant,
          children: o.label
        },
        o.label
      ))
    }
  );
});
u.displayName = "PopoverNavigation";
export {
  d as Popover,
  u as PopoverNavigation
};
