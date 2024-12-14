import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as y, Radio as O, CheckboxGroup as $, Checkbox as i, InputOtp as m, Input as L } from "@nextui-org/react";
import { Checkbox as D } from "@nextui-org/react";
import { cn as o } from "../utils/x-react.es.js";
const S = w(
  ({
    items: c,
    groupClasses: l,
    itemClasses: a,
    label: d = "Select an option",
    defaultValue: p,
    ...f
  }, x) => {
    const b = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, e = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ n.jsx(
      y,
      {
        ref: x,
        label: d,
        defaultValue: p,
        ...f,
        classNames: {
          base: o(b.base, l == null ? void 0 : l.base),
          label: o(b.label, l == null ? void 0 : l.label)
        },
        children: c.map((r) => {
          var u, t, N;
          return /* @__PURE__ */ n.jsx(
            O,
            {
              ...r,
              classNames: {
                base: o(
                  e.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: o(
                  e.label,
                  a == null ? void 0 : a.label,
                  (u = r.classNames) == null ? void 0 : u.label
                ),
                wrapper: o(
                  e.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (t = r.classNames) == null ? void 0 : t.wrapper
                ),
                control: o(
                  e.control,
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
S.displayName = "RadioGroup";
const E = w(
  ({
    items: c,
    groupClasses: l,
    itemClasses: a,
    label: d = "Select options",
    defaultValue: p,
    ...f
  }, x) => {
    const b = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, e = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ n.jsx(
      $,
      {
        ref: x,
        label: d,
        defaultValue: p,
        ...f,
        classNames: {
          base: o(b.base, l == null ? void 0 : l.base),
          label: o(b.label, l == null ? void 0 : l.label)
        },
        children: c.map((r) => {
          var u, t;
          return /* @__PURE__ */ n.jsx(
            i,
            {
              ...r,
              classNames: {
                base: o(
                  e.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: o(
                  e.label,
                  a == null ? void 0 : a.label,
                  (u = r.classNames) == null ? void 0 : u.label
                ),
                wrapper: o(
                  e.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (t = r.classNames) == null ? void 0 : t.wrapper
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
E.displayName = "CheckboxGroup";
const P = w(
  ({
    length: c = 6,
    label: l = `${c} digits OTP`,
    labelClasses: a,
    containerClasses: d,
    ...p
  }, f) => /* @__PURE__ */ n.jsxs("div", { ref: f, className: o("flex flex-col", d), children: [
    l && /* @__PURE__ */ n.jsx("p", { className: o("text-default-500 text-small mb-2", a), children: l }),
    /* @__PURE__ */ n.jsx(m, { length: c, ...p })
  ] })
);
P.displayName = "InputOtp";
const T = w(
  ({
    variant: c = "flat",
    color: l = "default",
    size: a = "md",
    radius: d = "md",
    labelPlacement: p = "inside",
    fullWidth: f = !0,
    isClearable: x = !1,
    isRequired: b = !1,
    isReadOnly: e = !1,
    isDisabled: r = !1,
    // Custom props
    containerClasses: u,
    customValidation: t,
    // Passthrough props
    validate: N,
    ...G
  }, I) => {
    const R = (j) => {
      if (t) {
        const h = t(j);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(j) : !0;
    }, k = "w-full", v = {
      inputWrapper: "border-1 data-[hover=true]:border:outline data-[hover=focus]:border:outline"
    };
    return /* @__PURE__ */ n.jsx("div", { className: o(k, u), children: /* @__PURE__ */ n.jsx(
      L,
      {
        ref: I,
        variant: c,
        color: l,
        size: a,
        radius: d,
        labelPlacement: p,
        fullWidth: f,
        isClearable: x,
        isRequired: b,
        isReadOnly: e,
        isDisabled: r,
        validate: R,
        classNames: v,
        ...G
      }
    ) });
  }
);
T.displayName = "Input";
export {
  D as Checkbox,
  E as CheckboxGroup,
  T as Input,
  P as InputOtp,
  S as RadioGroup
};
