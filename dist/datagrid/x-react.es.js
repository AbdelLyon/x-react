/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import * as w from "react";
import { useState as N, useEffect as z } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as C, TableHeader as V, TableColumn as _, Skeleton as R, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [s, n] = N(/* @__PURE__ */ new Set()), [i, a] = N(!1);
  return z(() => {
    a(s.size === e.length);
  }, [s, e]), {
    selectedRows: s,
    allRowsSelected: i,
    toggleRowSelection: (o) => {
      n((f) => {
        const c = new Set(f);
        return c.has(o) ? c.delete(o) : c.add(o), t == null || t(Array.from(c)), c;
      });
    },
    toggleAllRowsSelection: (o) => {
      const f = o ? new Set(e) : /* @__PURE__ */ new Set();
      n(f), t == null || t(Array.from(f));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [t, s] = N({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (i, a) => {
    s({ key: i, direction: a }), e == null || e(i, a);
  } };
}, E = (e) => ({
  ...$(e),
  ...H(e)
}), M = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 even:bg-content2 h-12"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 hover:bg-content2 h-12"
  }
}, F = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: s = !0,
  variant: n = "unstyled",
  className: i
}) => {
  const a = M[n], u = s ? e + 1 : e;
  return /* @__PURE__ */ l.jsxs(C, { radius: "sm", "aria-label": "Loading data", className: i, children: [
    /* @__PURE__ */ l.jsx(V, { className: y(a.header), children: Array(u).fill(null).map((r, o) => /* @__PURE__ */ l.jsx(_, { className: y(a.column), children: o === 0 && s ? /* @__PURE__ */ l.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ l.jsx(R, { className: "h-4 w-24 rounded-md" }) }, o)) }),
    /* @__PURE__ */ l.jsx(D, { children: Array(t).fill(null).map((r, o) => /* @__PURE__ */ l.jsx(B, { className: y(a.row), children: Array(u).fill(null).map((f, c) => /* @__PURE__ */ l.jsx(G, { children: c === 0 && s ? /* @__PURE__ */ l.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ l.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, o)) })
  ] });
};
var k = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap(), I = 0, U = void 0;
function W(e) {
  return e ? (h.has(e) || (I += 1, h.set(e, I.toString())), h.get(e)) : "0";
}
function q(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? W(e.root) : e[t]}`).toString();
}
function J(e) {
  const t = q(e);
  let s = k.get(t);
  if (!s) {
    const n = /* @__PURE__ */ new Map();
    let i;
    const a = new IntersectionObserver((u) => {
      u.forEach((r) => {
        var o;
        const f = r.isIntersecting && i.some((c) => r.intersectionRatio >= c);
        e.trackVisibility && typeof r.isVisible > "u" && (r.isVisible = f), (o = n.get(r.target)) == null || o.forEach((c) => {
          c(f, r);
        });
      });
    }, e);
    i = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), s = {
      id: t,
      observer: a,
      elements: n
    }, k.set(t, s);
  }
  return s;
}
function K(e, t, s = {}, n = U) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const o = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
      time: 0,
      boundingClientRect: o,
      intersectionRect: o,
      rootBounds: o
    }), () => {
    };
  }
  const { id: i, observer: a, elements: u } = J(s), r = u.get(e) || [];
  return u.has(e) || u.set(e, r), r.push(t), a.observe(e), function() {
    r.splice(r.indexOf(t), 1), r.length === 0 && (u.delete(e), a.unobserve(e)), u.size === 0 && (a.disconnect(), k.delete(i));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: s,
  rootMargin: n,
  root: i,
  triggerOnce: a,
  skip: u,
  initialInView: r,
  fallbackInView: o,
  onChange: f
} = {}) {
  var c;
  const [v, x] = w.useState(null), p = w.useRef(f), [j, d] = w.useState({
    inView: !!r,
    entry: void 0
  });
  p.current = f, w.useEffect(
    () => {
      if (u || !v) return;
      let S;
      return S = K(
        v,
        (T, A) => {
          d({
            inView: T,
            entry: A
          }), p.current && p.current(T, A), A.isIntersecting && a && S && (S(), S = void 0);
        },
        {
          root: i,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: s,
          // @ts-ignore
          delay: t
        },
        o
      ), () => {
        S && S();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      v,
      i,
      n,
      a,
      u,
      s,
      o,
      t
    ]
  );
  const b = (c = j.entry) == null ? void 0 : c.target, m = w.useRef(void 0);
  !v && b && !a && !u && m.current !== b && (m.current = b, d({
    inView: !!r,
    entry: void 0
  }));
  const g = [x, j.inView, j.entry];
  return g.ref = g[0], g.inView = g[1], g.entry = g[2], g;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, t, s) => {
  const n = s.find(
    (i) => typeof i.field == "string" && String(i.field) === String(e)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(t);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in t) {
    const i = t[n.field];
    return typeof i == "string" || typeof i == "number" ? String(i) : null;
  }
  return null;
};
function ie({
  rows: e,
  columns: t,
  onEndReached: s,
  onSortChange: n,
  classNames: i,
  variant: a = "unstyled",
  isLoading: u = !1,
  childrenProps: r,
  ...o
}) {
  const { sortConfiguration: f, updateSort: c } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: n
  }), { inView: v } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    v && (s == null || s());
  }, [v, s]), u)
    return /* @__PURE__ */ l.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: o.showSelectionCheckboxes,
        variant: a,
        rows: e.length
      }
    );
  const x = M[a], p = [
    ...t.map((d, b) => ({
      ...d,
      key: typeof d.field == "string" ? String(d.field) : String(b),
      label: d.header
    }))
  ], j = (d) => {
    const b = t.find(
      (g) => typeof g.field == "string" && g.field.length > 0 && String(g.field) === d.key
    ), m = b == null ? void 0 : b.field;
    m != null && m !== "actions" && c(
      m,
      f.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ l.jsxs(C, { "aria-label": "data-grid", ...o, children: [
    /* @__PURE__ */ l.jsx(
      V,
      {
        columns: p,
        className: y(x.header),
        ...r == null ? void 0 : r.tableHeaderProps,
        children: (d) => /* @__PURE__ */ l.jsx(
          _,
          {
            "aria-label": X(d),
            className: y(x.column),
            ...r == null ? void 0 : r.tableColumnProps,
            children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
              d.label,
              d.sortable !== !1 && /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: y("relative size-4 cursor-pointer"),
                  onClick: () => j(d),
                  role: "button",
                  "aria-label": Y(d.label),
                  children: [
                    /* @__PURE__ */ l.jsx(
                      L,
                      {
                        size: 16,
                        className: y(
                          "absolute -top-1",
                          f.key === d.key && f.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      O,
                      {
                        size: 16,
                        className: y(
                          "absolute top-1",
                          f.key === d.key && f.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ l.jsx(D, { items: e, ...r == null ? void 0 : r.tableBodyProps, children: (d) => /* @__PURE__ */ l.jsx(
      B,
      {
        className: y(x.row),
        ...r == null ? void 0 : r.tableRowProps,
        children: (b) => /* @__PURE__ */ l.jsx(G, { ...r == null ? void 0 : r.tableCellProps, children: /* @__PURE__ */ l.jsx("div", { className: i == null ? void 0 : i.cellContent, children: Z(b, d, t) }) })
      },
      d.id
    ) })
  ] });
}
export {
  ie as DataGrid
};
