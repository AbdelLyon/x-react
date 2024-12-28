/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import * as p from "react";
import { useState as T, useEffect as z, forwardRef as L } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as _, TableHeader as V, TableColumn as C, Skeleton as h, TableBody as D, TableRow as B, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as M, IconChevronDown as $ } from "@tabler/icons-react";
const H = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, a] = T(/* @__PURE__ */ new Set()), [o, u] = T(!1);
  return z(() => {
    u(r.size === e.length);
  }, [r, e]), {
    selectedRows: r,
    allRowsSelected: o,
    toggleRowSelection: (n) => {
      a((b) => {
        const c = new Set(b);
        return c.has(n) ? c.delete(n) : c.add(n), t == null || t(Array.from(c)), c;
      });
    },
    toggleAllRowsSelection: (n) => {
      const b = n ? new Set(e) : /* @__PURE__ */ new Set();
      a(b), t == null || t(Array.from(b));
    }
  };
}, F = ({
  onSortChange: e
}) => {
  const [t, r] = T({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (o, u) => {
    r({ key: o, direction: u }), e == null || e(o, u);
  } };
}, U = (e) => ({
  ...H(e),
  ...F(e)
}), G = {
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
}, W = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: r = !0,
  variant: a = "unstyled",
  className: o
}) => {
  const u = G[a], s = r ? e + 1 : e;
  return /* @__PURE__ */ l.jsxs(_, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ l.jsx(V, { className: y(u.thead), children: Array(s).fill(null).map((i, n) => /* @__PURE__ */ l.jsx(C, { className: y(u.th), children: n === 0 && r ? /* @__PURE__ */ l.jsx(h, { className: "size-4 rounded-md" }) : /* @__PURE__ */ l.jsx(h, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ l.jsx(D, { children: Array(t).fill(null).map((i, n) => /* @__PURE__ */ l.jsx(B, { className: y(u.tr), children: Array(s).fill(null).map((b, c) => /* @__PURE__ */ l.jsx(E, { children: c === 0 && r ? /* @__PURE__ */ l.jsx(h, { className: "size-4 rounded-md" }) : /* @__PURE__ */ l.jsx(h, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, n)) })
  ] });
};
var I = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new WeakMap(), k = 0, q = void 0;
function J(e) {
  return e ? (w.has(e) || (k += 1, w.set(e, k.toString())), w.get(e)) : "0";
}
function K(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? J(e.root) : e[t]}`).toString();
}
function Q(e) {
  const t = K(e);
  let r = I.get(t);
  if (!r) {
    const a = /* @__PURE__ */ new Map();
    let o;
    const u = new IntersectionObserver((s) => {
      s.forEach((i) => {
        var n;
        const b = i.isIntersecting && o.some((c) => i.intersectionRatio >= c);
        e.trackVisibility && typeof i.isVisible > "u" && (i.isVisible = b), (n = a.get(i.target)) == null || n.forEach((c) => {
          c(b, i);
        });
      });
    }, e);
    o = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: u,
      elements: a
    }, I.set(t, r);
  }
  return r;
}
function X(e, t, r = {}, a = q) {
  if (typeof window.IntersectionObserver > "u" && a !== void 0) {
    const n = e.getBoundingClientRect();
    return t(a, {
      isIntersecting: a,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: o, observer: u, elements: s } = Q(r), i = s.get(e) || [];
  return s.has(e) || s.set(e, i), i.push(t), u.observe(e), function() {
    i.splice(i.indexOf(t), 1), i.length === 0 && (s.delete(e), u.unobserve(e)), s.size === 0 && (u.disconnect(), I.delete(o));
  };
}
function Y({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: a,
  root: o,
  triggerOnce: u,
  skip: s,
  initialInView: i,
  fallbackInView: n,
  onChange: b
} = {}) {
  var c;
  const [v, N] = p.useState(null), j = p.useRef(b), [m, R] = p.useState({
    inView: !!i,
    entry: void 0
  });
  j.current = b, p.useEffect(
    () => {
      if (s || !v) return;
      let g;
      return g = X(
        v,
        (S, A) => {
          R({
            inView: S,
            entry: A
          }), j.current && j.current(S, A), A.isIntersecting && u && g && (g(), g = void 0);
        },
        {
          root: o,
          rootMargin: a,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        n
      ), () => {
        g && g();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      v,
      o,
      a,
      u,
      s,
      r,
      n,
      t
    ]
  );
  const x = (c = m.entry) == null ? void 0 : c.target, d = p.useRef(void 0);
  !v && x && !u && !s && d.current !== x && (d.current = x, R({
    inView: !!i,
    entry: void 0
  }));
  const f = [N, m.inView, m.entry];
  return f.ref = f[0], f.inView = f[1], f.entry = f[2], f;
}
const Z = (e, t) => {
  z(() => {
    e && t && t();
  }, [e, t]);
}, O = L(
  function(t, r) {
    return /* @__PURE__ */ l.jsx("div", { ref: r, children: /* @__PURE__ */ l.jsx(B, { ...t }) });
  }
);
O.displayName = "TRow";
const P = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", ee = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", te = (e, t, r) => {
  const a = r.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (a === void 0)
    return null;
  if (a.cell !== void 0)
    return a.cell(t);
  if (typeof a.field == "string" && a.field.length > 0 && a.field in t) {
    const o = t[a.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
};
function oe({
  rows: e,
  columns: t,
  onSortChange: r,
  variant: a = "unstyled",
  isLoading: o = !1,
  onRowsScrollEnd: u,
  childrenProps: s,
  ...i
}) {
  var R, x;
  const { sortConfiguration: n, updateSort: b } = U({
    rows: e,
    onSortChange: r
  }), { ref: c, inView: v } = Y();
  Z(v, u);
  const N = t.map((d, f) => ({
    ...d,
    key: typeof d.field == "string" ? String(d.field) : String(f),
    label: d.header
  })), j = (d) => {
    const f = t.find(
      (S) => typeof S.field == "string" && S.field.length > 0 && String(S.field) === d.key
    ), g = f == null ? void 0 : f.field;
    g != null && g !== "actions" && b(
      g,
      n.direction === "asc" ? "desc" : "asc"
    );
  };
  if (o)
    return /* @__PURE__ */ l.jsx(
      W,
      {
        columns: t.length,
        checkboxSelection: i.showSelectionCheckboxes,
        variant: a,
        rows: e.length
      }
    );
  const m = G[a];
  return /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsxs(
    _,
    {
      "aria-label": "data-grid",
      ...i,
      classNames: {
        ...i.classNames,
        th: y(m.th, (R = i.classNames) == null ? void 0 : R.th),
        tr: y(m.tr, (x = i.classNames) == null ? void 0 : x.tr)
      },
      children: [
        /* @__PURE__ */ l.jsx(
          V,
          {
            columns: N,
            ...s == null ? void 0 : s.tableHeaderProps,
            children: (d) => /* @__PURE__ */ l.jsx(
              C,
              {
                "aria-label": P(d),
                ...s == null ? void 0 : s.tableColumnProps,
                children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                  d.label,
                  d.sortable !== !1 && /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => j(d),
                      role: "button",
                      "aria-label": ee(d.label),
                      children: [
                        /* @__PURE__ */ l.jsx(
                          M,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              n.key === d.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ l.jsx(
                          $,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              n.key === d.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              d.key
            )
          }
        ),
        /* @__PURE__ */ l.jsx(D, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (d) => {
          const f = e.indexOf(d);
          return /* @__PURE__ */ l.jsx(
            O,
            {
              ...s == null ? void 0 : s.tableRowProps,
              ref: f === e.length - 1 ? c : void 0,
              children: (g) => /* @__PURE__ */ l.jsx(E, { ...s == null ? void 0 : s.tableCellProps, children: te(g, d, t) })
            },
            d.id
          );
        } })
      ]
    }
  ) });
}
export {
  oe as DataGrid
};
