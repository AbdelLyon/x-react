import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as u } from "react";
import { RadioGroup as R, Radio as j, CheckboxGroup as k, Checkbox as e } from "@nextui-org/react";
import { Checkbox as A } from "@nextui-org/react";
import { cn as r } from "../utils/x-react.es.js";
const v = u(
  ({
    items: x,
    groupClasses: o,
    itemClasses: a,
    label: f = "Select an option",
    defaultValue: w,
    ...N
  }, h) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ d.jsx(
      R,
      {
        ref: h,
        label: f,
        defaultValue: w,
        ...N,
        classNames: {
          base: r(c.base, o == null ? void 0 : o.base),
          label: r(c.label, o == null ? void 0 : o.label)
        },
        children: x.map((b) => {
          var p, n, G;
          return /* @__PURE__ */ d.jsx(
            j,
            {
              ...b,
              classNames: {
                base: r(
                  l.base,
                  a == null ? void 0 : a.base,
                  b.className
                ),
                label: r(
                  l.label,
                  a == null ? void 0 : a.label,
                  (p = b.classNames) == null ? void 0 : p.label
                ),
                wrapper: r(
                  l.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (n = b.classNames) == null ? void 0 : n.wrapper
                ),
                control: r(
                  l.control,
                  a == null ? void 0 : a.control,
                  (G = b.classNames) == null ? void 0 : G.control
                )
              },
              children: b.label
            },
            b.value
          );
        })
      }
    );
  }
);
v.displayName = "RadioGroup";
const y = u(
  ({
    items: x,
    groupClasses: o,
    itemClasses: a,
    label: f = "Select options",
    defaultValue: w,
    ...N
  }, h) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ d.jsx(
      k,
      {
        ref: h,
        label: f,
        defaultValue: w,
        ...N,
        classNames: {
          base: r(c.base, o == null ? void 0 : o.base),
          label: r(c.label, o == null ? void 0 : o.label)
        },
        children: x.map((b) => {
          var p, n;
          return /* @__PURE__ */ d.jsx(
            e,
            {
              ...b,
              classNames: {
                base: r(
                  l.base,
                  a == null ? void 0 : a.base,
                  b.className
                ),
                label: r(
                  l.label,
                  a == null ? void 0 : a.label,
                  (p = b.classNames) == null ? void 0 : p.label
                ),
                wrapper: r(
                  l.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (n = b.classNames) == null ? void 0 : n.wrapper
                )
              },
              children: b.label
            },
            b.value
          );
        })
      }
    );
  }
);
y.displayName = "CheckboxGroup";
export {
  A as Checkbox,
  y as CheckboxGroup,
  v as RadioGroup
};
