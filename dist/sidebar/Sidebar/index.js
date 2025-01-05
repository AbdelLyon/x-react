import { jsx as t, jsxs as p } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { cn as s } from "../../utils/index.js";
import { Link as m } from "@nextui-org/react";
import { useResponsive as b } from "../../hooks/useResponsive/index.js";
import { Tooltip as x } from "../../tooltip/Tooltip/index.js";
const u = f(
  ({ items: a = [], classNames: n, onItemClick: i }, d) => {
    const { isDesktop: o, isTablet: r } = b();
    if (!o && !r)
      return null;
    const c = (e) => {
      const l = /* @__PURE__ */ p(
        m,
        {
          className: s(
            "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
            {
              "border-l-2 border-primary bg-content1 text-primary": e.isActive,
              "justify-center": r
            },
            n?.item
          ),
          onPress: () => i?.(e),
          children: [
            e.startContent,
            o ? e.label : null,
            e.endContent
          ]
        },
        e.key
      );
      return r ? /* @__PURE__ */ t(
        x,
        {
          trigger: l,
          content: e.label,
          placement: "right",
          delay: 0,
          closeDelay: 0,
          className: "border border-default"
        },
        e.key
      ) : l;
    };
    return /* @__PURE__ */ t(
      "aside",
      {
        ref: d,
        className: s(
          "fixed left-0 h-screen flex-col bg-[#212324] border-r border-default",
          {
            "w-[270px]": o,
            "w-[90px]": r
          },
          n?.base
        ),
        children: /* @__PURE__ */ t("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: a.map(c) })
      }
    );
  }
);
u.displayName = "Sidebar";
export {
  u as Sidebar
};
//# sourceMappingURL=index.js.map
