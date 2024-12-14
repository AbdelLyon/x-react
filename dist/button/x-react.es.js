/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Button as b } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const k = N(
  ({
    fullWidth: x = !1,
    isLoading: p = !1,
    isDisabled: j = !1,
    startContent: s,
    endContent: t,
    className: u = "",
    LinkComponent: a,
    variant: e = "solid",
    customStyles: o = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: h,
    target: m,
    rel: w,
    ...d
  }, i) => {
    const c = n(
      "transition-all font-normal border-1 border-default rounded-md",
      e === "solid" && "bg-primary text-white",
      e === "bordered" && "bg-white bg-background text-primary border-primary ",
      x && "w-full",
      p && "opacity-50 cursor-not-allowed",
      o.base,
      u
    ), f = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && /* @__PURE__ */ r.jsx("span", { className: n("mr-2", o.beforeContent), children: s }),
      /* @__PURE__ */ r.jsx("span", { className: o.content, children: h }),
      t && /* @__PURE__ */ r.jsx("span", { className: n("ml-2", o.afterContent), children: t })
    ] });
    return l && a ? /* @__PURE__ */ r.jsx(
      b,
      {
        ref: i,
        ...d,
        as: a,
        variant: e,
        className: c,
        href: l,
        rel: m === "_blank" ? "noopener noreferrer" : w,
        target: m,
        children: /* @__PURE__ */ r.jsx(f, {})
      }
    ) : /* @__PURE__ */ r.jsx(
      b,
      {
        ref: i,
        ...d,
        variant: e,
        className: c,
        isDisabled: j,
        children: /* @__PURE__ */ r.jsx(f, {})
      }
    );
  }
);
export {
  k as Button
};
