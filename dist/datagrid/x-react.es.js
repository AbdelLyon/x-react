/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as C } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as k, TableHeader as v, TableColumn as A, Skeleton as m, TableBody as h, TableRow as R, TableCell as T } from "@nextui-org/react";
import { IconChevronUp as G, IconChevronDown as H } from "@tabler/icons-react";
const _ = ({
  rows: e,
  onSelectionChange: a
}) => {
  const [d, r] = j(/* @__PURE__ */ new Set()), [i, o] = j(!1);
  return C(() => {
    o(d.size === e.length);
  }, [d, e]), {
    selectedRows: d,
    allRowsSelected: i,
    toggleRowSelection: (n) => {
      r((b) => {
        const c = new Set(b);
        return c.has(n) ? c.delete(n) : c.add(n), a == null || a(Array.from(c)), c;
      });
    },
    toggleAllRowsSelection: (n) => {
      const b = n ? new Set(e) : /* @__PURE__ */ new Set();
      r(b), a == null || a(Array.from(b));
    }
  };
}, I = ({
  onSortChange: e
}) => {
  const [a, d] = j({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: a, updateSort: (i, o) => {
    d({ key: i, direction: o }), e == null || e(i, o);
  } };
}, L = (e) => ({
  ..._(e),
  ...I(e)
}), w = {
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
}, B = ({
  columns: e = 5,
  rows: a = 5,
  checkboxSelection: d = !0,
  variant: r = "unstyled",
  className: i
}) => {
  const o = w[r], l = d ? e + 1 : e;
  return /* @__PURE__ */ t.jsxs(k, { radius: "sm", "aria-label": "Loading data", className: i, children: [
    /* @__PURE__ */ t.jsx(v, { className: y(o.thead), children: Array(l).fill(null).map((u, n) => /* @__PURE__ */ t.jsx(A, { className: y(o.th), children: n === 0 && d ? /* @__PURE__ */ t.jsx(m, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(m, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ t.jsx(h, { children: Array(a).fill(null).map((u, n) => /* @__PURE__ */ t.jsx(R, { className: y(o.tr), children: Array(l).fill(null).map((b, c) => /* @__PURE__ */ t.jsx(T, { children: c === 0 && d ? /* @__PURE__ */ t.jsx(m, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(m, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, n)) })
  ] });
}, F = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", V = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", U = (e, a, d) => {
  const r = d.find(
    (i) => typeof i.field == "string" && String(i.field) === String(e)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(a);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in a) {
    const i = a[r.field];
    return typeof i == "string" || typeof i == "number" ? String(i) : null;
  }
  return null;
};
function Q({
  rows: e,
  columns: a,
  onSortChange: d,
  variant: r = "unstyled",
  isLoading: i = !1,
  onRowsScrollEnd: o,
  childrenProps: l,
  ...u
}) {
  var p, N;
  const { sortConfiguration: n, updateSort: b } = L({
    rows: e,
    onSortChange: d
  }), c = a.map((s, f) => ({
    ...s,
    key: typeof s.field == "string" ? String(s.field) : String(f),
    label: s.header
  })), z = (s) => {
    const f = a.find(
      (x) => typeof x.field == "string" && x.field.length > 0 && String(x.field) === s.key
    ), g = f == null ? void 0 : f.field;
    g != null && g !== "actions" && b(
      g,
      n.direction === "asc" ? "desc" : "asc"
    );
  }, S = w[r], D = (s) => {
    const f = s.currentTarget;
    f.scrollTop + f.clientHeight >= f.scrollHeight && (o == null || o());
  };
  return i ? /* @__PURE__ */ t.jsx(
    B,
    {
      columns: a.length,
      checkboxSelection: u.showSelectionCheckboxes,
      variant: r,
      rows: e.length
    }
  ) : /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs(
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
          v,
          {
            columns: c,
            ...l == null ? void 0 : l.tableHeaderProps,
            children: (s) => /* @__PURE__ */ t.jsx(
              A,
              {
                "aria-label": F(s),
                ...l == null ? void 0 : l.tableColumnProps,
                children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
                  s.label,
                  s.sortable !== !1 && /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => z(s),
                      role: "button",
                      "aria-label": V(s.label),
                      children: [
                        /* @__PURE__ */ t.jsx(
                          G,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              n.key === s.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ t.jsx(
                          H,
                          {
                            size: 16,
                            className: y(
                              "absolute top-1",
                              n.key === s.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ t.jsx(h, { items: e, ...l == null ? void 0 : l.tableBodyProps, children: (s) => /* @__PURE__ */ t.jsx(R, { ...l == null ? void 0 : l.tableRowProps, children: (f) => /* @__PURE__ */ t.jsx(T, { ...l == null ? void 0 : l.tableCellProps, children: U(f, s, a) }) }, s.id) })
      ]
    }
  ) });
}
export {
  Q as DataGrid
};
