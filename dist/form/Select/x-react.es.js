import { jsx as t } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { Select as i, SelectItem as o } from "@nextui-org/react";
const f = d(
  ({
    // Options
    options: l = [],
    value: s,
    defaultValue: r,
    classNames: a,
    ...c
  }, m) => /* @__PURE__ */ t(
    i,
    {
      ref: m,
      classNames: {
        base: "max-w-xs",
        trigger: "h-10",
        value: "text-small",
        ...a
      },
      selectedKeys: s,
      defaultSelectedKeys: r,
      ...c,
      children: l.map((e) => /* @__PURE__ */ t(
        o,
        {
          description: e.description,
          startContent: e.icon,
          className: "text-small",
          children: e.label
        },
        e.key
      ))
    }
  )
);
f.displayName = "Select";
export {
  f as Select
};
