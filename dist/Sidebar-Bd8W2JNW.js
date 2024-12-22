import { j as i } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as a } from "react";
import { Link as b } from "@nextui-org/react";
import { cn as d } from "./utils/x-react.es.js";
import { u as p } from "./useMediaQuery-A9Oq9utn.js";
const h = a(
  ({ items: f = [], className: x, classNames: e, onItemClick: n }, l) => {
    const t = p("(min-width: 1024px)"), o = p(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !t && !o ? null : /* @__PURE__ */ i.jsx(
      "aside",
      {
        ref: l,
        className: d(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": t,
            "w-[60px]": o
          },
          e == null ? void 0 : e.base,
          x
        ),
        children: /* @__PURE__ */ i.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: f.map((r) => /* @__PURE__ */ i.jsxs(
          b,
          {
            href: r.href,
            className: d(
              "flex items-center gap-3 p-3 hover:bg-content1 rounded-md transition-colors",
              {
                "border-l-4 border-primary bg-content1": r.isActive,
                "justify-center": o
              },
              e == null ? void 0 : e.item
            ),
            onPress: () => n == null ? void 0 : n(r),
            title: o ? r.label : void 0,
            children: [
              r.icon,
              t && /* @__PURE__ */ i.jsx("span", { children: r.label })
            ]
          },
          r.key
        )) })
      }
    );
  }
);
h.displayName = "Sidebar";
export {
  h as S
};
