/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { createElement as f } from "react";
import { Accordion as m, AccordionItem as b } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const j = ({
  items: c,
  itemClasses: o,
  ...e
}) => {
  const r = {
    base: "w-full border-none shadow-lg dark:shadow-none",
    title: "text-lg font-semibold"
  };
  return /* @__PURE__ */ i.jsx(
    m,
    {
      ...e,
      itemClasses: {
        ...r,
        ...o,
        base: n(r.base, o == null ? void 0 : o.base),
        title: n(r.title, o == null ? void 0 : o.title)
      },
      children: c.map((d) => {
        const { content: p, ...t } = d;
        return /* @__PURE__ */ f(
          b,
          {
            ...t,
            key: t.key,
            children: p
          }
        );
      })
    }
  );
};
export {
  j as AccordionWrapper
};
