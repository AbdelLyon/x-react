import { j as f } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p, createElement as m } from "react";
import { Accordion as a, AccordionItem as l } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
const u = p(
  ({ items: e, itemClasses: o, ...n }, c) => {
    const r = {
      base: t("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-divider rounded-md": n.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ f.jsx(
      a,
      {
        ref: c,
        ...n,
        itemClasses: {
          ...r,
          ...o,
          base: t(r.base, o == null ? void 0 : o.base),
          title: t(r.title, o == null ? void 0 : o.title)
        },
        children: e.map((i) => {
          const { content: b, ...d } = i;
          return /* @__PURE__ */ m(
            l,
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
u.displayName = "Accordion";
export {
  u as Accordion
};
