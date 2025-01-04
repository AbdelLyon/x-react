import { jsx as e } from "react/jsx-runtime";
import { forwardRef as k } from "react";
import { CheckboxGroup as N, Checkbox as G } from "@nextui-org/react";
import { Checkbox as R } from "@nextui-org/react";
import { cn as o } from "../../utils/x-react.es.js";
const u = k(
  ({
    items: x,
    groupClasses: r,
    itemClasses: b,
    label: n = "Select options",
    defaultValue: d,
    ...h
  }, w) => {
    const l = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, c = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ e(
      N,
      {
        ref: w,
        label: n,
        defaultValue: d,
        ...h,
        classNames: {
          base: o(l.base, r == null ? void 0 : r.base),
          label: o(l.label, r == null ? void 0 : r.label)
        },
        children: x.map((a) => {
          var p, f;
          return /* @__PURE__ */ e(
            G,
            {
              ...a,
              classNames: {
                base: o(
                  c.base,
                  b == null ? void 0 : b.base,
                  a.className
                ),
                label: o(
                  c.label,
                  b == null ? void 0 : b.label,
                  (p = a.classNames) == null ? void 0 : p.label
                ),
                wrapper: o(
                  c.wrapper,
                  b == null ? void 0 : b.wrapper,
                  (f = a.classNames) == null ? void 0 : f.wrapper
                )
              },
              children: a.label
            },
            a.value
          );
        })
      }
    );
  }
);
u.displayName = "CheckboxGroup";
export {
  R as Checkbox,
  u as CheckboxGroup
};
