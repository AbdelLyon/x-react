/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as c } from "react";
import { Dropdown as D, DropdownTrigger as h, DropdownMenu as f, DropdownSection as x, DropdownItem as j } from "@nextui-org/react";
const u = c(
  ({ trigger: d, sections: n, dropdownMenuProps: a, onItemPress: e, classNames: i, ...p }, l) => {
    const m = (r) => {
      e && e(r);
    };
    return /* @__PURE__ */ o.jsxs(
      D,
      {
        ref: l,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
          ...i
        },
        ...p,
        children: [
          /* @__PURE__ */ o.jsx(h, { children: d }),
          /* @__PURE__ */ o.jsx(f, { className: "p-3", ...a, children: n.map((r) => /* @__PURE__ */ o.jsx(
            x,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((s) => {
                const { key: t, label: w, ...b } = s;
                return /* @__PURE__ */ o.jsx(
                  j,
                  {
                    onPress: () => m(s),
                    ...b,
                    children: w
                  },
                  t
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
u.displayName = "Dropdown";
export {
  u as Dropdown
};
