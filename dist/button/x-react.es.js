/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { Button as p } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
const B = h(
  ({
    fullWidth: x = !1,
    isLoading: j = !1,
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
  }, i) => {
    const m = e(
      "transition-all font-normal dark:bg-opacity-90",
      x && "w-full",
      j && "opacity-50 cursor-not-allowed",
      a.base,
      b
    ), f = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      r && /* @__PURE__ */ n.jsx("span", { className: e("mr-2", a.beforeContent), children: r }),
      /* @__PURE__ */ n.jsx("span", { className: a.content, children: u }),
      s && /* @__PURE__ */ n.jsx("span", { className: e("ml-2", a.afterContent), children: s })
    ] });
    return t && o ? /* @__PURE__ */ n.jsx(
      p,
      {
        ref: i,
        ...c,
        as: o,
        className: m,
        href: t,
        rel: l === "_blank" ? "noopener noreferrer" : N,
        target: l,
        children: /* @__PURE__ */ n.jsx(f, {})
      }
    ) : /* @__PURE__ */ n.jsx(
      p,
      {
        ref: i,
        ...c,
        className: m,
        isDisabled: d,
        children: /* @__PURE__ */ n.jsx(f, {})
      }
    );
  }
);
B.displayName = "Button";
export {
  B as Button
};
