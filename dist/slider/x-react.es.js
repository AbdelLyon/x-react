/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p } from "react";
import { Slider as x } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const k = p(
  ({ customThumb: r, classNames: d, renderThumb: a, ...t }, g) => {
    const f = (e) => /* @__PURE__ */ i.jsx(
      "div",
      {
        ...e,
        className: n(
          `
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
        `,
          r == null ? void 0 : r.baseClassName
        ),
        children: /* @__PURE__ */ i.jsx(
          "span",
          {
            className: n(
              `
          transition-transform 
          bg-gradient-to-br 
          shadow-small 
          from-primary
          to-black
          rounded-full 
          w-5 
          h-5 
          block 
          group-data-[dragging=true]:scale-80
          `,
              r == null ? void 0 : r.thumbClassName
            )
          }
        )
      }
    ), o = (r == null ? void 0 : r.renderCustomThumb) || a || f, l = (e) => (r == null ? void 0 : r.position) === "both" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      o({ ...e, "data-position": "left" }),
      o({ ...e, "data-position": "right" })
    ] }) : o(e);
    return /* @__PURE__ */ i.jsx(
      x,
      {
        ref: g,
        renderThumb: l,
        classNames: {
          base: n("max-w-md gap-3", d == null ? void 0 : d.base),
          track: n("border-s-secondary-100", d == null ? void 0 : d.track),
          filler: n(
            "bg-gradient-to-r from-primary to-black",
            d == null ? void 0 : d.filler
          ),
          ...d
        },
        ...t
      }
    );
  }
);
k.displayName = "Slider";
export {
  k as Slider
};
