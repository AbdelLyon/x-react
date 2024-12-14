import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as j, useState as v } from "react";
import { RadioGroup as O, Radio as $, CheckboxGroup as E, Checkbox as S, InputOtp as T, Input as L } from "@nextui-org/react";
import { Checkbox as U } from "@nextui-org/react";
import { cn as r } from "../utils/x-react.es.js";
import { IconEye as M, IconEyeOff as P, IconMail as V } from "@tabler/icons-react";
const W = j(
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
    return /* @__PURE__ */ o.jsx(
      O,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: r(c.base, a == null ? void 0 : a.base),
          label: r(c.label, a == null ? void 0 : a.label)
        },
        children: l.map((n) => {
          var f, d, N;
          return /* @__PURE__ */ o.jsx(
            $,
            {
              ...n,
              classNames: {
                base: r(
                  t.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: r(
                  t.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: r(
                  t.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (d = n.classNames) == null ? void 0 : d.wrapper
                ),
                control: r(
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
W.displayName = "RadioGroup";
const q = j(
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
    return /* @__PURE__ */ o.jsx(
      E,
      {
        ref: x,
        label: b,
        defaultValue: p,
        ...u,
        classNames: {
          base: r(c.base, a == null ? void 0 : a.base),
          label: r(c.label, a == null ? void 0 : a.label)
        },
        children: l.map((n) => {
          var f, d;
          return /* @__PURE__ */ o.jsx(
            S,
            {
              ...n,
              classNames: {
                base: r(
                  t.base,
                  e == null ? void 0 : e.base,
                  n.className
                ),
                label: r(
                  t.label,
                  e == null ? void 0 : e.label,
                  (f = n.classNames) == null ? void 0 : f.label
                ),
                wrapper: r(
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
q.displayName = "CheckboxGroup";
const z = j(
  ({
    length: l = 6,
    label: a = `${l} digits OTP`,
    labelClasses: e,
    containerClasses: b,
    ...p
  }, u) => /* @__PURE__ */ o.jsxs("div", { ref: u, className: r("flex flex-col", b), children: [
    a && /* @__PURE__ */ o.jsx("p", { className: r("text-default-500 text-small mb-2", e), children: a }),
    /* @__PURE__ */ o.jsx(T, { length: l, ...p })
  ] })
);
z.displayName = "InputOtp";
const J = j(
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
  }, y) => {
    const [i, G] = v(w.type || "text"), k = (I) => {
      if (d) {
        const h = d(I);
        if (typeof h == "string")
          return h;
        if (h === !1)
          return "Validation failed";
      }
      return N ? N(I) : !0;
    }, m = () => {
      if (w.type === "password")
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "focus:outline-none",
            type: "button",
            onClick: () => G(i === "password" ? "text" : "password"),
            children: i === "password" ? /* @__PURE__ */ o.jsx(M, { className: "pointer-events-none" }) : /* @__PURE__ */ o.jsx(P, { className: "pointer-events-none" })
          }
        );
      if (w.type === "email")
        return /* @__PURE__ */ o.jsx(V, { className: "pointer-events-none" });
    }, s = "w-full", R = {
      inputWrapper: r({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1": l === "bordered"
      })
    };
    return /* @__PURE__ */ o.jsx("div", { className: r(s, f), children: /* @__PURE__ */ o.jsx(
      L,
      {
        ref: y,
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
        validate: k,
        classNames: R,
        endContent: m(),
        ...w
      }
    ) });
  }
);
export {
  U as Checkbox,
  q as CheckboxGroup,
  J as Input,
  z as InputOtp,
  W as RadioGroup
};
