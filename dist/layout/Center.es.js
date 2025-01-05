import { jsx as o } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { cn as m } from "../utils.es.js";
const l = i(
  ({ children: e, inline: r = !1, className: t }, f) => /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: m(
        r ? "inline-flex" : "flex",
        "items-center justify-center",
        t
      ),
      children: e
    }
  )
);
export {
  l as Center
};
