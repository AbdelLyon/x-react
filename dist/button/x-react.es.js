/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Button as c } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const k = N(
  ({
    fullWidth: p = !1,
    isLoading: x = !1,
    isDisabled: u = !1,
    startContent: t,
    endContent: s,
    className: j = "",
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
    target: d,
    rel: g,
    ...m
  }, i) => {
    const f = n(
      "transition-none font-normal border-1 border-default rounded-md",
      r === "solid" && "bg-primary text-white",
      r === "bordered" && "bg-default-100 text-primary border-primary/70 ",
      r === "light" && "bg-background border-none data-[hover=true]:bg-transparent data-[hover=true]:underline",
      p && "w-full",
      x && "opacity-50 cursor-not-allowed",
      o.base,
      j
    ), b = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      t && /* @__PURE__ */ e.jsx("span", { className: n("mr-2", o.beforeContent), children: t }),
      /* @__PURE__ */ e.jsx("span", { className: o.content, children: h }),
      s && /* @__PURE__ */ e.jsx("span", { className: n("ml-2", o.afterContent), children: s })
    ] });
    return l && a ? /* @__PURE__ */ e.jsx(
      c,
      {
        ref: i,
        ...m,
        as: a,
        variant: r,
        className: f,
        href: l,
        rel: d === "_blank" ? "noopener noreferrer" : g,
        target: d,
        children: /* @__PURE__ */ e.jsx(b, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      c,
      {
        ref: i,
        ...m,
        variant: r,
        className: f,
        isDisabled: u,
        children: /* @__PURE__ */ e.jsx(b, {})
      }
    );
  }
);
export {
  k as Button
};
