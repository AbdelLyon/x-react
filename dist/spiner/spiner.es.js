import "../image/image.es.js";
import { jsx as i } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { Spinner as t } from "@nextui-org/react";
const f = m(
  ({ color: r = "default", size: n = "md", strokeWidth: o = 4, ...p }, e) => /* @__PURE__ */ i(
    t,
    {
      ref: e,
      color: r,
      size: n,
      strokeWidth: o,
      ...p
    }
  )
);
f.displayName = "Spinner";
export {
  f as Spinner
};
