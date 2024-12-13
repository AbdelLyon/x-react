import { j as f } from "../jsx-runtime-Dx-03ztt.js";
import { createElement as i } from "react";
import { Accordion as b, AccordionItem as m } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const h = ({
  items: c,
  itemClasses: o,
  ...e
}) => {
  const r = {
    base: "w-full border-none shadow-lg dark:shadow-none",
    title: "text-lg font-semibold"
  };
  return /* @__PURE__ */ f.jsx(
    b,
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
        return /* @__PURE__ */ i(
          m,
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
  h as AccordionWrapper
};
