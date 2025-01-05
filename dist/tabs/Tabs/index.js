import { jsx as r } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { Tabs as N, Tab as V } from "@nextui-org/react";
import { cn as x } from "../../utils/index.js";
const L = C(
  ({
    items: s,
    defaultActiveTab: l,
    onTabChange: n,
    renderTabContent: o,
    variant: a = "solid",
    color: d = "primary",
    size: f = "md",
    radius: c = "md",
    fullWidth: i = !1,
    placement: b = "top",
    isVertical: m = !1,
    disableAnimation: u = !1,
    disableCursorAnimation: h = !1,
    destroyInactiveTabPanel: g = !0,
    ...t
  }, p) => {
    const y = (e) => {
      n?.(e.toString());
    }, S = o || ((e) => e.content), T = () => a === "bordered" ? "border-1 border-default" : "";
    return /* @__PURE__ */ r(
      N,
      {
        ref: p,
        variant: a,
        color: d,
        size: f,
        radius: c,
        fullWidth: i,
        placement: b,
        isVertical: m,
        disableAnimation: u,
        disableCursorAnimation: h,
        destroyInactiveTabPanel: g,
        defaultSelectedKey: l,
        classNames: {
          ...t.classNames,
          tabList: x(T(), t.classNames?.tabList)
        },
        onSelectionChange: y,
        ...t,
        children: s.map((e) => /* @__PURE__ */ r(
          V,
          {
            title: e.title,
            titleValue: e.titleValue,
            href: e.href,
            target: e.target,
            isDisabled: e.disabled,
            children: S(e)
          },
          e.key
        ))
      }
    );
  }
);
L.displayName = "Tabs";
export {
  L as Tabs
};
//# sourceMappingURL=index.js.map
