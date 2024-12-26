/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as j from "react";
import { useState as N, useEffect as z } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as w, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, n] = N(/* @__PURE__ */ new Set()), [a, o] = N(!1);
  return z(() => {
    o(r.size === e.length);
  }, [r, e]), {
    selectedRows: r,
    allRowsSelected: a,
    toggleRowSelection: (i) => {
      n((c) => {
        const f = new Set(c);
        return f.has(i) ? f.delete(i) : f.add(i), t == null || t(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (i) => {
      const c = i ? new Set(e) : /* @__PURE__ */ new Set();
      n(c), t == null || t(Array.from(c));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [t, r] = N({
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
  variant: n = "unstyled",
  className: a
}) => {
  const o = M[n], s = r ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: a, children: [
    /* @__PURE__ */ d.jsx(_, { className: g(o.thead), children: Array(s).fill(null).map((u, i) => /* @__PURE__ */ d.jsx(C, { className: g(o.th), children: i === 0 && r ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-24 rounded-md" }) }, i)) }),
    /* @__PURE__ */ d.jsx(D, { children: Array(t).fill(null).map((u, i) => /* @__PURE__ */ d.jsx(B, { className: g(o.tr), children: Array(s).fill(null).map((c, f) => /* @__PURE__ */ d.jsx(G, { children: f === 0 && r ? /* @__PURE__ */ d.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, i)) })
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
    const n = /* @__PURE__ */ new Map();
    let a;
    const o = new IntersectionObserver((s) => {
      s.forEach((u) => {
        var i;
        const c = u.isIntersecting && a.some((f) => u.intersectionRatio >= f);
        e.trackVisibility && typeof u.isVisible > "u" && (u.isVisible = c), (i = n.get(u.target)) == null || i.forEach((f) => {
          f(c, u);
        });
      });
    }, e);
    a = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: o,
      elements: n
    }, k.set(t, r);
  }
  return r;
}
function K(e, t, r = {}, n = U) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const i = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: i,
      intersectionRect: i,
      rootBounds: i
    }), () => {
    };
  }
  const { id: a, observer: o, elements: s } = J(r), u = s.get(e) || [];
  return s.has(e) || s.set(e, u), u.push(t), o.observe(e), function() {
    u.splice(u.indexOf(t), 1), u.length === 0 && (s.delete(e), o.unobserve(e)), s.size === 0 && (o.disconnect(), k.delete(a));
  };
}
function Q({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: n,
  root: a,
  triggerOnce: o,
  skip: s,
  initialInView: u,
  fallbackInView: i,
  onChange: c
} = {}) {
  var f;
  const [y, h] = j.useState(null), p = j.useRef(c), [l, b] = j.useState({
    inView: !!u,
    entry: void 0
  });
  p.current = c, j.useEffect(
    () => {
      if (s || !y) return;
      let x;
      return x = K(
        y,
        (T, A) => {
          b({
            inView: T,
            entry: A
          }), p.current && p.current(T, A), A.isIntersecting && o && x && (x(), x = void 0);
        },
        {
          root: a,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        i
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
      n,
      o,
      s,
      r,
      i,
      t
    ]
  );
  const v = (f = l.entry) == null ? void 0 : f.target, S = j.useRef(void 0);
  !y && v && !o && !s && S.current !== v && (S.current = v, b({
    inView: !!u,
    entry: void 0
  }));
  const m = [h, l.inView, l.entry];
  return m.ref = m[0], m.inView = m[1], m.entry = m[2], m;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, t, r) => {
  const n = r.find(
    (a) => typeof a.field == "string" && String(a.field) === String(e)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(t);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in t) {
    const a = t[n.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
};
function ne({
  rows: e,
  columns: t,
  onEndReached: r,
  onSortChange: n,
  variant: a = "unstyled",
  isLoading: o = !1,
  childrenProps: s,
  ...u
}) {
  const { sortConfiguration: i, updateSort: c } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: n
  }), { inView: f } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    f && (r == null || r());
  }, [f, r]), o)
    return /* @__PURE__ */ d.jsx(
      F,
      {
        columns: t.length,
        checkboxSelection: u.showSelectionCheckboxes,
        variant: a,
        rows: e.length
      }
    );
  const y = M[a], h = [
    ...t.map((l, b) => ({
      ...l,
      key: typeof l.field == "string" ? String(l.field) : String(b),
      label: l.header
    }))
  ], p = (l) => {
    const b = t.find(
      (S) => typeof S.field == "string" && S.field.length > 0 && String(S.field) === l.key
    ), v = b == null ? void 0 : b.field;
    v != null && v !== "actions" && c(
      v,
      i.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ d.jsxs(
    V,
    {
      "aria-label": "data-grid",
      ...u,
      classNames: {
        thead: g(y.thead),
        th: g(y.th),
        tr: g(y.tr)
      },
      children: [
        /* @__PURE__ */ d.jsx(
          _,
          {
            columns: h,
            ...s == null ? void 0 : s.tableHeaderProps,
            children: (l) => /* @__PURE__ */ d.jsx(
              C,
              {
                "aria-label": X(l),
                ...s == null ? void 0 : s.tableColumnProps,
                children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                  l.label,
                  l.sortable !== !1 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: g("relative size-4 cursor-pointer"),
                      onClick: () => p(l),
                      role: "button",
                      "aria-label": Y(l.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          L,
                          {
                            size: 16,
                            className: g(
                              "absolute -top-1",
                              i.key === l.key && i.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          O,
                          {
                            size: 16,
                            className: g(
                              "absolute top-1",
                              i.key === l.key && i.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              l.key
            )
          }
        ),
        /* @__PURE__ */ d.jsx(D, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (l) => /* @__PURE__ */ d.jsx(B, { ...s == null ? void 0 : s.tableRowProps, children: (b) => /* @__PURE__ */ d.jsx(G, { ...s == null ? void 0 : s.tableCellProps, children: Z(b, l, t) }) }, l.id) })
      ]
    }
  );
}
export {
  ne as DataGrid
};
