/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as h from "react";
import { useState as I, useEffect as z } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as _, TableHeader as V, TableColumn as C, Skeleton as R, TableBody as D, TableRow as B, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as M, IconChevronDown as O } from "@tabler/icons-react";
const L = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [a, n] = I(/* @__PURE__ */ new Set()), [l, u] = I(!1);
  return z(() => {
    u(a.size === e.length);
  }, [a, e]), {
    selectedRows: a,
    allRowsSelected: l,
    toggleRowSelection: (r) => {
      n((b) => {
        const c = new Set(b);
        return c.has(r) ? c.delete(r) : c.add(r), t == null || t(Array.from(c)), c;
      });
    },
    toggleAllRowsSelection: (r) => {
      const b = r ? new Set(e) : /* @__PURE__ */ new Set();
      n(b), t == null || t(Array.from(b));
    }
  };
}, $ = ({
  onSortChange: e
}) => {
  const [t, a] = I({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (l, u) => {
    a({ key: l, direction: u }), e == null || e(l, u);
  } };
}, H = (e) => ({
  ...L(e),
  ...$(e)
}), G = {
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
  checkboxSelection: a = !0,
  variant: n = "unstyled",
  className: l
}) => {
  const u = G[n], s = a ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(_, { radius: "sm", "aria-label": "Loading data", className: l, children: [
    /* @__PURE__ */ d.jsx(V, { className: y(u.thead), children: Array(s).fill(null).map((i, r) => /* @__PURE__ */ d.jsx(C, { className: y(u.th), children: r === 0 && a ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-24 rounded-md" }) }, r)) }),
    /* @__PURE__ */ d.jsx(D, { children: Array(t).fill(null).map((i, r) => /* @__PURE__ */ d.jsx(B, { className: y(u.tr), children: Array(s).fill(null).map((b, c) => /* @__PURE__ */ d.jsx(E, { children: c === 0 && a ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, r)) })
  ] });
};
var k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new WeakMap(), T = 0, U = void 0;
function W(e) {
  return e ? (N.has(e) || (T += 1, N.set(e, T.toString())), N.get(e)) : "0";
}
function q(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? W(e.root) : e[t]}`).toString();
}
function J(e) {
  const t = q(e);
  let a = k.get(t);
  if (!a) {
    const n = /* @__PURE__ */ new Map();
    let l;
    const u = new IntersectionObserver((s) => {
      s.forEach((i) => {
        var r;
        const b = i.isIntersecting && l.some((c) => i.intersectionRatio >= c);
        e.trackVisibility && typeof i.isVisible > "u" && (i.isVisible = b), (r = n.get(i.target)) == null || r.forEach((c) => {
          c(b, i);
        });
      });
    }, e);
    l = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
      id: t,
      observer: u,
      elements: n
    }, k.set(t, a);
  }
  return a;
}
function K(e, t, a = {}, n = U) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const r = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof a.threshold == "number" ? a.threshold : 0,
      time: 0,
      boundingClientRect: r,
      intersectionRect: r,
      rootBounds: r
    }), () => {
    };
  }
  const { id: l, observer: u, elements: s } = J(a), i = s.get(e) || [];
  return s.has(e) || s.set(e, i), i.push(t), u.observe(e), function() {
    i.splice(i.indexOf(t), 1), i.length === 0 && (s.delete(e), u.unobserve(e)), s.size === 0 && (u.disconnect(), k.delete(l));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: a,
  rootMargin: n,
  root: l,
  triggerOnce: u,
  skip: s,
  initialInView: i,
  fallbackInView: r,
  onChange: b
} = {}) {
  var c;
  const [v, w] = h.useState(null), j = h.useRef(b), [m, p] = h.useState({
    inView: !!i,
    entry: void 0
  });
  j.current = b, h.useEffect(
    () => {
      if (s || !v) return;
      let g;
      return g = K(
        v,
        (S, A) => {
          p({
            inView: S,
            entry: A
          }), j.current && j.current(S, A), A.isIntersecting && u && g && (g(), g = void 0);
        },
        {
          root: l,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: a,
          // @ts-ignore
          delay: t
        },
        r
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
      n,
      u,
      s,
      a,
      r,
      t
    ]
  );
  const x = (c = m.entry) == null ? void 0 : c.target, o = h.useRef(void 0);
  !v && x && !u && !s && o.current !== x && (o.current = x, p({
    inView: !!i,
    entry: void 0
  }));
  const f = [w, m.inView, m.entry];
  return f.ref = f[0], f.inView = f[1], f.entry = f[2], f;
}
const X = (e, t) => {
  z(() => {
    e && t && t();
  }, [e, t]);
}, Y = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Z = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", P = (e, t, a) => {
  const n = a.find(
    (l) => typeof l.field == "string" && String(l.field) === String(e)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(t);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in t) {
    const l = t[n.field];
    return typeof l == "string" || typeof l == "number" ? String(l) : null;
  }
  return null;
};
function ie({
  rows: e,
  columns: t,
  onSortChange: a,
  variant: n = "unstyled",
  isLoading: l = !1,
  onRowsScrollEnd: u,
  childrenProps: s,
  ...i
}) {
  var p, x;
  const { sortConfiguration: r, updateSort: b } = H({
    rows: e,
    onSortChange: a
  }), { ref: c, inView: v } = Q({
    threshold: 0.1,
    // Réduit le seuil
    rootMargin: "100px",
    // Ajoute une marge pour déclencher plus tôt
    delay: 100
    // Ajoute un petit délai
  });
  X(v, u);
  const w = t.map((o, f) => ({
    ...o,
    key: typeof o.field == "string" ? String(o.field) : String(f),
    label: o.header
  })), j = (o) => {
    const f = t.find(
      (S) => typeof S.field == "string" && S.field.length > 0 && String(S.field) === o.key
    ), g = f == null ? void 0 : f.field;
    g != null && g !== "actions" && b(
      g,
      r.direction === "asc" ? "desc" : "asc"
    );
  };
  if (l)
    return /* @__PURE__ */ d.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: i.showSelectionCheckboxes,
        variant: n,
        rows: e.length
      }
    );
  const m = G[n];
  return /* @__PURE__ */ d.jsx("div", { ref: c, children: /* @__PURE__ */ d.jsxs(
    _,
    {
      "aria-label": "data-grid",
      ...i,
      classNames: {
        ...i.classNames,
        th: y(m.th, (p = i.classNames) == null ? void 0 : p.th),
        tr: y(m.tr, (x = i.classNames) == null ? void 0 : x.tr)
      },
      ref: c,
      children: [
        /* @__PURE__ */ d.jsx(
          V,
          {
            columns: w,
            ...s == null ? void 0 : s.tableHeaderProps,
            children: (o) => /* @__PURE__ */ d.jsx(
              C,
              {
                "aria-label": Y(o),
                ...s == null ? void 0 : s.tableColumnProps,
                children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                  o.label,
                  o.sortable !== !1 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => j(o),
                      role: "button",
                      "aria-label": Z(o.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          M,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              r.key === o.key && r.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          O,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              r.key === o.key && r.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ d.jsx(D, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (o) => {
          const f = e.indexOf(o);
          return /* @__PURE__ */ d.jsx(
            B,
            {
              ...s == null ? void 0 : s.tableRowProps,
              ref: f === e.length - 1 ? c : null,
              children: (g) => /* @__PURE__ */ d.jsx(E, { ...s == null ? void 0 : s.tableCellProps, children: P(g, o, t) })
            },
            o.id
          );
        } })
      ]
    }
  ) });
}
export {
  ie as DataGrid
};
