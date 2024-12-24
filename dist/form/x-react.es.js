/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as y, useState as S } from "react";
import { RadioGroup as T, Radio as O, CheckboxGroup as W, Checkbox as E, InputOtp as P, Input as L, Textarea as V, Switch as q } from "@nextui-org/react";
import { Checkbox as g } from "@nextui-org/react";
import { cn as a } from "../utils/x-react.es.js";
import { IconEye as v, IconEyeOff as z } from "@tabler/icons-react";
const A = y(
  ({
    items: o,
    groupClasses: r,
    itemClasses: e,
    label: p = "Select an option",
    defaultValue: d,
    ...b
  }, s) => {
    const f = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, c = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ n.jsx(
      T,
      {
        ref: s,
        label: p,
        defaultValue: d,
        ...b,
        classNames: {
          base: a(f.base, r == null ? void 0 : r.base),
          label: a(f.label, r == null ? void 0 : r.label)
        },
        children: o.map((t) => {
          var u, l, i;
          return /* @__PURE__ */ n.jsx(
            O,
            {
              ...t,
              classNames: {
                base: a(
                  c.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: a(
                  c.label,
                  e == null ? void 0 : e.label,
                  (u = t.classNames) == null ? void 0 : u.label
                ),
                wrapper: a(
                  c.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (l = t.classNames) == null ? void 0 : l.wrapper
                ),
                control: a(
                  c.control,
                  e == null ? void 0 : e.control,
                  (i = t.classNames) == null ? void 0 : i.control
                )
              },
              children: t.label
            },
            t.value
          );
        })
      }
    );
  }
);
A.displayName = "RadioGroup";
const B = y(
  ({
    items: o,
    groupClasses: r,
    itemClasses: e,
    label: p = "Select options",
    defaultValue: d,
    ...b
  }, s) => {
    const f = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, c = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ n.jsx(
      W,
      {
        ref: s,
        label: p,
        defaultValue: d,
        ...b,
        classNames: {
          base: a(f.base, r == null ? void 0 : r.base),
          label: a(f.label, r == null ? void 0 : r.label)
        },
        children: o.map((t) => {
          var u, l;
          return /* @__PURE__ */ n.jsx(
            E,
            {
              ...t,
              classNames: {
                base: a(
                  c.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: a(
                  c.label,
                  e == null ? void 0 : e.label,
                  (u = t.classNames) == null ? void 0 : u.label
                ),
                wrapper: a(
                  c.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (l = t.classNames) == null ? void 0 : l.wrapper
                )
              },
              children: t.label
            },
            t.value
          );
        })
      }
    );
  }
);
B.displayName = "CheckboxGroup";
const D = y(
  ({
    length: o = 6,
    label: r = `${o} digits OTP`,
    labelClasses: e,
    containerClasses: p,
    ...d
  }, b) => /* @__PURE__ */ n.jsxs("div", { ref: b, className: a("flex flex-col", p), children: [
    r && /* @__PURE__ */ n.jsx("p", { className: a("text-default-500 text-small mb-2", e), children: r }),
    /* @__PURE__ */ n.jsx(P, { length: o, ...d })
  ] })
);
D.displayName = "InputOtp";
const F = y(
  ({
    variant: o = "bordered",
    color: r = "default",
    size: e = "md",
    radius: p = "md",
    labelPlacement: d = "inside",
    fullWidth: b = !0,
    isClearable: s = !1,
    isRequired: f = !1,
    isReadOnly: c = !1,
    isDisabled: t = !1,
    containerClasses: u,
    customValidation: l,
    validate: i,
    type: m,
    ...h
  }, k) => {
    const [j, $] = S(m), G = (N) => {
      if (l) {
        const R = l(N);
        if (typeof R == "string")
          return R;
        if (R)
          return "Validation failed";
      }
      return (i == null ? void 0 : i(N)) ?? !0;
    }, x = m === "password" ? /* @__PURE__ */ n.jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => $(j === "password" ? "text" : "password"),
        children: j === "password" ? /* @__PURE__ */ n.jsx(v, { className: "pointer-events-none" }) : /* @__PURE__ */ n.jsx(z, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: w, ...I } = h;
    return /* @__PURE__ */ n.jsx("div", { className: a("w-full", u), children: /* @__PURE__ */ n.jsx(
      L,
      {
        ref: k,
        variant: o,
        color: r,
        size: e,
        radius: p,
        labelPlacement: d,
        fullWidth: b,
        isClearable: s,
        isRequired: f,
        isReadOnly: c,
        isDisabled: t,
        validate: G,
        classNames: {
          ...w,
          inputWrapper: a(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": o === "bordered"
            },
            w == null ? void 0 : w.inputWrapper
          )
        },
        endContent: x,
        type: j,
        ...I
      }
    ) });
  }
);
F.displayName = "Input";
const H = y(
  ({
    variant: o = "bordered",
    color: r = "default",
    size: e = "md",
    radius: p = "md",
    labelPlacement: d = "inside",
    fullWidth: b = !0,
    isRequired: s = !1,
    isReadOnly: f = !1,
    isDisabled: c = !1,
    containerClasses: t,
    width: u,
    height: l,
    style: i,
    customValidation: m,
    validate: h,
    ...k
  }, j) => {
    const $ = {
      width: typeof u == "number" ? `${u}px` : u,
      height: typeof l == "number" ? `${l}px` : l,
      ...i
    }, G = (I) => {
      if (m) {
        const N = m(I);
        if (typeof N == "string")
          return N;
        if (N === !1)
          return "Validation failed";
      }
      return (h == null ? void 0 : h(I)) ?? !0;
    }, { classNames: x, ...w } = k;
    return /* @__PURE__ */ n.jsx("div", { className: a("w-full", t), children: /* @__PURE__ */ n.jsx(
      V,
      {
        ref: j,
        variant: o,
        color: r,
        size: e,
        radius: p,
        labelPlacement: d,
        fullWidth: b,
        isRequired: s,
        isReadOnly: f,
        isDisabled: c,
        validate: G,
        style: $,
        classNames: {
          ...x,
          inputWrapper: a(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline group-data-[focus=true]:bg-content1": o === "bordered"
            },
            x == null ? void 0 : x.inputWrapper
          ),
          input: a("text-base", x == null ? void 0 : x.input)
        },
        ...w
      }
    ) });
  }
);
H.displayName = "Textarea";
const J = y(
  ({ width: o, height: r, style: e, ...p }, d) => {
    const b = {
      width: typeof o == "number" ? `${o}px` : o,
      height: typeof r == "number" ? `${r}px` : r,
      ...e
    };
    return /* @__PURE__ */ n.jsx(q, { ref: d, style: b, ...p });
  }
);
J.displayName = "Switch";
export {
  g as Checkbox,
  B as CheckboxGroup,
  F as Input,
  D as InputOtp,
  A as RadioGroup,
  J as Switch,
  H as Textarea
};
