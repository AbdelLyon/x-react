/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N, useState as T } from "react";
import { RadioGroup as O, Radio as v, CheckboxGroup as E, Checkbox as L, InputOtp as P, Input as W, Textarea as V, Switch as q } from "@nextui-org/react";
import { Checkbox as C } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
import { IconEye as z, IconEyeOff as A } from "@tabler/icons-react";
const B = N(
  ({
    items: r,
    groupClasses: a,
    itemClasses: e,
    label: l = "Select an option",
    defaultValue: c,
    ...p
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, b = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ o.jsx(
      O,
      {
        ref: x,
        label: l,
        defaultValue: c,
        ...p,
        classNames: {
          base: t(d.base, a == null ? void 0 : a.base),
          label: t(d.label, a == null ? void 0 : a.label)
        },
        children: r.map((n) => {
          var f, u, w;
          return /* @__PURE__ */ o.jsx(
            v,
            {
              ...n,
              classNames: {
                base: t(
                  b.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: t(
                  b.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: t(
                  b.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (u = n.classNames) == null ? void 0 : u.wrapper
                ),
                control: t(
                  b.control,
                  e == null ? void 0 : e.control,
                  (w = n.classNames) == null ? void 0 : w.control
                )
              },
              children: n.label
            },
            n.value
          );
        })
      }
    );
  }
);
B.displayName = "RadioGroup";
const D = N(
  ({
    items: r,
    groupClasses: a,
    itemClasses: e,
    label: l = "Select options",
    defaultValue: c,
    ...p
  }, x) => {
    const d = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, b = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ o.jsx(
      E,
      {
        ref: x,
        label: l,
        defaultValue: c,
        ...p,
        classNames: {
          base: t(d.base, a == null ? void 0 : a.base),
          label: t(d.label, a == null ? void 0 : a.label)
        },
        children: r.map((n) => {
          var f, u;
          return /* @__PURE__ */ o.jsx(
            L,
            {
              ...n,
              classNames: {
                base: t(
                  b.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: t(
                  b.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: t(
                  b.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (u = n.classNames) == null ? void 0 : u.wrapper
                )
              },
              children: n.label
            },
            n.value
          );
        })
      }
    );
  }
);
D.displayName = "CheckboxGroup";
const F = N(
  ({
    length: r = 6,
    label: a = `${r} digits OTP`,
    labelClasses: e,
    containerClasses: l,
    ...c
  }, p) => /* @__PURE__ */ o.jsxs("div", { ref: p, className: t("flex flex-col", l), children: [
    a && /* @__PURE__ */ o.jsx("p", { className: t("text-default-500 text-small mb-2", e), children: a }),
    /* @__PURE__ */ o.jsx(P, { length: r, ...c })
  ] })
);
F.displayName = "InputOtp";
const H = N(
  ({
    variant: r = "bordered",
    color: a = "default",
    size: e = "md",
    radius: l = "md",
    labelPlacement: c = "inside",
    fullWidth: p = !0,
    isClearable: x = !1,
    isRequired: d = !1,
    isReadOnly: b = !1,
    isDisabled: n = !1,
    // Custom props
    containerClasses: f,
    customValidation: u,
    // Passthrough props
    validate: w,
    type: j,
    ...h
  }, I) => {
    const [s, $] = T(j || "text"), G = (m) => {
      if (u) {
        const i = u(m);
        if (typeof i == "string")
          return i;
        if (i === !1)
          return "Validation failed";
      }
      return w ? w(m) : !0;
    }, k = () => {
      if (j === "password")
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "focus:outline-none opacity-40",
            type: "button",
            onClick: () => $(s === "password" ? "text" : "password"),
            children: s === "password" ? /* @__PURE__ */ o.jsx(z, { className: "pointer-events-none" }) : /* @__PURE__ */ o.jsx(A, { className: "pointer-events-none" })
          }
        );
    }, S = "w-full", { classNames: y, ...R } = h;
    return /* @__PURE__ */ o.jsx("div", { className: t(S, f), children: /* @__PURE__ */ o.jsx(
      W,
      {
        ref: I,
        variant: r,
        color: a,
        size: e,
        radius: l,
        labelPlacement: c,
        fullWidth: p,
        isClearable: x,
        isRequired: d,
        isReadOnly: b,
        isDisabled: n,
        validate: G,
        classNames: {
          ...y,
          inputWrapper: t(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1": r === "bordered"
            },
            y == null ? void 0 : y.inputWrapper
          )
        },
        endContent: k(),
        type: s,
        ...R
      }
    ) });
  }
);
H.displayName = "Input";
const J = N(
  ({ width: r, height: a, style: e, ...l }, c) => {
    const p = {
      width: typeof r == "number" ? `${r}px` : r,
      height: typeof a == "number" ? `${a}px` : a,
      ...e
    };
    return /* @__PURE__ */ o.jsx(V, { ref: c, style: p, ...l });
  }
);
J.displayName = "Textarea";
const K = N(
  ({ width: r, height: a, style: e, ...l }, c) => {
    const p = {
      width: typeof r == "number" ? `${r}px` : r,
      height: typeof a == "number" ? `${a}px` : a,
      ...e
    };
    return /* @__PURE__ */ o.jsx(q, { ref: c, style: p, ...l });
  }
);
K.displayName = "Switch";
export {
  C as Checkbox,
  D as CheckboxGroup,
  H as Input,
  F as InputOtp,
  B as RadioGroup,
  K as Switch,
  J as Textarea
};
