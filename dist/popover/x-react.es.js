/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
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
  }, d) => /* @__PURE__ */ t.jsxs(
    p,
    {
      ref: d,
      motionProps: r,
      offset: s,
      placement: c,
      radius: n,
      ...o,
      children: [
        /* @__PURE__ */ t.jsx(v, { children: e }),
        /* @__PURE__ */ t.jsx(f, { className: i, ...a, children: o.children })
      ]
    }
  )
);
l.displayName = "Popover";
const x = m(({ trigger: e, links: i, onPress: a, classNameLinks: n, ...r }, s) => {
  const c = (o) => {
    a && a(o);
  };
  return /* @__PURE__ */ t.jsx(
    l,
    {
      ref: s,
      trigger: e,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...r,
      children: i.map((o) => /* @__PURE__ */ t.jsx(
        u,
        {
          onPress: () => c(o),
          startContent: o.icon,
          className: y("w-full flex justify-start gap-2", n),
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
  l as Popover,
  x as PopoverNavigation
};
