import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N, useState as E } from "react";
import { RadioGroup as S, Radio as T, CheckboxGroup as s, Checkbox as v, InputOtp as L, Input as M } from "@nextui-org/react";
import { Checkbox as X } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
import { IconEyeOff as P, IconEye as V, IconMail as W } from "@tabler/icons-react";
const q = N(
  ({
    items: t,
    groupClasses: r,
    itemClasses: a,
    label: b = "Select an option",
    defaultValue: p,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ n.jsx(
      S,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: e(c.base, r == null ? void 0 : r.base),
          label: e(c.label, r == null ? void 0 : r.label)
        },
        children: t.map((o) => {
          var f, d, w;
          return /* @__PURE__ */ n.jsx(
            T,
            {
              ...o,
              classNames: {
                base: e(
                  l.base,
                  a == null ? void 0 : a.base,
                  o.className
                ),
                label: e(
                  l.label,
                  a == null ? void 0 : a.label,
                  (f = o.classNames) == null ? void 0 : f.label
                ),
                wrapper: e(
                  l.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = o.classNames) == null ? void 0 : d.wrapper
                ),
                control: e(
                  l.control,
                  a == null ? void 0 : a.control,
                  (w = o.classNames) == null ? void 0 : w.control
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
q.displayName = "RadioGroup";
const z = N(
  ({
    items: t,
    groupClasses: r,
    itemClasses: a,
    label: b = "Select options",
    defaultValue: p,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ n.jsx(
      s,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: e(c.base, r == null ? void 0 : r.base),
          label: e(c.label, r == null ? void 0 : r.label)
        },
        children: t.map((o) => {
          var f, d;
          return /* @__PURE__ */ n.jsx(
            v,
            {
              ...o,
              classNames: {
                base: e(
                  l.base,
                  a == null ? void 0 : a.base,
                  o.className
                ),
                label: e(
                  l.label,
                  a == null ? void 0 : a.label,
                  (f = o.classNames) == null ? void 0 : f.label
                ),
                wrapper: e(
                  l.wrapper,
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
z.displayName = "CheckboxGroup";
const A = N(
  ({
    length: t = 6,
    label: r = `${t} digits OTP`,
    labelClasses: a,
    containerClasses: b,
    ...p
  }, u) => /* @__PURE__ */ n.jsxs("div", { ref: u, className: e("flex flex-col", b), children: [
    r && /* @__PURE__ */ n.jsx("p", { className: e("text-default-500 text-small mb-2", a), children: r }),
    /* @__PURE__ */ n.jsx(L, { length: t, ...p })
  ] })
);
A.displayName = "InputOtp";
const K = N(
  ({
    variant: t = "bordered",
    color: r = "default",
    size: a = "md",
    radius: b = "md",
    labelPlacement: p = "inside",
    fullWidth: u = !0,
    isClearable: x = !1,
    isRequired: c = !1,
    isReadOnly: l = !1,
    isDisabled: o = !1,
    // Custom props
    containerClasses: f,
    customValidation: d,
    // Passthrough props
    validate: w,
    type: j,
    ...k
  }, i) => {
    const [h, y] = E(j || "text"), R = (G) => {
      if (d) {
        const I = d(G);
        if (typeof I == "string")
          return I;
        if (I === !1)
          return "Validation failed";
      }
      return w ? w(G) : !0;
    }, m = () => {
      if (j === "password")
        return /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            onClick: () => y(h === "password" ? "text" : "password"),
            className: "focus:outline-none",
            children: h === "password" ? /* @__PURE__ */ n.jsx(P, {}) : /* @__PURE__ */ n.jsx(V, {})
          }
        );
      if (j === "email")
        return /* @__PURE__ */ n.jsx(W, {});
    }, O = "w-full", $ = {
      inputWrapper: e({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1": t === "bordered"
      })
    };
    return /* @__PURE__ */ n.jsx(
      M,
      {
        ref: i,
        type: h,
        variant: t,
        color: r,
        size: a,
        radius: b,
        labelPlacement: p,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: l,
        isDisabled: o,
        endContent: m(),
        validate: R,
        className: e(O, f),
        classNames: $,
        ...k
      }
    );
  }
);
export {
  X as Checkbox,
  z as CheckboxGroup,
  K as Input,
  A as InputOtp,
  q as RadioGroup
};
