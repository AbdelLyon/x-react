/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as C } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as k, TableHeader as h, TableColumn as v, Skeleton as m, TableBody as A, TableRow as R, TableCell as T } from "@nextui-org/react";
import { IconChevronUp as G, IconChevronDown as H } from "@tabler/icons-react";
const _ = ({
  rows: e,
  onSelectionChange: a
}) => {
  const [o, r] = j(/* @__PURE__ */ new Set()), [n, d] = j(!1);
  return C(() => {
    d(o.size === e.length);
  }, [o, e]), {
    selectedRows: o,
    allRowsSelected: n,
    toggleRowSelection: (i) => {
      r((b) => {
        const c = new Set(b);
        return c.has(i) ? c.delete(i) : c.add(i), a == null || a(Array.from(c)), c;
      });
    },
    toggleAllRowsSelection: (i) => {
      const b = i ? new Set(e) : /* @__PURE__ */ new Set();
      r(b), a == null || a(Array.from(b));
    }
  };
}, I = ({
  onSortChange: e
}) => {
  const [a, o] = j({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: a, updateSort: (n, d) => {
    o({ key: n, direction: d }), e == null || e(n, d);
  } };
}, L = (e) => ({
  ..._(e),
  ...I(e)
}), w = {
  bordered: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4 h-12",
    tr: "py-4 border-b border-default last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4 h-12",
    tr: "py-4 even:bg-content2 h-12"
  },
  unstyled: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4 h-12",
    tr: "py-4 hover:bg-content2 h-12"
  }
}, B = ({
  columns: e = 5,
  rows: a = 5,
  checkboxSelection: o = !0,
  variant: r = "unstyled",
  className: n
}) => {
  const d = w[r], l = o ? e + 1 : e;
  return /* @__PURE__ */ t.jsxs(k, { radius: "sm", "aria-label": "Loading data", className: n, children: [
    /* @__PURE__ */ t.jsx(h, { className: y(d.thead), children: Array(l).fill(null).map((u, i) => /* @__PURE__ */ t.jsx(v, { className: y(d.th), children: i === 0 && o ? /* @__PURE__ */ t.jsx(m, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(m, { className: "h-4 w-24 rounded-md" }) }, i)) }),
    /* @__PURE__ */ t.jsx(A, { children: Array(a).fill(null).map((u, i) => /* @__PURE__ */ t.jsx(R, { className: y(d.tr), children: Array(l).fill(null).map((b, c) => /* @__PURE__ */ t.jsx(T, { children: c === 0 && o ? /* @__PURE__ */ t.jsx(m, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(m, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, i)) })
  ] });
}, V = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", F = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", U = (e, a, o) => {
  const r = o.find(
    (n) => typeof n.field == "string" && String(n.field) === String(e)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(a);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in a) {
    const n = a[r.field];
    return typeof n == "string" || typeof n == "number" ? String(n) : null;
  }
  return null;
};
function Q({
  rows: e,
  columns: a,
  onSortChange: o,
  variant: r = "unstyled",
  isLoading: n = !1,
  onRowsScrollEnd: d,
  childrenProps: l,
  ...u
}) {
  var p, N;
  const { sortConfiguration: i, updateSort: b } = L({
    rows: e,
    onSortChange: o
  }), c = a.map((s, f) => ({
    ...s,
    key: typeof s.field == "string" ? String(s.field) : String(f),
    label: s.header
  })), z = (s) => {
    const f = a.find(
      (x) => typeof x.field == "string" && x.field.length > 0 && String(x.field) === s.key
    ), g = f == null ? void 0 : f.field;
    g !== void 0 && g !== void 0 && g !== "actions" && b(
      g,
      i.direction === "asc" ? "desc" : "asc"
    );
  }, S = w[r], D = (s) => {
    const f = s.currentTarget;
    f.scrollTop + f.clientHeight >= f.scrollHeight && (d == null || d());
  };
  return n ? /* @__PURE__ */ t.jsx(
    B,
    {
      columns: a.length,
      checkboxSelection: u.showSelectionCheckboxes,
      variant: r,
      rows: e.length
    }
  ) : /* @__PURE__ */ t.jsxs(
    k,
    {
      "aria-label": "data-grid",
      ...u,
      classNames: {
        ...u.classNames,
        th: y(S.th, (p = u.classNames) == null ? void 0 : p.th),
        tr: y(S.tr, (N = u.classNames) == null ? void 0 : N.tr)
      },
      onScroll: D,
      children: [
        /* @__PURE__ */ t.jsx(
          h,
          {
            columns: c,
            ...l == null ? void 0 : l.tableHeaderProps,
            children: (s) => /* @__PURE__ */ t.jsx(
              v,
              {
                "aria-label": V(s),
                ...l == null ? void 0 : l.tableColumnProps,
                children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
                  s.label,
                  s.sortable !== !1 && /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => z(s),
                      role: "button",
                      "aria-label": F(s.label),
                      children: [
                        /* @__PURE__ */ t.jsx(
                          G,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              i.key === s.key && i.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ t.jsx(
                          H,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              i.key === s.key && i.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              s.key
            )
          }
        ),
        /* @__PURE__ */ t.jsx(A, { items: e, ...l == null ? void 0 : l.tableBodyProps, children: (s) => /* @__PURE__ */ t.jsx(R, { ...l == null ? void 0 : l.tableRowProps, children: (f) => /* @__PURE__ */ t.jsx(T, { ...l == null ? void 0 : l.tableCellProps, children: U(f, s, a) }) }, s.id) })
      ]
    }
  );
}
export {
  Q as DataGrid
};
