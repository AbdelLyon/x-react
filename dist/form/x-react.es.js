/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as R } from "react";
import { RadioGroup as T, Radio as O, CheckboxGroup as v, Checkbox as W, InputOtp as E, Input as P, Textarea as V, Switch as L } from "@nextui-org/react";
import { Checkbox as C } from "@nextui-org/react";
import { cn as a } from "../utils/x-react.es.js";
import { IconEye as q, IconEyeOff as z } from "@tabler/icons-react";
const A = w(
  ({
    items: o,
    groupClasses: r,
    itemClasses: e,
    label: l = "Select an option",
    defaultValue: c,
    ...b
  }, x) => {
    const f = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, d = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ n.jsx(
      T,
      {
        ref: x,
        label: l,
        defaultValue: c,
        ...b,
        classNames: {
          base: a(f.base, r == null ? void 0 : r.base),
          label: a(f.label, r == null ? void 0 : r.label)
        },
        children: o.map((t) => {
          var p, u, i;
          return /* @__PURE__ */ n.jsx(
            O,
            {
              ...t,
              classNames: {
                base: a(
                  d.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: a(
                  d.label,
                  e == null ? void 0 : e.label,
                  (p = t.classNames) == null ? void 0 : p.label
                ),
                wrapper: a(
                  d.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (u = t.classNames) == null ? void 0 : u.wrapper
                ),
                control: a(
                  d.control,
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
const B = w(
  ({
    items: o,
    groupClasses: r,
    itemClasses: e,
    label: l = "Select options",
    defaultValue: c,
    ...b
  }, x) => {
    const f = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, d = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ n.jsx(
      v,
      {
        ref: x,
        label: l,
        defaultValue: c,
        ...b,
        classNames: {
          base: a(f.base, r == null ? void 0 : r.base),
          label: a(f.label, r == null ? void 0 : r.label)
        },
        children: o.map((t) => {
          var p, u;
          return /* @__PURE__ */ n.jsx(
            W,
            {
              ...t,
              classNames: {
                base: a(
                  d.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: a(
                  d.label,
                  e == null ? void 0 : e.label,
                  (p = t.classNames) == null ? void 0 : p.label
                ),
                wrapper: a(
                  d.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (u = t.classNames) == null ? void 0 : u.wrapper
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
const D = w(
  ({
    length: o = 6,
    label: r = `${o} digits OTP`,
    labelClasses: e,
    containerClasses: l,
    ...c
  }, b) => /* @__PURE__ */ n.jsxs("div", { ref: b, className: a("flex flex-col", l), children: [
    r && /* @__PURE__ */ n.jsx("p", { className: a("text-default-500 text-small mb-2", e), children: r }),
    /* @__PURE__ */ n.jsx(E, { length: o, ...c })
  ] })
);
D.displayName = "InputOtp";
const F = w(
  ({
    variant: o = "bordered",
    color: r = "default",
    size: e = "md",
    radius: l = "md",
    labelPlacement: c = "inside",
    fullWidth: b = !0,
    isClearable: x = !1,
    isRequired: f = !1,
    isReadOnly: d = !1,
    isDisabled: t = !1,
    containerClasses: p,
    customValidation: u,
    validate: i,
    type: N,
    ...y
  }, I) => {
    const [m, $] = R(N), g = (S) => {
      if (u) {
        const G = u(S);
        if (typeof G == "string")
          return G;
        if (G)
          return "Validation failed";
      }
      return (i == null ? void 0 : i(S)) ?? !0;
    }, s = N === "password" ? /* @__PURE__ */ n.jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => $(m === "password" ? "text" : "password"),
        children: m === "password" ? /* @__PURE__ */ n.jsx(q, { className: "pointer-events-none" }) : /* @__PURE__ */ n.jsx(z, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: h, ...k } = y, j = () => {
      switch (o) {
        case "bordered":
          return "border-1 bg-white dark:bg-background data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1";
        case "flat":
          return "border-none bg-default-100 dark:bg-default-50 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-12";
        case "faded":
          return "border-1 border-transparent bg-default-100 dark:bg-default-50 data-[hover=true]:bg-default-200 group-data-[focus=true]:border-outline h-12";
        case "underlined":
          return "border-b-1 rounded-none bg-transparent border-default-200 dark:border-default-100 data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12";
        default:
          return "border-1 bg-white dark:bg-background data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12";
      }
    };
    return /* @__PURE__ */ n.jsx("div", { className: a("w-full", p), children: /* @__PURE__ */ n.jsx(
      P,
      {
        ref: I,
        variant: o,
        color: r,
        size: e,
        radius: l,
        labelPlacement: c,
        fullWidth: b,
        isClearable: x,
        isRequired: f,
        isReadOnly: d,
        isDisabled: t,
        validate: g,
        classNames: {
          ...h,
          inputWrapper: a(j(), h == null ? void 0 : h.inputWrapper)
        },
        endContent: s,
        type: m,
        ...k
      }
    ) });
  }
);
F.displayName = "Input";
const H = w(
  ({
    variant: o = "bordered",
    color: r = "default",
    size: e = "md",
    radius: l = "md",
    labelPlacement: c = "inside",
    fullWidth: b = !0,
    isRequired: x = !1,
    isReadOnly: f = !1,
    isDisabled: d = !1,
    containerClasses: t,
    width: p,
    height: u,
    style: i,
    customValidation: N,
    validate: y,
    ...I
  }, m) => {
    const $ = {
      width: typeof p == "number" ? `${p}px` : p,
      height: typeof u == "number" ? `${u}px` : u,
      ...i
    }, g = (k) => {
      if (N) {
        const j = N(k);
        if (typeof j == "string")
          return j;
        if (j === !1)
          return "Validation failed";
      }
      return (y == null ? void 0 : y(k)) ?? !0;
    }, { classNames: s, ...h } = I;
    return /* @__PURE__ */ n.jsx("div", { className: a("w-full", t), children: /* @__PURE__ */ n.jsx(
      V,
      {
        ref: m,
        variant: o,
        color: r,
        size: e,
        radius: l,
        labelPlacement: c,
        fullWidth: b,
        isRequired: x,
        isReadOnly: f,
        isDisabled: d,
        validate: g,
        style: $,
        classNames: {
          ...s,
          inputWrapper: a(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline group-data-[focus=true]:bg-content1": o === "bordered"
            },
            s == null ? void 0 : s.inputWrapper
          ),
          input: a("text-base", s == null ? void 0 : s.input)
        },
        ...h
      }
    ) });
  }
);
H.displayName = "Textarea";
const J = w(
  ({ width: o, height: r, style: e, ...l }, c) => {
    const b = {
      width: typeof o == "number" ? `${o}px` : o,
      height: typeof r == "number" ? `${r}px` : r,
      ...e
    };
    return /* @__PURE__ */ n.jsx(L, { ref: c, style: b, ...l });
  }
);
J.displayName = "Switch";
export {
  C as Checkbox,
  B as CheckboxGroup,
  F as Input,
  D as InputOtp,
  A as RadioGroup,
  J as Switch,
  H as Textarea
};
