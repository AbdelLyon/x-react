import { j as n } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as a } from "react";
import { Link as b } from "@nextui-org/react";
import { cn as d } from "./utils/x-react.es.js";
import { u as p } from "./useMediaQuery-A9Oq9utn.js";
const u = a(
  ({ items: x = [], className: f, classNames: r, onItemClick: o }, l) => {
    const i = p("(min-width: 1024px)"), t = p(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !i && !t ? null : /* @__PURE__ */ n.jsx(
      "aside",
      {
        ref: l,
        className: d(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": i,
            "w-[60px]": t
          },
          r == null ? void 0 : r.base,
          f
        ),
        children: /* @__PURE__ */ n.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: x.map((e) => /* @__PURE__ */ n.jsxs(
          b,
          {
            className: d(
              "flex items-center gap-3 p-3 hover:bg-content1 rounded-md transition-colors",
              {
                "border-l-4 border-primary bg-content1": e.isActive,
                "justify-center": t
              },
              r == null ? void 0 : r.item
            ),
            onPress: () => o == null ? void 0 : o(e),
            title: t ? e.label : void 0,
            children: [
              e.startContent,
              i && /* @__PURE__ */ n.jsx("span", { children: e.label })
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
