/* empty css                */
import { j as c } from "../jsx-runtime-Dx-03ztt.js";
import * as w from "react";
import { useState as E, useEffect as z, useRef as U } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as _, TableHeader as C, TableColumn as D, Skeleton as I, TableBody as L, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as W } from "@tabler/icons-react";
const q = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [a, n] = E(/* @__PURE__ */ new Set()), [o, d] = E(!1);
  return z(() => {
    d(a.size === e.length);
  }, [a, e]), {
    selectedRows: a,
    allRowsSelected: o,
    toggleRowSelection: (i) => {
      n((f) => {
        const u = new Set(f);
        return u.has(i) ? u.delete(i) : u.add(i), t == null || t(Array.from(u)), u;
      });
    },
    toggleAllRowsSelection: (i) => {
      const f = i ? new Set(e) : /* @__PURE__ */ new Set();
      n(f), t == null || t(Array.from(f));
    }
  };
}, J = ({
  onSortChange: e
}) => {
  const [t, a] = E({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (o, d) => {
    a({ key: o, direction: d }), e == null || e(o, d);
  } };
}, K = (e) => ({
  ...q(e),
  ...J(e)
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
}, Q = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: a = !0,
  variant: n = "unstyled",
  className: o
}) => {
  const d = O[n], r = a ? e + 1 : e;
  return /* @__PURE__ */ c.jsxs(_, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ c.jsx(C, { className: y(d.thead), children: Array(r).fill(null).map((l, i) => /* @__PURE__ */ c.jsx(D, { className: y(d.th), children: i === 0 && a ? /* @__PURE__ */ c.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ c.jsx(I, { className: "h-4 w-24 rounded-md" }) }, i)) }),
    /* @__PURE__ */ c.jsx(L, { children: Array(t).fill(null).map((l, i) => /* @__PURE__ */ c.jsx(B, { className: y(d.tr), children: Array(r).fill(null).map((f, u) => /* @__PURE__ */ c.jsx(G, { children: u === 0 && a ? /* @__PURE__ */ c.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ c.jsx(I, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, u)) }, i)) })
  ] });
};
var H = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new WeakMap(), V = 0, X = void 0;
function Y(e) {
  return e ? (k.has(e) || (V += 1, k.set(e, V.toString())), k.get(e)) : "0";
}
function Z(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Y(e.root) : e[t]}`).toString();
}
function P(e) {
  const t = Z(e);
  let a = H.get(t);
  if (!a) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const d = new IntersectionObserver((r) => {
      r.forEach((l) => {
        var i;
        const f = l.isIntersecting && o.some((u) => l.intersectionRatio >= u);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = f), (i = n.get(l.target)) == null || i.forEach((u) => {
          u(f, l);
        });
      });
    }, e);
    o = d.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
      id: t,
      observer: d,
      elements: n
    }, H.set(t, a);
  }
  return a;
}
function ee(e, t, a = {}, n = X) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const i = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof a.threshold == "number" ? a.threshold : 0,
      time: 0,
      boundingClientRect: i,
      intersectionRect: i,
      rootBounds: i
    }), () => {
    };
  }
  const { id: o, observer: d, elements: r } = P(a), l = r.get(e) || [];
  return r.has(e) || r.set(e, l), l.push(t), d.observe(e), function() {
    l.splice(l.indexOf(t), 1), l.length === 0 && (r.delete(e), d.unobserve(e)), r.size === 0 && (d.disconnect(), H.delete(o));
  };
}
function te({
  threshold: e,
  delay: t,
  trackVisibility: a,
  rootMargin: n,
  root: o,
  triggerOnce: d,
  skip: r,
  initialInView: l,
  fallbackInView: i,
  onChange: f
} = {}) {
  var u;
  const [h, N] = w.useState(null), m = w.useRef(f), [x, S] = w.useState({
    inView: !!l,
    entry: void 0
  });
  m.current = f, w.useEffect(
    () => {
      if (r || !h) return;
      let v;
      return v = ee(
        h,
        (j, s) => {
          S({
            inView: j,
            entry: s
          }), m.current && m.current(j, s), s.isIntersecting && d && v && (v(), v = void 0);
        },
        {
          root: o,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: a,
          // @ts-ignore
          delay: t
        },
        i
      ), () => {
        v && v();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      h,
      o,
      n,
      d,
      r,
      a,
      i,
      t
    ]
  );
  const R = (u = x.entry) == null ? void 0 : u.target, A = w.useRef(void 0);
  !h && R && !d && !r && A.current !== R && (A.current = R, S({
    inView: !!l,
    entry: void 0
  }));
  const b = [N, x.inView, x.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const se = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", re = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", ne = (e, t, a) => {
  const n = a.find(
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
function fe({
  rows: e,
  columns: t,
  onSortChange: a,
  onRowsScrollEnd: n,
  variant: o = "unstyled",
  isLoading: d = !1,
  childrenProps: r,
  ...l
}) {
  var b, v, j;
  const { sortConfiguration: i, updateSort: f } = K({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: a
  }), u = U(null), {
    ref: h,
    inView: N,
    entry: m
  } = te({ threshold: 0.5, rootMargin: "100px" }), x = (s) => {
    u.current = s, h(s);
  };
  if (z(() => {
    if (!N || !n)
      return;
    const s = m == null ? void 0 : m.target;
    if (!(s instanceof HTMLDivElement))
      return;
    const g = () => {
      const $ = {
        visibleRows: Math.ceil(s.clientHeight / 48),
        visibleStartIndex: Math.floor(s.scrollTop / 48),
        visibleEndIndex: Math.min(
          Math.floor((s.scrollTop + s.clientHeight) / 48),
          e.length
        )
      }, M = new UIEvent("scroll");
      M.target = s, n({
        params: $,
        scrollEvent: M,
        details: {
          reason: "scroll"
        }
      });
    };
    return s.addEventListener("scroll", g), () => {
      s.removeEventListener("scroll", g);
    };
  }, [N, n, e.length]), d)
    return /* @__PURE__ */ c.jsx(
      Q,
      {
        columns: t.length,
        checkboxSelection: l.showSelectionCheckboxes,
        variant: o,
        rows: e.length
      }
    );
  const S = O[o], R = [
    ...t.map((s, g) => ({
      ...s,
      key: typeof s.field == "string" ? String(s.field) : String(g),
      label: s.header
    }))
  ], A = (s) => {
    const g = t.find(
      (T) => typeof T.field == "string" && T.field.length > 0 && String(T.field) === s.key
    ), p = g == null ? void 0 : g.field;
    p != null && p !== "actions" && f(
      p,
      i.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ c.jsx("div", { ref: x, children: /* @__PURE__ */ c.jsxs(
    _,
    {
      "aria-label": "data-grid",
      ...l,
      classNames: {
        ...l.classNames,
        th: y(S.th, (b = l.classNames) == null ? void 0 : b.th),
        tr: y(S.tr, (v = l.classNames) == null ? void 0 : v.tr),
        base: y("max-h-[600px] overflow-auto", (j = l.classNames) == null ? void 0 : j.base)
      },
      children: [
        /* @__PURE__ */ c.jsx(
          C,
          {
            columns: R,
            ...r == null ? void 0 : r.tableHeaderProps,
            children: (s) => /* @__PURE__ */ c.jsx(
              D,
              {
                "aria-label": se(s),
                ...r == null ? void 0 : r.tableColumnProps,
                children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 ", children: [
                  s.label,
                  s.sortable !== !1 && /* @__PURE__ */ c.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => A(s),
                      role: "button",
                      "aria-label": re(s.label),
                      children: [
                        /* @__PURE__ */ c.jsx(
                          F,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              i.key === s.key && i.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ c.jsx(
                          W,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              i.key === s.key && i.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ c.jsx(L, { items: e, ...r == null ? void 0 : r.tableBodyProps, children: (s) => /* @__PURE__ */ c.jsx(B, { ...r == null ? void 0 : r.tableRowProps, children: (g) => /* @__PURE__ */ c.jsx(G, { ...r == null ? void 0 : r.tableCellProps, children: ne(g, s, t) }) }, s.id) })
      ]
    }
  ) });
}
export {
  fe as DataGrid
};
