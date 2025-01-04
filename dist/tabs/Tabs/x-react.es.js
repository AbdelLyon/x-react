import { jsx as l } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { Tabs as L, Tab as R } from "@nextui-org/react";
import { cn as j } from "../../utils/x-react.es.js";
const k = x(
  ({
    items: o,
    defaultActiveTab: d,
    onTabChange: t,
    renderTabContent: n,
    variant: s = "solid",
    color: f = "primary",
    size: c = "md",
    radius: i = "md",
    fullWidth: m = !1,
    placement: u = "top",
    isVertical: b = !1,
    disableAnimation: p = !1,
    disableCursorAnimation: y = !1,
    destroyInactiveTabPanel: S = !0,
    ...r
  }, N) => {
    var a;
    const h = (e) => {
      t == null || t(e.toString());
    }, V = n || ((e) => e.content), g = () => s === "bordered" ? "border-1 border-default" : "";
    return /* @__PURE__ */ l(
      L,
      {
        ref: N,
        variant: s,
        color: f,
        size: c,
        radius: i,
        fullWidth: m,
        placement: u,
        isVertical: b,
        disableAnimation: p,
        disableCursorAnimation: y,
        destroyInactiveTabPanel: S,
        defaultSelectedKey: d,
        classNames: {
          ...r.classNames,
          tabList: j(g(), (a = r.classNames) == null ? void 0 : a.tabList)
        },
        onSelectionChange: h,
        ...r,
        children: o.map((e) => /* @__PURE__ */ l(
          R,
          {
            title: e.title,
            titleValue: e.titleValue,
            href: e.href,
            target: e.target,
            isDisabled: e.disabled,
            children: V(e)
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
