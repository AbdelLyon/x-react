/* empty css                */
import { j as f } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m, createElement as a } from "react";
import { Accordion as b, AccordionItem as l } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const u = m(
  ({ items: c, itemClasses: o, ...d }, e) => {
    const r = {
      base: "w-full border-none shadow-lg dark:shadow-none",
      title: "text-lg font-semibold"
    };
    return /* @__PURE__ */ f.jsx(
      b,
      {
        ref: e,
        ...d,
        itemClasses: {
          ...r,
          ...o,
          base: n(r.base, o == null ? void 0 : o.base),
          title: n(r.title, o == null ? void 0 : o.title)
        },
        children: c.map((i) => {
          const { content: p, ...t } = i;
          return /* @__PURE__ */ a(
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
