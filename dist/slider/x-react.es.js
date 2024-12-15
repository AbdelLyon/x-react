/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as f } from "react";
import { Slider as p } from "@nextui-org/react";
import { cn as d } from "../utils/x-react.es.js";
const x = f(
  ({ customThumb: r, classNames: l, renderThumb: n, ...o }, t) => {
    const s = (a) => /* @__PURE__ */ e.jsx(
      "div",
      {
        ...a,
        className: d(
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
        children: /* @__PURE__ */ e.jsx(
          "span",
          {
            className: d(
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
    ), i = (r == null ? void 0 : r.renderCustomThumb) || n || s, g = (a) => (r == null ? void 0 : r.position) === "both" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i({ ...a, "data-position": "left" }),
      i({ ...a, "data-position": "right" })
    ] }) : i(a);
    return /* @__PURE__ */ e.jsx(
      p,
      {
        ref: t,
        renderThumb: g,
        classNames: {
          base: "max-w-md gap-3",
          track: d("border-s-secondary-100", "left-0"),
          filler: d("bg-gradient-to-r from-primary to-black", "left-0"),
          ...l
        },
        ...o
      }
    );
  }
);
x.displayName = "Slider";
export {
  x as Slider
};
