/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b } from "react";
import { Dropdown as c, DropdownTrigger as h, DropdownMenu as D, DropdownSection as f, DropdownItem as u } from "@nextui-org/react";
const x = b(
  ({ trigger: n, sections: d, dropdownMenuProps: s, classNames: a, ...i }, p) => /* @__PURE__ */ r.jsxs(
    c,
    {
      ref: p,
      showArrow: !0,
      classNames: {
        base: "before:bg-default-200",
        content: "p-0 border border-divider bg-background",
        ...a
      },
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(h, { children: n }),
        /* @__PURE__ */ r.jsx(D, { className: "p-3", ...s, children: d.map((o) => /* @__PURE__ */ r.jsx(
          f,
          {
            showDivider: o.showDivider,
            "aria-label": o.label,
            children: o.items.map((e) => {
              const { key: t, label: l, ...m } = e;
              return /* @__PURE__ */ r.jsx(
                u,
                {
                  href: e.href,
                  onPress: (w) => {
                    w.continuePropagation();
                  },
                  ...m,
                  children: l
                },
                t
              );
            })
          },
          o.key
        )) })
      ]
    }
  )
);
x.displayName = "Dropdown";
export {
  x as Dropdown
};
