/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { Dropdown as D, DropdownTrigger as f, DropdownMenu as x, DropdownSection as g, DropdownItem as j } from "@nextui-org/react";
const u = h(
  ({ trigger: s, sections: d, dropdownMenuProps: a, onItemPress: e, classNames: i, ...p }, l) => {
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
          content: "p-0 border border-divider bg-background",
          ...i
        },
        ...p,
        children: [
          /* @__PURE__ */ o.jsx(f, { children: s }),
          /* @__PURE__ */ o.jsx(x, { className: "p-3", ...a, children: d.map((r) => /* @__PURE__ */ o.jsx(
            g,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((n) => {
                const { key: t, label: w, href: c, ...b } = n;
                return console.log(c), /* @__PURE__ */ o.jsx(
                  j,
                  {
                    onPress: () => {
                      m(n);
                    },
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
