import { jsx as s } from "react/jsx-runtime";
import { forwardRef as c, createElement as b } from "react";
import { cn as t } from "../../utils/index.js";
import { Accordion as f, AccordionItem as u } from "@nextui-org/react";
const p = c(
  ({ items: a, itemClasses: r, ...e }, n) => {
    const o = {
      base: t("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-default rounded-md": e.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    }, l = t(
      "rounded-md",
      {
        "border-1 border-default": e.variant === "bordered"
      },
      e.className
    );
    return /* @__PURE__ */ s(
      f,
      {
        ref: n,
        ...e,
        className: l,
        itemClasses: {
          ...o,
          ...r,
          base: t(o.base, r?.base),
          title: t(o.title, r?.title)
        },
        children: a.map((m) => {
          const { content: i, ...d } = m;
          return /* @__PURE__ */ b(
            u,
            {
              ...d,
              key: d.key,
              children: i
            }
          );
        })
      }
    );
  }
);
p.displayName = "Accordion";
export {
  p as Accordion
};
//# sourceMappingURL=index.js.map
