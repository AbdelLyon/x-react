import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { Dropdown as D, DropdownTrigger as f, DropdownMenu as x, DropdownSection as g, DropdownItem as j } from "@nextui-org/react";
const u = h(
  ({ trigger: d, sections: a, dropdownMenuProps: i, onItemPress: e, classNames: p, ...l }, m) => {
    const t = (r) => {
      e && e(r);
    };
    return /* @__PURE__ */ o.jsxs(
      D,
      {
        ref: m,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border border-divider bg-background",
          ...p
        },
        ...l,
        children: [
          /* @__PURE__ */ o.jsx(f, { children: d }),
          /* @__PURE__ */ o.jsx(x, { className: "p-3", ...i, children: a.map((r) => /* @__PURE__ */ o.jsx(
            g,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((n) => {
                const { key: w, label: c, href: s, ...b } = n;
                return console.log(s), /* @__PURE__ */ o.jsx(
                  j,
                  {
                    onPress: () => {
                      t({ ...n, href: s });
                    },
                    ...b,
                    children: c
                  },
                  w
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
