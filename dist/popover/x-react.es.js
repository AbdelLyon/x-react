/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m } from "react";
import { Popover as p, PopoverTrigger as v, PopoverContent as f } from "@nextui-org/react";
import { B as y } from "../Button-CFcBPnF9.js";
import { cn as u } from "../utils/x-react.es.js";
const d = m(
  ({
    trigger: a,
    contentClassName: i,
    popoverContentProps: e,
    radius: n = "sm",
    motionProps: r = {
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
  }, l) => /* @__PURE__ */ t.jsxs(
    p,
    {
      ref: l,
      motionProps: r,
      offset: s,
      placement: c,
      radius: n,
      isOpen: o.isOpen,
      ...o,
      children: [
        /* @__PURE__ */ t.jsx(v, { children: a }),
        /* @__PURE__ */ t.jsx(f, { className: i, ...e, children: o.children })
      ]
    }
  )
);
d.displayName = "Popover";
const x = m(({ trigger: a, links: i, onPress: e, classNameLinks: n, ...r }, s) => {
  const c = (o) => {
    e && e(o);
  };
  return /* @__PURE__ */ t.jsx(
    d,
    {
      ref: s,
      trigger: a,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-divider"
      },
      ...r,
      children: i.map((o) => /* @__PURE__ */ t.jsx(
        y,
        {
          onPress: () => c(o),
          startContent: o.icon,
          className: u("w-full flex justify-start gap-2", n),
          variant: r.variant,
          color: r.color,
          children: o.label
        },
        o.label
      ))
    }
  );
});
x.displayName = "PopoverNavigation";
export {
  d as Popover,
  x as PopoverNavigation
};
