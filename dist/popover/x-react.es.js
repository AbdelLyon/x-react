/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m } from "react";
import { Popover as p, PopoverTrigger as v, PopoverContent as f } from "@nextui-org/react";
import { B as u } from "../Button-CFcBPnF9.js";
import { cn as y } from "../utils/x-react.es.js";
const l = m(
  ({
    trigger: e,
    contentClassName: i,
    popoverContentProps: a,
    radius: n = "sm",
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
    offset: s = 10,
    placement: c = "bottom",
    ...o
  }, d) => /* @__PURE__ */ r.jsxs(
    p,
    {
      ref: d,
      motionProps: t,
      offset: s,
      placement: c,
      radius: n,
      isOpen: o.isOpen,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(v, { children: e }),
        /* @__PURE__ */ r.jsx(f, { className: i, ...a, children: o.children })
      ]
    }
  )
);
l.displayName = "Popover";
const x = m(({ trigger: e, links: i, onPress: a, classNameLinks: n, ...t }, s) => {
  const c = (o) => {
    a && a(o);
  };
  return /* @__PURE__ */ r.jsx(
    l,
    {
      ref: s,
      trigger: e,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...t,
      children: i.map((o) => /* @__PURE__ */ r.jsx(
        u,
        {
          onPress: () => c(o),
          startContent: o.icon,
          className: y("w-full flex justify-start gap-2", n),
          variant: t.variant,
          color: t.color,
          children: o.label
        },
        o.label
      ))
    }
  );
});
x.displayName = "PopoverNavigation";
export {
  l as Popover,
  x as PopoverNavigation
};
