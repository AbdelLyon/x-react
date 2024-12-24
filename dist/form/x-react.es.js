/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as R } from "react";
import { RadioGroup as T, Radio as O, CheckboxGroup as v, Checkbox as E, InputOtp as L, Input as P, Textarea as W, Switch as V } from "@nextui-org/react";
import { Checkbox as g } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { IconEye as q, IconEyeOff as z } from "@tabler/icons-react";
const A = w(
  ({
    items: r,
    groupClasses: a,
    itemClasses: e,
    label: l = "Select an option",
    defaultValue: c,
    ...p
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, b = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ t.jsx(
      T,
      {
        ref: x,
        label: l,
        defaultValue: c,
        ...p,
        classNames: {
          base: n(d.base, a == null ? void 0 : a.base),
          label: n(d.label, a == null ? void 0 : a.label)
        },
        children: r.map((o) => {
          var f, u, N;
          return /* @__PURE__ */ t.jsx(
            O,
            {
              ...o,
              classNames: {
                base: n(
                  b.base,
                  e == null ? void 0 : e.base,
                  o.className
                ),
                label: n(
                  b.label,
                  e == null ? void 0 : e.label,
                  (f = o.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  b.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (u = o.classNames) == null ? void 0 : u.wrapper
                ),
                control: n(
                  b.control,
                  e == null ? void 0 : e.control,
                  (N = o.classNames) == null ? void 0 : N.control
                )
              },
              children: o.label
            },
            o.value
          );
        })
      }
    );
  }
);
A.displayName = "RadioGroup";
const B = w(
  ({
    items: r,
    groupClasses: a,
    itemClasses: e,
    label: l = "Select options",
    defaultValue: c,
    ...p
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, b = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ t.jsx(
      v,
      {
        ref: x,
        label: l,
        defaultValue: c,
        ...p,
        classNames: {
          base: n(d.base, a == null ? void 0 : a.base),
          label: n(d.label, a == null ? void 0 : a.label)
        },
        children: r.map((o) => {
          var f, u;
          return /* @__PURE__ */ t.jsx(
            E,
            {
              ...o,
              classNames: {
                base: n(
                  b.base,
                  e == null ? void 0 : e.base,
                  o.className
                ),
                label: n(
                  b.label,
                  e == null ? void 0 : e.label,
                  (f = o.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  b.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (u = o.classNames) == null ? void 0 : u.wrapper
                )
              },
              children: o.label
            },
            o.value
          );
        })
      }
    );
  }
);
B.displayName = "CheckboxGroup";
const D = w(
  ({
    length: r = 6,
    label: a = `${r} digits OTP`,
    labelClasses: e,
    containerClasses: l,
    ...c
  }, p) => /* @__PURE__ */ t.jsxs("div", { ref: p, className: n("flex flex-col", l), children: [
    a && /* @__PURE__ */ t.jsx("p", { className: n("text-default-500 text-small mb-2", e), children: a }),
    /* @__PURE__ */ t.jsx(L, { length: r, ...c })
  ] })
);
D.displayName = "InputOtp";
const F = w(
  ({
    variant: r = "bordered",
    color: a = "default",
    size: e = "md",
    radius: l = "md",
    labelPlacement: c = "inside",
    fullWidth: p = !0,
    isClearable: x = !1,
    isRequired: d = !1,
    isReadOnly: b = !1,
    isDisabled: o = !1,
    containerClasses: f,
    customValidation: u,
    validate: N,
    type: s,
    ...i
  }, I) => {
    const [j, $] = R(s), G = (h) => {
      if (u) {
        const m = u(h);
        if (typeof m == "string")
          return m;
        if (m)
          return "Validation failed";
      }
      return (N == null ? void 0 : N(h)) ?? !0;
    }, k = s === "password" ? /* @__PURE__ */ t.jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => $(j === "password" ? "text" : "password"),
        children: j === "password" ? /* @__PURE__ */ t.jsx(q, { className: "pointer-events-none" }) : /* @__PURE__ */ t.jsx(z, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: y, ...S } = i;
    return /* @__PURE__ */ t.jsx("div", { className: n("w-full", f), children: /* @__PURE__ */ t.jsx(
      P,
      {
        ref: I,
        variant: r,
        color: a,
        size: e,
        radius: l,
        labelPlacement: c,
        fullWidth: p,
        isClearable: x,
        isRequired: d,
        isReadOnly: b,
        isDisabled: o,
        validate: G,
        classNames: {
          ...y,
          inputWrapper: n(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": r === "bordered"
            },
            y == null ? void 0 : y.inputWrapper
          )
        },
        endContent: k,
        type: j,
        ...S
      }
    ) });
  }
);
F.displayName = "Input";
const H = w(
  ({ width: r, height: a, style: e, ...l }, c) => {
    const p = {
      width: typeof r == "number" ? `${r}px` : r,
      height: typeof a == "number" ? `${a}px` : a,
      ...e
    };
    return /* @__PURE__ */ t.jsx(W, { ref: c, style: p, ...l });
  }
);
H.displayName = "Textarea";
const J = w(
  ({ width: r, height: a, style: e, ...l }, c) => {
    const p = {
      width: typeof r == "number" ? `${r}px` : r,
      height: typeof a == "number" ? `${a}px` : a,
      ...e
    };
    return /* @__PURE__ */ t.jsx(V, { ref: c, style: p, ...l });
  }
);
J.displayName = "Switch";
export {
  g as Checkbox,
  B as CheckboxGroup,
  F as Input,
  D as InputOtp,
  A as RadioGroup,
  J as Switch,
  H as Textarea
};
