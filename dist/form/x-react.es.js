import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as k, Radio as y, CheckboxGroup as O, Checkbox as $, InputOtp as v, Input as L } from "@nextui-org/react";
import { Checkbox as D } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
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
    }, o = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ e.jsx(
      k,
      {
        ref: x,
        label: d,
        defaultValue: p,
        ...f,
        classNames: {
          base: n(b.base, l == null ? void 0 : l.base),
          label: n(b.label, l == null ? void 0 : l.label)
        },
        children: c.map((r) => {
          var u, t, N;
          return /* @__PURE__ */ e.jsx(
            y,
            {
              ...r,
              classNames: {
                base: n(
                  o.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: n(
                  o.label,
                  a == null ? void 0 : a.label,
                  (u = r.classNames) == null ? void 0 : u.label
                ),
                wrapper: n(
                  o.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (t = r.classNames) == null ? void 0 : t.wrapper
                ),
                control: n(
                  o.control,
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
const i = w(
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
    }, o = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ e.jsx(
      O,
      {
        ref: x,
        label: d,
        defaultValue: p,
        ...f,
        classNames: {
          base: n(b.base, l == null ? void 0 : l.base),
          label: n(b.label, l == null ? void 0 : l.label)
        },
        children: c.map((r) => {
          var u, t;
          return /* @__PURE__ */ e.jsx(
            $,
            {
              ...r,
              classNames: {
                base: n(
                  o.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: n(
                  o.label,
                  a == null ? void 0 : a.label,
                  (u = r.classNames) == null ? void 0 : u.label
                ),
                wrapper: n(
                  o.wrapper,
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
i.displayName = "CheckboxGroup";
const m = w(
  ({
    length: c = 6,
    label: l = `${c} digits OTP`,
    labelClasses: a,
    containerClasses: d,
    ...p
  }, f) => /* @__PURE__ */ e.jsxs("div", { ref: f, className: n("flex flex-col", d), children: [
    l && /* @__PURE__ */ e.jsx("p", { className: n("text-default-500 text-small mb-2", a), children: l }),
    /* @__PURE__ */ e.jsx(v, { length: c, ...p })
  ] })
);
m.displayName = "InputOtp";
const E = w(
  ({
    variant: c = "flat",
    color: l = "default",
    size: a = "md",
    radius: d = "md",
    labelPlacement: p = "inside",
    fullWidth: f = !0,
    isClearable: x = !1,
    isRequired: b = !1,
    isReadOnly: o = !1,
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
    };
    return /* @__PURE__ */ e.jsx("div", { className: n("w-full", u), children: /* @__PURE__ */ e.jsx(
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
        isReadOnly: o,
        isDisabled: r,
        validate: R,
        ...G
      }
    ) });
  }
);
E.displayName = "Input";
export {
  D as Checkbox,
  i as CheckboxGroup,
  E as Input,
  m as InputOtp,
  S as RadioGroup
};
