/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as m from "react";
import { useState as V, useEffect as D } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as B, TableHeader as G, TableColumn as M, Skeleton as R, TableBody as L, TableRow as O, TableCell as H, Checkbox as _ } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as U } from "@tabler/icons-react";
const W = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, l] = V(/* @__PURE__ */ new Set()), [o, s] = V(!1);
  return D(() => {
    s(r.size === e.length);
  }, [r, e]), {
    isAllChecked: o,
    checkedRows: r,
    handleSelectionChange: (u) => {
      l((a) => {
        const c = new Set(a), y = Array.from(c).find((h) => h.id === u.id);
        return y ? c.delete(y) : c.add(u), t == null || t(Array.from(c)), c;
      });
    },
    handleSelectAll: (u) => {
      const a = u ? new Set(e) : /* @__PURE__ */ new Set();
      l(a), t == null || t(Array.from(a));
    }
  };
}, q = { key: null, direction: "asc" }, J = ({
  onSortChange: e
}) => {
  const [t, r] = V(q);
  return { sortConfig: t, handleSortChange: (o, s) => {
    r({ key: o, direction: s }), e == null || e(o, s);
  } };
}, Q = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: r
}) => ({
  ...W({ rows: e, onSelectionChange: t }),
  ...J({ onSortChange: r })
}), E = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 even:bg-content2 h-12"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 hover:bg-content2 h-12"
  }
}, X = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: r = !0,
  variant: l = "unstyled",
  className: o
}) => {
  const s = E[l], i = r ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(B, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ d.jsx(G, { className: g(s.header), children: Array(i).fill(null).map((f, u) => /* @__PURE__ */ d.jsx(M, { className: g(s.column), children: u === 0 && r ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ d.jsx(L, { children: Array(t).fill(null).map((f, u) => /* @__PURE__ */ d.jsx(O, { className: g(s.row), children: Array(i).fill(null).map((a, c) => /* @__PURE__ */ d.jsx(H, { children: c === 0 && r ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, u)) })
  ] });
};
var z = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new WeakMap(), $ = 0, Y = void 0;
function Z(e) {
  return e ? (I.has(e) || ($ += 1, I.set(e, $.toString())), I.get(e)) : "0";
}
function K(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Z(e.root) : e[t]}`).toString();
}
function N(e) {
  const t = K(e);
  let r = z.get(t);
  if (!r) {
    const l = /* @__PURE__ */ new Map();
    let o;
    const s = new IntersectionObserver((i) => {
      i.forEach((f) => {
        var u;
        const a = f.isIntersecting && o.some((c) => f.intersectionRatio >= c);
        e.trackVisibility && typeof f.isVisible > "u" && (f.isVisible = a), (u = l.get(f.target)) == null || u.forEach((c) => {
          c(a, f);
        });
      });
    }, e);
    o = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: s,
      elements: l
    }, z.set(t, r);
  }
  return r;
}
function P(e, t, r = {}, l = Y) {
  if (typeof window.IntersectionObserver > "u" && l !== void 0) {
    const u = e.getBoundingClientRect();
    return t(l, {
      isIntersecting: l,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: o, observer: s, elements: i } = N(r), f = i.get(e) || [];
  return i.has(e) || i.set(e, f), f.push(t), s.observe(e), function() {
    f.splice(f.indexOf(t), 1), f.length === 0 && (i.delete(e), s.unobserve(e)), i.size === 0 && (s.disconnect(), z.delete(o));
  };
}
function ee({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: l,
  root: o,
  triggerOnce: s,
  skip: i,
  initialInView: f,
  fallbackInView: u,
  onChange: a
} = {}) {
  var c;
  const [y, h] = m.useState(null), p = m.useRef(a), [S, A] = m.useState({
    inView: !!f,
    entry: void 0
  });
  p.current = a, m.useEffect(
    () => {
      if (i || !y) return;
      let v;
      return v = P(
        y,
        (C, n) => {
          A({
            inView: C,
            entry: n
          }), p.current && p.current(C, n), n.isIntersecting && s && v && (v(), v = void 0);
        },
        {
          root: o,
          rootMargin: l,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        u
      ), () => {
        v && v();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      y,
      o,
      l,
      s,
      i,
      r,
      u,
      t
    ]
  );
  const j = (c = S.entry) == null ? void 0 : c.target, k = m.useRef(void 0);
  !y && j && !s && !i && k.current !== j && (k.current = j, A({
    inView: !!f,
    entry: void 0
  }));
  const b = [h, S.inView, S.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
function te(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function re(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ne(e, t, r) {
  const l = r.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (l === void 0)
    return null;
  if (l.cell !== void 0)
    return l.cell(t);
  if (typeof l.field == "string" && l.field.length > 0 && l.field in t) {
    const o = t[l.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
}
function ue({
  rows: e,
  columns: t,
  onEndReached: r,
  onSelectionChange: l,
  onSortChange: o,
  showSelectionCheckboxes: s = !0,
  classNames: i,
  variant: f = "unstyled",
  isLoading: u = !1,
  childrenProps: a,
  ...c
}) {
  const {
    isAllChecked: y,
    sortConfig: h,
    handleSelectionChange: p,
    handleSelectAll: S,
    handleSortChange: A,
    checkedRows: j
  } = Q({
    rows: e,
    onSelectionChange: l,
    onSortChange: o
  }), { inView: k } = ee({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (D(() => {
    k && (r == null || r());
  }, [k, r]), u)
    return /* @__PURE__ */ d.jsx(
      X,
      {
        columns: t.length,
        checkboxSelection: s,
        variant: f,
        rows: e.length
      }
    );
  const b = E[f], v = [
    ...s === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((n, x) => ({
      ...n,
      key: typeof n.field == "string" ? String(n.field) : String(x),
      label: n.header
    }))
  ], C = (n) => {
    const x = t.find(
      (T) => typeof T.field == "string" && T.field.length > 0 && String(T.field) === n.key
    ), w = x == null ? void 0 : x.field;
    w != null && w !== "actions" && A(
      w,
      h.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ d.jsxs(B, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...c, children: [
    /* @__PURE__ */ d.jsx(
      G,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: v,
        className: g(b.header),
        ...a == null ? void 0 : a.tableHeaderProps,
        children: (n) => /* @__PURE__ */ d.jsx(
          M,
          {
            "aria-labelledby": n.key,
            "aria-label": te(n),
            className: g(b.column),
            ...a == null ? void 0 : a.tableColumnProps,
            children: n.key === "checkbox" && s ? /* @__PURE__ */ d.jsx(
              _,
              {
                isSelected: y,
                onValueChange: S,
                "aria-label": "Select all rows",
                className: i == null ? void 0 : i.checkbox
              }
            ) : /* @__PURE__ */ d.jsxs("div", { className: g("flex items-center gap-2"), children: [
              n.label,
              n.sortable === !0 && /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: g(
                    "relative size-4 cursor-pointer",
                    i == null ? void 0 : i.sortIcon
                  ),
                  onClick: () => C(n),
                  role: "button",
                  "aria-label": re(n.label),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      F,
                      {
                        size: 16,
                        className: g(
                          "absolute -top-1",
                          h.key === n.key && h.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      U,
                      {
                        size: 16,
                        className: g(
                          "absolute top-1",
                          h.key === n.key && h.direction === "desc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          },
          n.key
        )
      }
    ),
    /* @__PURE__ */ d.jsx(L, { items: e, ...a == null ? void 0 : a.tableBodyProps, children: (n) => /* @__PURE__ */ d.jsx(
      O,
      {
        "aria-label": `Row ${n.id}`,
        "aria-labelledby": `Row ${n.id}`,
        className: g(b.row),
        ...a == null ? void 0 : a.tableRowProps,
        children: (x) => (console.log(j.has(n)), /* @__PURE__ */ d.jsx(H, { ...a == null ? void 0 : a.tableCellProps, children: x === "checkbox" && s ? /* @__PURE__ */ d.jsx(
          _,
          {
            isSelected: j.has(n),
            onValueChange: () => {
              p(n);
            },
            "aria-label": `Select row ${n.id}`,
            className: i == null ? void 0 : i.checkbox
          }
        ) : /* @__PURE__ */ d.jsx("div", { className: i == null ? void 0 : i.cellContent, children: ne(x, n, t) }) }))
      },
      n.id
    ) })
  ] });
}
export {
  ue as DataGrid
};
