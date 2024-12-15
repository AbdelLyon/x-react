/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Dropdown as m, DropdownTrigger as b, DropdownMenu as D, DropdownSection as c, DropdownItem as h } from "@nextui-org/react";
const f = w(
  ({ trigger: d, sections: s, dropdownMenuProps: a, onItemPress: n, classNames: t, ...p }, l) => {
    const i = (r) => {
      n && n(r);
    };
    return /* @__PURE__ */ e.jsxs(
      m,
      {
        ref: l,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
          ...t
        },
        ...p,
        children: [
          /* @__PURE__ */ e.jsx(b, { children: d }),
          /* @__PURE__ */ e.jsx(D, { className: "p-3", ...a, children: s.map((r) => /* @__PURE__ */ e.jsx(
            c,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((o) => /* @__PURE__ */ e.jsx(
                h,
                {
                  onPress: () => i(o.key),
                  endContent: o.endContent,
                  startContent: o.startContent,
                  ...o,
                  children: o.label
                }
              ))
            },
            r.key
          )) })
        ]
      }
    );
  }
);
f.displayName = "Dropdown";
export {
  f as Dropdown
};
