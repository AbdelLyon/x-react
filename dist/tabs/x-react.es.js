/* empty css                */
import { j as l } from "../jsx-runtime-BFln9wzo.js";
import { forwardRef as R } from "react";
import { Tabs as V, Tab as g } from "@nextui-org/react";
import { cn as L } from "../utils/x-react.es.js";
const k = R(
  ({
    items: o,
    defaultActiveTab: d,
    onTabChange: t,
    renderTabContent: n,
    variant: s = "solid",
    color: i = "primary",
    size: f = "md",
    radius: c = "md",
    fullWidth: m = !1,
    placement: u = "top",
    isVertical: b = !1,
    disableAnimation: p = !1,
    disableCursorAnimation: x = !1,
    destroyInactiveTabPanel: y = !0,
    ...r
  }, S) => {
    var a;
    const j = (e) => {
      t == null || t(e.toString());
    }, N = n || ((e) => e.content), h = () => s === "bordered" ? "border-1 border-default" : "";
    return /* @__PURE__ */ l.jsx(
      V,
      {
        ref: S,
        variant: s,
        color: i,
        size: f,
        radius: c,
        fullWidth: m,
        placement: u,
        isVertical: b,
        disableAnimation: p,
        disableCursorAnimation: x,
        destroyInactiveTabPanel: y,
        defaultSelectedKey: d,
        classNames: {
          ...r.classNames,
          tabList: L(h(), (a = r.classNames) == null ? void 0 : a.tabList)
        },
        onSelectionChange: j,
        ...r,
        children: o.map((e) => /* @__PURE__ */ l.jsx(
          g,
          {
            title: e.title,
            titleValue: e.titleValue,
            href: e.href,
            target: e.target,
            isDisabled: e.disabled,
            children: N(e)
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
