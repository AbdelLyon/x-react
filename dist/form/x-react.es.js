import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as i, useState as v } from "react";
import { RadioGroup as O, Radio as $, CheckboxGroup as z, Checkbox as E, InputOtp as S, Input as T } from "@nextui-org/react";
import { Checkbox as U } from "@nextui-org/react";
import { cn as o } from "../utils/x-react.es.js";
import { IconEye as L, IconEyeOff as M, IconMail as P } from "@tabler/icons-react";
const V = i(
  ({
    items: l,
    groupClasses: a,
    itemClasses: e,
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
      O,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: o(c.base, a == null ? void 0 : a.base),
          label: o(c.label, a == null ? void 0 : a.label)
        },
        children: l.map((n) => {
          var f, d, N;
          return /* @__PURE__ */ r.jsx(
            $,
            {
              ...n,
              classNames: {
                base: o(
                  t.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: o(
                  t.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
                  t.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (d = n.classNames) == null ? void 0 : d.wrapper
                ),
                control: o(
                  t.control,
                  e == null ? void 0 : e.control,
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
V.displayName = "RadioGroup";
const W = i(
  ({
    items: l,
    groupClasses: a,
    itemClasses: e,
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
      z,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: o(c.base, a == null ? void 0 : a.base),
          label: o(c.label, a == null ? void 0 : a.label)
        },
        children: l.map((n) => {
          var f, d;
          return /* @__PURE__ */ r.jsx(
            E,
            {
              ...n,
              classNames: {
                base: o(
                  t.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: o(
                  t.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: o(
                  t.wrapper,
                  e == null ? void 0 : e.wrapper,
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
W.displayName = "CheckboxGroup";
const q = i(
  ({
    length: l = 6,
    label: a = `${l} digits OTP`,
    labelClasses: e,
    containerClasses: b,
    ...p
  }, u) => /* @__PURE__ */ r.jsxs("div", { ref: u, className: o("flex flex-col", b), children: [
    a && /* @__PURE__ */ r.jsx("p", { className: o("text-default-500 text-small mb-2", e), children: a }),
    /* @__PURE__ */ r.jsx(S, { length: l, ...p })
  ] })
);
q.displayName = "InputOtp";
const J = i(
  ({
    variant: l = "bordered",
    color: a = "default",
    size: e = "md",
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
    ...w
  }, I) => {
    const [j, s] = v(w.type || "text"), G = (y) => {
      if (d) {
        const h = d(y);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(y) : !0;
    }, k = () => {
      if (w.type === "password")
        return /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "focus:outline-none opacity-70",
            type: "button",
            onClick: () => s(j === "password" ? "text" : "password"),
            children: j === "password" ? /* @__PURE__ */ r.jsx(L, { className: "pointer-events-none", size: 18 }) : /* @__PURE__ */ r.jsx(M, { className: "pointer-events-none", size: 18 })
          }
        );
      if (w.type === "email")
        return /* @__PURE__ */ r.jsx(P, { className: "pointer-events-none", size: 18 });
    }, m = "w-full", R = {
      inputWrapper: o({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1": l === "bordered"
      })
    };
    return /* @__PURE__ */ r.jsx("div", { className: o(m, f), children: /* @__PURE__ */ r.jsx(
      T,
      {
        ref: I,
        variant: l,
        color: a,
        size: e,
        radius: b,
        labelPlacement: p,
        fullWidth: u,
        isClearable: x,
        isRequired: c,
        isReadOnly: t,
        isDisabled: n,
        validate: G,
        classNames: R,
        endContent: k(),
        type: j,
        ...w
      }
    ) });
  }
);
export {
  U as Checkbox,
  W as CheckboxGroup,
  J as Input,
  q as InputOtp,
  V as RadioGroup
};
