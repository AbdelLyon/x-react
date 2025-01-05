import "../image/image.es.js";
import { jsx as l } from "react/jsx-runtime";
import { forwardRef as m, createElement as i } from "react";
import { cn as o } from "../utils/utils.es.js";
import { Accordion as u, AccordionItem as p } from "@nextui-org/react";
const A = m(
  ({ items: n, itemClasses: r, ...t }, c) => {
    const e = {
      base: o("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-default rounded-md": t.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    }, a = o(
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
          ...e,
          ...r,
          base: o(e.base, r == null ? void 0 : r.base),
          title: o(e.title, r == null ? void 0 : r.title)
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
