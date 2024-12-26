/* empty css                */
import { j as u } from "../jsx-runtime-Dx-03ztt.js";
import * as j from "react";
import { useState as h, useEffect as z } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as w, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [s, i] = h(/* @__PURE__ */ new Set()), [a, l] = h(!1);
  return z(() => {
    l(s.size === e.length);
  }, [s, e]), {
    selectedRows: s,
    allRowsSelected: a,
    toggleRowSelection: (n) => {
      i((c) => {
        const f = new Set(c);
        return f.has(n) ? f.delete(n) : f.add(n), t == null || t(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (n) => {
      const c = n ? new Set(e) : /* @__PURE__ */ new Set();
      i(c), t == null || t(Array.from(c));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [t, s] = h({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (a, l) => {
    s({ key: a, direction: l }), e == null || e(a, l);
  } };
}, E = (e) => ({
  ...$(e),
  ...H(e)
}), M = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 ",
    row: "py-4 hover:bg-content2"
  }
}, F = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: s = !0,
  variant: i = "unstyled",
  className: a
}) => {
  const l = M[i], r = s ? e + 1 : e;
  return /* @__PURE__ */ u.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: a, children: [
    /* @__PURE__ */ u.jsx(_, { className: g(l.header), children: Array(r).fill(null).map((d, n) => /* @__PURE__ */ u.jsx(C, { className: g(l.column), children: n === 0 && s ? /* @__PURE__ */ u.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(w, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ u.jsx(D, { children: Array(t).fill(null).map((d, n) => /* @__PURE__ */ u.jsx(B, { className: g(l.row), children: Array(r).fill(null).map((c, f) => /* @__PURE__ */ u.jsx(G, { children: f === 0 && s ? /* @__PURE__ */ u.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, n)) })
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
    let a;
    const l = new IntersectionObserver((r) => {
      r.forEach((d) => {
        var n;
        const c = d.isIntersecting && a.some((f) => d.intersectionRatio >= f);
        e.trackVisibility && typeof d.isVisible > "u" && (d.isVisible = c), (n = i.get(d.target)) == null || n.forEach((f) => {
          f(c, d);
        });
      });
    }, e);
    a = l.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), s = {
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
  const { id: a, observer: l, elements: r } = J(s), d = r.get(e) || [];
  return r.has(e) || r.set(e, d), d.push(t), l.observe(e), function() {
    d.splice(d.indexOf(t), 1), d.length === 0 && (r.delete(e), l.unobserve(e)), r.size === 0 && (l.disconnect(), k.delete(a));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: s,
  rootMargin: i,
  root: a,
  triggerOnce: l,
  skip: r,
  initialInView: d,
  fallbackInView: n,
  onChange: c
} = {}) {
  var f;
  const [y, A] = j.useState(null), p = j.useRef(c), [o, b] = j.useState({
    inView: !!d,
    entry: void 0
  });
  p.current = c, j.useEffect(
    () => {
      if (r || !y) return;
      let x;
      return x = K(
        y,
        (T, N) => {
          b({
            inView: T,
            entry: N
          }), p.current && p.current(T, N), N.isIntersecting && l && x && (x(), x = void 0);
        },
        {
          root: a,
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
      a,
      i,
      l,
      r,
      s,
      n,
      t
    ]
  );
  const v = (f = o.entry) == null ? void 0 : f.target, S = j.useRef(void 0);
  !y && v && !l && !r && S.current !== v && (S.current = v, b({
    inView: !!d,
    entry: void 0
  }));
  const m = [A, o.inView, o.entry];
  return m.ref = m[0], m.inView = m[1], m.entry = m[2], m;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, t, s) => {
  const i = s.find(
    (a) => typeof a.field == "string" && String(a.field) === String(e)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(t);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in t) {
    const a = t[i.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
};
function ie({
  rows: e,
  columns: t,
  onEndReached: s,
  onSortChange: i,
  variant: a = "unstyled",
  isLoading: l = !1,
  childrenProps: r,
  ...d
}) {
  const { sortConfiguration: n, updateSort: c } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: i
  }), { inView: f } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    f && (s == null || s());
  }, [f, s]), l)
    return /* @__PURE__ */ u.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: d.showSelectionCheckboxes,
        variant: a,
        rows: e.length
      }
    );
  const y = M[a], A = [
    ...t.map((o, b) => ({
      ...o,
      key: typeof o.field == "string" ? String(o.field) : String(b),
      label: o.header
    }))
  ], p = (o) => {
    const b = t.find(
      (S) => typeof S.field == "string" && S.field.length > 0 && String(S.field) === o.key
    ), v = b == null ? void 0 : b.field;
    v != null && v !== "actions" && c(
      v,
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
            children: (o) => /* @__PURE__ */ u.jsx(
              C,
              {
                "aria-label": X(o),
                ...r == null ? void 0 : r.tableColumnProps,
                children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                  o.label,
                  o.sortable !== !1 && /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: g("relative size-4 cursor-pointer"),
                      onClick: () => p(o),
                      role: "button",
                      "aria-label": Y(o.label),
                      children: [
                        /* @__PURE__ */ u.jsx(
                          L,
                          {
                            size: 16,
                            className: g(
                              "absolute -top-1",
                              n.key === o.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ u.jsx(
                          O,
                          {
                            size: 16,
                            className: g(
                              "absolute top-1",
                              n.key === o.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              o.key
            )
          }
        ),
        /* @__PURE__ */ u.jsx(D, { items: e, ...r == null ? void 0 : r.tableBodyProps, children: (o) => /* @__PURE__ */ u.jsx(B, { ...r == null ? void 0 : r.tableRowProps, children: (b) => /* @__PURE__ */ u.jsx(G, { ...r == null ? void 0 : r.tableCellProps, children: Z(b, o, t) }) }, o.id) })
      ]
    }
  );
}
export {
  ie as DataGrid
};
