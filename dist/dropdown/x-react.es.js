/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as c } from "react";
import { Dropdown as D, DropdownTrigger as h, DropdownMenu as f, DropdownSection as u, DropdownItem as x } from "@nextui-org/react";
const j = c(
  ({ trigger: d, sections: s, dropdownMenuProps: a, onItemPress: e, classNames: i, ...p }, t) => {
    const l = (r) => {
      e && e(r);
    };
    return /* @__PURE__ */ o.jsxs(
      D,
      {
        ref: t,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border border-divider bg-background",
          ...i
        },
        ...p,
        children: [
          /* @__PURE__ */ o.jsx(h, { children: d }),
          /* @__PURE__ */ o.jsx(f, { className: "p-3", ...a, children: s.map((r) => /* @__PURE__ */ o.jsx(
            u,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((n) => {
                const { key: m, label: w, ...b } = n;
                return /* @__PURE__ */ o.jsx(
                  x,
                  {
                    itemType: "button",
                    onPress: () => l(n),
                    ...b,
                    children: w
                  },
                  m
                );
              })
            },
            r.key
          )) })
        ]
      }
    );
  }
);
j.displayName = "Dropdown";
export {
  j as Dropdown
};
