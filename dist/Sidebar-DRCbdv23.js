import { j as i } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as l } from "react";
import { Link as u } from "@nextui-org/react";
import { cn as d } from "./utils/x-react.es.js";
import { u as p } from "./useMediaQuery-A9Oq9utn.js";
const b = l(
  ({ items: x = [], className: f, classNames: r, onItemClick: t }, a) => {
    const n = p("(min-width: 1024px)"), o = p(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !n && !o ? null : /* @__PURE__ */ i.jsx(
      "aside",
      {
        ref: a,
        className: d(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": n,
            "w-[60px]": o
          },
          r == null ? void 0 : r.base,
          f
        ),
        children: /* @__PURE__ */ i.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: x.map((e) => /* @__PURE__ */ i.jsxs(
          u,
          {
            className: d(
              "flex items-center gap-3 p-3 hover:bg-content1 rounded-md",
              {
                "border-l-4 border-primary bg-content1 text-primary": e.isActive,
                "justify-center": o
              },
              r == null ? void 0 : r.item
            ),
            onPress: () => t == null ? void 0 : t(e),
            children: [
              e.startContent,
              n ? e.label : null,
              e.endContent
            ]
          },
          e.key
        )) })
      }
    );
  }
);
b.displayName = "Sidebar";
export {
  b as S
};
