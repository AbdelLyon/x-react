import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as $ } from "react";
import { RadioGroup as z, Radio as E, CheckboxGroup as S, Checkbox as T, InputOtp as L, Input as P } from "@nextui-org/react";
import { Checkbox as Y } from "@nextui-org/react";
import { cn as r } from "../utils/x-react.es.js";
import { IconEye as W, IconEyeOff as M, IconMail as V } from "@tabler/icons-react";
const q = w(
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
      z,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: r(c.base, e == null ? void 0 : e.base),
          label: r(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((n) => {
          var f, p, N;
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
                  (p = n.classNames) == null ? void 0 : p.wrapper
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
q.displayName = "RadioGroup";
const A = w(
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
      S,
      {
        ref: x,
        label: d,
        defaultValue: b,
        ...u,
        classNames: {
          base: r(c.base, e == null ? void 0 : e.base),
          label: r(c.label, e == null ? void 0 : e.label)
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
A.displayName = "CheckboxGroup";
const B = w(
  ({
    length: l = 6,
    label: e = `${l} digits OTP`,
    labelClasses: a,
    containerClasses: d,
    ...b
  }, u) => /* @__PURE__ */ o.jsxs("div", { ref: u, className: r("flex flex-col", d), children: [
    e && /* @__PURE__ */ o.jsx("p", { className: r("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ o.jsx(L, { length: l, ...b })
  ] })
);
B.displayName = "InputOtp";
const D = w(
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
    isDisabled: n = !1,
    // Custom props
    containerClasses: f,
    customValidation: p,
    // Passthrough props
    validate: N,
    type: h,
    ...y
  }, G) => {
    const [j, k] = $(h || "text"), m = (I) => {
      if (p) {
        const s = p(I);
        if (typeof s == "string")
          return s;
        if (s === !1)
          return "Validation failed";
      }
      return N ? N(I) : !0;
    }, R = () => {
      if (h === "password")
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "focus:outline-none opacity-60",
            type: "button",
            onClick: () => k(j === "password" ? "text" : "password"),
            children: j === "password" ? /* @__PURE__ */ o.jsx(W, { className: "pointer-events-none", size: 20 }) : /* @__PURE__ */ o.jsx(M, { className: "pointer-events-none", size: 20 })
          }
        );
      if (h === "email")
        return /* @__PURE__ */ o.jsx(V, { className: "pointer-events-none opacity-60", size: 20 });
    }, v = "w-full", { classNames: i, ...O } = y;
    return /* @__PURE__ */ o.jsx("div", { className: r(v, f), children: /* @__PURE__ */ o.jsx(
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
        isDisabled: n,
        validate: m,
        classNames: {
          ...i,
          inputWrapper: r(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": l === "bordered"
            },
            i == null ? void 0 : i.inputWrapper
          )
        },
        endContent: R(),
        type: j,
        ...O
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
  q as RadioGroup
};
