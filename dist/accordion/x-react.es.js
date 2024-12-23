/* empty css                */
import { j as p } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b, createElement as m } from "react";
import { Accordion as a, AccordionItem as l } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
const u = b(
  ({ items: d, itemClasses: o, ...n }, c) => {
    const r = {
      base: t("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-default-200 rounded-md": n.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ p.jsx(
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
        children: d.map((i) => {
          const { content: f, ...e } = i;
          return /* @__PURE__ */ m(
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
