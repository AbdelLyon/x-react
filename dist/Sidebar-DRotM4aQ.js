import { j as p } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as x } from "react";
import { cn as i } from "./utils/x-react.es.js";
import { Link as a } from "@nextui-org/react";
import "@tanstack/react-query";
import "next-themes";
import { a as u } from "./useResponsive-Bo4ImEVM.js";
const b = x(
  ({ items: d = [], classNames: r, onItemClick: t }, f) => {
    const { isDesktop: o, isTablet: n } = u();
    return !o && !n ? null : /* @__PURE__ */ p.jsx(
      "aside",
      {
        ref: f,
        className: i(
          "fixed left-0 h-screen flex-col bg-[#191b1d]",
          {
            "w-[270px]": o,
            "w-[90px]": n
          },
          r == null ? void 0 : r.base
        ),
        children: /* @__PURE__ */ p.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4 ", children: d.map((e) => /* @__PURE__ */ p.jsxs(
          a,
          {
            className: i(
              "flex items-center gap-3 p-3 text-[#ECEDEE] data-[hover-true]:text-foreground data-[hover-true]:bg-content1 rounded-md cursor-pointer",
              {
                "border-l-2 border-primary bg-content1 text-primary": e.isActive,
                "justify-center": n
              },
              r == null ? void 0 : r.item
            ),
            onPress: () => t == null ? void 0 : t(e),
            children: [
              e.startContent,
              o ? e.label : null,
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
