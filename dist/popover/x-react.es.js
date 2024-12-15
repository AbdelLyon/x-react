/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p } from "react";
import { Popover as l, PopoverTrigger as m, PopoverContent as u } from "@nextui-org/react";
import { B as v } from "../Button-CFcBPnF9.js";
const c = p(
  ({
    trigger: e,
    contentClassName: a,
    popoverContentProps: r,
    motionProps: n = {
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
    offset: i = 10,
    placement: s = "bottom",
    ...o
  }, d) => /* @__PURE__ */ t.jsxs(
    l,
    {
      ref: d,
      motionProps: n,
      offset: i,
      placement: s,
      ...o,
      children: [
        /* @__PURE__ */ t.jsx(m, { children: e }),
        /* @__PURE__ */ t.jsx(u, { className: a, ...r, children: o.children })
      ]
    }
  )
);
c.displayName = "Popover";
const y = p(({ trigger: e, links: a, onpress: r, ...n }, i) => {
  const s = (o) => {
    r && r(o);
  };
  return /* @__PURE__ */ t.jsx(
    c,
    {
      ref: i,
      trigger: e,
      classNames: {
        content: "w-40 bg-white dark:bg-content1 border border-default"
      },
      ...n,
      children: a.map((o) => /* @__PURE__ */ t.jsx(
        v,
        {
          type: "button",
          onPress: () => s(o),
          startContent: o.icon,
          className: "w-full border-none flex justify-start gap-2",
          variant: "ghost",
          children: o.label
        },
        o.label
      ))
    }
  );
});
y.displayName = "PopoverNavigation";
export {
  c as Popover,
  y as PopoverNavigation
};
