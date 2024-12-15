import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as i, useState as O } from "react";
import { RadioGroup as $, Radio as z, CheckboxGroup as E, Checkbox as S, InputOtp as T, Input as W } from "@nextui-org/react";
import { Checkbox as Y } from "@nextui-org/react";
import { cn as r } from "../utils/x-react.es.js";
import { IconEye as L, IconEyeOff as M, IconMail as P } from "@tabler/icons-react";
const V = i(
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
      $,
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
            z,
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
V.displayName = "RadioGroup";
const q = i(
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
      E,
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
            S,
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
q.displayName = "CheckboxGroup";
const A = i(
  ({
    length: l = 6,
    label: e = `${l} digits OTP`,
    labelClasses: a,
    containerClasses: d,
    ...b
  }, u) => /* @__PURE__ */ o.jsxs("div", { ref: u, className: r("flex flex-col", d), children: [
    e && /* @__PURE__ */ o.jsx("p", { className: r("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ o.jsx(T, { length: l, ...b })
  ] })
);
A.displayName = "InputOtp";
const B = i(
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
    type: w,
    ...s
  }, y) => {
    var I;
    const [h, G] = O(w || "text"), k = r({
      inputWrapper: r(
        "border-1 bg-white dark:bg-background",
        {
          "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-11 group-data-[focus=true]:bg-content1": l === "bordered"
        },
        (I = s.classNames) == null ? void 0 : I.inputWrapper
      )
    }), R = (m) => {
      if (p) {
        const j = p(m);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return N ? N(m) : !0;
    }, v = () => {
      if (w === "password")
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "focus:outline-none opacity-60",
            type: "button",
            onClick: () => G(h === "password" ? "text" : "password"),
            children: h === "password" ? /* @__PURE__ */ o.jsx(L, { className: "pointer-events-none", size: 20 }) : /* @__PURE__ */ o.jsx(M, { className: "pointer-events-none", size: 20 })
          }
        );
      if (w === "email")
        return /* @__PURE__ */ o.jsx(P, { className: "pointer-events-none opacity-60", size: 20 });
    };
    return /* @__PURE__ */ o.jsx("div", { className: r("w-full", f), children: /* @__PURE__ */ o.jsx(
      W,
      {
        ref: y,
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
        validate: R,
        classNames: {
          ...s.classNames,
          inputWrapper: k
        },
        endContent: v(),
        type: h,
        ...s
      }
    ) });
  }
);
B.displayName = "Input";
export {
  Y as Checkbox,
  q as CheckboxGroup,
  B as Input,
  A as InputOtp,
  V as RadioGroup
};
