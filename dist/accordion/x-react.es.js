/* empty css                */
import { j as f } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p, createElement as a } from "react";
import { Accordion as m, AccordionItem as l } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
const u = p(
  ({ items: c, itemClasses: o, ...n }, d) => {
    const r = {
      base: t("w-full border-none shadow-none", {
        "bg-white dark:bg-content-1 border border-default ": n.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ f.jsx(
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
          const { content: b, ...e } = i;
          return /* @__PURE__ */ a(
            l,
            {
              ...e,
              key: e.key,
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
