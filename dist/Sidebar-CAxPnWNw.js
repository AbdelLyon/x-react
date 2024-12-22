import { j as p } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as x } from "react";
import { cn as i } from "./utils/x-react.es.js";
import { Link as b } from "@nextui-org/react";
import "@tanstack/react-query";
import "next-themes";
import { a as l } from "./useResponsive-Bo4ImEVM.js";
const u = x(
  ({ items: d = [], classNames: r, onItemClick: o }, f) => {
    const { isDesktop: t, isTablet: n } = l();
    return !t && !n ? null : /* @__PURE__ */ p.jsx(
      "aside",
      {
        ref: f,
        className: i(
          "fixed left-0 h-screen flex-col bg-[#191b1d]",
          {
            "w-[270px]": t,
            "w-[90px]": n
          },
          r == null ? void 0 : r.base
        ),
        children: /* @__PURE__ */ p.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4 ", children: d.map((e) => /* @__PURE__ */ p.jsxs(
          b,
          {
            className: i(
              "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 opacity-100 rounded-md cursor-pointer",
              {
                "border-l-2 border-primary bg-content1 text-primary": e.isActive,
                "justify-center": n
              },
              r == null ? void 0 : r.item
            ),
            onPress: () => o == null ? void 0 : o(e),
            children: [
              e.startContent,
              t ? e.label : null,
              e.endContent
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
