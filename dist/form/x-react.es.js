import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as i, useState as v } from "react";
import { RadioGroup as O, Radio as $, CheckboxGroup as z, Checkbox as E, InputOtp as S, Input as T } from "@nextui-org/react";
import { Checkbox as X } from "@nextui-org/react";
import { cn as r } from "../utils/x-react.es.js";
import { IconEye as L, IconEyeOff as W, IconMail as M } from "@tabler/icons-react";
const P = i(
  ({
    items: l,
    groupClasses: e,
    itemClasses: a,
    label: p = "Select an option",
    defaultValue: b,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, t = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ o.jsx(
      O,
      {
        ref: x,
        label: p,
        defaultValue: b,
        ...u,
        classNames: {
          base: r(c.base, e == null ? void 0 : e.base),
          label: r(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((n) => {
          var f, d, N;
          return /* @__PURE__ */ o.jsx(
            $,
            {
              ...n,
              classNames: {
                base: r(
                  t.base,
                  a == null ? void 0 : a.base,
                  n.className
                ),
                label: r(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: r(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = n.classNames) == null ? void 0 : d.wrapper
                ),
                control: r(
                  t.control,
                  a == null ? void 0 : a.control,
                  (N = n.classNames) == null ? void 0 : N.control
                )
              },
              children: n.label
            },
            n.value
          );
        })
      }
    );
  }
);
P.displayName = "RadioGroup";
const V = i(
  ({
    items: l,
    groupClasses: e,
    itemClasses: a,
    label: p = "Select options",
    defaultValue: b,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, t = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ o.jsx(
      z,
      {
        ref: x,
        label: p,
        defaultValue: b,
        ...u,
        classNames: {
          base: r(c.base, e == null ? void 0 : e.base),
          label: r(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((n) => {
          var f, d;
          return /* @__PURE__ */ o.jsx(
            E,
            {
              ...n,
              classNames: {
                base: r(
                  t.base,
                  a == null ? void 0 : a.base,
                  n.className
                ),
                label: r(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: r(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = n.classNames) == null ? void 0 : d.wrapper
                )
              },
              children: n.label
            },
            n.value
          );
        })
      }
    );
  }
);
V.displayName = "CheckboxGroup";
const q = i(
  ({
    length: l = 6,
    label: e = `${l} digits OTP`,
    labelClasses: a,
    containerClasses: p,
    ...b
  }, u) => /* @__PURE__ */ o.jsxs("div", { ref: u, className: r("flex flex-col", p), children: [
    e && /* @__PURE__ */ o.jsx("p", { className: r("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ o.jsx(S, { length: l, ...b })
  ] })
);
q.displayName = "InputOtp";
const A = i(
  ({
    variant: l = "bordered",
    color: e = "default",
    size: a = "md",
    radius: p = "md",
    labelPlacement: b = "inside",
    fullWidth: u = !0,
    isClearable: x = !1,
    isRequired: c = !1,
    isReadOnly: t = !1,
    isDisabled: n = !1,
    // Custom props
    containerClasses: f,
    customValidation: d,
    // Passthrough props
    validate: N,
    type: w,
    ...s
  }, y) => {
    var I;
    const [h, G] = v(w || "text"), k = (m) => {
      if (d) {
        const j = d(m);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return N ? N(m) : !0;
    }, R = () => {
      if (w === "password")
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "focus:outline-none opacity-60",
            type: "button",
            onClick: () => G(h === "password" ? "text" : "password"),
            children: h === "password" ? /* @__PURE__ */ o.jsx(L, { className: "pointer-events-none", size: 20 }) : /* @__PURE__ */ o.jsx(W, { className: "pointer-events-none", size: 20 })
          }
        );
      if (w === "email")
        return /* @__PURE__ */ o.jsx(M, { className: "pointer-events-none opacity-60", size: 20 });
    };
    return /* @__PURE__ */ o.jsx("div", { className: r("w-full", f), children: /* @__PURE__ */ o.jsx(
      T,
      {
        ref: y,
        variant: l,
        color: e,
        size: a,
        radius: p,
        labelPlacement: b,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: t,
        isDisabled: n,
        validate: k,
        classNames: {
          ...s.classNames,
          inputWrapper: r(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-11 group-data-[focus=true]:bg-content1": l === "bordered"
            },
            (I = s.classNames) == null ? void 0 : I.inputWrapper
          )
        },
        endContent: R(),
        type: h,
        ...s
      }
    ) });
  }
);
A.displayName = "Input";
export {
  X as Checkbox,
  V as CheckboxGroup,
  A as Input,
  q as InputOtp,
  P as RadioGroup
};
