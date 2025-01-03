import { j as t } from "./jsx-runtime-Bq5baZvQ.js";
import { forwardRef as a } from "react";
import { cn as d } from "./utils/x-react.es.js";
import { Link as b } from "@nextui-org/react";
import "next-themes";
import { u } from "./useResponsive-C59ustr5.js";
/* empty css               */
import { T as s } from "./Tooltip-DDe70e5i.js";
const c = a(
  ({ items: f = [], classNames: e, onItemClick: n }, l) => {
    const { isDesktop: i, isTablet: o } = u();
    if (!i && !o)
      return null;
    const x = (r) => {
      const p = /* @__PURE__ */ t.jsxs(
        b,
        {
          className: d(
            "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
            {
              "border-l-2 border-primary bg-content1 text-primary": r.isActive,
              "justify-center": o
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
      return o ? /* @__PURE__ */ t.jsx(
        s,
        {
          trigger: p,
          content: r.label,
          placement: "right",
          delay: 0,
          closeDelay: 0,
          className: "border border-default"
        },
        r.key
      ) : p;
    };
    return /* @__PURE__ */ t.jsx(
      "aside",
      {
        ref: l,
        className: d(
          "fixed left-0 h-screen flex-col bg-[#212324] border-r border-default",
          {
            "w-[270px]": i,
            "w-[90px]": o
          },
          e == null ? void 0 : e.base
        ),
        children: /* @__PURE__ */ t.jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: f.map(x) })
      }
    );
  }
);
c.displayName = "Sidebar";
export {
  c as S
};
