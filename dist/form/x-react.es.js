import { j as b } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { RadioGroup as $, Radio as y, CheckboxGroup as m, Checkbox as v, InputOtp as L, Input as S } from "@nextui-org/react";
import { Checkbox as D } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
const i = w(
  ({
    items: o,
    groupClasses: r,
    itemClasses: a,
    label: t = "Select an option",
    defaultValue: u,
    ...p
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, n = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ b.jsx(
      $,
      {
        ref: x,
        label: t,
        defaultValue: u,
        ...p,
        classNames: {
          base: e(d.base, r == null ? void 0 : r.base),
          label: e(d.label, r == null ? void 0 : r.label)
        },
        children: o.map((l) => {
          var f, c, N;
          return /* @__PURE__ */ b.jsx(
            y,
            {
              ...l,
              classNames: {
                base: e(
                  n.base,
                  a == null ? void 0 : a.base,
                  l.className
                ),
                label: e(
                  n.label,
                  a == null ? void 0 : a.label,
                  (f = l.classNames) == null ? void 0 : f.label
                ),
                wrapper: e(
                  n.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (c = l.classNames) == null ? void 0 : c.wrapper
                ),
                control: e(
                  n.control,
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
i.displayName = "RadioGroup";
const E = w(
  ({
    items: o,
    groupClasses: r,
    itemClasses: a,
    label: t = "Select options",
    defaultValue: u,
    ...p
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, n = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ b.jsx(
      m,
      {
        ref: x,
        label: t,
        defaultValue: u,
        ...p,
        classNames: {
          base: e(d.base, r == null ? void 0 : r.base),
          label: e(d.label, r == null ? void 0 : r.label)
        },
        children: o.map((l) => {
          var f, c;
          return /* @__PURE__ */ b.jsx(
            v,
            {
              ...l,
              classNames: {
                base: e(
                  n.base,
                  a == null ? void 0 : a.base,
                  l.className
                ),
                label: e(
                  n.label,
                  a == null ? void 0 : a.label,
                  (f = l.classNames) == null ? void 0 : f.label
                ),
                wrapper: e(
                  n.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (c = l.classNames) == null ? void 0 : c.wrapper
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
    length: o = 6,
    label: r = `${o} digits OTP`,
    labelClasses: a,
    containerClasses: t,
    ...u
  }, p) => /* @__PURE__ */ b.jsxs("div", { ref: p, className: e("flex flex-col", t), children: [
    r && /* @__PURE__ */ b.jsx("p", { className: e("text-default-500 text-small mb-2", a), children: r }),
    /* @__PURE__ */ b.jsx(L, { length: o, ...u })
  ] })
);
P.displayName = "InputOtp";
const z = w(
  ({
    variant: o = "bordered",
    color: r = "default",
    size: a = "md",
    radius: t = "md",
    labelPlacement: u = "inside",
    fullWidth: p = !0,
    isClearable: x = !1,
    isRequired: d = !1,
    isReadOnly: n = !1,
    isDisabled: l = !1,
    // Custom props
    containerClasses: f,
    customValidation: c,
    // Passthrough props
    validate: N,
    ...k
  }, G) => {
    const I = (j) => {
      if (c) {
        const h = c(j);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(j) : !0;
    }, R = "w-full", O = {
      inputWrapper: e({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1": o === "bordered",
        "bg-default-100 dark:bg-background": o === "underlined"
      })
    };
    return /* @__PURE__ */ b.jsx("div", { className: e(R, f), children: /* @__PURE__ */ b.jsx(
      S,
      {
        ref: G,
        variant: o,
        color: r,
        size: a,
        radius: t,
        labelPlacement: u,
        fullWidth: p,
        isClearable: x,
        isRequired: d,
        isReadOnly: n,
        isDisabled: l,
        validate: I,
        classNames: O,
        ...k
      }
    ) });
  }
);
export {
  D as Checkbox,
  E as CheckboxGroup,
  z as Input,
  P as InputOtp,
  i as RadioGroup
};
