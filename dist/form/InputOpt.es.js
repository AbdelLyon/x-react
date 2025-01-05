import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { InputOtp as m } from "@nextui-org/react";
import { cn as a } from "../utils.es.js";
const i = f(
  ({
    length: t = 6,
    label: s = `${t} digits OTP`,
    labelClasses: l,
    containerClasses: r,
    ...o
  }, p) => /* @__PURE__ */ n("div", { ref: p, className: a("flex flex-col", r), children: [
    s && /* @__PURE__ */ e("p", { className: a("text-default-500 text-small mb-2", l), children: s }),
    /* @__PURE__ */ e(m, { length: t, ...o })
  ] })
);
i.displayName = "InputOtp";
export {
  i as InputOtp
};
