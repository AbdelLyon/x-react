import { j as c } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as O, Radio as $, CheckboxGroup as m, Checkbox as v, InputOtp as L, Input as S } from "@nextui-org/react";
import { Checkbox as D } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
const E = w(
  ({
    items: o,
    groupClasses: l,
    itemClasses: a,
    label: p = "Select an option",
    defaultValue: t,
    ...f
  }, x) => {
    const b = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, n = {
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
          base: e(b.base, l == null ? void 0 : l.base),
          label: e(b.label, l == null ? void 0 : l.label)
        },
        children: o.map((r) => {
          var u, d, N;
          return /* @__PURE__ */ c.jsx(
            $,
            {
              ...r,
              classNames: {
                base: e(
                  n.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: e(
                  n.label,
                  a == null ? void 0 : a.label,
                  (u = r.classNames) == null ? void 0 : u.label
                ),
                wrapper: e(
                  n.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = r.classNames) == null ? void 0 : d.wrapper
                ),
                control: e(
                  n.control,
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
E.displayName = "RadioGroup";
const P = w(
  ({
    items: o,
    groupClasses: l,
    itemClasses: a,
    label: p = "Select options",
    defaultValue: t,
    ...f
  }, x) => {
    const b = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, n = {
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
          base: e(b.base, l == null ? void 0 : l.base),
          label: e(b.label, l == null ? void 0 : l.label)
        },
        children: o.map((r) => {
          var u, d;
          return /* @__PURE__ */ c.jsx(
            v,
            {
              ...r,
              classNames: {
                base: e(
                  n.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: e(
                  n.label,
                  a == null ? void 0 : a.label,
                  (u = r.classNames) == null ? void 0 : u.label
                ),
                wrapper: e(
                  n.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = r.classNames) == null ? void 0 : d.wrapper
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
P.displayName = "CheckboxGroup";
const T = w(
  ({
    length: o = 6,
    label: l = `${o} digits OTP`,
    labelClasses: a,
    containerClasses: p,
    ...t
  }, f) => /* @__PURE__ */ c.jsxs("div", { ref: f, className: e("flex flex-col", p), children: [
    l && /* @__PURE__ */ c.jsx("p", { className: e("text-default-500 text-small mb-2", a), children: l }),
    /* @__PURE__ */ c.jsx(L, { length: o, ...t })
  ] })
);
T.displayName = "InputOtp";
const V = w(
  ({
    variant: o = "flat",
    color: l = "default",
    size: a = "md",
    radius: p = "md",
    labelPlacement: t = "inside",
    fullWidth: f = !0,
    isClearable: x = !1,
    isRequired: b = !1,
    isReadOnly: n = !1,
    isDisabled: r = !1,
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
    }, k = "w-full", y = o === "bordered" ? {
      inputWrapper: "border-1"
    } : {};
    return /* @__PURE__ */ c.jsx("div", { className: e(k, u), children: /* @__PURE__ */ c.jsx(
      S,
      {
        ref: I,
        variant: o,
        color: l,
        size: a,
        radius: p,
        labelPlacement: t,
        fullWidth: f,
        isClearable: x,
        isRequired: b,
        isReadOnly: n,
        isDisabled: r,
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
