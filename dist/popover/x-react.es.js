/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as c } from "react";
import { Popover as l, PopoverTrigger as p, PopoverContent as v } from "@nextui-org/react";
import { B as f } from "../Button-CFcBPnF9.js";
import { cn as u } from "../utils/x-react.es.js";
const m = c(
  ({
    trigger: e,
    contentClassName: i,
    popoverContentProps: a,
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
    offset: n = 10,
    placement: s = "bottom",
    ...o
  }, d) => /* @__PURE__ */ t.jsxs(
    l,
    {
      ref: d,
      motionProps: r,
      offset: n,
      placement: s,
      ...o,
      children: [
        /* @__PURE__ */ t.jsx(p, { children: e }),
        /* @__PURE__ */ t.jsx(v, { className: i, ...a, children: o.children })
      ]
    }
  )
);
m.displayName = "Popover";
const y = c(({ trigger: e, links: i, onPress: a, ...r }, n) => {
  const s = (o) => {
    a && a(o);
  };
  return /* @__PURE__ */ t.jsx(
    m,
    {
      ref: n,
      trigger: e,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...r,
      children: i.map((o) => /* @__PURE__ */ t.jsx(
        f,
        {
          onPress: () => s(o),
          startContent: o.icon,
          className: u(
            "w-full border-none flex justify-start gap-2",
            r.classNameLinks
          ),
          variant: r.variant,
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
