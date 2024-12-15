/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as c } from "react";
import { Popover as l, PopoverTrigger as p, PopoverContent as v } from "@nextui-org/react";
import { B as f } from "../Button-CFcBPnF9.js";
import { cn as u } from "../utils/x-react.es.js";
const m = c(
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
  }, d) => /* @__PURE__ */ r.jsxs(
    l,
    {
      ref: d,
      motionProps: t,
      offset: n,
      placement: s,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(p, { children: e }),
        /* @__PURE__ */ r.jsx(v, { className: i, ...a, children: o.children })
      ]
    }
  )
);
m.displayName = "Popover";
const y = c(({ trigger: e, links: i, onPress: a, ...t }, n) => {
  const s = (o) => {
    a && a(o);
  };
  return /* @__PURE__ */ r.jsx(
    m,
    {
      ref: n,
      trigger: e,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...t,
      children: i.map((o) => /* @__PURE__ */ r.jsx(
        f,
        {
          onPress: () => s(o),
          startContent: o.icon,
          className: u(
            "w-full flex justify-start gap-2",
            t.classNameLinks
          ),
          variant: t.variant,
          children: o.label
        },
        o.label
      ))
    }
  );
});
y.displayName = "PopoverNavigation";
export {
  m as Popover,
  y as PopoverNavigation
};
