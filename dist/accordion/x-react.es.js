/* empty css                */
import { j as f } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m, createElement as b } from "react";
import { Accordion as a, AccordionItem as l } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const u = m(
  ({ items: c, itemClasses: o, ...e }, d) => {
    const r = {
      base: "w-full border-none shadow-none",
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ f.jsx(
      a,
      {
        ref: d,
        ...e,
        itemClasses: {
          ...r,
          ...o,
          base: n(r.base, o == null ? void 0 : o.base),
          title: n(r.title, o == null ? void 0 : o.title)
        },
        children: c.map((i) => {
          const { content: p, ...t } = i;
          return /* @__PURE__ */ b(
            l,
            {
              ...t,
              key: t.key,
              children: p
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
