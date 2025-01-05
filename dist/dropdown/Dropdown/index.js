import { jsxs as f, jsx as o } from "react/jsx-runtime";
import { forwardRef as h } from "react";
import { Dropdown as D, DropdownTrigger as u, DropdownMenu as g, DropdownSection as k, DropdownItem as x } from "@nextui-org/react";
const y = h(
  ({ trigger: n, sections: a, dropdownMenuProps: p, onItemPress: e, classNames: s, ...l }, i) => {
    const m = (r) => {
      e && e(r);
    };
    return /* @__PURE__ */ f(
      D,
      {
        ref: i,
        showArrow: !0,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border border-default bg-background",
          ...s
        },
        ...l,
        children: [
          /* @__PURE__ */ o(u, { children: n }),
          /* @__PURE__ */ o(g, { className: "p-3", ...p, children: a.map((r) => /* @__PURE__ */ o(
            k,
            {
              showDivider: r.showDivider,
              "aria-label": r.label,
              children: r.items.map((d) => {
                const { key: t, label: w, href: b, ...c } = d;
                return /* @__PURE__ */ o(
                  x,
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
y.displayName = "Dropdown";
export {
  y as Dropdown
};
//# sourceMappingURL=index.js.map
