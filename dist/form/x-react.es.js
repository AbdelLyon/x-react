import { j as b } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as O, Radio as $, CheckboxGroup as m, Checkbox as v, InputOtp as i, Input as L } from "@nextui-org/react";
import { Checkbox as D } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
const S = w(
  ({
    items: n,
    groupClasses: r,
    itemClasses: a,
    label: t = "Select an option",
    defaultValue: p,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, o = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ b.jsx(
      O,
      {
        ref: x,
        label: t,
        defaultValue: p,
        ...u,
        classNames: {
          base: e(c.base, r == null ? void 0 : r.base),
          label: e(c.label, r == null ? void 0 : r.label)
        },
        children: n.map((l) => {
          var f, d, N;
          return /* @__PURE__ */ b.jsx(
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
                  (f = l.classNames) == null ? void 0 : f.label
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
S.displayName = "RadioGroup";
const E = w(
  ({
    items: n,
    groupClasses: r,
    itemClasses: a,
    label: t = "Select options",
    defaultValue: p,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, o = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ b.jsx(
      m,
      {
        ref: x,
        label: t,
        defaultValue: p,
        ...u,
        classNames: {
          base: e(c.base, r == null ? void 0 : r.base),
          label: e(c.label, r == null ? void 0 : r.label)
        },
        children: n.map((l) => {
          var f, d;
          return /* @__PURE__ */ b.jsx(
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
                  (f = l.classNames) == null ? void 0 : f.label
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
E.displayName = "CheckboxGroup";
const P = w(
  ({
    length: n = 6,
    label: r = `${n} digits OTP`,
    labelClasses: a,
    containerClasses: t,
    ...p
  }, u) => /* @__PURE__ */ b.jsxs("div", { ref: u, className: e("flex flex-col", t), children: [
    r && /* @__PURE__ */ b.jsx("p", { className: e("text-default-500 text-small mb-2", a), children: r }),
    /* @__PURE__ */ b.jsx(i, { length: n, ...p })
  ] })
);
P.displayName = "InputOtp";
const T = w(
  ({
    variant: n = "bordered",
    color: r = "default",
    size: a = "md",
    radius: t = "md",
    labelPlacement: p = "inside",
    fullWidth: u = !0,
    isClearable: x = !1,
    isRequired: c = !1,
    isReadOnly: o = !1,
    isDisabled: l = !1,
    // Custom props
    containerClasses: f,
    customValidation: d,
    // Passthrough props
    validate: N,
    ...G
  }, I) => {
    const k = (j) => {
      if (d) {
        const h = d(j);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(j) : !0;
    }, R = "w-full", y = n === "bordered" ? {
      inputWrapper: "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1"
    } : {};
    return /* @__PURE__ */ b.jsx("div", { className: e(R, f), children: /* @__PURE__ */ b.jsx(
      L,
      {
        ref: I,
        variant: n,
        color: r,
        size: a,
        radius: t,
        labelPlacement: p,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: o,
        isDisabled: l,
        validate: k,
        classNames: y,
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
