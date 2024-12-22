import { j as o } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as a } from "react";
import { Link as b } from "@nextui-org/react";
import { cn as d } from "./utils/x-react.es.js";
import { u as p } from "./useMediaQuery-A9Oq9utn.js";
const u = a(
  ({ items: x = [], className: f, classNames: r, onItemClick: n }, l) => {
    const t = p("(min-width: 1024px)"), i = p(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !t && !i ? null : /* @__PURE__ */ o.jsx(
      "aside",
      {
        ref: l,
        className: d(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": t,
            "w-[60px]": i
          },
          r == null ? void 0 : r.base,
          f
        ),
        children: /* @__PURE__ */ o.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: x.map((e) => /* @__PURE__ */ o.jsxs(
          b,
          {
            className: d(
              "flex items-center gap-3 p-3 hover:bg-content1 rounded-md transition-colors",
              {
                "border-l-4 border-primary bg-content1": e.isActive,
                "justify-center": i
              },
              r == null ? void 0 : r.item
            ),
            onPress: () => n == null ? void 0 : n(e),
            title: i ? e.label : void 0,
            children: [
              e.icon,
              t && /* @__PURE__ */ o.jsx("span", { children: e.label })
            ]
          },
          e.key
        )) })
      }
    );
  }
);
u.displayName = "Sidebar";
export {
  u as S
};
