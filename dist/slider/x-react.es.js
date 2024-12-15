/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as g } from "react";
import { Slider as t } from "@nextui-org/react";
const f = g(
  ({ customThumb: r, classNames: e, renderThumb: d, ...o }, s) => {
    const l = (i) => /* @__PURE__ */ a.jsx(
      "div",
      {
        ...i,
        className: `
        group 
        p-1 
        top-1/2 
        bg-background 
        border-small 
        border-default-200 
        dark:border-default-400/50 
        shadow-medium 
        rounded-full 
        cursor-grab 
        data-[dragging=true]:cursor-grabbing
        ${(r == null ? void 0 : r.baseClassName) || ""}
      `,
        children: /* @__PURE__ */ a.jsx(
          "span",
          {
            className: `
          transition-transform 
          bg-gradient-to-br 
          shadow-small 
          from-secondary-100 
          to-secondary-500 
          rounded-full 
          w-5 
          h-5 
          block 
          group-data-[dragging=true]:scale-80
          ${(r == null ? void 0 : r.thumbClassName) || ""}
        `
          }
        )
      }
    ), n = (r == null ? void 0 : r.renderCustomThumb) || d || l;
    return /* @__PURE__ */ a.jsx(
      t,
      {
        ref: s,
        renderThumb: n,
        classNames: {
          base: "max-w-md gap-3",
          track: "border-s-secondary-100",
          filler: "bg-gradient-to-r from-secondary-100 to-secondary-500",
          ...e
        },
        ...o
      }
    );
  }
);
f.displayName = "Slider";
export {
  f as Slider
};
