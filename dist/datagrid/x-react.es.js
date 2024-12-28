/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as R from "react";
import { useState as T, useEffect as B } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as M, TableHeader as E, TableColumn as z, Skeleton as w, TableBody as _, TableRow as C, TableCell as D } from "@nextui-org/react";
import { IconChevronUp as G, IconChevronDown as L } from "@tabler/icons-react";
const O = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [i, a] = T(/* @__PURE__ */ new Set()), [o, c] = T(!1);
  return B(() => {
    c(i.size === e.length);
  }, [i, e]), {
    selectedRows: i,
    allRowsSelected: o,
    toggleRowSelection: (n) => {
      a((b) => {
        const u = new Set(b);
        return u.has(n) ? u.delete(n) : u.add(n), t == null || t(Array.from(u)), u;
      });
    },
    toggleAllRowsSelection: (n) => {
      const b = n ? new Set(e) : /* @__PURE__ */ new Set();
      a(b), t == null || t(Array.from(b));
    }
  };
}, $ = ({
  onSortChange: e
}) => {
  const [t, i] = T({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (o, c) => {
    i({ key: o, direction: c }), e == null || e(o, c);
  } };
}, F = (e) => ({
  ...O(e),
  ...$(e)
}), H = {
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
}, U = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: i = !0,
  variant: a = "unstyled",
  className: o
}) => {
  const c = H[a], s = i ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(M, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ d.jsx(E, { className: v(c.thead), children: Array(s).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(z, { className: v(c.th), children: n === 0 && i ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ d.jsx(_, { children: Array(t).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(C, { className: v(c.tr), children: Array(s).fill(null).map((b, u) => /* @__PURE__ */ d.jsx(D, { children: u === 0 && i ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, u)) }, n)) })
  ] });
};
var I = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new WeakMap(), k = 0, W = void 0;
function q(e) {
  return e ? (N.has(e) || (k += 1, N.set(e, k.toString())), N.get(e)) : "0";
}
function J(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? q(e.root) : e[t]}`).toString();
}
function K(e) {
  const t = J(e);
  let i = I.get(t);
  if (!i) {
    const a = /* @__PURE__ */ new Map();
    let o;
    const c = new IntersectionObserver((s) => {
      s.forEach((l) => {
        var n;
        const b = l.isIntersecting && o.some((u) => l.intersectionRatio >= u);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = b), (n = a.get(l.target)) == null || n.forEach((u) => {
          u(b, l);
        });
      });
    }, e);
    o = c.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
      id: t,
      observer: c,
      elements: a
    }, I.set(t, i);
  }
  return i;
}
function Q(e, t, i = {}, a = W) {
  if (typeof window.IntersectionObserver > "u" && a !== void 0) {
    const n = e.getBoundingClientRect();
    return t(a, {
      isIntersecting: a,
      target: e,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: o, observer: c, elements: s } = K(i), l = s.get(e) || [];
  return s.has(e) || s.set(e, l), l.push(t), c.observe(e), function() {
    l.splice(l.indexOf(t), 1), l.length === 0 && (s.delete(e), c.unobserve(e)), s.size === 0 && (c.disconnect(), I.delete(o));
  };
}
function X({
  threshold: e,
  delay: t,
  trackVisibility: i,
  rootMargin: a,
  root: o,
  triggerOnce: c,
  skip: s,
  initialInView: l,
  fallbackInView: n,
  onChange: b
} = {}) {
  var u;
  const [m, A] = R.useState(null), p = R.useRef(b), [h, S] = R.useState({
    inView: !!l,
    entry: void 0
  });
  p.current = b, R.useEffect(
    () => {
      if (s || !m) return;
      let f;
      return f = Q(
        m,
        (g, y) => {
          S({
            inView: g,
            entry: y
          }), p.current && p.current(g, y), y.isIntersecting && c && f && (f(), f = void 0);
        },
        {
          root: o,
          rootMargin: a,
          threshold: e,
          // @ts-ignore
          trackVisibility: i,
          // @ts-ignore
          delay: t
        },
        n
      ), () => {
        f && f();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      m,
      o,
      a,
      c,
      s,
      i,
      n,
      t
    ]
  );
  const x = (u = h.entry) == null ? void 0 : u.target, j = R.useRef(void 0);
  !m && x && !c && !s && j.current !== x && (j.current = x, S({
    inView: !!l,
    entry: void 0
  }));
  const r = [A, h.inView, h.entry];
  return r.ref = r[0], r.inView = r[1], r.entry = r[2], r;
}
const Y = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Z = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", P = (e, t, i) => {
  const a = i.find(
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
function ie({
  rows: e,
  columns: t,
  onSortChange: i,
  onRowsScrollEnd: a,
  variant: o = "unstyled",
  isLoading: c = !1,
  childrenProps: s,
  ...l
}) {
  var S, x, j;
  const { sortConfiguration: n, updateSort: b } = F({
    rows: e,
    onSortChange: i
  }), u = (r, f) => {
    if (r && f && a) {
      const g = f.target.parentElement;
      if (!(g instanceof HTMLDivElement))
        return;
      const y = 48, V = Math.ceil(g.clientHeight / y);
      a({
        params: {
          visibleRows: V,
          visibleStartIndex: Math.floor(g.scrollTop / y),
          visibleEndIndex: Math.min(
            Math.floor((g.scrollTop + g.clientHeight) / y),
            e.length
          )
        },
        details: {
          reason: "scroll"
        }
      });
    }
  }, { ref: m } = X({
    threshold: 0.5,
    rootMargin: "100px",
    onChange: u
  }), A = t.map((r, f) => ({
    ...r,
    key: typeof r.field == "string" ? String(r.field) : String(f),
    label: r.header
  })), p = (r) => {
    const f = t.find(
      (y) => typeof y.field == "string" && y.field.length > 0 && String(y.field) === r.key
    ), g = f == null ? void 0 : f.field;
    g != null && g !== "actions" && b(
      g,
      n.direction === "asc" ? "desc" : "asc"
    );
  };
  if (c)
    return /* @__PURE__ */ d.jsx(
      U,
      {
        columns: t.length,
        checkboxSelection: l.showSelectionCheckboxes,
        variant: o,
        rows: e.length
      }
    );
  const h = H[o];
  return /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ d.jsxs(
      M,
      {
        "aria-label": "data-grid",
        ...l,
        classNames: {
          ...l.classNames,
          wrapper: v("overflow-auto", (S = l.classNames) == null ? void 0 : S.wrapper),
          th: v(h.th, (x = l.classNames) == null ? void 0 : x.th),
          tr: v(h.tr, (j = l.classNames) == null ? void 0 : j.tr)
        },
        children: [
          /* @__PURE__ */ d.jsx(
            E,
            {
              columns: A,
              ...s == null ? void 0 : s.tableHeaderProps,
              children: (r) => /* @__PURE__ */ d.jsx(
                z,
                {
                  "aria-label": Y(r),
                  ...s == null ? void 0 : s.tableColumnProps,
                  children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                    r.label,
                    r.sortable !== !1 && /* @__PURE__ */ d.jsxs(
                      "div",
                      {
                        className: v("relative size-4 cursor-pointer"),
                        onClick: () => p(r),
                        role: "button",
                        "aria-label": Z(r.label),
                        children: [
                          /* @__PURE__ */ d.jsx(
                            G,
                            {
                              size: 16,
                              className: v(
                                "absolute -top-1",
                                n.key === r.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          ),
                          /* @__PURE__ */ d.jsx(
                            L,
                            {
                              size: 16,
                              className: v(
                                "absolute top-1",
                                n.key === r.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          )
                        ]
                      }
                    )
                  ] })
                },
                r.key
              )
            }
          ),
          /* @__PURE__ */ d.jsx(_, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (r) => /* @__PURE__ */ d.jsx(C, { ...s == null ? void 0 : s.tableRowProps, children: (f) => /* @__PURE__ */ d.jsx(D, { ...s == null ? void 0 : s.tableCellProps, children: P(f, r, t) }) }, r.id) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("div", { ref: m, className: "absolute bottom-0 h-px w-full" })
  ] });
}
export {
  ie as DataGrid
};
