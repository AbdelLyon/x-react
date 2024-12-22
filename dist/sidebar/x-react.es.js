/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as a } from "react";
import { Link as u } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { u as p } from "../useMediaQuery-A9Oq9utn.js";
const b = a(
  ({ items: f = [], className: x, classNames: e, onItemClick: d }, l) => {
    const t = p("(min-width: 1024px)"), i = p(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !t && !i ? null : /* @__PURE__ */ o.jsx(
      "aside",
      {
        ref: l,
        className: n(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": t,
            "w-[60px]": i
          },
          e == null ? void 0 : e.base,
          x
        ),
        children: /* @__PURE__ */ o.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: f.map((r) => /* @__PURE__ */ o.jsxs(
          u,
          {
            href: r.href,
            className: n(
              "flex items-center gap-3 p-3 hover:bg-default rounded-md transition-colors",
              {
                "border-l-4 border-primary bg-default": r.isActive,
                "justify-center": i
              },
              e == null ? void 0 : e.item
            ),
            onPress: () => d == null ? void 0 : d(r),
            title: i ? r.label : void 0,
            children: [
              r.icon,
              t && /* @__PURE__ */ o.jsx("span", { children: r.label })
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
  b as Sidebar
};
