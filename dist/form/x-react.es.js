import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as v, Radio as y, CheckboxGroup as O, Checkbox as $, InputOtp as i, Input as m } from "@nextui-org/react";
import { Checkbox as B } from "@nextui-org/react";
import { cn as o } from "../utils/x-react.es.js";
const L = w(
  ({
    items: b,
    groupClasses: r,
    itemClasses: a,
    label: p = "Select an option",
    defaultValue: u,
    ...f
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, e = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ n.jsx(
      v,
      {
        ref: x,
        label: p,
        defaultValue: u,
        ...f,
        classNames: {
          base: o(c.base, r == null ? void 0 : r.base),
          label: o(c.label, r == null ? void 0 : r.label)
        },
        children: b.map((l) => {
          var t, d, N;
          return /* @__PURE__ */ n.jsx(
            y,
            {
              ...l,
              classNames: {
                base: o(
                  e.base,
                  a == null ? void 0 : a.base,
                  l.className
                ),
                label: o(
                  e.label,
                  a == null ? void 0 : a.label,
                  (t = l.classNames) == null ? void 0 : t.label
                ),
                wrapper: o(
                  e.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = l.classNames) == null ? void 0 : d.wrapper
                ),
                control: o(
                  e.control,
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
L.displayName = "RadioGroup";
const S = w(
  ({
    items: b,
    groupClasses: r,
    itemClasses: a,
    label: p = "Select options",
    defaultValue: u,
    ...f
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, e = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ n.jsx(
      O,
      {
        ref: x,
        label: p,
        defaultValue: u,
        ...f,
        classNames: {
          base: o(c.base, r == null ? void 0 : r.base),
          label: o(c.label, r == null ? void 0 : r.label)
        },
        children: b.map((l) => {
          var t, d;
          return /* @__PURE__ */ n.jsx(
            $,
            {
              ...l,
              classNames: {
                base: o(
                  e.base,
                  a == null ? void 0 : a.base,
                  l.className
                ),
                label: o(
                  e.label,
                  a == null ? void 0 : a.label,
                  (t = l.classNames) == null ? void 0 : t.label
                ),
                wrapper: o(
                  e.wrapper,
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
S.displayName = "CheckboxGroup";
const E = w(
  ({
    length: b = 6,
    label: r = `${b} digits OTP`,
    labelClasses: a,
    containerClasses: p,
    ...u
  }, f) => /* @__PURE__ */ n.jsxs("div", { ref: f, className: o("flex flex-col", p), children: [
    r && /* @__PURE__ */ n.jsx("p", { className: o("text-default-500 text-small mb-2", a), children: r }),
    /* @__PURE__ */ n.jsx(i, { length: b, ...u })
  ] })
);
E.displayName = "InputOtp";
const P = w(
  ({
    color: b = "default",
    size: r = "md",
    radius: a = "md",
    labelPlacement: p = "inside",
    fullWidth: u = !0,
    isClearable: f = !1,
    isRequired: x = !1,
    isReadOnly: c = !1,
    isDisabled: e = !1,
    // Custom props
    containerClasses: l,
    customValidation: t,
    // Passthrough props
    validate: d,
    ...N
  }, G) => {
    const I = (j) => {
      if (t) {
        const h = t(j);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return d ? d(j) : !0;
    }, k = "w-full", R = {
      inputWrapper: "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1"
    };
    return /* @__PURE__ */ n.jsx("div", { className: o(k, l), children: /* @__PURE__ */ n.jsx(
      m,
      {
        ref: G,
        variant: "bordered",
        color: b,
        size: r,
        radius: a,
        labelPlacement: p,
        fullWidth: u,
        isClearable: f,
        isRequired: x,
        isReadOnly: c,
        isDisabled: e,
        validate: I,
        classNames: R,
        ...N
      }
    ) });
  }
);
P.displayName = "Input";
export {
  B as Checkbox,
  S as CheckboxGroup,
  P as Input,
  E as InputOtp,
  L as RadioGroup
};
