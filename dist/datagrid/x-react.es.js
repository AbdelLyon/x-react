/* empty css                */
import { j as u } from "../jsx-runtime-Dx-03ztt.js";
import * as w from "react";
import { useState as h, useEffect as z } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as p, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [s, i] = h(/* @__PURE__ */ new Set()), [o, l] = h(!1);
  return z(() => {
    l(s.size === e.length);
  }, [s, e]), {
    selectedRows: s,
    allRowsSelected: o,
    toggleRowSelection: (n) => {
      i((f) => {
        const c = new Set(f);
        return c.has(n) ? c.delete(n) : c.add(n), t == null || t(Array.from(c)), c;
      });
    },
    toggleAllRowsSelection: (n) => {
      const f = n ? new Set(e) : /* @__PURE__ */ new Set();
      i(f), t == null || t(Array.from(f));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [t, s] = h({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (o, l) => {
    s({ key: o, direction: l }), e == null || e(o, l);
  } };
}, E = (e) => ({
  ...$(e),
  ...H(e)
}), M = {
  bordered: {
    header: "bg-content2 border border-default-200 bg-content2 rounded-md",
    column: "bg-content2",
    row: "border-b border-default-200 last:border-b-0 hover:bg-content2"
  },
  striped: {
    header: "bg-content2 border border-default-200 bg-content2 rounded-md",
    column: "bg-content2",
    row: "py-4 even:bg-content2"
  },
  unstyled: {
    header: "bg-content2 border border-default-200 bg-content2 rounded-md",
    column: "bg-content2 ",
    row: "py-4 hover:bg-content2"
  }
}, F = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: s = !0,
  variant: i = "unstyled",
  className: o
}) => {
  const l = M[i], r = s ? e + 1 : e;
  return /* @__PURE__ */ u.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ u.jsx(_, { className: g(l.header), children: Array(r).fill(null).map((d, n) => /* @__PURE__ */ u.jsx(C, { className: g(l.column), children: n === 0 && s ? /* @__PURE__ */ u.jsx(p, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(p, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ u.jsx(D, { children: Array(t).fill(null).map((d, n) => /* @__PURE__ */ u.jsx(B, { className: g(l.row), children: Array(r).fill(null).map((f, c) => /* @__PURE__ */ u.jsx(G, { children: c === 0 && s ? /* @__PURE__ */ u.jsx(p, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(p, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, n)) })
  ] });
};
var k = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new WeakMap(), I = 0, U = void 0;
function W(e) {
  return e ? (R.has(e) || (I += 1, R.set(e, I.toString())), R.get(e)) : "0";
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
    const i = /* @__PURE__ */ new Map();
    let o;
    const l = new IntersectionObserver((r) => {
      r.forEach((d) => {
        var n;
        const f = d.isIntersecting && o.some((c) => d.intersectionRatio >= c);
        e.trackVisibility && typeof d.isVisible > "u" && (d.isVisible = f), (n = i.get(d.target)) == null || n.forEach((c) => {
          c(f, d);
        });
      });
    }, e);
    o = l.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), s = {
      id: t,
      observer: l,
      elements: i
    }, k.set(t, s);
  }
  return s;
}
function K(e, t, s = {}, i = U) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const n = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: o, observer: l, elements: r } = J(s), d = r.get(e) || [];
  return r.has(e) || r.set(e, d), d.push(t), l.observe(e), function() {
    d.splice(d.indexOf(t), 1), d.length === 0 && (r.delete(e), l.unobserve(e)), r.size === 0 && (l.disconnect(), k.delete(o));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: s,
  rootMargin: i,
  root: o,
  triggerOnce: l,
  skip: r,
  initialInView: d,
  fallbackInView: n,
  onChange: f
} = {}) {
  var c;
  const [y, A] = w.useState(null), j = w.useRef(f), [a, b] = w.useState({
    inView: !!d,
    entry: void 0
  });
  j.current = f, w.useEffect(
    () => {
      if (r || !y) return;
      let x;
      return x = K(
        y,
        (T, N) => {
          b({
            inView: T,
            entry: N
          }), j.current && j.current(T, N), N.isIntersecting && l && x && (x(), x = void 0);
        },
        {
          root: o,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: s,
          // @ts-ignore
          delay: t
        },
        n
      ), () => {
        x && x();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      y,
      o,
      i,
      l,
      r,
      s,
      n,
      t
    ]
  );
  const m = (c = a.entry) == null ? void 0 : c.target, S = w.useRef(void 0);
  !y && m && !l && !r && S.current !== m && (S.current = m, b({
    inView: !!d,
    entry: void 0
  }));
  const v = [A, a.inView, a.entry];
  return v.ref = v[0], v.inView = v[1], v.entry = v[2], v;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, t, s) => {
  const i = s.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(t);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in t) {
    const o = t[i.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
};
function ie({
  rows: e,
  columns: t,
  onEndReached: s,
  onSortChange: i,
  variant: o = "unstyled",
  isLoading: l = !1,
  childrenProps: r,
  ...d
}) {
  const { sortConfiguration: n, updateSort: f } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: i
  }), { inView: c } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    c && (s == null || s());
  }, [c, s]), l)
    return /* @__PURE__ */ u.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: d.showSelectionCheckboxes,
        variant: o,
        rows: e.length
      }
    );
  const y = M[o], A = [
    ...t.map((a, b) => ({
      ...a,
      key: typeof a.field == "string" ? String(a.field) : String(b),
      label: a.header
    }))
  ], j = (a) => {
    const b = t.find(
      (S) => typeof S.field == "string" && S.field.length > 0 && String(S.field) === a.key
    ), m = b == null ? void 0 : b.field;
    m != null && m !== "actions" && f(
      m,
      n.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ u.jsxs(
    V,
    {
      "aria-label": "data-grid",
      ...d,
      classNames: {
        thead: g(y.header),
        th: g(y.column),
        tr: g(y.row)
      },
      children: [
        /* @__PURE__ */ u.jsx(
          _,
          {
            columns: A,
            ...r == null ? void 0 : r.tableHeaderProps,
            children: (a) => /* @__PURE__ */ u.jsx(
              C,
              {
                "aria-label": X(a),
                ...r == null ? void 0 : r.tableColumnProps,
                children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                  a.label,
                  a.sortable !== !1 && /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: g("relative size-4 cursor-pointer"),
                      onClick: () => j(a),
                      role: "button",
                      "aria-label": Y(a.label),
                      children: [
                        /* @__PURE__ */ u.jsx(
                          L,
                          {
                            size: 16,
                            className: g(
                              "absolute -top-1",
                              n.key === a.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ u.jsx(
                          O,
                          {
                            size: 16,
                            className: g(
                              "absolute top-1",
                              n.key === a.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              a.key
            )
          }
        ),
        /* @__PURE__ */ u.jsx(D, { items: e, ...r == null ? void 0 : r.tableBodyProps, children: (a) => /* @__PURE__ */ u.jsx(B, { ...r == null ? void 0 : r.tableRowProps, children: (b) => /* @__PURE__ */ u.jsx(G, { ...r == null ? void 0 : r.tableCellProps, children: Z(b, a, t) }) }, a.id) })
      ]
    }
  );
}
export {
  ie as DataGrid
};
