import { j as i } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as a } from "react";
import { Link as u } from "@nextui-org/react";
import { cn as d } from "./utils/x-react.es.js";
import { u as p } from "./useMediaQuery-A9Oq9utn.js";
const b = a(
  ({ items: f = [], className: x, classNames: o, onItemClick: e }, l) => {
    const n = p("(min-width: 1024px)"), t = p(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !n && !t ? null : /* @__PURE__ */ i.jsx(
      "aside",
      {
        ref: l,
        className: d(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": n,
            "w-[60px]": t
          },
          o == null ? void 0 : o.base,
          x
        ),
        children: /* @__PURE__ */ i.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: f.map((r) => /* @__PURE__ */ i.jsxs(
          u,
          {
            className: d(
              "flex items-center gap-3 p-3 hover:bg-content1 rounded-md transition-colors",
              {
                "border-l-4 border-primary bg-content1": r.isActive,
                "justify-center": t
              },
              o == null ? void 0 : o.item
            ),
            color: r.linkColor || (r.isActive ? "primary" : "foreground"),
            onPress: () => e == null ? void 0 : e(r),
            children: [
              r.startContent,
              n ? r.label : null,
              r.endContent
            ]
          },
          r.key
        )) })
      }
    );
  }
);
b.displayName = "Sidebar";
export {
  b as S
};
