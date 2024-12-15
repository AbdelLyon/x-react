import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as $ } from "react";
import { RadioGroup as z, Radio as S, CheckboxGroup as E, Checkbox as T, InputOtp as L, Input as P } from "@nextui-org/react";
import { Checkbox as Z } from "@nextui-org/react";
import { cn as r } from "../utils/x-react.es.js";
import { IconEye as W, IconEyeOff as M, IconMail as V, IconSearch as q } from "@tabler/icons-react";
const A = w(
  ({
    items: l,
    groupClasses: a,
    itemClasses: e,
    label: d = "Select an option",
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
      z,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: r(c.base, a == null ? void 0 : a.base),
          label: r(c.label, a == null ? void 0 : a.label)
        },
        children: l.map((n) => {
          var f, p, i;
          return /* @__PURE__ */ o.jsx(
            S,
            {
              ...n,
              classNames: {
                base: r(
                  t.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: r(
                  t.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: r(
                  t.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (p = n.classNames) == null ? void 0 : p.wrapper
                ),
                control: r(
                  t.control,
                  e == null ? void 0 : e.control,
                  (i = n.classNames) == null ? void 0 : i.control
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
A.displayName = "RadioGroup";
const B = w(
  ({
    items: l,
    groupClasses: a,
    itemClasses: e,
    label: d = "Select options",
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
      E,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: r(c.base, a == null ? void 0 : a.base),
          label: r(c.label, a == null ? void 0 : a.label)
        },
        children: l.map((n) => {
          var f, p;
          return /* @__PURE__ */ o.jsx(
            T,
            {
              ...n,
              classNames: {
                base: r(
                  t.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: r(
                  t.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: r(
                  t.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (p = n.classNames) == null ? void 0 : p.wrapper
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
B.displayName = "CheckboxGroup";
const D = w(
  ({
    length: l = 6,
    label: a = `${l} digits OTP`,
    labelClasses: e,
    containerClasses: d,
    ...b
  }, u) => /* @__PURE__ */ o.jsxs("div", { ref: u, className: r("flex flex-col", d), children: [
    a && /* @__PURE__ */ o.jsx("p", { className: r("text-default-500 text-small mb-2", e), children: a }),
    /* @__PURE__ */ o.jsx(L, { length: l, ...b })
  ] })
);
D.displayName = "InputOtp";
const F = w(
  ({
    variant: l = "bordered",
    color: a = "default",
    size: e = "md",
    radius: d = "md",
    labelPlacement: b = "inside",
    fullWidth: u = !0,
    isClearable: x = !1,
    isRequired: c = !1,
    isReadOnly: t = !1,
    isDisabled: n = !1,
    // Custom props
    containerClasses: f,
    customValidation: p,
    // Passthrough props
    validate: i,
    type: N,
    ...y
  }, m) => {
    const [h, G] = $(N || "text"), k = (I) => {
      if (p) {
        const j = p(I);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return i ? i(I) : !0;
    }, R = () => {
      if (N === "password")
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "focus:outline-none opacity-60",
            type: "button",
            onClick: () => G(h === "password" ? "text" : "password"),
            children: h === "password" ? /* @__PURE__ */ o.jsx(W, { className: "pointer-events-none", size: 20 }) : /* @__PURE__ */ o.jsx(M, { className: "pointer-events-none", size: 20 })
          }
        );
      if (N === "email")
        return /* @__PURE__ */ o.jsx(V, { className: "pointer-events-none opacity-60", size: 20 });
      if (N === "search")
        return /* @__PURE__ */ o.jsx(q, { className: "pointer-events-none opacity-60", size: 20 });
    }, v = "w-full", { classNames: s, ...O } = y;
    return /* @__PURE__ */ o.jsx("div", { className: r(v, f), children: /* @__PURE__ */ o.jsx(
      P,
      {
        ref: m,
        variant: l,
        color: a,
        size: e,
        radius: d,
        labelPlacement: b,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: t,
        isDisabled: n,
        validate: k,
        classNames: {
          ...s,
          inputWrapper: r(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": l === "bordered"
            },
            s == null ? void 0 : s.inputWrapper
          )
        },
        endContent: R(),
        type: h,
        ...O
      }
    ) });
  }
);
F.displayName = "Input";
export {
  Z as Checkbox,
  B as CheckboxGroup,
  F as Input,
  D as InputOtp,
  A as RadioGroup
};
