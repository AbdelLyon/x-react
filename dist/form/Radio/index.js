import { jsx as p } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { RadioGroup as f, Radio as u } from "@nextui-org/react";
import { cn as l } from "../../utils/index.js";
const w = m(
  ({
    items: b,
    groupClasses: r,
    itemClasses: o,
    label: c = "Select an option",
    defaultValue: n,
    ...t
  }, d) => {
    const s = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, e = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ p(
      f,
      {
        ref: d,
        label: c,
        defaultValue: n,
        ...t,
        classNames: {
          base: l(s.base, r?.base),
          label: l(s.label, r?.label)
        },
        children: b.map((a) => /* @__PURE__ */ p(
          u,
          {
            ...a,
            classNames: {
              base: l(
                e.base,
                o?.base,
                a.className
              ),
              label: l(
                e.label,
                o?.label,
                a.classNames?.label
              ),
              wrapper: l(
                e.wrapper,
                o?.wrapper,
                a.classNames?.wrapper
              ),
              control: l(
                e.control,
                o?.control,
                a.classNames?.control
              )
            },
            children: a.label
          },
          a.value
        ))
      }
    );
  }
);
w.displayName = "RadioGroup";
export {
  w as RadioGroup
};
//# sourceMappingURL=index.js.map
