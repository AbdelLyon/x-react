import "../image/image.es.js";
import { jsx as n, jsxs as R } from "react/jsx-runtime";
import { forwardRef as m, useState as I, useEffect as T } from "react";
import { RadioGroup as M, Radio as E, CheckboxGroup as P, Checkbox as V, InputOtp as W, Input as K, Textarea as A, Switch as H, Select as G, SelectItem as L } from "@nextui-org/react";
import { Checkbox as le } from "@nextui-org/react";
import { cn as o } from "../utils/utils.es.js";
import { IconEye as U, IconEyeOff as q } from "@tabler/icons-react";
import { u as z } from "../useInfiniteScroll-CQ77YrMB.js";
const B = m(
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
    }, b = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ n(
      M,
      {
        ref: c,
        label: u,
        defaultValue: d,
        ...l,
        classNames: {
          base: o(p.base, r == null ? void 0 : r.base),
          label: o(p.label, r == null ? void 0 : r.label)
        },
        children: a.map((t) => {
          var s, f, g;
          return /* @__PURE__ */ n(
            E,
            {
              ...t,
              classNames: {
                base: o(
                  b.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: o(
                  b.label,
                  e == null ? void 0 : e.label,
                  (s = t.classNames) == null ? void 0 : s.label
                ),
                wrapper: o(
                  b.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (f = t.classNames) == null ? void 0 : f.wrapper
                ),
                control: o(
                  b.control,
                  e == null ? void 0 : e.control,
                  (g = t.classNames) == null ? void 0 : g.control
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
B.displayName = "RadioGroup";
const D = m(
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
    }, b = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ n(
      P,
      {
        ref: c,
        label: u,
        defaultValue: d,
        ...l,
        classNames: {
          base: o(p.base, r == null ? void 0 : r.base),
          label: o(p.label, r == null ? void 0 : r.label)
        },
        children: a.map((t) => {
          var s, f;
          return /* @__PURE__ */ n(
            V,
            {
              ...t,
              classNames: {
                base: o(
                  b.base,
                  e == null ? void 0 : e.base,
                  t.className
                ),
                label: o(
                  b.label,
                  e == null ? void 0 : e.label,
                  (s = t.classNames) == null ? void 0 : s.label
                ),
                wrapper: o(
                  b.wrapper,
                  e == null ? void 0 : e.wrapper,
                  (f = t.classNames) == null ? void 0 : f.wrapper
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
D.displayName = "CheckboxGroup";
const F = m(
  ({
    length: a = 6,
    label: r = `${a} digits OTP`,
    labelClasses: e,
    containerClasses: u,
    ...d
  }, l) => /* @__PURE__ */ R("div", { ref: l, className: o("flex flex-col", u), children: [
    r && /* @__PURE__ */ n("p", { className: o("text-default-500 text-small mb-2", e), children: r }),
    /* @__PURE__ */ n(W, { length: a, ...d })
  ] })
);
F.displayName = "InputOtp";
const J = m(
  ({
    variant: a = "bordered",
    color: r = "default",
    size: e = "md",
    radius: u = "md",
    labelPlacement: d = "inside",
    fullWidth: l = !0,
    isClearable: c = !1,
    isRequired: p = !1,
    isReadOnly: b = !1,
    isDisabled: t = !1,
    containerClasses: s,
    customValidation: f,
    validate: g,
    type: i,
    ...h
  }, k) => {
    const [w, v] = I(i), j = (N) => {
      if (f) {
        const O = f(N);
        if (typeof O == "string")
          return O;
        if (O)
          return "Validation failed";
      }
      return (g == null ? void 0 : g(N)) ?? !0;
    }, x = i === "password" ? /* @__PURE__ */ n(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => v(w === "password" ? "text" : "password"),
        children: w === "password" ? /* @__PURE__ */ n(U, { className: "pointer-events-none" }) : /* @__PURE__ */ n(q, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: y, ...$ } = h, S = () => {
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
    return /* @__PURE__ */ n("div", { className: o("w-full", s), children: /* @__PURE__ */ n(
      K,
      {
        ref: k,
        variant: a,
        color: r,
        size: e,
        radius: u,
        labelPlacement: d,
        fullWidth: l,
        isClearable: c,
        isRequired: p,
        isReadOnly: b,
        isDisabled: t,
        validate: j,
        classNames: {
          ...y,
          inputWrapper: o(S(), y == null ? void 0 : y.inputWrapper)
        },
        endContent: x,
        type: w,
        ...$
      }
    ) });
  }
);
J.displayName = "Input";
const Q = m(
  ({
    variant: a = "bordered",
    color: r = "default",
    size: e = "md",
    radius: u = "md",
    labelPlacement: d = "inside",
    fullWidth: l = !0,
    isRequired: c = !1,
    isReadOnly: p = !1,
    isDisabled: b = !1,
    containerClasses: t,
    width: s,
    height: f,
    style: g,
    customValidation: i,
    validate: h,
    ...k
  }, w) => {
    const v = {
      width: typeof s == "number" ? `${s}px` : s,
      height: typeof f == "number" ? `${f}px` : f,
      ...g
    }, j = (S) => {
      if (i) {
        const N = i(S);
        if (typeof N == "string")
          return N;
        if (N === !1)
          return "Validation failed";
      }
      return (h == null ? void 0 : h(S)) ?? !0;
    }, { classNames: x, ...y } = k, $ = () => {
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
    return /* @__PURE__ */ n("div", { className: o("w-full", t), children: /* @__PURE__ */ n(
      A,
      {
        ref: w,
        variant: a,
        color: r,
        size: e,
        radius: u,
        labelPlacement: d,
        fullWidth: l,
        isRequired: c,
        isReadOnly: p,
        isDisabled: b,
        validate: j,
        style: v,
        classNames: {
          ...x,
          inputWrapper: o($(), x == null ? void 0 : x.inputWrapper),
          input: o("text-base", x == null ? void 0 : x.input)
        },
        ...y
      }
    ) });
  }
);
Q.displayName = "Textarea";
const X = m(
  ({ width: a, height: r, style: e, ...u }, d) => {
    const l = {
      width: typeof a == "number" ? `${a}px` : a,
      height: typeof r == "number" ? `${r}px` : r,
      ...e
    };
    return /* @__PURE__ */ n(H, { ref: d, style: l, ...u });
  }
);
X.displayName = "Switch";
const Y = m(
  ({
    // Options
    options: a = [],
    value: r,
    defaultValue: e,
    classNames: u,
    ...d
  }, l) => /* @__PURE__ */ n(
    G,
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
      children: a.map((c) => /* @__PURE__ */ n(
        L,
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
Y.displayName = "Select";
function Z({
  fetchFunction: a,
  fetchDelay: r = 0,
  limit: e = 10
}) {
  const [u, d] = I([]), [l, c] = I(!0), [p, b] = I(!1), [t, s] = I(0), f = async (i) => {
    try {
      b(!0), t > 0 && await new Promise((w) => setTimeout(w, r));
      const { items: h, hasMore: k } = await a(
        i,
        e
      );
      c(k), d((w) => [...w, ...h]);
    } catch (h) {
      console.error("There was an error with the fetch operation:", h);
    } finally {
      b(!1);
    }
  };
  return T(() => {
    f(t);
  }, []), {
    items: u,
    hasMore: l,
    isLoading: p,
    onLoadMore: () => {
      const i = t + e;
      s(i), f(i);
    }
  };
}
function ne({
  fetchFunction: a,
  fetchDelay: r = 0,
  limit: e = 10,
  className: u = "max-w-xs",
  renderItem: d,
  getItemKey: l,
  selectionMode: c = "single"
}) {
  const [p, b] = I(!1), { items: t, hasMore: s, isLoading: f, onLoadMore: g } = Z({
    fetchFunction: a,
    fetchDelay: r,
    limit: e
  }), [, i] = z({
    hasMore: s,
    isEnabled: p,
    shouldUseLoader: !1,
    onLoadMore: g
  });
  return /* @__PURE__ */ n(
    G,
    {
      className: u,
      isLoading: f,
      items: t,
      scrollRef: i,
      selectionMode: c,
      onOpenChange: b,
      children: (h) => /* @__PURE__ */ n(L, { children: d(h) }, l(h))
    }
  );
}
export {
  le as Checkbox,
  D as CheckboxGroup,
  ne as InfiniteSelect,
  J as Input,
  F as InputOtp,
  B as RadioGroup,
  Y as Select,
  X as Switch,
  Q as Textarea
};
