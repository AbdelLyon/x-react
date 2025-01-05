import "../image/image.es.js";
import { jsx as d, jsxs as a } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { cn as p } from "../utils/utils.es.js";
import { Link as u } from "@nextui-org/react";
import { a as c } from "../useResponsive-C48eFL5T.js";
import { Tooltip as g } from "../tooltip/tooltip.es.js";
const y = x(
  ({ items: f = [], classNames: e, onItemClick: t }, l) => {
    const { isDesktop: n, isTablet: o } = c();
    if (!n && !o)
      return null;
    const b = (r) => {
      const i = /* @__PURE__ */ a(
        u,
        {
          className: p(
            "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
            {
              "border-l-2 border-primary bg-content1 text-primary": r.isActive,
              "justify-center": o
            },
            e == null ? void 0 : e.item
          ),
          onPress: () => t == null ? void 0 : t(r),
          children: [
            r.startContent,
            n ? r.label : null,
            r.endContent
          ]
        },
        r.key
      );
      return o ? /* @__PURE__ */ d(
        g,
        {
          trigger: i,
          content: r.label,
          placement: "right",
          delay: 0,
          closeDelay: 0,
          className: "border border-default"
        },
        r.key
      ) : i;
    };
    return /* @__PURE__ */ d(
      "aside",
      {
        ref: l,
        className: p(
          "fixed left-0 h-screen flex-col bg-[#212324] border-r border-default",
          {
            "w-[270px]": n,
            "w-[90px]": o
          },
          e == null ? void 0 : e.base
        ),
        children: /* @__PURE__ */ d("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: f.map(b) })
      }
    );
  }
);
y.displayName = "Sidebar";
export {
  y as Sidebar
};
