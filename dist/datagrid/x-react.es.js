/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as k, useRef as G } from "react";
import { cn as f } from "../utils/x-react.es.js";
import { Table as R, TableHeader as w, TableColumn as A, Skeleton as x, TableBody as h, TableRow as T, TableCell as z } from "@nextui-org/react";
import { IconChevronUp as _, IconChevronDown as L } from "@tabler/icons-react";
const B = ({
  rows: e,
  onSelectionChange: l
}) => {
  const [n, s] = j(/* @__PURE__ */ new Set()), [i, d] = j(!1);
  return k(() => {
    d(n.size === e.length);
  }, [n, e]), {
    selectedRows: n,
    allRowsSelected: i,
    toggleRowSelection: (o) => {
      s((y) => {
        const u = new Set(y);
        return u.has(o) ? u.delete(o) : u.add(o), l == null || l(Array.from(u)), u;
      });
    },
    toggleAllRowsSelection: (o) => {
      const y = o ? new Set(e) : /* @__PURE__ */ new Set();
      s(y), l == null || l(Array.from(y));
    }
  };
}, F = ({
  onSortChange: e
}) => {
  const [l, n] = j({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: l, updateSort: (i, d) => {
    n({ key: i, direction: d }), e == null || e(i, d);
  } };
}, H = (e) => ({
  ...B(e),
  ...F(e)
}), I = {
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
}, V = ({
  columns: e = 5,
  rows: l = 5,
  checkboxSelection: n = !0,
  variant: s = "unstyled",
  className: i
}) => {
  const d = I[s], a = n ? e + 1 : e;
  return /* @__PURE__ */ t.jsxs(R, { radius: "sm", "aria-label": "Loading data", className: i, children: [
    /* @__PURE__ */ t.jsx(w, { className: f(d.thead), children: Array(a).fill(null).map((c, o) => /* @__PURE__ */ t.jsx(A, { className: f(d.th), children: o === 0 && n ? /* @__PURE__ */ t.jsx(x, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(x, { className: "h-4 w-24 rounded-md" }) }, o)) }),
    /* @__PURE__ */ t.jsx(h, { children: Array(l).fill(null).map((c, o) => /* @__PURE__ */ t.jsx(T, { className: f(d.tr), children: Array(a).fill(null).map((y, u) => /* @__PURE__ */ t.jsx(z, { children: u === 0 && n ? /* @__PURE__ */ t.jsx(x, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(x, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, u)) }, o)) })
  ] });
}, E = (e) => {
  const [l, n] = j(null), s = G(null);
  return { ref: (d) => {
    if (s.current && (s.current.disconnect(), s.current = null), d === null) {
      n(null);
      return;
    }
    s.current = new IntersectionObserver(([a]) => {
      n(a);
    }, e), s.current.observe(d);
  }, entry: l };
}, O = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", U = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", $ = (e, l, n) => {
  const s = n.find(
    (i) => typeof i.field == "string" && String(i.field) === String(e)
  );
  if (s === void 0)
    return null;
  if (s.cell !== void 0)
    return s.cell(l);
  if (typeof s.field == "string" && s.field.length > 0 && s.field in l) {
    const i = l[s.field];
    return typeof i == "string" || typeof i == "number" ? String(i) : null;
  }
  return null;
};
function X({
  rows: e,
  columns: l,
  onSortChange: n,
  variant: s = "unstyled",
  isLoading: i = !1,
  onRowsScrollEnd: d,
  childrenProps: a,
  ...c
}) {
  var v, N;
  const { sortConfiguration: o, updateSort: y } = H({
    rows: e,
    onSortChange: n
  }), u = l.map((r, b) => ({
    ...r,
    key: typeof r.field == "string" ? String(r.field) : String(b),
    label: r.header
  })), D = (r) => {
    const b = l.find(
      (S) => typeof S.field == "string" && S.field.length > 0 && String(S.field) === r.key
    ), m = b == null ? void 0 : b.field;
    m != null && m !== "actions" && y(
      m,
      o.direction === "asc" ? "desc" : "asc"
    );
  }, p = I[s], { ref: C, entry: g } = E();
  return k(() => {
    (g == null ? void 0 : g.isIntersecting) === !0 && d && d();
  }, [g, d]), i ? /* @__PURE__ */ t.jsx(
    V,
    {
      columns: l.length,
      checkboxSelection: c.showSelectionCheckboxes,
      variant: s,
      rows: e.length
    }
  ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      R,
      {
        "aria-label": "data-grid",
        ...c,
        classNames: {
          ...c.classNames,
          th: f(p.th, (v = c.classNames) == null ? void 0 : v.th),
          tr: f(p.tr, (N = c.classNames) == null ? void 0 : N.tr)
        },
        children: [
          /* @__PURE__ */ t.jsx(
            w,
            {
              columns: u,
              ...a == null ? void 0 : a.tableHeaderProps,
              children: (r) => /* @__PURE__ */ t.jsx(
                A,
                {
                  "aria-label": O(r),
                  ...a == null ? void 0 : a.tableColumnProps,
                  children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
                    r.label,
                    r.sortable !== !1 && /* @__PURE__ */ t.jsxs(
                      "div",
                      {
                        className: f("relative size-4 cursor-pointer"),
                        onClick: () => D(r),
                        role: "button",
                        "aria-label": U(r.label),
                        children: [
                          /* @__PURE__ */ t.jsx(
                            _,
                            {
                              size: 16,
                              className: f(
                                "absolute -top-1",
                                o.key === r.key && o.direction === "asc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          ),
                          /* @__PURE__ */ t.jsx(
                            L,
                            {
                              size: 16,
                              className: f(
                                "absolute top-1",
                                o.key === r.key && o.direction === "desc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          )
                        ]
                      }
                    )
                  ] })
                },
                r.key
              )
            }
          ),
          /* @__PURE__ */ t.jsx(h, { items: e, ...a == null ? void 0 : a.tableBodyProps, children: (r) => /* @__PURE__ */ t.jsx(T, { ...a == null ? void 0 : a.tableRowProps, children: (b) => /* @__PURE__ */ t.jsx(z, { ...a == null ? void 0 : a.tableCellProps, children: $(b, r, l) }) }, r.id) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx("div", { ref: C, className: "h-1" })
  ] });
}
export {
  X as DataGrid
};
