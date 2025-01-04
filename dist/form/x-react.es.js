/* empty css                */
import { j as o } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as w, useState as N, useEffect as L } from "react";
import { RadioGroup as T, Radio as M, CheckboxGroup as E, Checkbox as P, InputOtp as V, Input as W, Textarea as K, Switch as A, Select as R, SelectItem as G } from "@nextui-org/react";
import { Checkbox as ce } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { IconEye as H, IconEyeOff as U } from "@tabler/icons-react";
import "next-themes";
import { u as q } from "../useInfiniteScroll-CU_5Rd-q.js";
import "clsx";
const z = w(
  ({
    items: a,
    groupClasses: r,
    itemClasses: e,
    label: u = "Select an option",
    defaultValue: d,
    ...l
  }, c) => {
    const p = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, s = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ o.jsx(
      T,
      {
        ref: c,
        label: u,
        defaultValue: d,
        ...l,
        classNames: {
          base: n(p.base, r == null ? void 0 : r.base),
          label: n(p.label, r == null ? void 0 : r.label)
        },
        children: a.map((t) => {
          var f, b, h;
          return /* @__PURE__ */ o.jsx(
            M,
            {
              ...t,
              classNames: {
                base: n(
                  s.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: n(
                  s.label,
                  e == null ? void 0 : e.label,
                  (f = t.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  s.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (b = t.classNames) == null ? void 0 : b.wrapper
                ),
                control: n(
                  s.control,
                  e == null ? void 0 : e.control,
                  (h = t.classNames) == null ? void 0 : h.control
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
z.displayName = "RadioGroup";
const B = w(
  ({
    items: a,
    groupClasses: r,
    itemClasses: e,
    label: u = "Select options",
    defaultValue: d,
    ...l
  }, c) => {
    const p = {
      base: "w-full",
      label: "text-medium font-semibold"
    }, s = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ o.jsx(
      E,
      {
        ref: c,
        label: u,
        defaultValue: d,
        ...l,
        classNames: {
          base: n(p.base, r == null ? void 0 : r.base),
          label: n(p.label, r == null ? void 0 : r.label)
        },
        children: a.map((t) => {
          var f, b;
          return /* @__PURE__ */ o.jsx(
            P,
            {
              ...t,
              classNames: {
                base: n(
                  s.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: n(
                  s.label,
                  e == null ? void 0 : e.label,
                  (f = t.classNames) == null ? void 0 : f.label
                ),
                wrapper: n(
                  s.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (b = t.classNames) == null ? void 0 : b.wrapper
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
    length: a = 6,
    label: r = `${a} digits OTP`,
    labelClasses: e,
    containerClasses: u,
    ...d
  }, l) => /* @__PURE__ */ o.jsxs("div", { ref: l, className: n("flex flex-col", u), children: [
    r && /* @__PURE__ */ o.jsx("p", { className: n("text-default-500 text-small mb-2", e), children: r }),
    /* @__PURE__ */ o.jsx(V, { length: a, ...d })
  ] })
);
D.displayName = "InputOtp";
const F = w(
  ({
    variant: a = "bordered",
    color: r = "default",
    size: e = "md",
    radius: u = "md",
    labelPlacement: d = "inside",
    fullWidth: l = !0,
    isClearable: c = !1,
    isRequired: p = !1,
    isReadOnly: s = !1,
    isDisabled: t = !1,
    containerClasses: f,
    customValidation: b,
    validate: h,
    type: i,
    ...x
  }, I) => {
    const [g, S] = N(i), v = (y) => {
      if (b) {
        const O = b(y);
        if (typeof O == "string")
          return O;
        if (O)
          return "Validation failed";
      }
      return (h == null ? void 0 : h(y)) ?? !0;
    }, m = i === "password" ? /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => S(g === "password" ? "text" : "password"),
        children: g === "password" ? /* @__PURE__ */ o.jsx(H, { className: "pointer-events-none" }) : /* @__PURE__ */ o.jsx(U, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: j, ...$ } = x, k = () => {
      switch (a) {
        case "bordered":
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "group-data-[focus=true]:bg-content1",
            "h-12"
          ].join(" ");
        case "flat":
          return [
            "border-none",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:bg-default-100",
            "h-12"
          ].join(" ");
        case "faded":
          return [
            "border-1",
            "border-transparent",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
        case "underlined":
          return [
            "relative",
            "border-b-1",
            "rounded-none",
            "bg-transparent",
            "border-default",
            "h-12",
            // Underline effect
            "after:bg-outline",
            // Hover
            "data-[hover=true]:after:scale-x-100",
            "data-[hover=true]:after:bg-outline",
            // Focus
            "group-data-[focus=true]:after:scale-x-100",
            "group-data-[focus=true]:after:bg-outline"
          ].join(" ");
        default:
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
      }
    };
    return /* @__PURE__ */ o.jsx("div", { className: n("w-full", f), children: /* @__PURE__ */ o.jsx(
      W,
      {
        ref: I,
        variant: a,
        color: r,
        size: e,
        radius: u,
        labelPlacement: d,
        fullWidth: l,
        isClearable: c,
        isRequired: p,
        isReadOnly: s,
        isDisabled: t,
        validate: v,
        classNames: {
          ...j,
          inputWrapper: n(k(), j == null ? void 0 : j.inputWrapper)
        },
        endContent: m,
        type: g,
        ...$
      }
    ) });
  }
);
F.displayName = "Input";
const J = w(
  ({
    variant: a = "bordered",
    color: r = "default",
    size: e = "md",
    radius: u = "md",
    labelPlacement: d = "inside",
    fullWidth: l = !0,
    isRequired: c = !1,
    isReadOnly: p = !1,
    isDisabled: s = !1,
    containerClasses: t,
    width: f,
    height: b,
    style: h,
    customValidation: i,
    validate: x,
    ...I
  }, g) => {
    const S = {
      width: typeof f == "number" ? `${f}px` : f,
      height: typeof b == "number" ? `${b}px` : b,
      ...h
    }, v = (k) => {
      if (i) {
        const y = i(k);
        if (typeof y == "string")
          return y;
        if (y === !1)
          return "Validation failed";
      }
      return (x == null ? void 0 : x(k)) ?? !0;
    }, { classNames: m, ...j } = I, $ = () => {
      switch (a) {
        case "bordered":
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "group-data-[focus=true]:bg-content1",
            "h-12"
          ].join(" ");
        case "flat":
          return [
            "border-none",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:bg-default-100",
            "h-12"
          ].join(" ");
        case "faded":
          return [
            "border-1",
            "border-transparent",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
        case "underlined":
          return [
            "relative",
            "border-b-1",
            "rounded-none",
            "bg-transparent",
            "border-default",
            // Underline effect
            "after:bg-outline",
            // Hover
            "data-[hover=true]:after:scale-x-100",
            "data-[hover=true]:after:bg-outline",
            // Focus
            "group-data-[focus=true]:after:scale-x-100",
            "group-data-[focus=true]:after:bg-outline"
          ].join(" ");
        default:
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
      }
    };
    return /* @__PURE__ */ o.jsx("div", { className: n("w-full", t), children: /* @__PURE__ */ o.jsx(
      K,
      {
        ref: g,
        variant: a,
        color: r,
        size: e,
        radius: u,
        labelPlacement: d,
        fullWidth: l,
        isRequired: c,
        isReadOnly: p,
        isDisabled: s,
        validate: v,
        style: S,
        classNames: {
          ...m,
          inputWrapper: n($(), m == null ? void 0 : m.inputWrapper),
          input: n("text-base", m == null ? void 0 : m.input)
        },
        ...j
      }
    ) });
  }
);
J.displayName = "Textarea";
const Q = w(
  ({ width: a, height: r, style: e, ...u }, d) => {
    const l = {
      width: typeof a == "number" ? `${a}px` : a,
      height: typeof r == "number" ? `${r}px` : r,
      ...e
    };
    return /* @__PURE__ */ o.jsx(A, { ref: d, style: l, ...u });
  }
);
Q.displayName = "Switch";
const X = w(
  ({
    // Options
    options: a = [],
    value: r,
    defaultValue: e,
    classNames: u,
    ...d
  }, l) => /* @__PURE__ */ o.jsx(
    R,
    {
      ref: l,
      classNames: {
        base: "max-w-xs",
        trigger: "h-10",
        value: "text-small",
        ...u
      },
      selectedKeys: r,
      defaultSelectedKeys: e,
      ...d,
      children: a.map((c) => /* @__PURE__ */ o.jsx(
        G,
        {
          description: c.description,
          startContent: c.icon,
          className: "text-small",
          children: c.label
        },
        c.key
      ))
    }
  )
);
X.displayName = "Select";
function Y({
  fetchFunction: a,
  fetchDelay: r = 0,
  limit: e = 10
}) {
  const [u, d] = N([]), [l, c] = N(!0), [p, s] = N(!1), [t, f] = N(0), b = async (i) => {
    try {
      s(!0), t > 0 && await new Promise((g) => setTimeout(g, r));
      const { items: x, hasMore: I } = await a(
        i,
        e
      );
      c(I), d((g) => [...g, ...x]);
    } catch (x) {
      console.error("There was an error with the fetch operation:", x);
    } finally {
      s(!1);
    }
  };
  return L(() => {
    b(t);
  }, []), {
    items: u,
    hasMore: l,
    isLoading: p,
    onLoadMore: () => {
      const i = t + e;
      f(i), b(i);
    }
  };
}
function ue({
  fetchFunction: a,
  fetchDelay: r = 0,
  limit: e = 10,
  className: u = "max-w-xs",
  renderItem: d,
  getItemKey: l,
  selectionMode: c = "single"
}) {
  const [p, s] = N(!1), { items: t, hasMore: f, isLoading: b, onLoadMore: h } = Y({
    fetchFunction: a,
    fetchDelay: r,
    limit: e
  }), [, i] = q({
    hasMore: f,
    isEnabled: p,
    shouldUseLoader: !1,
    onLoadMore: h
  });
  return /* @__PURE__ */ o.jsx(
    R,
    {
      className: u,
      isLoading: b,
      items: t,
      scrollRef: i,
      selectionMode: c,
      onOpenChange: s,
      children: (x) => /* @__PURE__ */ o.jsx(G, { children: d(x) }, l(x))
    }
  );
}
export {
  ce as Checkbox,
  B as CheckboxGroup,
  ue as InfiniteSelect,
  F as Input,
  D as InputOtp,
  z as RadioGroup,
  X as Select,
  Q as Switch,
  J as Textarea
};
