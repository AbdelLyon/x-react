/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p } from "react";
import { Popover as d, PopoverTrigger as l, PopoverContent as v } from "@nextui-org/react";
import { B as f } from "../Button-CFcBPnF9.js";
import { cn as u } from "../utils/x-react.es.js";
const m = p(
  ({
    trigger: i,
    contentClassName: n,
    popoverContentProps: r,
    motionProps: s = {
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
    offset: a = 10,
    placement: c = "bottom",
    ...e
  }, o) => /* @__PURE__ */ t.jsxs(
    d,
    {
      ref: o,
      motionProps: s,
      offset: a,
      placement: c,
      ...e,
      children: [
        /* @__PURE__ */ t.jsx(l, { children: i }),
        /* @__PURE__ */ t.jsx(v, { className: n, ...r, children: e.children })
      ]
    }
  )
);
m.displayName = "Popover";
const y = p(({ trigger: i, links: n, onPress: r, classNameLinks: s, ...a }, c) => {
  const e = (o) => {
    r && r(o);
  };
  return /* @__PURE__ */ t.jsx(
    m,
    {
      ref: c,
      trigger: i,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...a,
      children: n.map((o) => /* @__PURE__ */ t.jsx(
        f,
        {
          onPress: () => e(o),
          startContent: o.icon,
          className: u("w-full flex justify-start gap-2", s),
          variant: a.variant,
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
