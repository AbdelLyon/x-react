/* empty css                */
import { j as u } from "../jsx-runtime-Dx-03ztt.js";
import * as h from "react";
import { useState as k, useEffect as z } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as w, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: t,
  onSelectionChange: e
}) => {
  const [r, a] = k(/* @__PURE__ */ new Set()), [l, o] = k(!1);
  return z(() => {
    o(r.size === t.length);
  }, [r, t]), {
    selectedRows: r,
    allRowsSelected: l,
    toggleRowSelection: (n) => {
      a((b) => {
        const f = new Set(b);
        return f.has(n) ? f.delete(n) : f.add(n), e == null || e(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (n) => {
      const b = n ? new Set(t) : /* @__PURE__ */ new Set();
      a(b), e == null || e(Array.from(b));
    }
  };
}, H = ({
  onSortChange: t
}) => {
  const [e, r] = k({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: e, updateSort: (l, o) => {
    r({ key: l, direction: o }), t == null || t(l, o);
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
  variant: a = "unstyled",
  className: l
}) => {
  const o = M[a], s = r ? t + 1 : t;
  return /* @__PURE__ */ u.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: l, children: [
    /* @__PURE__ */ u.jsx(_, { className: y(o.thead), children: Array(s).fill(null).map((i, n) => /* @__PURE__ */ u.jsx(C, { className: y(o.th), children: n === 0 && r ? /* @__PURE__ */ u.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(w, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ u.jsx(D, { children: Array(e).fill(null).map((i, n) => /* @__PURE__ */ u.jsx(B, { className: y(o.tr), children: Array(s).fill(null).map((b, f) => /* @__PURE__ */ u.jsx(G, { children: f === 0 && r ? /* @__PURE__ */ u.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, n)) })
  ] });
};
var T = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new WeakMap(), I = 0, U = void 0;
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
  let r = T.get(e);
  if (!r) {
    const a = /* @__PURE__ */ new Map();
    let l;
    const o = new IntersectionObserver((s) => {
      s.forEach((i) => {
        var n;
        const b = i.isIntersecting && l.some((f) => i.intersectionRatio >= f);
        t.trackVisibility && typeof i.isVisible > "u" && (i.isVisible = b), (n = a.get(i.target)) == null || n.forEach((f) => {
          f(b, i);
        });
      });
    }, t);
    l = o.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), r = {
      id: e,
      observer: o,
      elements: a
    }, T.set(e, r);
  }
  return r;
}
function K(t, e, r = {}, a = U) {
  if (typeof window.IntersectionObserver > "u" && a !== void 0) {
    const n = t.getBoundingClientRect();
    return e(a, {
      isIntersecting: a,
      target: t,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: l, observer: o, elements: s } = J(r), i = s.get(t) || [];
  return s.has(t) || s.set(t, i), i.push(e), o.observe(t), function() {
    i.splice(i.indexOf(e), 1), i.length === 0 && (s.delete(t), o.unobserve(t)), s.size === 0 && (o.disconnect(), T.delete(l));
  };
}
function Q({
  threshold: t,
  delay: e,
  trackVisibility: r,
  rootMargin: a,
  root: l,
  triggerOnce: o,
  skip: s,
  initialInView: i,
  fallbackInView: n,
  onChange: b
} = {}) {
  var f;
  const [v, N] = h.useState(null), j = h.useRef(b), [m, p] = h.useState({
    inView: !!i,
    entry: void 0
  });
  j.current = b, h.useEffect(
    () => {
      if (s || !v) return;
      let g;
      return g = K(
        v,
        (x, A) => {
          p({
            inView: x,
            entry: A
          }), j.current && j.current(x, A), A.isIntersecting && o && g && (g(), g = void 0);
        },
        {
          root: l,
          rootMargin: a,
          threshold: t,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: e
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
      Array.isArray(t) ? t.toString() : t,
      v,
      l,
      a,
      o,
      s,
      r,
      n,
      e
    ]
  );
  const S = (f = m.entry) == null ? void 0 : f.target, d = h.useRef(void 0);
  !v && S && !o && !s && d.current !== S && (d.current = S, p({
    inView: !!i,
    entry: void 0
  }));
  const c = [N, m.inView, m.entry];
  return c.ref = c[0], c.inView = c[1], c.entry = c[2], c;
}
const X = (t) => typeof t.label == "string" && t.label.length > 0 ? t.label : typeof t.key == "string" && t.key.length > 0 ? t.key : "Column", Y = (t) => typeof t == "string" && t.length > 0 ? `Sort by ${t}` : "Sort column", Z = (t, e, r) => {
  const a = r.find(
    (l) => typeof l.field == "string" && String(l.field) === String(t)
  );
  if (a === void 0)
    return null;
  if (a.cell !== void 0)
    return a.cell(e);
  if (typeof a.field == "string" && a.field.length > 0 && a.field in e) {
    const l = e[a.field];
    return typeof l == "string" || typeof l == "number" ? String(l) : null;
  }
  return null;
};
function at({
  rows: t,
  columns: e,
  onEndReached: r,
  onSortChange: a,
  variant: l = "unstyled",
  isLoading: o = !1,
  childrenProps: s,
  ...i
}) {
  var m, p, S;
  const { sortConfiguration: n, updateSort: b } = E({
    rows: t,
    onSelectionChange: () => {
    },
    onSortChange: a
  }), { inView: f } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    f && (r == null || r());
  }, [f, r]), o)
    return /* @__PURE__ */ u.jsx(
      F,
      {
        columns: e.length,
        checkboxSelection: i.showSelectionCheckboxes,
        variant: l,
        rows: t.length
      }
    );
  const v = M[l], N = [
    ...e.map((d, c) => ({
      ...d,
      key: typeof d.field == "string" ? String(d.field) : String(c),
      label: d.header
    }))
  ], j = (d) => {
    const c = e.find(
      (x) => typeof x.field == "string" && x.field.length > 0 && String(x.field) === d.key
    ), g = c == null ? void 0 : c.field;
    g != null && g !== "actions" && b(
      g,
      n.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ u.jsxs(
    V,
    {
      "aria-label": "data-grid",
      ...i,
      classNames: {
        thead: y(v.thead, (m = i.classNames) == null ? void 0 : m.thead),
        th: y(v.th, (p = i.classNames) == null ? void 0 : p.th),
        tr: y(v.tr, (S = i.classNames) == null ? void 0 : S.tr),
        ...i.classNames
      },
      children: [
        /* @__PURE__ */ u.jsx(
          _,
          {
            columns: N,
            ...s == null ? void 0 : s.tableHeaderProps,
            children: (d) => /* @__PURE__ */ u.jsx(
              C,
              {
                "aria-label": X(d),
                ...s == null ? void 0 : s.tableColumnProps,
                children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                  d.label,
                  d.sortable !== !1 && /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => j(d),
                      role: "button",
                      "aria-label": Y(d.label),
                      children: [
                        /* @__PURE__ */ u.jsx(
                          L,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              n.key === d.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ u.jsx(
                          O,
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
        /* @__PURE__ */ u.jsx(D, { items: t, ...s == null ? void 0 : s.tableBodyProps, children: (d) => /* @__PURE__ */ u.jsx(B, { ...s == null ? void 0 : s.tableRowProps, children: (c) => /* @__PURE__ */ u.jsx(G, { ...s == null ? void 0 : s.tableCellProps, children: Z(c, d, e) }) }, d.id) })
      ]
    }
  );
}
export {
  at as DataGrid
};
