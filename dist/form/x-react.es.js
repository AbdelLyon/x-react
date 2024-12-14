import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as $, Radio as y, CheckboxGroup as i, Checkbox as v, InputOtp as m, Input as L } from "@nextui-org/react";
import { Checkbox as D } from "@nextui-org/react";
import { cn as l } from "../utils/x-react.es.js";
const S = w(
  ({
    items: o,
    groupClasses: r,
    itemClasses: a,
    label: c = "Select an option",
    defaultValue: u,
    ...p
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
    return /* @__PURE__ */ d.jsx(
      $,
      {
        ref: x,
        label: c,
        defaultValue: u,
        ...p,
        classNames: {
          base: l(b.base, r == null ? void 0 : r.base),
          label: l(b.label, r == null ? void 0 : r.label)
        },
        children: o.map((e) => {
          var f, t, N;
          return /* @__PURE__ */ d.jsx(
            y,
            {
              ...e,
              classNames: {
                base: l(
                  n.base,
                  a == null ? void 0 : a.base,
                  e.className
                ),
                label: l(
                  n.label,
                  a == null ? void 0 : a.label,
                  (f = e.classNames) == null ? void 0 : f.label
                ),
                wrapper: l(
                  n.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (t = e.classNames) == null ? void 0 : t.wrapper
                ),
                control: l(
                  n.control,
                  a == null ? void 0 : a.control,
                  (N = e.classNames) == null ? void 0 : N.control
                )
              },
              children: e.label
            },
            e.value
          );
        })
      }
    );
  }
);
S.displayName = "RadioGroup";
const E = w(
  ({
    items: o,
    groupClasses: r,
    itemClasses: a,
    label: c = "Select options",
    defaultValue: u,
    ...p
  }, x) => {
    const b = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, n = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ d.jsx(
      i,
      {
        ref: x,
        label: c,
        defaultValue: u,
        ...p,
        classNames: {
          base: l(b.base, r == null ? void 0 : r.base),
          label: l(b.label, r == null ? void 0 : r.label)
        },
        children: o.map((e) => {
          var f, t;
          return /* @__PURE__ */ d.jsx(
            v,
            {
              ...e,
              classNames: {
                base: l(
                  n.base,
                  a == null ? void 0 : a.base,
                  e.className
                ),
                label: l(
                  n.label,
                  a == null ? void 0 : a.label,
                  (f = e.classNames) == null ? void 0 : f.label
                ),
                wrapper: l(
                  n.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (t = e.classNames) == null ? void 0 : t.wrapper
                )
              },
              children: e.label
            },
            e.value
          );
        })
      }
    );
  }
);
E.displayName = "CheckboxGroup";
const P = w(
  ({
    length: o = 6,
    label: r = `${o} digits OTP`,
    labelClasses: a,
    containerClasses: c,
    ...u
  }, p) => /* @__PURE__ */ d.jsxs("div", { ref: p, className: l("flex flex-col", c), children: [
    r && /* @__PURE__ */ d.jsx("p", { className: l("text-default-500 text-small mb-2", a), children: r }),
    /* @__PURE__ */ d.jsx(m, { length: o, ...u })
  ] })
);
P.displayName = "InputOtp";
const z = w(
  ({
    variant: o = "bordered",
    color: r = "default",
    size: a = "md",
    radius: c = "md",
    labelPlacement: u = "inside",
    fullWidth: p = !0,
    isClearable: x = !1,
    isRequired: b = !1,
    isReadOnly: n = !1,
    isDisabled: e = !1,
    // Custom props
    containerClasses: f,
    customValidation: t,
    // Passthrough props
    validate: N,
    ...G
  }, I) => {
    const k = (j) => {
      if (t) {
        const h = t(j);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(j) : !0;
    }, R = "w-full", O = {
      inputWrapper: l({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1": o === "bordered",
        "data-[hover=true]:border-outline group-data-[focus=true]:border-outline": o === "underlined"
      })
    };
    return /* @__PURE__ */ d.jsx("div", { className: l(R, f), children: /* @__PURE__ */ d.jsx(
      L,
      {
        ref: I,
        variant: o,
        color: r,
        size: a,
        radius: c,
        labelPlacement: u,
        fullWidth: p,
        isClearable: x,
        isRequired: b,
        isReadOnly: n,
        isDisabled: e,
        validate: k,
        classNames: O,
        ...G
      }
    ) });
  }
);
export {
  D as Checkbox,
  E as CheckboxGroup,
  z as Input,
  P as InputOtp,
  S as RadioGroup
};
