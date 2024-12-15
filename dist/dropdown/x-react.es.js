/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as D } from "react";
import { Dropdown as h, DropdownTrigger as f, DropdownMenu as x, DropdownSection as j, DropdownItem as u } from "@nextui-org/react";
const g = D(
  ({ trigger: n, sections: a, dropdownMenuProps: i, onItemPress: e, classNames: p, ...l }, m) => {
    const t = (r) => {
      e && e(r);
    };
    return /* @__PURE__ */ o.jsxs(
      h,
      {
        ref: m,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
          ...p
        },
        ...l,
        children: [
          /* @__PURE__ */ o.jsx(f, { children: n }),
          /* @__PURE__ */ o.jsx(x, { className: "p-3", ...i, children: a.map((r) => {
            var s;
            return /* @__PURE__ */ o.jsx(
              j,
              {
                showDivider: r.showDivider,
                "aria-label": r.label,
                children: ((s = r.items) == null ? void 0 : s.map((w) => {
                  const { key: d, label: b, ...c } = w;
                  return /* @__PURE__ */ o.jsx(
                    u,
                    {
                      onPress: () => t(d),
                      ...c,
                      children: b
                    },
                    d
                  );
                })) || []
              },
              r.key
            );
          }) })
        ]
      }
    );
  }
);
g.displayName = "Dropdown";
export {
  g as Dropdown
};
