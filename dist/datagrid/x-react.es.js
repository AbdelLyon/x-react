/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as j from "react";
import { useState as A, useEffect as z } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as w, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, a] = A(/* @__PURE__ */ new Set()), [i, u] = A(!1);
  return z(() => {
    u(r.size === e.length);
  }, [r, e]), {
    selectedRows: r,
    allRowsSelected: i,
    toggleRowSelection: (n) => {
      a((c) => {
        const f = new Set(c);
        return f.has(n) ? f.delete(n) : f.add(n), t == null || t(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (n) => {
      const c = n ? new Set(e) : /* @__PURE__ */ new Set();
      a(c), t == null || t(Array.from(c));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [t, r] = A({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (i, u) => {
    r({ key: i, direction: u }), e == null || e(i, u);
  } };
}, E = (e) => ({
  ...$(e),
  ...H(e)
}), M = {
  bordered: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4",
    tr: "py-4 border-b border-default-200 last:border-b-0 group-data-[hover=true]:bg-content2"
  },
  striped: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4",
    tr: "py-4 even:bg-content2"
  },
  unstyled: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4 group-data-[hover=true]:bg-content2",
    tr: "py-4 hover:bg-content2"
  }
}, F = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: r = !0,
  variant: a = "unstyled",
  className: i
}) => {
  const u = M[a], s = r ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: i, children: [
    /* @__PURE__ */ d.jsx(_, { className: v(u.thead), children: Array(s).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(C, { className: v(u.th), children: n === 0 && r ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ d.jsx(D, { children: Array(t).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(B, { className: v(u.tr), children: Array(s).fill(null).map((c, f) => /* @__PURE__ */ d.jsx(G, { children: f === 0 && r ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, n)) })
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
  let r = k.get(t);
  if (!r) {
    const a = /* @__PURE__ */ new Map();
    let i;
    const u = new IntersectionObserver((s) => {
      s.forEach((l) => {
        var n;
        const c = l.isIntersecting && i.some((f) => l.intersectionRatio >= f);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = c), (n = a.get(l.target)) == null || n.forEach((f) => {
          f(c, l);
        });
      });
    }, e);
    i = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: u,
      elements: a
    }, k.set(t, r);
  }
  return r;
}
function K(e, t, r = {}, a = U) {
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
  const { id: i, observer: u, elements: s } = J(r), l = s.get(e) || [];
  return s.has(e) || s.set(e, l), l.push(t), u.observe(e), function() {
    l.splice(l.indexOf(t), 1), l.length === 0 && (s.delete(e), u.unobserve(e)), s.size === 0 && (u.disconnect(), k.delete(i));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: a,
  root: i,
  triggerOnce: u,
  skip: s,
  initialInView: l,
  fallbackInView: n,
  onChange: c
} = {}) {
  var f;
  const [m, h] = j.useState(null), x = j.useRef(c), [S, p] = j.useState({
    inView: !!l,
    entry: void 0
  });
  x.current = c, j.useEffect(
    () => {
      if (s || !m) return;
      let y;
      return y = K(
        m,
        (T, N) => {
          p({
            inView: T,
            entry: N
          }), x.current && x.current(T, N), N.isIntersecting && u && y && (y(), y = void 0);
        },
        {
          root: i,
          rootMargin: a,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
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
      m,
      i,
      a,
      u,
      s,
      r,
      n,
      t
    ]
  );
  const o = (f = S.entry) == null ? void 0 : f.target, g = j.useRef(void 0);
  !m && o && !u && !s && g.current !== o && (g.current = o, p({
    inView: !!l,
    entry: void 0
  }));
  const b = [h, S.inView, S.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, t, r) => {
  const a = r.find(
    (i) => typeof i.field == "string" && String(i.field) === String(e)
  );
  if (a === void 0)
    return null;
  if (a.cell !== void 0)
    return a.cell(t);
  if (typeof a.field == "string" && a.field.length > 0 && a.field in t) {
    const i = t[a.field];
    return typeof i == "string" || typeof i == "number" ? String(i) : null;
  }
  return null;
};
function ae({
  rows: e,
  columns: t,
  onEndReached: r,
  onSortChange: a,
  variant: i = "unstyled",
  isLoading: u = !1,
  childrenProps: s,
  ...l
}) {
  var S, p;
  const { sortConfiguration: n, updateSort: c } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: a
  }), { inView: f } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    f && (r == null || r());
  }, [f, r]), u)
    return /* @__PURE__ */ d.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: l.showSelectionCheckboxes,
        variant: i,
        rows: e.length
      }
    );
  const m = M[i], h = [
    ...t.map((o, g) => ({
      ...o,
      key: typeof o.field == "string" ? String(o.field) : String(g),
      label: o.header
    }))
  ], x = (o) => {
    const g = t.find(
      (y) => typeof y.field == "string" && y.field.length > 0 && String(y.field) === o.key
    ), b = g == null ? void 0 : g.field;
    b != null && b !== "actions" && c(
      b,
      n.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ d.jsxs(
    V,
    {
      "aria-label": "data-grid",
      ...l,
      classNames: {
        th: v(m.th, (S = l.classNames) == null ? void 0 : S.th),
        tr: v(m.tr, (p = l.classNames) == null ? void 0 : p.tr),
        ...l.classNames
      },
      children: [
        /* @__PURE__ */ d.jsx(
          _,
          {
            columns: h,
            ...s == null ? void 0 : s.tableHeaderProps,
            children: (o) => /* @__PURE__ */ d.jsx(
              C,
              {
                "aria-label": X(o),
                ...s == null ? void 0 : s.tableColumnProps,
                children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 ", children: [
                  o.label,
                  o.sortable !== !1 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: v("relative size-4 cursor-pointer"),
                      onClick: () => x(o),
                      role: "button",
                      "aria-label": Y(o.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          L,
                          {
                            size: 16,
                            className: v(
                              "absolute -top-1",
                              n.key === o.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          O,
                          {
                            size: 16,
                            className: v(
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
        /* @__PURE__ */ d.jsx(D, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (o) => /* @__PURE__ */ d.jsx(B, { ...s == null ? void 0 : s.tableRowProps, children: (g) => /* @__PURE__ */ d.jsx(G, { ...s == null ? void 0 : s.tableCellProps, children: Z(g, o, t) }) }, o.id) })
      ]
    }
  );
}
export {
  ae as DataGrid
};
