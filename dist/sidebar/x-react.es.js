/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as i } from "react";
import { Link as p } from "@nextui-org/react";
import { cn as f } from "../utils/x-react.es.js";
const n = i(
  ({ items: a = [], className: l, classNames: d, onItemClick: o }, x) => /* @__PURE__ */ e.jsx(
    "aside",
    {
      ref: x,
      className: f(
        "fixed left-0 hidden md:flex h-screen w-[240px] flex-col bg-default-100",
        d == null ? void 0 : d.base,
        l
      ),
      children: /* @__PURE__ */ e.jsx("nav", { className: "flex flex-1 flex-col", children: a.map((r) => /* @__PURE__ */ e.jsxs(
        p,
        {
          className: f("p-2 hover:bg-default rounded-md", {
            "border-l border-primary bg-default": r.isActive
          }),
          onPress: () => o == null ? void 0 : o(r),
          children: [
            r.icon,
            /* @__PURE__ */ e.jsx("span", { children: r.label })
          ]
        },
        r.key
      )) })
    }
  )
);
n.displayName = "Sidebar";
export {
  n as Sidebar
};
