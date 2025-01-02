/* empty css                */
import { j as o } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as y, useState as I, useEffect as T } from "react";
import { RadioGroup as v, Radio as M, CheckboxGroup as E, Checkbox as P, InputOtp as W, Input as V, Textarea as K, Switch as A, Select as G, SelectItem as L } from "@nextui-org/react";
import { Checkbox as ue } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { IconEye as H, IconEyeOff as U } from "@tabler/icons-react";
import "next-themes";
import { u as q } from "../useInfiniteScroll-CU_5Rd-q.js";
import "clsx";
const z = y(
  ({
    items: a,
    groupClasses: r,
    itemClasses: e,
    label: l = "Select an option",
    defaultValue: c,
    ...d
  }, u) => {
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
      v,
      {
        ref: u,
        label: l,
        defaultValue: c,
        ...d,
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
const B = y(
  ({
    items: a,
    groupClasses: r,
    itemClasses: e,
    label: l = "Select options",
    defaultValue: c,
    ...d
  }, u) => {
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
        ref: u,
        label: l,
        defaultValue: c,
        ...d,
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
const D = y(
  ({
    length: a = 6,
    label: r = `${a} digits OTP`,
    labelClasses: e,
    containerClasses: l,
    ...c
  }, d) => /* @__PURE__ */ o.jsxs("div", { ref: d, className: n("flex flex-col", l), children: [
    r && /* @__PURE__ */ o.jsx("p", { className: n("text-default-500 text-small mb-2", e), children: r }),
    /* @__PURE__ */ o.jsx(W, { length: a, ...c })
  ] })
);
D.displayName = "InputOtp";
const F = y(
  ({
    variant: a = "bordered",
    color: r = "default",
    size: e = "md",
    radius: l = "md",
    labelPlacement: c = "inside",
    fullWidth: d = !0,
    isClearable: u = !1,
    isRequired: p = !1,
    isReadOnly: s = !1,
    isDisabled: t = !1,
    containerClasses: f,
    customValidation: b,
    validate: h,
    type: i,
    ...x
  }, j) => {
    const [m, k] = I(i), $ = (R) => {
      if (b) {
        const O = b(R);
        if (typeof O == "string")
          return O;
        if (O)
          return "Validation failed";
      }
      return (h == null ? void 0 : h(R)) ?? !0;
    }, w = i === "password" ? /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => k(m === "password" ? "text" : "password"),
        children: m === "password" ? /* @__PURE__ */ o.jsx(H, { className: "pointer-events-none" }) : /* @__PURE__ */ o.jsx(U, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: N, ...g } = x, S = () => {
      switch (a) {
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
    return /* @__PURE__ */ o.jsx("div", { className: n("w-full", f), children: /* @__PURE__ */ o.jsx(
      V,
      {
        ref: j,
        variant: a,
        color: r,
        size: e,
        radius: l,
        labelPlacement: c,
        fullWidth: d,
        isClearable: u,
        isRequired: p,
        isReadOnly: s,
        isDisabled: t,
        validate: $,
        classNames: {
          ...N,
          inputWrapper: n(S(), N == null ? void 0 : N.inputWrapper)
        },
        endContent: w,
        type: m,
        ...g
      }
    ) });
  }
);
F.displayName = "Input";
const J = y(
  ({
    variant: a = "bordered",
    color: r = "default",
    size: e = "md",
    radius: l = "md",
    labelPlacement: c = "inside",
    fullWidth: d = !0,
    isRequired: u = !1,
    isReadOnly: p = !1,
    isDisabled: s = !1,
    containerClasses: t,
    width: f,
    height: b,
    style: h,
    customValidation: i,
    validate: x,
    ...j
  }, m) => {
    const k = {
      width: typeof f == "number" ? `${f}px` : f,
      height: typeof b == "number" ? `${b}px` : b,
      ...h
    }, $ = (g) => {
      if (i) {
        const S = i(g);
        if (typeof S == "string")
          return S;
        if (S === !1)
          return "Validation failed";
      }
      return (x == null ? void 0 : x(g)) ?? !0;
    }, { classNames: w, ...N } = j;
    return /* @__PURE__ */ o.jsx("div", { className: n("w-full", t), children: /* @__PURE__ */ o.jsx(
      K,
      {
        ref: m,
        variant: a,
        color: r,
        size: e,
        radius: l,
        labelPlacement: c,
        fullWidth: d,
        isRequired: u,
        isReadOnly: p,
        isDisabled: s,
        validate: $,
        style: k,
        classNames: {
          ...w,
          inputWrapper: n(
            "border-1 bg-white dark:bg-background",
            {
              "data-[hover=true]:border-outline group-data-[focus=true]:border-outline group-data-[focus=true]:bg-content1": a === "bordered"
            },
            w == null ? void 0 : w.inputWrapper
          ),
          input: n("text-base", w == null ? void 0 : w.input)
        },
        ...N
      }
    ) });
  }
);
J.displayName = "Textarea";
const Q = y(
  ({ width: a, height: r, style: e, ...l }, c) => {
    const d = {
      width: typeof a == "number" ? `${a}px` : a,
      height: typeof r == "number" ? `${r}px` : r,
      ...e
    };
    return /* @__PURE__ */ o.jsx(A, { ref: c, style: d, ...l });
  }
);
Q.displayName = "Switch";
const X = y(
  ({
    // Options
    options: a = [],
    value: r,
    defaultValue: e,
    classNames: l,
    ...c
  }, d) => /* @__PURE__ */ o.jsx(
    G,
    {
      ref: d,
      classNames: {
        base: "max-w-xs",
        trigger: "h-10",
        value: "text-small",
        ...l
      },
      selectedKeys: r,
      defaultSelectedKeys: e,
      ...c,
      children: a.map((u) => /* @__PURE__ */ o.jsx(
        L,
        {
          description: u.description,
          startContent: u.icon,
          className: "text-small",
          children: u.label
        },
        u.key
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
  const [l, c] = I([]), [d, u] = I(!0), [p, s] = I(!1), [t, f] = I(0), b = async (i) => {
    try {
      s(!0), t > 0 && await new Promise((m) => setTimeout(m, r));
      const { items: x, hasMore: j } = await a(
        i,
        e
      );
      u(j), c((m) => [...m, ...x]);
    } catch (x) {
      console.error("There was an error with the fetch operation:", x);
    } finally {
      s(!1);
    }
  };
  return T(() => {
    b(t);
  }, []), {
    items: l,
    hasMore: d,
    isLoading: p,
    onLoadMore: () => {
      const i = t + e;
      f(i), b(i);
    }
  };
}
function le({
  fetchFunction: a,
  fetchDelay: r = 0,
  limit: e = 10,
  className: l = "max-w-xs",
  renderItem: c,
  getItemKey: d,
  selectionMode: u = "single"
}) {
  const [p, s] = I(!1), { items: t, hasMore: f, isLoading: b, onLoadMore: h } = Y({
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
    G,
    {
      className: l,
      isLoading: b,
      items: t,
      scrollRef: i,
      selectionMode: u,
      onOpenChange: s,
      children: (x) => /* @__PURE__ */ o.jsx(L, { children: c(x) }, d(x))
    }
  );
}
export {
  ue as Checkbox,
  B as CheckboxGroup,
  le as InfiniteSelect,
  F as Input,
  D as InputOtp,
  z as RadioGroup,
  X as Select,
  Q as Switch,
  J as Textarea
};
