import { jsx as f } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { RadioGroup as h, Radio as j } from "@nextui-org/react";
import { cn as b } from "../../utils/x-react.es.js";
const v = u(
  ({
    items: w,
    groupClasses: a,
    itemClasses: o,
    label: N = "Select an option",
    defaultValue: R,
    ...G
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ f(
      h,
      {
        ref: x,
        label: N,
        defaultValue: R,
        ...G,
        classNames: {
          base: b(c.base, a == null ? void 0 : a.base),
          label: b(c.label, a == null ? void 0 : a.label)
        },
        children: w.map((r) => {
          var n, p, d;
          return /* @__PURE__ */ f(
            j,
            {
              ...r,
              classNames: {
                base: b(
                  l.base,
                  o == null ? void 0 : o.base,
                  r.className
                ),
                label: b(
                  l.label,
                  o == null ? void 0 : o.label,
                  (n = r.classNames) == null ? void 0 : n.label
                ),
                wrapper: b(
                  l.wrapper,
                  o == null ? void 0 : o.wrapper,
                  (p = r.classNames) == null ? void 0 : p.wrapper
                ),
                control: b(
                  l.control,
                  o == null ? void 0 : o.control,
                  (d = r.classNames) == null ? void 0 : d.control
                )
              },
              children: r.label
            },
            r.value
          );
        })
      }
    );
  }
);
v.displayName = "RadioGroup";
export {
  v as RadioGroup
};
