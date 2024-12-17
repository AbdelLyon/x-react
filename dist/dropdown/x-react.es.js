/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { Dropdown as D, DropdownTrigger as f, DropdownMenu as x, DropdownSection as j, DropdownItem as u } from "@nextui-org/react";
const g = h(
  ({ trigger: n, sections: s, dropdownMenuProps: a, onItemPress: e, classNames: i, ...p }, l) => {
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
          /* @__PURE__ */ o.jsx(f, { children: n }),
          /* @__PURE__ */ o.jsx(x, { className: "p-3", ...a, children: s.map((r) => /* @__PURE__ */ o.jsx(
            j,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((d) => {
                const { key: t, label: w, href: b, ...c } = d;
                return /* @__PURE__ */ o.jsx(
                  u,
                  {
                    onPress: () => {
                      m({ ...d, href: b });
                    },
                    ...c,
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
g.displayName = "Dropdown";
export {
  g as Dropdown
};
