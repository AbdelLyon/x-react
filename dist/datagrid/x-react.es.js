/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as w from "react";
import { useState as z, useEffect as M } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as L, TableHeader as O, TableColumn as H, Skeleton as T, TableBody as N, TableRow as E, TableCell as F, Checkbox as B } from "@nextui-org/react";
import { IconChevronUp as W, IconChevronDown as q } from "@tabler/icons-react";
const J = {
  key: null,
  direction: "asc"
}, Q = ({
  rows: e,
  onCheckedRowsChange: t,
  onSort: l
}) => {
  const [i, o] = z([]), [c, n] = z(!1), [s, u] = z(J);
  return M(() => {
    n(i.length === e.length && e.length > 0);
  }, [i, e]), {
    selectedRows: i,
    isAllChecked: c,
    sortConfig: s,
    handleCheckboxChange: (f) => {
      const m = i.some((v) => v.id === f.id) ? i.filter((v) => v.id !== f.id) : [...i, f];
      o(m), t == null || t(m);
    },
    handleSelectAll: (f) => {
      const b = f ? [...e] : [];
      o(b), t == null || t(b);
    },
    handleSort: (f, b) => {
      u({ key: f, direction: b }), l == null || l(f, b);
    },
    isRowSelected: (f) => i.some((b) => b.id === f.id)
  };
}, X = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: l = !0,
  variant: i = "unstyled",
  className: o
}) => {
  const c = U[i], n = l ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(L, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ d.jsx(O, { className: g(c.header), children: Array(n).fill(null).map((s, u) => /* @__PURE__ */ d.jsx(H, { className: g(c.column), children: u === 0 && l ? /* @__PURE__ */ d.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(T, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ d.jsx(N, { children: Array(t).fill(null).map((s, u) => /* @__PURE__ */ d.jsx(E, { className: g(c.row), children: Array(n).fill(null).map((r, h) => /* @__PURE__ */ d.jsx(F, { children: h === 0 && l ? /* @__PURE__ */ d.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(T, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, h)) }, u)) })
  ] });
};
var _ = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new WeakMap(), G = 0, Y = void 0;
function Z(e) {
  return e ? (P.has(e) || (G += 1, P.set(e, G.toString())), P.get(e)) : "0";
}
function K(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Z(e.root) : e[t]}`).toString();
}
function p(e) {
  const t = K(e);
  let l = _.get(t);
  if (!l) {
    const i = /* @__PURE__ */ new Map();
    let o;
    const c = new IntersectionObserver((n) => {
      n.forEach((s) => {
        var u;
        const r = s.isIntersecting && o.some((h) => s.intersectionRatio >= h);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = r), (u = i.get(s.target)) == null || u.forEach((h) => {
          h(r, s);
        });
      });
    }, e);
    o = c.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), l = {
      id: t,
      observer: c,
      elements: i
    }, _.set(t, l);
  }
  return l;
}
function ee(e, t, l = {}, i = Y) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const u = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof l.threshold == "number" ? l.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: o, observer: c, elements: n } = p(l), s = n.get(e) || [];
  return n.has(e) || n.set(e, s), s.push(t), c.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (n.delete(e), c.unobserve(e)), n.size === 0 && (c.disconnect(), _.delete(o));
  };
}
function te({
  threshold: e,
  delay: t,
  trackVisibility: l,
  rootMargin: i,
  root: o,
  triggerOnce: c,
  skip: n,
  initialInView: s,
  fallbackInView: u,
  onChange: r
} = {}) {
  var h;
  const [y, I] = w.useState(null), f = w.useRef(r), [b, m] = w.useState({
    inView: !!s,
    entry: void 0
  });
  f.current = r, w.useEffect(
    () => {
      if (n || !y) return;
      let S;
      return S = ee(
        y,
        (k, C) => {
          m({
            inView: k,
            entry: C
          }), f.current && f.current(k, C), C.isIntersecting && c && S && (S(), S = void 0);
        },
        {
          root: o,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: l,
          // @ts-ignore
          delay: t
        },
        u
      ), () => {
        S && S();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      y,
      o,
      i,
      c,
      n,
      l,
      u,
      t
    ]
  );
  const v = (h = b.entry) == null ? void 0 : h.target, A = w.useRef(void 0);
  !y && v && !c && !n && A.current !== v && (A.current = v, m({
    inView: !!s,
    entry: void 0
  }));
  const x = [I, b.inView, b.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const U = {
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
function re(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function ie(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ne(e, t, l) {
  const i = l.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(t);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in t) {
    const o = t[i.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
}
function ue({
  rows: e,
  columns: t,
  onEndReached: l,
  onCheckedRowsChange: i,
  onSort: o,
  checkboxSelection: c = !0,
  classNames: n,
  variant: s = "unstyled",
  isLoading: u = !1,
  props: r
}) {
  var k, C, $, D;
  const {
    isAllChecked: h,
    sortConfig: y,
    handleCheckboxChange: I,
    handleSelectAll: f,
    handleSort: b,
    isRowSelected: m
  } = Q({
    rows: e,
    onCheckedRowsChange: i,
    onSort: o
  }), { inView: v } = te({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (M(() => {
    v && (l == null || l());
  }, [v, l]), u)
    return /* @__PURE__ */ d.jsx(
      X,
      {
        columns: t.length,
        checkboxSelection: c,
        variant: s,
        rows: e.length
      }
    );
  const A = U[s], x = [
    ...c === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((a, j) => ({
      ...a,
      key: typeof a.field == "string" ? String(a.field) : String(j),
      label: a.header
    }))
  ], S = (a) => {
    const j = t.find(
      (V) => typeof V.field == "string" && V.field.length > 0 && String(V.field) === a.key
    ), R = j == null ? void 0 : j.field;
    R != null && R !== "actions" && b(R, y.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ d.jsxs(
    L,
    {
      "aria-label": "data-grid",
      "aria-labelledby": "data-grid",
      ...r == null ? void 0 : r.tableProps,
      classNames: {
        wrapper: g("p-0", (C = (k = r == null ? void 0 : r.tableProps) == null ? void 0 : k.classNames) == null ? void 0 : C.wrapper),
        thead: g("sticky top-0 z-10", (D = ($ = r == null ? void 0 : r.tableProps) == null ? void 0 : $.classNames) == null ? void 0 : D.thead)
      },
      radius: "sm",
      children: [
        /* @__PURE__ */ d.jsx(
          O,
          {
            "aria-label": "data-grid-header",
            "aria-labelledby": "data-grid-header",
            columns: x,
            className: g(A.header),
            ...r == null ? void 0 : r.tableHeaderProps,
            children: (a) => /* @__PURE__ */ d.jsx(
              H,
              {
                "aria-labelledby": a.key,
                "aria-label": re(a),
                className: g(A.column),
                ...r == null ? void 0 : r.tableColumnProps,
                children: a.key === "checkbox" ? /* @__PURE__ */ d.jsx(
                  B,
                  {
                    isSelected: h,
                    onValueChange: f,
                    "aria-label": "Select all rows",
                    className: n == null ? void 0 : n.checkbox
                  }
                ) : /* @__PURE__ */ d.jsxs("div", { className: g("flex items-center gap-2"), children: [
                  a.label,
                  a.sortable === !0 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: g(
                        "relative size-4 cursor-pointer",
                        n == null ? void 0 : n.sortIcon
                      ),
                      onClick: () => S(a),
                      role: "button",
                      "aria-label": ie(a.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          W,
                          {
                            size: 16,
                            className: g(
                              "absolute -top-1",
                              y.key === a.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          q,
                          {
                            size: 16,
                            className: g(
                              "absolute top-1",
                              y.key === a.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              a.key
            )
          }
        ),
        /* @__PURE__ */ d.jsx(N, { items: e, ...r == null ? void 0 : r.tableBodyProps, children: (a) => /* @__PURE__ */ d.jsx(
          E,
          {
            "aria-label": `Row ${a.id}`,
            "aria-labelledby": `Row ${a.id}`,
            className: g(A.row),
            ...r == null ? void 0 : r.tableRowProps,
            children: (j) => /* @__PURE__ */ d.jsx(F, { ...r == null ? void 0 : r.tableCellProps, children: j === "checkbox" ? /* @__PURE__ */ d.jsx(
              B,
              {
                isSelected: m(a),
                onValueChange: () => I(a),
                "aria-label": `Select row ${a.id}`,
                className: n == null ? void 0 : n.checkbox
              }
            ) : /* @__PURE__ */ d.jsx("div", { className: n == null ? void 0 : n.cellContent, children: ne(j, a, t) }) })
          },
          a.id
        ) })
      ]
    }
  );
}
export {
  ue as DataGrid
};
