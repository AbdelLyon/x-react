import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as O } from "react";
import { RadioGroup as $, Radio as z, CheckboxGroup as E, Checkbox as S, InputOtp as T, Input as L } from "@nextui-org/react";
import { Checkbox as X } from "@nextui-org/react";
import { cn as o } from "../utils/x-react.es.js";
import { IconEye as M, IconEyeOff as P, IconMail as V } from "@tabler/icons-react";
const W = w(
  ({
    items: l,
    groupClasses: e,
    itemClasses: a,
    label: b = "Select an option",
    defaultValue: p,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, t = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ r.jsx(
      $,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: o(c.base, e == null ? void 0 : e.base),
          label: o(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((n) => {
          var f, d, N;
          return /* @__PURE__ */ r.jsx(
            z,
            {
              ...n,
              classNames: {
                base: o(
                  t.base,
                  a == null ? void 0 : a.base,
                  n.className
                ),
                label: o(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = n.classNames) == null ? void 0 : d.wrapper
                ),
                control: o(
                  t.control,
                  a == null ? void 0 : a.control,
                  (N = n.classNames) == null ? void 0 : N.control
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
W.displayName = "RadioGroup";
const q = w(
  ({
    items: l,
    groupClasses: e,
    itemClasses: a,
    label: b = "Select options",
    defaultValue: p,
    ...u
  }, x) => {
    const c = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, t = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ r.jsx(
      E,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: o(c.base, e == null ? void 0 : e.base),
          label: o(c.label, e == null ? void 0 : e.label)
        },
        children: l.map((n) => {
          var f, d;
          return /* @__PURE__ */ r.jsx(
            S,
            {
              ...n,
              classNames: {
                base: o(
                  t.base,
                  a == null ? void 0 : a.base,
                  n.className
                ),
                label: o(
                  t.label,
                  a == null ? void 0 : a.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
                  t.wrapper,
                  a == null ? void 0 : a.wrapper,
                  (d = n.classNames) == null ? void 0 : d.wrapper
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
q.displayName = "CheckboxGroup";
const A = w(
  ({
    length: l = 6,
    label: e = `${l} digits OTP`,
    labelClasses: a,
    containerClasses: b,
    ...p
  }, u) => /* @__PURE__ */ r.jsxs("div", { ref: u, className: o("flex flex-col", b), children: [
    e && /* @__PURE__ */ r.jsx("p", { className: o("text-default-500 text-small mb-2", a), children: e }),
    /* @__PURE__ */ r.jsx(T, { length: l, ...p })
  ] })
);
A.displayName = "InputOtp";
const K = w(
  ({
    variant: l = "bordered",
    color: e = "default",
    size: a = "md",
    radius: b = "md",
    labelPlacement: p = "inside",
    fullWidth: u = !0,
    isClearable: x = !1,
    isRequired: c = !1,
    isReadOnly: t = !1,
    isDisabled: n = !1,
    // Custom props
    containerClasses: f,
    customValidation: d,
    // Passthrough props
    validate: N,
    type: i,
    ...j
  }, m) => {
    const [s, y] = O(i || "text"), G = (I) => {
      if (d) {
        const h = d(I);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(I) : !0;
    }, k = () => {
      if (i === "password")
        return /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "focus:outline-none opacity-60",
            type: "button",
            onClick: () => y(s === "password" ? "text" : "password"),
            children: s === "password" ? /* @__PURE__ */ r.jsx(M, { className: "pointer-events-none", size: 20 }) : /* @__PURE__ */ r.jsx(P, { className: "pointer-events-none", size: 20 })
          }
        );
      if (i === "email")
        return /* @__PURE__ */ r.jsx(V, { className: "pointer-events-none opacity-60", size: 20 });
    }, R = "w-full", v = {
      ...j.classNames,
      inputWrapper: o({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-white h-11 dark:bg-background group-data-[focus=true]:bg-content1": l === "bordered"
      })
    };
    return /* @__PURE__ */ r.jsx("div", { className: o(R, f), children: /* @__PURE__ */ r.jsx(
      L,
      {
        ref: m,
        variant: l,
        color: e,
        size: a,
        radius: b,
        labelPlacement: p,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: t,
        isDisabled: n,
        validate: G,
        classNames: v,
        endContent: k(),
        type: s,
        ...j
      }
    ) });
  }
);
export {
  X as Checkbox,
  q as CheckboxGroup,
  K as Input,
  A as InputOtp,
  W as RadioGroup
};
