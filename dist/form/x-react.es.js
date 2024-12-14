import { j as c } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as O, Radio as $, CheckboxGroup as m, Checkbox as v, InputOtp as L, Input as S } from "@nextui-org/react";
import { Checkbox as D } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
const E = w(
  ({
    items: n,
    groupClasses: r,
    itemClasses: a,
    label: p = "Select an option",
    defaultValue: t,
    ...f
  }, x) => {
    const b = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, o = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ c.jsx(
      O,
      {
        ref: x,
        label: p,
        defaultValue: t,
        ...f,
        classNames: {
          base: e(b.base, r == null ? void 0 : r.base),
          label: e(b.label, r == null ? void 0 : r.label)
        },
        children: n.map((l) => {
          var u, d, N;
          return /* @__PURE__ */ c.jsx(
            $,
            {
              ...l,
              classNames: {
                base: e(
                  o.base,
                  a == null ? void 0 : a.base,
                  l.className
                ),
                label: e(
                  o.label,
                  a == null ? void 0 : a.label,
                  (u = l.classNames) == null ? void 0 : u.label
                ),
                wrapper: e(
                  o.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = l.classNames) == null ? void 0 : d.wrapper
                ),
                control: e(
                  o.control,
                  a == null ? void 0 : a.control,
                  (N = l.classNames) == null ? void 0 : N.control
                )
              },
              children: l.label
            },
            l.value
          );
        })
      }
    );
  }
);
E.displayName = "RadioGroup";
const P = w(
  ({
    items: n,
    groupClasses: r,
    itemClasses: a,
    label: p = "Select options",
    defaultValue: t,
    ...f
  }, x) => {
    const b = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, o = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ c.jsx(
      m,
      {
        ref: x,
        label: p,
        defaultValue: t,
        ...f,
        classNames: {
          base: e(b.base, r == null ? void 0 : r.base),
          label: e(b.label, r == null ? void 0 : r.label)
        },
        children: n.map((l) => {
          var u, d;
          return /* @__PURE__ */ c.jsx(
            v,
            {
              ...l,
              classNames: {
                base: e(
                  o.base,
                  a == null ? void 0 : a.base,
                  l.className
                ),
                label: e(
                  o.label,
                  a == null ? void 0 : a.label,
                  (u = l.classNames) == null ? void 0 : u.label
                ),
                wrapper: e(
                  o.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = l.classNames) == null ? void 0 : d.wrapper
                )
              },
              children: l.label
            },
            l.value
          );
        })
      }
    );
  }
);
P.displayName = "CheckboxGroup";
const T = w(
  ({
    length: n = 6,
    label: r = `${n} digits OTP`,
    labelClasses: a,
    containerClasses: p,
    ...t
  }, f) => /* @__PURE__ */ c.jsxs("div", { ref: f, className: e("flex flex-col", p), children: [
    r && /* @__PURE__ */ c.jsx("p", { className: e("text-default-500 text-small mb-2", a), children: r }),
    /* @__PURE__ */ c.jsx(L, { length: n, ...t })
  ] })
);
T.displayName = "InputOtp";
const V = w(
  ({
    variant: n = "flat",
    color: r = "default",
    size: a = "md",
    radius: p = "md",
    labelPlacement: t = "inside",
    fullWidth: f = !0,
    isClearable: x = !1,
    isRequired: b = !1,
    isReadOnly: o = !1,
    isDisabled: l = !1,
    // Custom props
    containerClasses: u,
    customValidation: d,
    // Passthrough props
    validate: N,
    ...G
  }, I) => {
    const R = (j) => {
      if (d) {
        const h = d(j);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(j) : !0;
    }, k = "w-full", y = n === "bordered" ? {
      inputWrapper: "border-red-500 hover:border-red-500 focus:border-red-500"
    } : {};
    return /* @__PURE__ */ c.jsx("div", { className: e(k, u), children: /* @__PURE__ */ c.jsx(
      S,
      {
        ref: I,
        variant: n,
        color: r,
        size: a,
        radius: p,
        labelPlacement: t,
        fullWidth: f,
        isClearable: x,
        isRequired: b,
        isReadOnly: o,
        isDisabled: l,
        validate: R,
        classNames: y,
        ...G
      }
    ) });
  }
);
V.displayName = "Input";
export {
  D as Checkbox,
  P as CheckboxGroup,
  V as Input,
  T as InputOtp,
  E as RadioGroup
};
