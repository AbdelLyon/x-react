import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as $ } from "react";
import { RadioGroup as z, Radio as E, CheckboxGroup as S, Checkbox as T, InputOtp as L, Input as W } from "@nextui-org/react";
import { Checkbox as Y } from "@nextui-org/react";
import { cn as o } from "../utils/x-react.es.js";
import { IconEye as M, IconEyeOff as P, IconMail as V } from "@tabler/icons-react";
const q = w(
  ({
    items: l,
    groupClasses: e,
    itemClasses: a,
    label: b = "Select an option",
    defaultValue: p,
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
    return /* @__PURE__ */ r.jsx(
      z,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: o(c.base, e == null ? void 0 : e.base),
          label: o(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((n) => {
          var f, d, N;
          return /* @__PURE__ */ r.jsx(
            E,
            {
              ...n,
              classNames: {
                base: o(
                  t.base,
                  a == null ? void 0 : a.base,
                  n.className
                ),
                label: o(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = n.classNames) == null ? void 0 : d.wrapper
                ),
                control: o(
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
    label: b = "Select options",
    defaultValue: p,
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
    return /* @__PURE__ */ r.jsx(
      S,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: o(c.base, e == null ? void 0 : e.base),
          label: o(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((n) => {
          var f, d;
          return /* @__PURE__ */ r.jsx(
            T,
            {
              ...n,
              classNames: {
                base: o(
                  t.base,
                  a == null ? void 0 : a.base,
                  n.className
                ),
                label: o(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
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
A.displayName = "CheckboxGroup";
const B = w(
  ({
    length: l = 6,
    label: e = `${l} digits OTP`,
    labelClasses: a,
    containerClasses: b,
    ...p
  }, u) => /* @__PURE__ */ r.jsxs("div", { ref: u, className: o("flex flex-col", b), children: [
    e && /* @__PURE__ */ r.jsx("p", { className: o("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ r.jsx(L, { length: l, ...p })
  ] })
);
B.displayName = "InputOtp";
const Q = w(
  ({
    variant: l = "bordered",
    color: e = "default",
    size: a = "md",
    radius: b = "md",
    labelPlacement: p = "inside",
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
    type: i,
    ...s
  }, y) => {
    var I;
    const [h, G] = $(i || "text"), k = (m) => {
      if (d) {
        const j = d(m);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return N ? N(m) : !0;
    }, R = () => {
      if (i === "password")
        return /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "focus:outline-none opacity-60",
            type: "button",
            onClick: () => G(h === "password" ? "text" : "password"),
            children: h === "password" ? /* @__PURE__ */ r.jsx(M, { className: "pointer-events-none", size: 20 }) : /* @__PURE__ */ r.jsx(P, { className: "pointer-events-none", size: 20 })
          }
        );
      if (i === "email")
        return /* @__PURE__ */ r.jsx(V, { className: "pointer-events-none opacity-60", size: 20 });
    }, v = "w-full", O = {
      inputWrapper: o(
        "border-1 bg-white dark:bg-background",
        {
          "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-11 group-data-[focus=true]:bg-content1": l === "bordered"
        },
        (I = s.classNames) == null ? void 0 : I.inputWrapper
      )
    };
    return /* @__PURE__ */ r.jsx("div", { className: o(v, f), children: /* @__PURE__ */ r.jsx(
      W,
      {
        ref: y,
        variant: l,
        color: e,
        size: a,
        radius: b,
        labelPlacement: p,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: t,
        isDisabled: n,
        validate: k,
        classNames: { ...O, ...s.classNames },
        endContent: R(),
        type: h,
        ...s
      }
    ) });
  }
);
export {
  Y as Checkbox,
  A as CheckboxGroup,
  Q as Input,
  B as InputOtp,
  q as RadioGroup
};
