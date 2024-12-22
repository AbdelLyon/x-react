import { j as i } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as u } from "react";
import { Link as a } from "@nextui-org/react";
import { cn as p } from "./utils/x-react.es.js";
import { u as d } from "./useMediaQuery-A9Oq9utn.js";
const l = u(
  ({ items: x = [], classNames: r, onItemClick: t }, f) => {
    const n = d("(min-width: 1024px)"), o = d(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !n && !o ? null : /* @__PURE__ */ i.jsx(
      "aside",
      {
        ref: f,
        className: p(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": n,
            "w-[60px]": o
          },
          r == null ? void 0 : r.base
        ),
        children: /* @__PURE__ */ i.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: x.map((e) => /* @__PURE__ */ i.jsxs(
          a,
          {
            className: p(
              "flex items-center gap-3 p-3 hover:bg-content1 rounded-md cursor-pointer",
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
l.displayName = "Sidebar";
export {
  l as S
};
