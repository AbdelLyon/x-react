/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as g } from "react";
import { Slider as t } from "@nextui-org/react";
const p = g(
  ({ customThumb: r, classNames: e, renderThumb: d, ...l }, o) => {
    const i = (n) => /* @__PURE__ */ a.jsx(
      "div",
      {
        ...n,
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
          from-primay
          to-black
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
    ), s = (r == null ? void 0 : r.renderCustomThumb) || d || i;
    return /* @__PURE__ */ a.jsx(
      t,
      {
        ref: o,
        renderThumb: s,
        classNames: {
          base: "max-w-md gap-3",
          track: "border-s-secondary-100",
          filler: "bg-gradient-to-r from-primary to-black",
          ...e
        },
        ...l
      }
    );
  }
);
p.displayName = "Slider";
export {
  p as Slider
};
