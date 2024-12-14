/* empty css                */
import { j as b } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p, createElement as a } from "react";
import { Accordion as l, AccordionItem as m } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
const u = p(
  ({ items: d, itemClasses: o, ...n }, c) => {
    const r = {
      base: t("w-full border-none shadow-none", {
        "bg-white dark:bg-default-100 border border-default": n.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ b.jsx(
      l,
      {
        ref: c,
        ...n,
        itemClasses: {
          ...r,
          ...o,
          base: t(r.base, o == null ? void 0 : o.base),
          title: t(r.title, o == null ? void 0 : o.title)
        },
        children: d.map((i) => {
          const { content: f, ...e } = i;
          return /* @__PURE__ */ a(
            m,
            {
              ...e,
              key: e.key,
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
