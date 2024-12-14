import { j as f } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as j } from "react";
import { RadioGroup as u, Radio as h } from "@nextui-org/react";
import { Radio as k } from "@nextui-org/react";
import { cn as b } from "../utils/x-react.es.js";
const t = j(
  ({
    items: w,
    groupClasses: a,
    itemClasses: o,
    label: x = "Select an option",
    defaultValue: R,
    ...N
  }, G) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ f.jsx(
      u,
      {
        ref: G,
        label: x,
        defaultValue: R,
        ...N,
        classNames: {
          base: b(c.base, a == null ? void 0 : a.base),
          label: b(c.label, a == null ? void 0 : a.label)
        },
        children: w.map((r) => {
          var n, p, d;
          return /* @__PURE__ */ f.jsx(
            h,
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
t.displayName = "RadioGroup";
export {
  k as Radio,
  t as RadioGroup
};
