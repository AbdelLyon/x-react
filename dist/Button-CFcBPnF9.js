import { j as e } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Button as x } from "@nextui-org/react";
import { cn as r } from "./utils/x-react.es.js";
const F = B(
  ({
    fullWidth: j = !1,
    isLoading: p = !1,
    isDisabled: b = !1,
    startContent: s,
    endContent: o,
    className: u = "",
    LinkComponent: a,
    variant: t = "solid",
    customStyles: n = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: N,
    target: c,
    rel: h,
    ...f
  }, m) => {
    const i = r(
      "transition-none font-normal border-1 rounded-md",
      j && "w-full",
      p && "opacity-50 cursor-not-allowed",
      n.base,
      u
    ), d = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      s && /* @__PURE__ */ e.jsx("span", { className: r("mr-2", n.beforeContent), children: s }),
      /* @__PURE__ */ e.jsx("span", { className: n.content, children: N }),
      o && /* @__PURE__ */ e.jsx("span", { className: r("ml-2", n.afterContent), children: o })
    ] });
    return l && a ? /* @__PURE__ */ e.jsx(
      x,
      {
        ref: m,
        ...f,
        as: a,
        variant: t,
        className: i,
        href: l,
        rel: c === "_blank" ? "noopener noreferrer" : h,
        target: c,
        children: /* @__PURE__ */ e.jsx(d, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      x,
      {
        ref: m,
        ...f,
        variant: t,
        className: i,
        isDisabled: b,
        children: /* @__PURE__ */ e.jsx(d, {})
      }
    );
  }
);
export {
  F as B
};
