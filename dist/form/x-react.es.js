/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as O } from "react";
import { RadioGroup as v, Radio as S, CheckboxGroup as E, Checkbox as L, InputOtp as P, Input as W, Textarea as V } from "@nextui-org/react";
import { Checkbox as _ } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { IconEye as q, IconEyeOff as z } from "@tabler/icons-react";
const A = w(
  ({
    items: o,
    groupClasses: e,
    itemClasses: a,
    label: c = "Select an option",
    defaultValue: p,
    ...b
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ t.jsx(
      v,
      {
        ref: x,
        label: c,
        defaultValue: p,
        ...b,
        classNames: {
          base: n(d.base, e == null ? void 0 : e.base),
          label: n(d.label, e == null ? void 0 : e.label)
        },
        children: o.map((r) => {
          var f, u, N;
          return /* @__PURE__ */ t.jsx(
            S,
            {
              ...r,
              classNames: {
                base: n(
                  l.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: n(
                  l.label,
                  a == null ? void 0 : a.label,
                  (f = r.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  l.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (u = r.classNames) == null ? void 0 : u.wrapper
                ),
                control: n(
                  l.control,
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
A.displayName = "RadioGroup";
const B = w(
  ({
    items: o,
    groupClasses: e,
    itemClasses: a,
    label: c = "Select options",
    defaultValue: p,
    ...b
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, l = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ t.jsx(
      E,
      {
        ref: x,
        label: c,
        defaultValue: p,
        ...b,
        classNames: {
          base: n(d.base, e == null ? void 0 : e.base),
          label: n(d.label, e == null ? void 0 : e.label)
        },
        children: o.map((r) => {
          var f, u;
          return /* @__PURE__ */ t.jsx(
            L,
            {
              ...r,
              classNames: {
                base: n(
                  l.base,
                  a == null ? void 0 : a.base,
                  r.className
                ),
                label: n(
                  l.label,
                  a == null ? void 0 : a.label,
                  (f = r.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  l.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (u = r.classNames) == null ? void 0 : u.wrapper
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
B.displayName = "CheckboxGroup";
const D = w(
  ({
    length: o = 6,
    label: e = `${o} digits OTP`,
    labelClasses: a,
    containerClasses: c,
    ...p
  }, b) => /* @__PURE__ */ t.jsxs("div", { ref: b, className: n("flex flex-col", c), children: [
    e && /* @__PURE__ */ t.jsx("p", { className: n("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ t.jsx(P, { length: o, ...p })
  ] })
);
D.displayName = "InputOtp";
const F = w(
  ({
    variant: o = "bordered",
    color: e = "default",
    size: a = "md",
    radius: c = "md",
    labelPlacement: p = "inside",
    fullWidth: b = !0,
    isClearable: x = !1,
    isRequired: d = !1,
    isReadOnly: l = !1,
    isDisabled: r = !1,
    // Custom props
    containerClasses: f,
    customValidation: u,
    // Passthrough props
    validate: N,
    type: s,
    ...I
  }, m) => {
    const [j, G] = O(s || "text"), k = (h) => {
      if (u) {
        const i = u(h);
        if (typeof i == "string")
          return i;
        if (i === !1)
          return "Validation failed";
      }
      return N ? N(h) : !0;
    }, R = () => {
      if (s === "password")
        return /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "focus:outline-none opacity-40",
            type: "button",
            onClick: () => G(j === "password" ? "text" : "password"),
            children: j === "password" ? /* @__PURE__ */ t.jsx(q, { className: "pointer-events-none" }) : /* @__PURE__ */ t.jsx(z, { className: "pointer-events-none" })
          }
        );
    }, $ = "w-full", { classNames: y, ...T } = I;
    return /* @__PURE__ */ t.jsx("div", { className: n($, f), children: /* @__PURE__ */ t.jsx(
      W,
      {
        ref: m,
        variant: o,
        color: e,
        size: a,
        radius: c,
        labelPlacement: p,
        fullWidth: b,
        isClearable: x,
        isRequired: d,
        isReadOnly: l,
        isDisabled: r,
        validate: k,
        classNames: {
          ...y,
          inputWrapper: n(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": o === "bordered"
            },
            y == null ? void 0 : y.inputWrapper
          )
        },
        endContent: R(),
        type: j,
        ...T
      }
    ) });
  }
);
F.displayName = "Input";
const H = w(
  ({ width: o, height: e, style: a, ...c }, p) => {
    const b = {
      width: typeof o == "number" ? `${o}px` : o,
      height: typeof e == "number" ? `${e}px` : e,
      ...a
    };
    return /* @__PURE__ */ t.jsx(V, { ref: p, style: b, ...c });
  }
);
H.displayName = "Textarea";
export {
  _ as Checkbox,
  B as CheckboxGroup,
  F as Input,
  D as InputOtp,
  A as RadioGroup,
  H as Textarea
};
