/* empty css                */
import { j as r } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as R } from "react";
import { Tabs as V, Tab as g } from "@nextui-org/react";
const k = R(
  ({
    items: l,
    defaultActiveTab: s,
    onTabChange: t,
    renderTabContent: a,
    variant: o = "solid",
    color: d = "primary",
    size: n = "md",
    radius: f = "md",
    fullWidth: i = !1,
    placement: c = "top",
    isVertical: p = !1,
    disableAnimation: u = !1,
    disableCursorAnimation: m = !1,
    destroyInactiveTabPanel: x = !0,
    classNames: j,
    ...y
  }, S) => {
    const b = (e) => {
      t == null || t(e.toString());
    }, h = a || ((e) => e.content);
    return /* @__PURE__ */ r.jsx(
      V,
      {
        ref: S,
        variant: o,
        color: d,
        size: n,
        radius: f,
        fullWidth: i,
        placement: c,
        isVertical: p,
        disableAnimation: u,
        disableCursorAnimation: m,
        destroyInactiveTabPanel: x,
        defaultSelectedKey: s,
        classNames: j,
        onSelectionChange: b,
        ...y,
        children: l.map((e) => /* @__PURE__ */ r.jsx(
          g,
          {
            title: e.title,
            titleValue: e.titleValue,
            href: e.href,
            target: e.target,
            isDisabled: e.disabled,
            children: h(e)
          },
          e.key
        ))
      }
    );
  }
);
k.displayName = "Tabs";
export {
  k as Tabs
};
