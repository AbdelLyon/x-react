/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as j from "react";
import { useState as k, useEffect as z } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as R, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, i] = k(/* @__PURE__ */ new Set()), [a, o] = k(!1);
  return z(() => {
    o(r.size === e.length);
  }, [r, e]), {
    selectedRows: r,
    allRowsSelected: a,
    toggleRowSelection: (n) => {
      i((b) => {
        const f = new Set(b);
        return f.has(n) ? f.delete(n) : f.add(n), t == null || t(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (n) => {
      const b = n ? new Set(e) : /* @__PURE__ */ new Set();
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
  return { sortConfiguration: t, updateSort: (a, o) => {
    r({ key: a, direction: o }), e == null || e(a, o);
  } };
}, E = (e) => ({
  ...$(e),
  ...H(e)
}), M = {
  bordered: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4",
    tr: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2"
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
  checkboxSelection: r = !0,
  variant: i = "unstyled",
  className: a
}) => {
  const o = M[i], s = r ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: a, children: [
    /* @__PURE__ */ d.jsx(_, { className: y(o.thead), children: Array(s).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(C, { className: y(o.th), children: n === 0 && r ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ d.jsx(D, { children: Array(t).fill(null).map((l, n) => /* @__PURE__ */ d.jsx(B, { className: y(o.tr), children: Array(s).fill(null).map((b, f) => /* @__PURE__ */ d.jsx(G, { children: f === 0 && r ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, n)) })
  ] });
};
var T = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap(), I = 0, U = void 0;
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
  let r = T.get(t);
  if (!r) {
    const i = /* @__PURE__ */ new Map();
    let a;
    const o = new IntersectionObserver((s) => {
      s.forEach((l) => {
        var n;
        const b = l.isIntersecting && a.some((f) => l.intersectionRatio >= f);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = b), (n = i.get(l.target)) == null || n.forEach((f) => {
          f(b, l);
        });
      });
    }, e);
    a = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: o,
      elements: i
    }, T.set(t, r);
  }
  return r;
}
function K(e, t, r = {}, i = U) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const n = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: a, observer: o, elements: s } = J(r), l = s.get(e) || [];
  return s.has(e) || s.set(e, l), l.push(t), o.observe(e), function() {
    l.splice(l.indexOf(t), 1), l.length === 0 && (s.delete(e), o.unobserve(e)), s.size === 0 && (o.disconnect(), T.delete(a));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: i,
  root: a,
  triggerOnce: o,
  skip: s,
  initialInView: l,
  fallbackInView: n,
  onChange: b
} = {}) {
  var f;
  const [v, N] = j.useState(null), S = j.useRef(b), [p, w] = j.useState({
    inView: !!l,
    entry: void 0
  });
  S.current = b, j.useEffect(
    () => {
      if (s || !v) return;
      let g;
      return g = K(
        v,
        (m, A) => {
          w({
            inView: m,
            entry: A
          }), S.current && S.current(m, A), A.isIntersecting && o && g && (g(), g = void 0);
        },
        {
          root: a,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
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
      Array.isArray(e) ? e.toString() : e,
      v,
      a,
      i,
      o,
      s,
      r,
      n,
      t
    ]
  );
  const x = (f = p.entry) == null ? void 0 : f.target, u = j.useRef(void 0);
  !v && x && !o && !s && u.current !== x && (u.current = x, w({
    inView: !!l,
    entry: void 0
  }));
  const c = [N, p.inView, p.entry];
  return c.ref = c[0], c.inView = c[1], c.entry = c[2], c;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, t, r) => {
  const i = r.find(
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
  onEndReached: r,
  onSortChange: i,
  variant: a = "unstyled",
  isLoading: o = !1,
  childrenProps: s,
  ...l
}) {
  const { sortConfiguration: n, updateSort: b } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: i
  }), { inView: f } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    f && (r == null || r());
  }, [f, r]), o)
    return /* @__PURE__ */ d.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: l.showSelectionCheckboxes,
        variant: a,
        rows: e.length
      }
    );
  const v = M[a], N = [
    ...t.map((u, c) => ({
      ...u,
      key: typeof u.field == "string" ? String(u.field) : String(c),
      label: u.header
    }))
  ], S = (u) => {
    const c = t.find(
      (m) => typeof m.field == "string" && m.field.length > 0 && String(m.field) === u.key
    ), g = c == null ? void 0 : c.field;
    g != null && g !== "actions" && b(
      g,
      n.direction === "asc" ? "desc" : "asc"
    );
  }, { th: p, tr: w, ...x } = l.classNames || {};
  return /* @__PURE__ */ d.jsxs(
    V,
    {
      "aria-label": "data-grid",
      classNames: {
        th: y(v.th, p),
        tr: y(v.tr, w),
        ...x
      },
      ...l,
      children: [
        /* @__PURE__ */ d.jsx(
          _,
          {
            columns: N,
            ...s == null ? void 0 : s.tableHeaderProps,
            children: (u) => /* @__PURE__ */ d.jsx(
              C,
              {
                "aria-label": X(u),
                ...s == null ? void 0 : s.tableColumnProps,
                children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 ", children: [
                  u.label,
                  u.sortable !== !1 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => S(u),
                      role: "button",
                      "aria-label": Y(u.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          L,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              n.key === u.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          O,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              n.key === u.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              u.key
            )
          }
        ),
        /* @__PURE__ */ d.jsx(D, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (u) => /* @__PURE__ */ d.jsx(B, { ...s == null ? void 0 : s.tableRowProps, children: (c) => /* @__PURE__ */ d.jsx(G, { ...s == null ? void 0 : s.tableCellProps, children: Z(c, u, t) }) }, u.id) })
      ]
    }
  );
}
export {
  ie as DataGrid
};
