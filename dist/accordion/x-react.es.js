/* empty css                */
import { j as f } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as i, createElement as l } from "react";
import { cn as o } from "../utils/x-react.es.js";
import { Accordion as u, AccordionItem as p } from "@nextui-org/react";
const x = i(
  ({ items: n, itemClasses: r, ...t }, a) => {
    const e = {
      base: o("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-default rounded-md": t.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    }, c = o(
      "rounded-md",
      {
        "border-1 border-default": t.variant === "bordered"
      },
      t.className
    );
    return /* @__PURE__ */ f.jsx(
      u,
      {
        ref: a,
        ...t,
        className: c,
        itemClasses: {
          ...e,
          ...r,
          base: o(e.base, r == null ? void 0 : r.base),
          title: o(e.title, r == null ? void 0 : r.title)
        },
        children: n.map((m) => {
          const { content: b, ...d } = m;
          return /* @__PURE__ */ l(
            p,
            {
              ...d,
              key: d.key,
              children: b
            }
          );
        })
      }
    );
  }
);
x.displayName = "Accordion";
export {
  x as Accordion
};
