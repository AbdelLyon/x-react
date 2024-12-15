import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h, useState as $ } from "react";
import { RadioGroup as E, Radio as S, CheckboxGroup as T, Checkbox as z, InputOtp as L, Input as P } from "@nextui-org/react";
import { Checkbox as X } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { IconEye as W, IconEyeOff as V } from "@tabler/icons-react";
const q = h(
  ({
    items: l,
    groupClasses: e,
    itemClasses: a,
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
      E,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: n(c.base, e == null ? void 0 : e.base),
          label: n(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((r) => {
          var f, p, N;
          return /* @__PURE__ */ o.jsx(
            S,
            {
              ...r,
              classNames: {
                base: n(
                  t.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: n(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = r.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (p = r.classNames) == null ? void 0 : p.wrapper
                ),
                control: n(
                  t.control,
                  a == null ? void 0 : a.control,
                  (N = r.classNames) == null ? void 0 : N.control
                )
              },
              children: r.label
            },
            r.value
          );
        })
      }
    );
  }
);
q.displayName = "RadioGroup";
const A = h(
  ({
    items: l,
    groupClasses: e,
    itemClasses: a,
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
      T,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: n(c.base, e == null ? void 0 : e.base),
          label: n(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((r) => {
          var f, p;
          return /* @__PURE__ */ o.jsx(
            z,
            {
              ...r,
              classNames: {
                base: n(
                  t.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: n(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = r.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (p = r.classNames) == null ? void 0 : p.wrapper
                )
              },
              children: r.label
            },
            r.value
          );
        })
      }
    );
  }
);
A.displayName = "CheckboxGroup";
const B = h(
  ({
    length: l = 6,
    label: e = `${l} digits OTP`,
    labelClasses: a,
    containerClasses: d,
    ...b
  }, u) => /* @__PURE__ */ o.jsxs("div", { ref: u, className: n("flex flex-col", d), children: [
    e && /* @__PURE__ */ o.jsx("p", { className: n("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ o.jsx(L, { length: l, ...b })
  ] })
);
B.displayName = "InputOtp";
const D = h(
  ({
    variant: l = "bordered",
    color: e = "default",
    size: a = "md",
    radius: d = "md",
    labelPlacement: b = "inside",
    fullWidth: u = !0,
    isClearable: x = !1,
    isRequired: c = !1,
    isReadOnly: t = !1,
    isDisabled: r = !1,
    // Custom props
    containerClasses: f,
    customValidation: p,
    // Passthrough props
    validate: N,
    type: I,
    ...s
  }, G) => {
    const [i, k] = $(I || "text"), R = (y) => {
      if (p) {
        const j = p(y);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return N ? N(y) : !0;
    }, m = () => {
      if (I === "password")
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "focus:outline-none opacity-60",
            type: "button",
            onClick: () => k(i === "password" ? "text" : "password"),
            children: i === "password" ? /* @__PURE__ */ o.jsx(W, { className: "pointer-events-none", size: 20 }) : /* @__PURE__ */ o.jsx(V, { className: "pointer-events-none", size: 20 })
          }
        );
    }, O = "w-full", { classNames: w, ...v } = s;
    return /* @__PURE__ */ o.jsx("div", { className: n(O, f), children: /* @__PURE__ */ o.jsx(
      P,
      {
        ref: G,
        variant: l,
        color: e,
        size: a,
        radius: d,
        labelPlacement: b,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: t,
        isDisabled: r,
        validate: R,
        classNames: {
          ...w,
          inputWrapper: n(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": l === "bordered"
            },
            w == null ? void 0 : w.inputWrapper
          )
        },
        endContent: m(),
        type: i,
        ...v
      }
    ) });
  }
);
D.displayName = "Input";
export {
  X as Checkbox,
  A as CheckboxGroup,
  D as Input,
  B as InputOtp,
  q as RadioGroup
};
