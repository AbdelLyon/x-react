/* empty css                */
import { j as c } from "../jsx-runtime-Dx-03ztt.js";
import * as N from "react";
import { useState as H, useEffect as z, useRef as $ } from "react";
import { cn as m } from "../utils/x-react.es.js";
import { Table as _, TableHeader as C, TableColumn as D, Skeleton as I, TableBody as B, TableRow as G, TableCell as L } from "@nextui-org/react";
import { IconChevronUp as U, IconChevronDown as F } from "@tabler/icons-react";
const W = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [a, r] = H(/* @__PURE__ */ new Set()), [o, d] = H(!1);
  return z(() => {
    d(a.size === e.length);
  }, [a, e]), {
    selectedRows: a,
    allRowsSelected: o,
    toggleRowSelection: (n) => {
      r((f) => {
        const u = new Set(f);
        return u.has(n) ? u.delete(n) : u.add(n), t == null || t(Array.from(u)), u;
      });
    },
    toggleAllRowsSelection: (n) => {
      const f = n ? new Set(e) : /* @__PURE__ */ new Set();
      r(f), t == null || t(Array.from(f));
    }
  };
}, q = ({
  onSortChange: e
}) => {
  const [t, a] = H({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (o, d) => {
    a({ key: o, direction: d }), e == null || e(o, d);
  } };
}, J = (e) => ({
  ...W(e),
  ...q(e)
}), O = {
  bordered: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4",
    tr: "py-4 border-b border-default last:border-b-0 hover:bg-content2"
  },
  striped: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4",
    tr: "py-4 even:bg-content2"
  },
  unstyled: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4",
    tr: "py-4 hover:bg-content2"
  }
}, K = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: a = !0,
  variant: r = "unstyled",
  className: o
}) => {
  const d = O[r], s = a ? e + 1 : e;
  return /* @__PURE__ */ c.jsxs(_, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ c.jsx(C, { className: m(d.thead), children: Array(s).fill(null).map((l, n) => /* @__PURE__ */ c.jsx(D, { className: m(d.th), children: n === 0 && a ? /* @__PURE__ */ c.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ c.jsx(I, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ c.jsx(B, { children: Array(t).fill(null).map((l, n) => /* @__PURE__ */ c.jsx(G, { className: m(d.tr), children: Array(s).fill(null).map((f, u) => /* @__PURE__ */ c.jsx(L, { children: u === 0 && a ? /* @__PURE__ */ c.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ c.jsx(I, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, u)) }, n)) })
  ] });
};
var M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new WeakMap(), V = 0, Q = void 0;
function X(e) {
  return e ? (k.has(e) || (V += 1, k.set(e, V.toString())), k.get(e)) : "0";
}
function Y(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? X(e.root) : e[t]}`).toString();
}
function Z(e) {
  const t = Y(e);
  let a = M.get(t);
  if (!a) {
    const r = /* @__PURE__ */ new Map();
    let o;
    const d = new IntersectionObserver((s) => {
      s.forEach((l) => {
        var n;
        const f = l.isIntersecting && o.some((u) => l.intersectionRatio >= u);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = f), (n = r.get(l.target)) == null || n.forEach((u) => {
          u(f, l);
        });
      });
    }, e);
    o = d.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
      id: t,
      observer: d,
      elements: r
    }, M.set(t, a);
  }
  return a;
}
function P(e, t, a = {}, r = Q) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const n = e.getBoundingClientRect();
    return t(r, {
      isIntersecting: r,
      target: e,
      intersectionRatio: typeof a.threshold == "number" ? a.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: o, observer: d, elements: s } = Z(a), l = s.get(e) || [];
  return s.has(e) || s.set(e, l), l.push(t), d.observe(e), function() {
    l.splice(l.indexOf(t), 1), l.length === 0 && (s.delete(e), d.unobserve(e)), s.size === 0 && (d.disconnect(), M.delete(o));
  };
}
function ee({
  threshold: e,
  delay: t,
  trackVisibility: a,
  rootMargin: r,
  root: o,
  triggerOnce: d,
  skip: s,
  initialInView: l,
  fallbackInView: n,
  onChange: f
} = {}) {
  var u;
  const [h, A] = N.useState(null), v = N.useRef(f), [x, S] = N.useState({
    inView: !!l,
    entry: void 0
  });
  v.current = f, N.useEffect(
    () => {
      if (s || !h) return;
      let y;
      return y = P(
        h,
        (j, i) => {
          S({
            inView: j,
            entry: i
          }), v.current && v.current(j, i), i.isIntersecting && d && y && (y(), y = void 0);
        },
        {
          root: o,
          rootMargin: r,
          threshold: e,
          // @ts-ignore
          trackVisibility: a,
          // @ts-ignore
          delay: t
        },
        n
      ), () => {
        y && y();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      h,
      o,
      r,
      d,
      s,
      a,
      n,
      t
    ]
  );
  const R = (u = x.entry) == null ? void 0 : u.target, T = N.useRef(void 0);
  !h && R && !d && !s && T.current !== R && (T.current = R, S({
    inView: !!l,
    entry: void 0
  }));
  const b = [A, x.inView, x.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const te = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", se = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", re = (e, t, a) => {
  const r = a.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(t);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in t) {
    const o = t[r.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
};
function ue({
  rows: e,
  columns: t,
  onSortChange: a,
  onRowsScrollEnd: r,
  variant: o = "unstyled",
  isLoading: d = !1,
  childrenProps: s,
  ...l
}) {
  var b, y, j;
  const { sortConfiguration: n, updateSort: f } = J({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: a
  }), u = $(null), {
    ref: h,
    inView: A,
    entry: v
  } = ee({ threshold: 0.5, rootMargin: "100px" }), x = (i) => {
    u.current = i, h(i);
  };
  if (z(() => {
    if (A && (v == null ? void 0 : v.target) instanceof HTMLDivElement && r) {
      const g = v.target, w = {
        visibleRows: Math.ceil(g.clientHeight / 48),
        visibleStartIndex: Math.floor(g.scrollTop / 48),
        visibleEndIndex: Math.min(
          Math.floor((g.scrollTop + g.clientHeight) / 48),
          e.length
        )
      }, E = new UIEvent("scroll");
      E.target = g, r({ params: w, scrollEvent: E, details: {
        reason: "scroll"
      } });
    }
  }, [A, v, r, e.length]), d)
    return /* @__PURE__ */ c.jsx(
      K,
      {
        columns: t.length,
        checkboxSelection: l.showSelectionCheckboxes,
        variant: o,
        rows: e.length
      }
    );
  const S = O[o], R = [
    ...t.map((i, g) => ({
      ...i,
      key: typeof i.field == "string" ? String(i.field) : String(g),
      label: i.header
    }))
  ], T = (i) => {
    const g = t.find(
      (w) => typeof w.field == "string" && w.field.length > 0 && String(w.field) === i.key
    ), p = g == null ? void 0 : g.field;
    p != null && p !== "actions" && f(
      p,
      n.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ c.jsx("div", { ref: x, children: /* @__PURE__ */ c.jsxs(
    _,
    {
      "aria-label": "data-grid",
      ...l,
      classNames: {
        ...l.classNames,
        th: m(S.th, (b = l.classNames) == null ? void 0 : b.th),
        tr: m(S.tr, (y = l.classNames) == null ? void 0 : y.tr),
        base: m("max-h-[600px] overflow-auto", (j = l.classNames) == null ? void 0 : j.base)
      },
      children: [
        /* @__PURE__ */ c.jsx(
          C,
          {
            columns: R,
            ...s == null ? void 0 : s.tableHeaderProps,
            children: (i) => /* @__PURE__ */ c.jsx(
              D,
              {
                "aria-label": te(i),
                ...s == null ? void 0 : s.tableColumnProps,
                children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 ", children: [
                  i.label,
                  i.sortable !== !1 && /* @__PURE__ */ c.jsxs(
                    "div",
                    {
                      className: m("relative size-4 cursor-pointer"),
                      onClick: () => T(i),
                      role: "button",
                      "aria-label": se(i.label),
                      children: [
                        /* @__PURE__ */ c.jsx(
                          U,
                          {
                            size: 16,
                            className: m(
                              "absolute -top-1",
                              n.key === i.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ c.jsx(
                          F,
                          {
                            size: 16,
                            className: m(
                              "absolute top-1",
                              n.key === i.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              i.key
            )
          }
        ),
        /* @__PURE__ */ c.jsx(B, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (i) => /* @__PURE__ */ c.jsx(G, { ...s == null ? void 0 : s.tableRowProps, children: (g) => /* @__PURE__ */ c.jsx(L, { ...s == null ? void 0 : s.tableCellProps, children: re(g, i, t) }) }, i.id) })
      ]
    }
  ) });
}
export {
  ue as DataGrid
};
