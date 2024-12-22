import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as u } from "react";
import { cn as i } from "./utils/x-react.es.js";
import { u as p } from "./useMediaQuery-A9Oq9utn.js";
const b = u(
  ({ items: x = [], classNames: r, onItemClick: t }, f) => {
    const n = p("(min-width: 1024px)"), o = p(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    return !n && !o ? null : /* @__PURE__ */ d.jsx(
      "aside",
      {
        ref: f,
        className: i(
          "fixed left-0 h-screen flex-col bg-[#191b1d]",
          {
            "w-[270px]": n,
            "w-[100px]": o
          },
          r == null ? void 0 : r.base
        ),
        children: /* @__PURE__ */ d.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: x.map((e) => /* @__PURE__ */ d.jsxs(
          "button",
          {
            className: i(
              "flex items-center gap-3 p-3 text-default hover:bg-content1 rounded-md cursor-pointer",
              {
                "border-l-4 border-primary bg-content1 text-primary": e.isActive,
                "justify-center": o
              },
              r == null ? void 0 : r.item
            ),
            onClick: () => t == null ? void 0 : t(e),
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
