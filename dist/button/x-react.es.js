import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { Button as x } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
const B = h(
  ({
    fullWidth: j = !1,
    isLoading: p = !1,
    isDisabled: d = !1,
    startContent: r,
    endContent: s,
    className: b = "",
    LinkComponent: o,
    customStyles: a = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: t,
    children: u,
    target: l,
    rel: N,
    ...c
  }, f) => {
    const i = e(
      "transition-all font-normal dark:bg-opacity-90",
      j && "w-full",
      p && "opacity-50 cursor-not-allowed",
      a.base,
      b
    ), m = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      r && /* @__PURE__ */ n.jsx("span", { className: e("mr-2", a.beforeContent), children: r }),
      /* @__PURE__ */ n.jsx("span", { className: a.content, children: u }),
      s && /* @__PURE__ */ n.jsx("span", { className: e("ml-2", a.afterContent), children: s })
    ] });
    return t && o ? /* @__PURE__ */ n.jsx(
      x,
      {
        ref: f,
        ...c,
        as: o,
        className: i,
        href: t,
        rel: l === "_blank" ? "noopener noreferrer" : N,
        target: l,
        children: /* @__PURE__ */ n.jsx(m, {})
      }
    ) : /* @__PURE__ */ n.jsx(
      x,
      {
        ref: f,
        ...c,
        className: i,
        isDisabled: d,
        children: /* @__PURE__ */ n.jsx(m, {})
      }
    );
  }
);
B.displayName = "Button";
export {
  B as Button
};
