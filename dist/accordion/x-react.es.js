/* empty css                */
import { j as b } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p, createElement as a } from "react";
import { Accordion as l, AccordionItem as m } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
const u = p(
  ({ items: d, itemClasses: r, ...e }, c) => {
    const o = {
      base: t("w-full border-none shadow-none", {
        "bg-white dark:border-default-100 border border-default": e.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ b.jsx(
      l,
      {
        ref: c,
        ...e,
        itemClasses: {
          ...o,
          ...r,
          base: t(o.base, r == null ? void 0 : r.base),
          title: t(o.title, r == null ? void 0 : r.title)
        },
        children: d.map((i) => {
          const { content: f, ...n } = i;
          return /* @__PURE__ */ a(
            m,
            {
              ...n,
              key: n.key,
              children: f
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
