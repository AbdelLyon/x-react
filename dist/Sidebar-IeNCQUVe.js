import { j as o } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as a } from "react";
import { cn as l } from "./utils/x-react.es.js";
import { Link as b } from "@nextui-org/react";
import "@tanstack/react-query";
import "next-themes";
import { a as s } from "./useResponsive-Bo4ImEVM.js";
/* empty css               */
import { T as c } from "./Tooltip-BVlWH2NE.js";
const u = a(
  ({ items: d = [], classNames: e, onItemClick: n }, f) => {
    const { isDesktop: i, isTablet: t } = s();
    if (!i && !t)
      return null;
    const x = (r) => {
      const p = /* @__PURE__ */ o.jsxs(
        b,
        {
          className: l(
            "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
            {
              "border-l-2 border-primary bg-content1 text-primary": r.isActive,
              "justify-center": t
            },
            e == null ? void 0 : e.item
          ),
          onPress: () => n == null ? void 0 : n(r),
          children: [
            r.startContent,
            i ? r.label : null,
            r.endContent
          ]
        },
        r.key
      );
      return t ? /* @__PURE__ */ o.jsx(
        c,
        {
          trigger: p,
          content: r.label,
          placement: "right",
          delay: 0,
          closeDelay: 0,
          className: "bg-black/80 text-white"
        },
        r.key
      ) : p;
    };
    return /* @__PURE__ */ o.jsx(
      "aside",
      {
        ref: f,
        className: l(
          "fixed left-0 h-screen flex-col bg-[#191b1d]",
          {
            "w-[270px]": i,
            "w-[90px]": t
          },
          e == null ? void 0 : e.base
        ),
        children: /* @__PURE__ */ o.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: d.map(x) })
      }
    );
  }
);
u.displayName = "Sidebar";
export {
  u as S
};
