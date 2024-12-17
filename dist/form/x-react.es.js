/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h, useState as $ } from "react";
import { RadioGroup as E, Radio as S, CheckboxGroup as T, Checkbox as L, InputOtp as P, Input as W } from "@nextui-org/react";
import { Checkbox as Y } from "@nextui-org/react";
import { cn as o } from "../utils/x-react.es.js";
import { IconEye as V, IconEyeOff as q } from "@tabler/icons-react";
const z = h(
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
    return /* @__PURE__ */ n.jsx(
      E,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: o(c.base, e == null ? void 0 : e.base),
          label: o(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((r) => {
          var f, p, N;
          return /* @__PURE__ */ n.jsx(
            S,
            {
              ...r,
              classNames: {
                base: o(
                  t.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: o(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = r.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (p = r.classNames) == null ? void 0 : p.wrapper
                ),
                control: o(
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
z.displayName = "RadioGroup";
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
    return /* @__PURE__ */ n.jsx(
      T,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: o(c.base, e == null ? void 0 : e.base),
          label: o(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((r) => {
          var f, p;
          return /* @__PURE__ */ n.jsx(
            L,
            {
              ...r,
              classNames: {
                base: o(
                  t.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: o(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = r.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
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
  }, u) => /* @__PURE__ */ n.jsxs("div", { ref: u, className: o("flex flex-col", d), children: [
    e && /* @__PURE__ */ n.jsx("p", { className: o("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ n.jsx(P, { length: l, ...b })
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
    ...G
  }, k) => {
    const [i, m] = $(I || "text"), s = (y) => {
      if (p) {
        const j = p(y);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return N ? N(y) : !0;
    }, R = () => {
      if (I === "password")
        return /* @__PURE__ */ n.jsx(
          "button",
          {
            className: "focus:outline-none opacity-40",
            type: "button",
            onClick: () => m(i === "password" ? "text" : "password"),
            children: i === "password" ? /* @__PURE__ */ n.jsx(V, { className: "pointer-events-none" }) : /* @__PURE__ */ n.jsx(q, { className: "pointer-events-none" })
          }
        );
    }, O = "w-full", { classNames: w, ...v } = G;
    return /* @__PURE__ */ n.jsx("div", { className: o(O, f), children: /* @__PURE__ */ n.jsx(
      W,
      {
        ref: k,
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
        validate: s,
        classNames: {
          ...w,
          inputWrapper: o(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": l === "bordered"
            },
            w == null ? void 0 : w.inputWrapper
          )
        },
        endContent: R(),
        type: i,
        ...v
      }
    ) });
  }
);
D.displayName = "Input";
export {
  Y as Checkbox,
  A as CheckboxGroup,
  D as Input,
  B as InputOtp,
  z as RadioGroup
};
