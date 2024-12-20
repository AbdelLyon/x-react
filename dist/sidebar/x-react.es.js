/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as n } from "react";
import { Link as t } from "@nextui-org/react";
import { cn as f } from "../utils/x-react.es.js";
const h = n(
  ({ items: x = [], className: p, classNames: r, onItemClick: i }, d) => /* @__PURE__ */ o.jsx(
    "aside",
    {
      ref: d,
      className: f(
        "fixed left-0 hidden md:flex h-screen w-[240px] flex-col bg-default-100",
        r == null ? void 0 : r.base,
        p
      ),
      children: /* @__PURE__ */ o.jsx("nav", { className: "flex flex-1 flex-col", children: x.map((e) => /* @__PURE__ */ o.jsxs(
        t,
        {
          href: e.href,
          className: f(
            "flex items-center gap-3 px-3 h-[50px] cursor-pointer",
            "transition-colors duration-150",
            "hover:bg-default/40",
            {
              "bg-primary-500/20 text-primary": e.isActive
            },
            r == null ? void 0 : r.item
          ),
          onPress: () => i == null ? void 0 : i(e),
          children: [
            e.icon,
            /* @__PURE__ */ o.jsx("span", { children: e.label })
          ]
        },
        e.key
      )) })
    }
  )
);
h.displayName = "Sidebar";
export {
  h as Sidebar
};
