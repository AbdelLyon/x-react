/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Button as d } from "@nextui-org/react";
import { cn as s } from "../utils/x-react.es.js";
const y = N(
  ({
    fullWidth: x = !1,
    isLoading: p = !1,
    isDisabled: j = !1,
    startContent: n,
    endContent: t,
    className: h = "",
    LinkComponent: a,
    variant: e = "solid",
    customStyles: o = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: u,
    target: i,
    rel: w,
    ...m
  }, c) => {
    const f = s(
      "transition-all font-normal border-1",
      e === "solid" && "bg-primary text-white",
      e === "bordered" && "bg-white bg-background border-primary",
      x && "w-full",
      p && "opacity-50 cursor-not-allowed",
      o.base,
      h
    ), b = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      n && /* @__PURE__ */ r.jsx("span", { className: s("mr-2", o.beforeContent), children: n }),
      /* @__PURE__ */ r.jsx("span", { className: o.content, children: u }),
      t && /* @__PURE__ */ r.jsx("span", { className: s("ml-2", o.afterContent), children: t })
    ] });
    return l && a ? /* @__PURE__ */ r.jsx(
      d,
      {
        ref: c,
        ...m,
        as: a,
        variant: e,
        className: f,
        href: l,
        rel: i === "_blank" ? "noopener noreferrer" : w,
        target: i,
        children: /* @__PURE__ */ r.jsx(b, {})
      }
    ) : /* @__PURE__ */ r.jsx(
      d,
      {
        ref: c,
        ...m,
        variant: e,
        className: f,
        isDisabled: j,
        children: /* @__PURE__ */ r.jsx(b, {})
      }
    );
  }
);
export {
  y as Button
};
