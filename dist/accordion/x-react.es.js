/* empty css                */
import { j as p } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b, createElement as a } from "react";
import { Accordion as m, AccordionItem as l } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
const u = b(
  ({ items: c, itemClasses: o, ...n }, d) => {
    const r = {
      base: t("w-full shadow-none", {
        "bg-white dark:bg-content1 border-1 border-default": n.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ p.jsx(
      m,
      {
        ref: d,
        ...n,
        itemClasses: {
          ...r,
          ...o,
          base: t(r.base, o == null ? void 0 : o.base),
          title: t(r.title, o == null ? void 0 : o.title)
        },
        children: c.map((i) => {
          const { content: f, ...e } = i;
          return /* @__PURE__ */ a(
            l,
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
