/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as D } from "react";
import { Dropdown as b, DropdownTrigger as h, DropdownMenu as f, DropdownSection as x, DropdownItem as j } from "@nextui-org/react";
const u = D(
  ({ trigger: n, sections: a, dropdownMenuProps: d, onItemPress: e, classNames: p, ...i }, l) => {
    const m = (r) => {
      e && e(r);
    };
    return /* @__PURE__ */ o.jsxs(
      b,
      {
        ref: l,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small bg-background",
          ...p
        },
        ...i,
        children: [
          /* @__PURE__ */ o.jsx(h, { children: n }),
          /* @__PURE__ */ o.jsx(f, { className: "p-3", ...d, children: a.map((r) => /* @__PURE__ */ o.jsx(
            x,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((s) => {
                const { key: t, label: w, ...c } = s;
                return /* @__PURE__ */ o.jsx(
                  j,
                  {
                    onPress: () => m(s),
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
u.displayName = "Dropdown";
export {
  u as Dropdown
};
