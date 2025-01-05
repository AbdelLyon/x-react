import { jsx as b } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { CheckboxGroup as x, Checkbox as n } from "@nextui-org/react";
import { Checkbox as i } from "@nextui-org/react";
import { cn as a } from "../../utils/index.js";
const d = u(
  ({
    items: p,
    groupClasses: o,
    itemClasses: l,
    label: c = "Select options",
    defaultValue: m,
    ...t
  }, f) => {
    const s = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, r = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ b(
      x,
      {
        ref: f,
        label: c,
        defaultValue: m,
        ...t,
        classNames: {
          base: a(s.base, o?.base),
          label: a(s.label, o?.label)
        },
        children: p.map((e) => /* @__PURE__ */ b(
          n,
          {
            ...e,
            classNames: {
              base: a(
                r.base,
                l?.base,
                e.className
              ),
              label: a(
                r.label,
                l?.label,
                e.classNames?.label
              ),
              wrapper: a(
                r.wrapper,
                l?.wrapper,
                e.classNames?.wrapper
              )
            },
            children: e.label
          },
          e.value
        ))
      }
    );
  }
);
d.displayName = "CheckboxGroup";
export {
  i as Checkbox,
  d as CheckboxGroup
};
//# sourceMappingURL=index.js.map
