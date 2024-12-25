/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as C from "react";
import { useState as V, useEffect as $ } from "react";
import { cn as x } from "../utils/x-react.es.js";
import { Table as D, TableHeader as B, TableColumn as G, Skeleton as R, TableBody as M, TableRow as L, TableCell as O, Checkbox as P } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as F } from "@tabler/icons-react";
const U = {
  key: null,
  direction: "asc"
}, W = ({
  rows: e,
  onCheckedRowsChange: t,
  onSort: l
}) => {
  const [r, o] = V([]), [c, i] = V(!1), [s, u] = V(U);
  return $(() => {
    i(r.length === e.length && e.length > 0);
  }, [r, e]), {
    selectedRows: r,
    isAllChecked: c,
    sortConfig: s,
    handleCheckboxChange: (f) => {
      const m = r.some((v) => v.id === f.id) ? r.filter((v) => v.id !== f.id) : [...r, f];
      o(m), t == null || t(m);
    },
    handleSelectAll: (f) => {
      const b = f ? [...e] : [];
      o(b), t == null || t(b);
    },
    handleSort: (f, b) => {
      u({ key: f, direction: b }), l == null || l(f, b);
    },
    isRowSelected: (f) => r.some((b) => b.id === f.id)
  };
}, q = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: l = !0,
  variant: r = "unstyled",
  className: o
}) => {
  const c = H[r], i = l ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(D, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ d.jsx(B, { className: x(c.header), children: Array(i).fill(null).map((s, u) => /* @__PURE__ */ d.jsx(G, { className: x(c.column), children: u === 0 && l ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ d.jsx(M, { children: Array(t).fill(null).map((s, u) => /* @__PURE__ */ d.jsx(L, { className: x(c.row), children: Array(i).fill(null).map((a, h) => /* @__PURE__ */ d.jsx(O, { children: h === 0 && l ? /* @__PURE__ */ d.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, h)) }, u)) })
  ] });
};
var z = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap(), _ = 0, J = void 0;
function Q(e) {
  return e ? (T.has(e) || (_ += 1, T.set(e, _.toString())), T.get(e)) : "0";
}
function X(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Q(e.root) : e[t]}`).toString();
}
function Y(e) {
  const t = X(e);
  let l = z.get(t);
  if (!l) {
    const r = /* @__PURE__ */ new Map();
    let o;
    const c = new IntersectionObserver((i) => {
      i.forEach((s) => {
        var u;
        const a = s.isIntersecting && o.some((h) => s.intersectionRatio >= h);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = a), (u = r.get(s.target)) == null || u.forEach((h) => {
          h(a, s);
        });
      });
    }, e);
    o = c.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), l = {
      id: t,
      observer: c,
      elements: r
    }, z.set(t, l);
  }
  return l;
}
function Z(e, t, l = {}, r = J) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const u = e.getBoundingClientRect();
    return t(r, {
      isIntersecting: r,
      target: e,
      intersectionRatio: typeof l.threshold == "number" ? l.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: o, observer: c, elements: i } = Y(l), s = i.get(e) || [];
  return i.has(e) || i.set(e, s), s.push(t), c.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (i.delete(e), c.unobserve(e)), i.size === 0 && (c.disconnect(), z.delete(o));
  };
}
function K({
  threshold: e,
  delay: t,
  trackVisibility: l,
  rootMargin: r,
  root: o,
  triggerOnce: c,
  skip: i,
  initialInView: s,
  fallbackInView: u,
  onChange: a
} = {}) {
  var h;
  const [y, k] = C.useState(null), f = C.useRef(a), [b, m] = C.useState({
    inView: !!s,
    entry: void 0
  });
  f.current = a, C.useEffect(
    () => {
      if (i || !y) return;
      let j;
      return j = Z(
        y,
        (n, g) => {
          m({
            inView: n,
            entry: g
          }), f.current && f.current(n, g), g.isIntersecting && c && j && (j(), j = void 0);
        },
        {
          root: o,
          rootMargin: r,
          threshold: e,
          // @ts-ignore
          trackVisibility: l,
          // @ts-ignore
          delay: t
        },
        u
      ), () => {
        j && j();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      y,
      o,
      r,
      c,
      i,
      l,
      u,
      t
    ]
  );
  const v = (h = b.entry) == null ? void 0 : h.target, A = C.useRef(void 0);
  !y && v && !c && !i && A.current !== v && (A.current = v, m({
    inView: !!s,
    entry: void 0
  }));
  const S = [k, b.inView, b.entry];
  return S.ref = S[0], S.inView = S[1], S.entry = S[2], S;
}
const H = {
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
};
function N(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function p(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ee(e, t, l) {
  const r = l.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(t);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in t) {
    const o = t[r.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
}
function de({
  rows: e,
  columns: t,
  onEndReached: l,
  onCheckedRowsChange: r,
  onSort: o,
  checkboxSelection: c = !0,
  classNames: i,
  variant: s = "unstyled",
  isLoading: u = !1,
  props: a
}) {
  const {
    isAllChecked: h,
    sortConfig: y,
    handleCheckboxChange: k,
    handleSelectAll: f,
    handleSort: b,
    isRowSelected: m
  } = W({
    rows: e,
    onCheckedRowsChange: r,
    onSort: o
  }), { inView: v } = K({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if ($(() => {
    v && (l == null || l());
  }, [v, l]), u)
    return /* @__PURE__ */ d.jsx(
      q,
      {
        columns: t.length,
        checkboxSelection: c,
        variant: s,
        rows: e.length
      }
    );
  const A = H[s], S = [
    ...c === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((n, g) => ({
      ...n,
      key: typeof n.field == "string" ? String(n.field) : String(g),
      label: n.header
    }))
  ], j = (n) => {
    const g = t.find(
      (w) => typeof w.field == "string" && w.field.length > 0 && String(w.field) === n.key
    ), I = g == null ? void 0 : g.field;
    I != null && I !== "actions" && b(I, y.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ d.jsxs(
    D,
    {
      "aria-label": "data-grid",
      "aria-labelledby": "data-grid",
      ...a == null ? void 0 : a.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ d.jsx(
          B,
          {
            "aria-label": "data-grid-header",
            "aria-labelledby": "data-grid-header",
            columns: S,
            className: x(A.header),
            ...a == null ? void 0 : a.tableHeaderProps,
            children: (n) => /* @__PURE__ */ d.jsx(
              G,
              {
                "aria-labelledby": n.key,
                "aria-label": N(n),
                className: x(A.column),
                ...a == null ? void 0 : a.tableColumnProps,
                children: n.key === "checkbox" ? /* @__PURE__ */ d.jsx(
                  P,
                  {
                    isSelected: h,
                    onValueChange: f,
                    "aria-label": "Select all rows",
                    className: i == null ? void 0 : i.checkbox
                  }
                ) : /* @__PURE__ */ d.jsxs("div", { className: x("flex items-center gap-2"), children: [
                  n.label,
                  n.sortable === !0 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: x(
                        "relative size-4 cursor-pointer",
                        i == null ? void 0 : i.sortIcon
                      ),
                      onClick: () => j(n),
                      role: "button",
                      "aria-label": p(n.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          E,
                          {
                            size: 16,
                            className: x(
                              "absolute -top-1",
                              y.key === n.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          F,
                          {
                            size: 16,
                            className: x(
                              "absolute top-1",
                              y.key === n.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ d.jsx(M, { items: e, ...a == null ? void 0 : a.tableBodyProps, children: (n) => /* @__PURE__ */ d.jsx(
          L,
          {
            "aria-label": `Row ${n.id}`,
            "aria-labelledby": `Row ${n.id}`,
            className: x(A.row),
            ...a == null ? void 0 : a.tableRowProps,
            children: (g) => /* @__PURE__ */ d.jsx(O, { ...a == null ? void 0 : a.tableCellProps, children: g === "checkbox" ? /* @__PURE__ */ d.jsx(
              P,
              {
                isSelected: m(n),
                onValueChange: () => k(n),
                "aria-label": `Select row ${n.id}`,
                className: i == null ? void 0 : i.checkbox
              }
            ) : /* @__PURE__ */ d.jsx("div", { className: i == null ? void 0 : i.cellContent, children: ee(g, n, t) }) })
          },
          n.id
        ) })
      ]
    }
  );
}
export {
  de as DataGrid
};
