import { jsx as l } from "react/jsx-runtime";
import { forwardRef as m, createElement as i } from "react";
import { cn as e } from "../utils.es.js";
import { Accordion as u, AccordionItem as p } from "@nextui-org/react";
const A = m(
  ({ items: n, itemClasses: r, ...t }, c) => {
    const o = {
      base: e("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-default rounded-md": t.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    }, a = e(
      "rounded-md",
      {
        "border-1 border-default": t.variant === "bordered"
      },
      t.className
    );
    return /* @__PURE__ */ l(
      u,
      {
        ref: c,
        ...t,
        className: a,
        itemClasses: {
          ...o,
          ...r,
          base: e(o.base, r == null ? void 0 : r.base),
          title: e(o.title, r == null ? void 0 : r.title)
        },
        children: n.map((b) => {
          const { content: f, ...d } = b;
          return /* @__PURE__ */ i(
            p,
            {
              ...d,
              key: d.key,
              children: f
            }
          );
        })
      }
    );
  }
);
A.displayName = "Accordion";
export {
  A as Accordion
};
