/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as p from "react";
import { useState as A, useEffect as z } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as w, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: t,
  onSelectionChange: e
}) => {
  const [r, i] = A(/* @__PURE__ */ new Set()), [a, u] = A(!1);
  return z(() => {
    u(r.size === t.length);
  }, [r, t]), {
    selectedRows: r,
    allRowsSelected: a,
    toggleRowSelection: (n) => {
      i((c) => {
        const f = new Set(c);
        return f.has(n) ? f.delete(n) : f.add(n), e == null || e(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (n) => {
      const c = n ? new Set(t) : /* @__PURE__ */ new Set();
      i(c), e == null || e(Array.from(c));
    }
  };
}, H = ({
  onSortChange: t
}) => {
  const [e, r] = A({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: e, updateSort: (a, u) => {
    r({ key: a, direction: u }), t == null || t(a, u);
  } };
}, E = (t) => ({
  ...$(t),
  ...H(t)
}), M = {
  bordered: {
    thead: "[&>tr]:first:bg-content2 bg-content2",
    th: "py4 bg-content2 py4",
    tr: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2"
  },
  striped: {
    thead: "[&>tr]:first:bg-content2 bg-content2",
    th: "py4 bg-content2 py4",
    tr: "py-4 even:bg-content2"
  },
  unstyled: {
    thead: "[&>tr]:first:bg-content2 bg-content2",
    th: "py4 bg-content2 py4",
    tr: "py-4 hover:bg-content2"
  }
}, F = ({
  columns: t = 5,
  rows: e = 5,
  checkboxSelection: r = !0,
  variant: i = "unstyled",
  className: a
}) => {
  const u = M[i], s = r ? t + 1 : t;
  return /* @__PURE__ */ d.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: a, children: [
    /* @__PURE__ */ d.jsx(_, { className: v(u.thead), children: Array(s).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(C, { className: v(u.th), children: n === 0 && r ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ d.jsx(D, { children: Array(e).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(B, { className: v(u.tr), children: Array(s).fill(null).map((c, f) => /* @__PURE__ */ d.jsx(G, { children: f === 0 && r ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, n)) })
  ] });
};
var k = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new WeakMap(), I = 0, U = void 0;
function W(t) {
  return t ? (R.has(t) || (I += 1, R.set(t, I.toString())), R.get(t)) : "0";
}
function q(t) {
  return Object.keys(t).sort().filter(
    (e) => t[e] !== void 0
  ).map((e) => `${e}_${e === "root" ? W(t.root) : t[e]}`).toString();
}
function J(t) {
  const e = q(t);
  let r = k.get(e);
  if (!r) {
    const i = /* @__PURE__ */ new Map();
    let a;
    const u = new IntersectionObserver((s) => {
      s.forEach((l) => {
        var n;
        const c = l.isIntersecting && a.some((f) => l.intersectionRatio >= f);
        t.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = c), (n = i.get(l.target)) == null || n.forEach((f) => {
          f(c, l);
        });
      });
    }, t);
    a = u.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), r = {
      id: e,
      observer: u,
      elements: i
    }, k.set(e, r);
  }
  return r;
}
function K(t, e, r = {}, i = U) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const n = t.getBoundingClientRect();
    return e(i, {
      isIntersecting: i,
      target: t,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: a, observer: u, elements: s } = J(r), l = s.get(t) || [];
  return s.has(t) || s.set(t, l), l.push(e), u.observe(t), function() {
    l.splice(l.indexOf(e), 1), l.length === 0 && (s.delete(t), u.unobserve(t)), s.size === 0 && (u.disconnect(), k.delete(a));
  };
}
function Q({
  threshold: t,
  delay: e,
  trackVisibility: r,
  rootMargin: i,
  root: a,
  triggerOnce: u,
  skip: s,
  initialInView: l,
  fallbackInView: n,
  onChange: c
} = {}) {
  var f;
  const [m, h] = p.useState(null), x = p.useRef(c), [S, j] = p.useState({
    inView: !!l,
    entry: void 0
  });
  x.current = c, p.useEffect(
    () => {
      if (s || !m) return;
      let y;
      return y = K(
        m,
        (T, N) => {
          j({
            inView: T,
            entry: N
          }), x.current && x.current(T, N), N.isIntersecting && u && y && (y(), y = void 0);
        },
        {
          root: a,
          rootMargin: i,
          threshold: t,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: e
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
      Array.isArray(t) ? t.toString() : t,
      m,
      a,
      i,
      u,
      s,
      r,
      n,
      e
    ]
  );
  const o = (f = S.entry) == null ? void 0 : f.target, g = p.useRef(void 0);
  !m && o && !u && !s && g.current !== o && (g.current = o, j({
    inView: !!l,
    entry: void 0
  }));
  const b = [h, S.inView, S.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const X = (t) => typeof t.label == "string" && t.label.length > 0 ? t.label : typeof t.key == "string" && t.key.length > 0 ? t.key : "Column", Y = (t) => typeof t == "string" && t.length > 0 ? `Sort by ${t}` : "Sort column", Z = (t, e, r) => {
  const i = r.find(
    (a) => typeof a.field == "string" && String(a.field) === String(t)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(e);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in e) {
    const a = e[i.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
};
function it({
  rows: t,
  columns: e,
  onEndReached: r,
  onSortChange: i,
  variant: a = "unstyled",
  isLoading: u = !1,
  childrenProps: s,
  ...l
}) {
  var S, j;
  const { sortConfiguration: n, updateSort: c } = E({
    rows: t,
    onSelectionChange: () => {
    },
    onSortChange: i
  }), { inView: f } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    f && (r == null || r());
  }, [f, r]), u)
    return /* @__PURE__ */ d.jsx(
      F,
      {
        columns: e.length,
        checkboxSelection: l.showSelectionCheckboxes,
        variant: a,
        rows: t.length
      }
    );
  const m = M[a], h = [
    ...e.map((o, g) => ({
      ...o,
      key: typeof o.field == "string" ? String(o.field) : String(g),
      label: o.header
    }))
  ], x = (o) => {
    const g = e.find(
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
        tr: v(m.tr, (j = l.classNames) == null ? void 0 : j.tr),
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
                children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
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
        /* @__PURE__ */ d.jsx(D, { items: t, ...s == null ? void 0 : s.tableBodyProps, children: (o) => /* @__PURE__ */ d.jsx(B, { ...s == null ? void 0 : s.tableRowProps, children: (g) => /* @__PURE__ */ d.jsx(G, { ...s == null ? void 0 : s.tableCellProps, children: Z(g, o, e) }) }, o.id) })
      ]
    }
  );
}
export {
  it as DataGrid
};
