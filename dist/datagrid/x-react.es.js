/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as w from "react";
import { useState as P, useEffect as B } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as G, TableHeader as M, TableColumn as L, Skeleton as T, TableBody as O, TableRow as H, TableCell as E, Checkbox as $ } from "@nextui-org/react";
import { IconChevronUp as N, IconChevronDown as U } from "@tabler/icons-react";
const W = {
  key: null,
  direction: "asc"
}, q = ({
  rows: e,
  onCheckedRowsChange: t,
  onSort: l
}) => {
  const [r, o] = P([]), [c, i] = P(!1), [s, u] = P(W);
  return B(() => {
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
}, J = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: l = !0,
  variant: r = "unstyled",
  className: o
}) => {
  const c = F[r], i = l ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(G, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ d.jsx(M, { className: y(c.header), children: Array(i).fill(null).map((s, u) => /* @__PURE__ */ d.jsx(L, { className: y(c.column), children: u === 0 && l ? /* @__PURE__ */ d.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(T, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ d.jsx(O, { children: Array(t).fill(null).map((s, u) => /* @__PURE__ */ d.jsx(H, { className: y(c.row), children: Array(i).fill(null).map((n, h) => /* @__PURE__ */ d.jsx(E, { children: h === 0 && l ? /* @__PURE__ */ d.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(T, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, h)) }, u)) })
  ] });
};
var _ = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new WeakMap(), D = 0, Q = void 0;
function X(e) {
  return e ? (z.has(e) || (D += 1, z.set(e, D.toString())), z.get(e)) : "0";
}
function Y(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? X(e.root) : e[t]}`).toString();
}
function Z(e) {
  const t = Y(e);
  let l = _.get(t);
  if (!l) {
    const r = /* @__PURE__ */ new Map();
    let o;
    const c = new IntersectionObserver((i) => {
      i.forEach((s) => {
        var u;
        const n = s.isIntersecting && o.some((h) => s.intersectionRatio >= h);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = n), (u = r.get(s.target)) == null || u.forEach((h) => {
          h(n, s);
        });
      });
    }, e);
    o = c.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), l = {
      id: t,
      observer: c,
      elements: r
    }, _.set(t, l);
  }
  return l;
}
function K(e, t, l = {}, r = Q) {
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
  const { id: o, observer: c, elements: i } = Z(l), s = i.get(e) || [];
  return i.has(e) || i.set(e, s), s.push(t), c.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (i.delete(e), c.unobserve(e)), i.size === 0 && (c.disconnect(), _.delete(o));
  };
}
function p({
  threshold: e,
  delay: t,
  trackVisibility: l,
  rootMargin: r,
  root: o,
  triggerOnce: c,
  skip: i,
  initialInView: s,
  fallbackInView: u,
  onChange: n
} = {}) {
  var h;
  const [g, I] = w.useState(null), f = w.useRef(n), [b, m] = w.useState({
    inView: !!s,
    entry: void 0
  });
  f.current = n, w.useEffect(
    () => {
      if (i || !g) return;
      let S;
      return S = K(
        g,
        (C, k) => {
          m({
            inView: C,
            entry: k
          }), f.current && f.current(C, k), k.isIntersecting && c && S && (S(), S = void 0);
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
        S && S();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      g,
      o,
      r,
      c,
      i,
      l,
      u,
      t
    ]
  );
  const v = (h = b.entry) == null ? void 0 : h.target, A = w.useRef(void 0);
  !g && v && !c && !i && A.current !== v && (A.current = v, m({
    inView: !!s,
    entry: void 0
  }));
  const x = [I, b.inView, b.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const F = {
  bordered: {
    header: "bg-content2 border border-default-200 sticky top-0 z-10 ",
    column: "bg-content2 py-4 h-12",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    header: "bg-content2 border border-default-200 sticky top-0 z-10 ",
    column: "bg-content2 py-4 h-12",
    row: "py-4 even:bg-content2 h-12"
  },
  unstyled: {
    header: "bg-content2 border border-default-200 sticky top-0 z-10 ",
    column: "bg-content2 py-4 h-12",
    row: "py-4 hover:bg-content2 h-12"
  }
};
function ee(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function te(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function re(e, t, l) {
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
function oe({
  rows: e,
  columns: t,
  onEndReached: l,
  onCheckedRowsChange: r,
  onSort: o,
  checkboxSelection: c = !0,
  classNames: i,
  variant: s = "unstyled",
  isLoading: u = !1,
  props: n
}) {
  var C, k;
  const {
    isAllChecked: h,
    sortConfig: g,
    handleCheckboxChange: I,
    handleSelectAll: f,
    handleSort: b,
    isRowSelected: m
  } = q({
    rows: e,
    onCheckedRowsChange: r,
    onSort: o
  }), { inView: v } = p({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (B(() => {
    v && (l == null || l());
  }, [v, l]), u)
    return /* @__PURE__ */ d.jsx(
      J,
      {
        columns: t.length,
        checkboxSelection: c,
        variant: s,
        rows: e.length
      }
    );
  const A = F[s], x = [
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
    R != null && R !== "actions" && b(R, g.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ d.jsxs(
    G,
    {
      "aria-label": "data-grid",
      "aria-labelledby": "data-grid",
      ...n == null ? void 0 : n.tableProps,
      classNames: {
        wrapper: y("p-0", (k = (C = n == null ? void 0 : n.tableProps) == null ? void 0 : C.classNames) == null ? void 0 : k.wrapper)
      },
      radius: "sm",
      children: [
        /* @__PURE__ */ d.jsx(
          M,
          {
            "aria-label": "data-grid-header",
            "aria-labelledby": "data-grid-header",
            columns: x,
            className: y(A.header),
            ...n == null ? void 0 : n.tableHeaderProps,
            children: (a) => /* @__PURE__ */ d.jsx(
              L,
              {
                "aria-labelledby": a.key,
                "aria-label": ee(a),
                className: y(A.column),
                ...n == null ? void 0 : n.tableColumnProps,
                children: a.key === "checkbox" ? /* @__PURE__ */ d.jsx(
                  $,
                  {
                    isSelected: h,
                    onValueChange: f,
                    "aria-label": "Select all rows",
                    className: i == null ? void 0 : i.checkbox
                  }
                ) : /* @__PURE__ */ d.jsxs("div", { className: y("flex items-center gap-2"), children: [
                  a.label,
                  a.sortable === !0 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: y(
                        "relative size-4 cursor-pointer",
                        i == null ? void 0 : i.sortIcon
                      ),
                      onClick: () => S(a),
                      role: "button",
                      "aria-label": te(a.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          N,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              g.key === a.key && g.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          U,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              g.key === a.key && g.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ d.jsx(O, { items: e, ...n == null ? void 0 : n.tableBodyProps, children: (a) => /* @__PURE__ */ d.jsx(
          H,
          {
            "aria-label": `Row ${a.id}`,
            "aria-labelledby": `Row ${a.id}`,
            className: y(A.row),
            ...n == null ? void 0 : n.tableRowProps,
            children: (j) => /* @__PURE__ */ d.jsx(E, { ...n == null ? void 0 : n.tableCellProps, children: j === "checkbox" ? /* @__PURE__ */ d.jsx(
              $,
              {
                isSelected: m(a),
                onValueChange: () => I(a),
                "aria-label": `Select row ${a.id}`,
                className: i == null ? void 0 : i.checkbox
              }
            ) : /* @__PURE__ */ d.jsx("div", { className: i == null ? void 0 : i.cellContent, children: re(j, a, t) }) })
          },
          a.id
        ) })
      ]
    }
  );
}
export {
  oe as DataGrid
};
