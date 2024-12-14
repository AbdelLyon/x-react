import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as O } from "react";
import { RadioGroup as $, Radio as z, CheckboxGroup as E, Checkbox as S, InputOtp as T, Input as L } from "@nextui-org/react";
import { Checkbox as X } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { IconEye as M, IconEyeOff as P, IconMail as V } from "@tabler/icons-react";
const W = w(
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
      $,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: n(c.base, e == null ? void 0 : e.base),
          label: n(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((o) => {
          var f, d, N;
          return /* @__PURE__ */ r.jsx(
            z,
            {
              ...o,
              classNames: {
                base: n(
                  t.base,
                  a == null ? void 0 : a.base,
                  o.className
                ),
                label: n(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = o.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = o.classNames) == null ? void 0 : d.wrapper
                ),
                control: n(
                  t.control,
                  a == null ? void 0 : a.control,
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
W.displayName = "RadioGroup";
const q = w(
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
      E,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: n(c.base, e == null ? void 0 : e.base),
          label: n(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((o) => {
          var f, d;
          return /* @__PURE__ */ r.jsx(
            S,
            {
              ...o,
              classNames: {
                base: n(
                  t.base,
                  a == null ? void 0 : a.base,
                  o.className
                ),
                label: n(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = o.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = o.classNames) == null ? void 0 : d.wrapper
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
q.displayName = "CheckboxGroup";
const A = w(
  ({
    length: l = 6,
    label: e = `${l} digits OTP`,
    labelClasses: a,
    containerClasses: b,
    ...p
  }, u) => /* @__PURE__ */ r.jsxs("div", { ref: u, className: n("flex flex-col", b), children: [
    e && /* @__PURE__ */ r.jsx("p", { className: n("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ r.jsx(T, { length: l, ...p })
  ] })
);
A.displayName = "InputOtp";
const K = w(
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
    isDisabled: o = !1,
    // Custom props
    containerClasses: f,
    customValidation: d,
    // Passthrough props
    validate: N,
    type: i,
    ...I
  }, y) => {
    const [h, G] = O(i || "text"), k = (s) => {
      if (d) {
        const j = d(s);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return N ? N(s) : !0;
    }, m = () => {
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
    }, R = "w-full", v = {
      inputWrapper: n({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-white h-10 dark:bg-background group-data-[focus=true]:bg-content1": l === "bordered"
      })
    };
    return /* @__PURE__ */ r.jsx("div", { className: n(R, f), children: /* @__PURE__ */ r.jsx(
      L,
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
        isDisabled: o,
        validate: k,
        classNames: v,
        endContent: m(),
        type: h,
        ...I
      }
    ) });
  }
);
export {
  X as Checkbox,
  q as CheckboxGroup,
  K as Input,
  A as InputOtp,
  W as RadioGroup
};
