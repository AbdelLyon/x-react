/* empty css                */
import { j as o } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as f } from "react";
import { Dropdown as h, DropdownTrigger as D, DropdownMenu as u, DropdownSection as x, DropdownItem as j } from "@nextui-org/react";
const g = f(
  ({ trigger: s, sections: d, dropdownMenuProps: a, onItemPress: e, classNames: p, ...i }, l) => {
    const t = (r) => {
      e && e(r);
    };
    return /* @__PURE__ */ o.jsxs(
      h,
      {
        ref: l,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border border-default bg-background",
          ...p
        },
        ...i,
        children: [
          /* @__PURE__ */ o.jsx(D, { children: s }),
          /* @__PURE__ */ o.jsx(u, { className: "p-3", ...a, children: d.map((r) => /* @__PURE__ */ o.jsx(
            x,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((n) => {
                const { key: m, label: w, href: b, ...c } = n;
                return /* @__PURE__ */ o.jsx(
                  j,
                  {
                    onPress: () => {
                      t({ ...n, href: b });
                    },
                    ...c,
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
g.displayName = "Dropdown";
export {
  g as Dropdown
};
