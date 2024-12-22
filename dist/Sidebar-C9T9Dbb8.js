import { j as n } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as a } from "react";
import { cn as d } from "./utils/x-react.es.js";
import { Link as b, Tooltip as u } from "@nextui-org/react";
import "@tanstack/react-query";
import "next-themes";
import { a as c } from "./useResponsive-Bo4ImEVM.js";
const s = a(
  ({ items: l = [], classNames: e, onItemClick: o }, f) => {
    const { isDesktop: i, isTablet: t } = c();
    if (!i && !t)
      return null;
    const x = (r) => {
      const p = /* @__PURE__ */ n.jsxs(
        b,
        {
          className: d(
            "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
            {
              "border-l-2 border-primary bg-content1 text-primary": r.isActive,
              "justify-center": t
            },
            e == null ? void 0 : e.item
          ),
          onPress: () => o == null ? void 0 : o(r),
          children: [
            r.startContent,
            i ? r.label : null,
            r.endContent
          ]
        },
        r.key
      );
      return t ? /* @__PURE__ */ n.jsx(
        u,
        {
          content: r.label,
          placement: "right",
          delay: 0,
          closeDelay: 0,
          children: p
        },
        r.key
      ) : p;
    };
    return /* @__PURE__ */ n.jsx(
      "aside",
      {
        ref: f,
        className: d(
          "fixed left-0 h-screen flex-col bg-[#191b1d]",
          {
            "w-[270px]": i,
            "w-[90px]": t
          },
          e == null ? void 0 : e.base
        ),
        children: /* @__PURE__ */ n.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: l.map(x) })
      }
    );
  }
);
s.displayName = "Sidebar";
export {
  s as S
};
