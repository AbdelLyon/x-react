/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as R from "react";
import { useState as I, useEffect as M } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as z, TableHeader as _, TableColumn as C, Skeleton as N, TableBody as D, TableRow as H, TableCell as V } from "@nextui-org/react";
import { IconChevronUp as G, IconChevronDown as L } from "@tabler/icons-react";
const O = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [i, n] = I(/* @__PURE__ */ new Set()), [o, c] = I(!1);
  return M(() => {
    c(i.size === e.length);
  }, [i, e]), {
    selectedRows: i,
    allRowsSelected: o,
    toggleRowSelection: (a) => {
      n((b) => {
        const f = new Set(b);
        return f.has(a) ? f.delete(a) : f.add(a), t == null || t(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (a) => {
      const b = a ? new Set(e) : /* @__PURE__ */ new Set();
      n(b), t == null || t(Array.from(b));
    }
  };
}, $ = ({
  onSortChange: e
}) => {
  const [t, i] = I({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (o, c) => {
    i({ key: o, direction: c }), e == null || e(o, c);
  } };
}, U = (e) => ({
  ...O(e),
  ...$(e)
}), B = {
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
}, F = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: i = !0,
  variant: n = "unstyled",
  className: o
}) => {
  const c = B[n], r = i ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(z, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ d.jsx(_, { className: y(c.thead), children: Array(r).fill(null).map((l, a) => /* @__PURE__ */ d.jsx(C, { className: y(c.th), children: a === 0 && i ? /* @__PURE__ */ d.jsx(N, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(N, { className: "h-4 w-24 rounded-md" }) }, a)) }),
    /* @__PURE__ */ d.jsx(D, { children: Array(t).fill(null).map((l, a) => /* @__PURE__ */ d.jsx(H, { className: y(c.tr), children: Array(r).fill(null).map((b, f) => /* @__PURE__ */ d.jsx(V, { children: f === 0 && i ? /* @__PURE__ */ d.jsx(N, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(N, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, a)) })
  ] });
};
var T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new WeakMap(), E = 0, W = void 0;
function q(e) {
  return e ? (A.has(e) || (E += 1, A.set(e, E.toString())), A.get(e)) : "0";
}
function J(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? q(e.root) : e[t]}`).toString();
}
function K(e) {
  const t = J(e);
  let i = T.get(t);
  if (!i) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const c = new IntersectionObserver((r) => {
      r.forEach((l) => {
        var a;
        const b = l.isIntersecting && o.some((f) => l.intersectionRatio >= f);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = b), (a = n.get(l.target)) == null || a.forEach((f) => {
          f(b, l);
        });
      });
    }, e);
    o = c.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
      id: t,
      observer: c,
      elements: n
    }, T.set(t, i);
  }
  return i;
}
function Q(e, t, i = {}, n = W) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const a = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: a,
      intersectionRect: a,
      rootBounds: a
    }), () => {
    };
  }
  const { id: o, observer: c, elements: r } = K(i), l = r.get(e) || [];
  return r.has(e) || r.set(e, l), l.push(t), c.observe(e), function() {
    l.splice(l.indexOf(t), 1), l.length === 0 && (r.delete(e), c.unobserve(e)), r.size === 0 && (c.disconnect(), T.delete(o));
  };
}
function X({
  threshold: e,
  delay: t,
  trackVisibility: i,
  rootMargin: n,
  root: o,
  triggerOnce: c,
  skip: r,
  initialInView: l,
  fallbackInView: a,
  onChange: b
} = {}) {
  var f;
  const [g, w] = R.useState(null), h = R.useRef(b), [S, p] = R.useState({
    inView: !!l,
    entry: void 0
  });
  h.current = b, R.useEffect(
    () => {
      if (r || !g) return;
      let u;
      return u = Q(
        g,
        (m, v) => {
          p({
            inView: m,
            entry: v
          }), h.current && h.current(m, v), v.isIntersecting && c && u && (u(), u = void 0);
        },
        {
          root: o,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: i,
          // @ts-ignore
          delay: t
        },
        a
      ), () => {
        u && u();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      g,
      o,
      n,
      c,
      r,
      i,
      a,
      t
    ]
  );
  const x = (f = S.entry) == null ? void 0 : f.target, j = R.useRef(void 0);
  !g && x && !c && !r && j.current !== x && (j.current = x, p({
    inView: !!l,
    entry: void 0
  }));
  const s = [w, S.inView, S.entry];
  return s.ref = s[0], s.inView = s[1], s.entry = s[2], s;
}
const Y = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Z = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", P = (e, t, i) => {
  const n = i.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(t);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in t) {
    const o = t[n.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
};
function le({
  rows: e,
  columns: t,
  onSortChange: i,
  onRowsScrollEnd: n,
  variant: o = "unstyled",
  isLoading: c = !1,
  childrenProps: r,
  ...l
}) {
  var p, x, j;
  const { sortConfiguration: a, updateSort: b } = U({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: i
  }), { ref: f, entry: g } = X({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (M(() => {
    if ((g == null ? void 0 : g.isIntersecting) === !0 && n) {
      const s = g.target.parentElement;
      if (!(s instanceof HTMLDivElement))
        return;
      const u = 48, v = {
        visibleRows: Math.ceil(s.clientHeight / u),
        visibleStartIndex: Math.floor(s.scrollTop / u),
        visibleEndIndex: Math.min(
          Math.floor((s.scrollTop + s.clientHeight) / u),
          e.length
        )
      }, k = new UIEvent("scroll");
      k.target = s, n({
        params: v,
        scrollEvent: k,
        details: {
          reason: "scroll"
        }
      });
    }
  }, [g == null ? void 0 : g.isIntersecting, n, e.length]), c)
    return /* @__PURE__ */ d.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: l.showSelectionCheckboxes,
        variant: o,
        rows: e.length
      }
    );
  const w = B[o], h = [
    ...t.map((s, u) => ({
      ...s,
      key: typeof s.field == "string" ? String(s.field) : String(u),
      label: s.header
    }))
  ], S = (s) => {
    const u = t.find(
      (v) => typeof v.field == "string" && v.field.length > 0 && String(v.field) === s.key
    ), m = u == null ? void 0 : u.field;
    m != null && m !== "actions" && b(
      m,
      a.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ d.jsxs(
      z,
      {
        "aria-label": "data-grid",
        ...l,
        classNames: {
          ...l.classNames,
          th: y(w.th, (p = l.classNames) == null ? void 0 : p.th),
          tr: y(w.tr, (x = l.classNames) == null ? void 0 : x.tr),
          base: y("max-h-[600px] overflow-auto", (j = l.classNames) == null ? void 0 : j.base)
        },
        children: [
          /* @__PURE__ */ d.jsx(
            _,
            {
              columns: h,
              ...r == null ? void 0 : r.tableHeaderProps,
              children: (s) => /* @__PURE__ */ d.jsx(
                C,
                {
                  "aria-label": Y(s),
                  ...r == null ? void 0 : r.tableColumnProps,
                  children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                    s.label,
                    s.sortable !== !1 && /* @__PURE__ */ d.jsxs(
                      "div",
                      {
                        className: y("relative size-4 cursor-pointer"),
                        onClick: () => S(s),
                        role: "button",
                        "aria-label": Z(s.label),
                        children: [
                          /* @__PURE__ */ d.jsx(
                            G,
                            {
                              size: 16,
                              className: y(
                                "absolute -top-1",
                                a.key === s.key && a.direction === "asc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          ),
                          /* @__PURE__ */ d.jsx(
                            L,
                            {
                              size: 16,
                              className: y(
                                "absolute top-1",
                                a.key === s.key && a.direction === "desc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          )
                        ]
                      }
                    )
                  ] })
                },
                s.key
              )
            }
          ),
          /* @__PURE__ */ d.jsx(D, { items: e, ...r == null ? void 0 : r.tableBodyProps, children: (s) => /* @__PURE__ */ d.jsx(H, { ...r == null ? void 0 : r.tableRowProps, children: (u) => /* @__PURE__ */ d.jsx(V, { ...r == null ? void 0 : r.tableCellProps, children: P(u, s, t) }) }, s.id) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("div", { ref: f, className: "absolute bottom-0 h-px w-full" })
  ] });
}
export {
  le as DataGrid
};
