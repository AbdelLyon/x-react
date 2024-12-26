/* empty css                */
import { j as u } from "../jsx-runtime-Dx-03ztt.js";
import * as w from "react";
import { useState as k, useEffect as z } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as R, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, i] = k(/* @__PURE__ */ new Set()), [l, o] = k(!1);
  return z(() => {
    o(r.size === e.length);
  }, [r, e]), {
    selectedRows: r,
    allRowsSelected: l,
    toggleRowSelection: (a) => {
      i((b) => {
        const f = new Set(b);
        return f.has(a) ? f.delete(a) : f.add(a), t == null || t(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (a) => {
      const b = a ? new Set(e) : /* @__PURE__ */ new Set();
      i(b), t == null || t(Array.from(b));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [t, r] = k({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (l, o) => {
    r({ key: l, direction: o }), e == null || e(l, o);
  } };
}, E = (e) => ({
  ...$(e),
  ...H(e)
}), M = {
  bordered: {
    thead: "bg-content2 py-4",
    th: "",
    tr: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2"
  },
  striped: {
    thead: "bg-content2 py-4",
    th: "",
    tr: "py-4 even:bg-content2"
  },
  unstyled: {
    thead: "bg-content2 py-4",
    th: "",
    tr: "py-4 hover:bg-content2"
  }
}, F = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: r = !0,
  variant: i = "unstyled",
  className: l
}) => {
  const o = M[i], s = r ? e + 1 : e;
  return /* @__PURE__ */ u.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: l, children: [
    /* @__PURE__ */ u.jsx(_, { className: y(o.thead), children: Array(s).fill(null).map((n, a) => /* @__PURE__ */ u.jsx(C, { className: y(o.th), children: a === 0 && r ? /* @__PURE__ */ u.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(R, { className: "h-4 w-24 rounded-md" }) }, a)) }),
    /* @__PURE__ */ u.jsx(D, { children: Array(t).fill(null).map((n, a) => /* @__PURE__ */ u.jsx(B, { className: y(o.tr), children: Array(s).fill(null).map((b, f) => /* @__PURE__ */ u.jsx(G, { children: f === 0 && r ? /* @__PURE__ */ u.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ u.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, a)) })
  ] });
};
var T = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap(), I = 0, U = void 0;
function W(e) {
  return e ? (p.has(e) || (I += 1, p.set(e, I.toString())), p.get(e)) : "0";
}
function q(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? W(e.root) : e[t]}`).toString();
}
function J(e) {
  const t = q(e);
  let r = T.get(t);
  if (!r) {
    const i = /* @__PURE__ */ new Map();
    let l;
    const o = new IntersectionObserver((s) => {
      s.forEach((n) => {
        var a;
        const b = n.isIntersecting && l.some((f) => n.intersectionRatio >= f);
        e.trackVisibility && typeof n.isVisible > "u" && (n.isVisible = b), (a = i.get(n.target)) == null || a.forEach((f) => {
          f(b, n);
        });
      });
    }, e);
    l = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: o,
      elements: i
    }, T.set(t, r);
  }
  return r;
}
function K(e, t, r = {}, i = U) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const a = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: a,
      intersectionRect: a,
      rootBounds: a
    }), () => {
    };
  }
  const { id: l, observer: o, elements: s } = J(r), n = s.get(e) || [];
  return s.has(e) || s.set(e, n), n.push(t), o.observe(e), function() {
    n.splice(n.indexOf(t), 1), n.length === 0 && (s.delete(e), o.unobserve(e)), s.size === 0 && (o.disconnect(), T.delete(l));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: i,
  root: l,
  triggerOnce: o,
  skip: s,
  initialInView: n,
  fallbackInView: a,
  onChange: b
} = {}) {
  var f;
  const [v, N] = w.useState(null), j = w.useRef(b), [m, h] = w.useState({
    inView: !!n,
    entry: void 0
  });
  j.current = b, w.useEffect(
    () => {
      if (s || !v) return;
      let g;
      return g = K(
        v,
        (x, A) => {
          h({
            inView: x,
            entry: A
          }), j.current && j.current(x, A), A.isIntersecting && o && g && (g(), g = void 0);
        },
        {
          root: l,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        a
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
      l,
      i,
      o,
      s,
      r,
      a,
      t
    ]
  );
  const S = (f = m.entry) == null ? void 0 : f.target, d = w.useRef(void 0);
  !v && S && !o && !s && d.current !== S && (d.current = S, h({
    inView: !!n,
    entry: void 0
  }));
  const c = [N, m.inView, m.entry];
  return c.ref = c[0], c.inView = c[1], c.entry = c[2], c;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, t, r) => {
  const i = r.find(
    (l) => typeof l.field == "string" && String(l.field) === String(e)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(t);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in t) {
    const l = t[i.field];
    return typeof l == "string" || typeof l == "number" ? String(l) : null;
  }
  return null;
};
function ie({
  rows: e,
  columns: t,
  onEndReached: r,
  onSortChange: i,
  variant: l = "unstyled",
  isLoading: o = !1,
  childrenProps: s,
  ...n
}) {
  var m, h, S;
  const { sortConfiguration: a, updateSort: b } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: i
  }), { inView: f } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    f && (r == null || r());
  }, [f, r]), o)
    return /* @__PURE__ */ u.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: n.showSelectionCheckboxes,
        variant: l,
        rows: e.length
      }
    );
  const v = M[l], N = [
    ...t.map((d, c) => ({
      ...d,
      key: typeof d.field == "string" ? String(d.field) : String(c),
      label: d.header
    }))
  ], j = (d) => {
    const c = t.find(
      (x) => typeof x.field == "string" && x.field.length > 0 && String(x.field) === d.key
    ), g = c == null ? void 0 : c.field;
    g != null && g !== "actions" && b(
      g,
      a.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ u.jsxs(
    V,
    {
      "aria-label": "data-grid",
      ...n,
      classNames: {
        thead: y(v.thead, (m = n.classNames) == null ? void 0 : m.thead),
        th: y(v.th, (h = n.classNames) == null ? void 0 : h.th),
        tr: y(v.tr, (S = n.classNames) == null ? void 0 : S.tr),
        ...n.classNames
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
                              a.key === d.key && a.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ u.jsx(
                          O,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              a.key === d.key && a.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ u.jsx(D, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (d) => /* @__PURE__ */ u.jsx(B, { ...s == null ? void 0 : s.tableRowProps, children: (c) => /* @__PURE__ */ u.jsx(G, { ...s == null ? void 0 : s.tableCellProps, children: Z(c, d, t) }) }, d.id) })
      ]
    }
  );
}
export {
  ie as DataGrid
};
