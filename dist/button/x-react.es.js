/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Button as x } from "@nextui-org/react";
import { cn as s } from "../utils/x-react.es.js";
const E = w(
  ({
    fullWidth: b = !1,
    isLoading: p = !1,
    isDisabled: j = !1,
    startContent: n,
    endContent: t,
    className: u = "",
    LinkComponent: a,
    variant: r = "solid",
    customStyles: o = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: h,
    target: m,
    rel: N,
    ...d
  }, f) => {
    const c = s(
      "font-normal border-1 border-default rounded-md",
      r === "solid" && "bg-primary text-white",
      r === "bordered" && "bg-default-100 text-primary border-primary/70 ",
      b && "w-full",
      p && "opacity-50 cursor-not-allowed",
      o.base,
      u
    ), i = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && /* @__PURE__ */ e.jsx("span", { className: s("mr-2", o.beforeContent), children: n }),
      /* @__PURE__ */ e.jsx("span", { className: o.content, children: h }),
      t && /* @__PURE__ */ e.jsx("span", { className: s("ml-2", o.afterContent), children: t })
    ] });
    return l && a ? /* @__PURE__ */ e.jsx(
      x,
      {
        ref: f,
        ...d,
        as: a,
        variant: r,
        className: c,
        href: l,
        rel: m === "_blank" ? "noopener noreferrer" : N,
        target: m,
        children: /* @__PURE__ */ e.jsx(i, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      x,
      {
        ref: f,
        ...d,
        variant: r,
        className: c,
        isDisabled: j,
        children: /* @__PURE__ */ e.jsx(i, {})
      }
    );
  }
);
export {
  E as Button
};
