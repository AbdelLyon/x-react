import { jsx as o, jsxs as x, Fragment as y } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import { Button as u } from "@nextui-org/react";
import { cn as t } from "./utils/utils.es.js";
const j = N(
  ({
    fullWidth: b = !1,
    isLoading: p = !1,
    isDisabled: h = !1,
    startContent: a,
    endContent: s,
    className: B = "",
    LinkComponent: e,
    variant: l = "solid",
    classNames: n = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: r,
    children: v,
    target: i,
    rel: w,
    ...d
  }, c) => {
    const f = t(
      "transition-none font-normal border-1 rounded-md",
      b && "w-full",
      p && "opacity-50 cursor-not-allowed",
      n.base,
      B
    ), m = () => /* @__PURE__ */ x(y, { children: [
      a !== void 0 && /* @__PURE__ */ o("span", { className: t("mr-2", n.beforeContent), children: a }),
      /* @__PURE__ */ o("span", { className: n.content, children: v }),
      s !== void 0 && /* @__PURE__ */ o("span", { className: t("ml-2", n.afterContent), children: s })
    ] });
    return r !== void 0 && r.length > 0 && e !== void 0 && e !== void 0 ? /* @__PURE__ */ o(
      u,
      {
        ref: c,
        ...d,
        as: e,
        variant: l,
        className: f,
        href: r,
        rel: i === "_blank" ? "noopener noreferrer" : w,
        target: i,
        children: /* @__PURE__ */ o(m, {})
      }
    ) : /* @__PURE__ */ o(
      u,
      {
        ref: c,
        ...d,
        variant: l,
        className: f,
        isDisabled: h,
        children: /* @__PURE__ */ o(m, {})
      }
    );
  }
);
j.displayName = "Button";
export {
  j as B
};
