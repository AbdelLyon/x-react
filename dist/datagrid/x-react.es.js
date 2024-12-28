/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as D } from "react";
import { cn as c } from "../utils/x-react.es.js";
import { Table as k, TableHeader as R, TableColumn as w, Skeleton as g, TableBody as A, TableRow as h, TableCell as T } from "@nextui-org/react";
import { IconChevronUp as C, IconChevronDown as G } from "@tabler/icons-react";
const _ = ({
  rows: e,
  onSelectionChange: a
}) => {
  const [i, r] = j(/* @__PURE__ */ new Set()), [n, t] = j(!1);
  return D(() => {
    t(i.size === e.length);
  }, [i, e]), {
    selectedRows: i,
    allRowsSelected: n,
    toggleRowSelection: (o) => {
      r((y) => {
        const f = new Set(y);
        return f.has(o) ? f.delete(o) : f.add(o), a == null || a(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (o) => {
      const y = o ? new Set(e) : /* @__PURE__ */ new Set();
      r(y), a == null || a(Array.from(y));
    }
  };
}, I = ({
  onSortChange: e
}) => {
  const [a, i] = j({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: a, updateSort: (n, t) => {
    i({ key: n, direction: t }), e == null || e(n, t);
  } };
}, L = (e) => ({
  ..._(e),
  ...I(e)
}), z = {
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
  checkboxSelection: i = !0,
  variant: r = "unstyled",
  className: n
}) => {
  const t = z[r], d = i ? e + 1 : e;
  return /* @__PURE__ */ s.jsxs(k, { radius: "sm", "aria-label": "Loading data", className: n, children: [
    /* @__PURE__ */ s.jsx(R, { className: c(t.thead), children: Array(d).fill(null).map((u, o) => /* @__PURE__ */ s.jsx(w, { className: c(t.th), children: o === 0 && i ? /* @__PURE__ */ s.jsx(g, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(g, { className: "h-4 w-24 rounded-md" }) }, o)) }),
    /* @__PURE__ */ s.jsx(A, { children: Array(a).fill(null).map((u, o) => /* @__PURE__ */ s.jsx(h, { className: c(t.tr), children: Array(d).fill(null).map((y, f) => /* @__PURE__ */ s.jsx(T, { children: f === 0 && i ? /* @__PURE__ */ s.jsx(g, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(g, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, o)) })
  ] });
}, E = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", H = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", V = (e, a, i) => {
  const r = i.find(
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
function M({
  rows: e,
  columns: a,
  onSortChange: i,
  variant: r = "unstyled",
  isLoading: n = !1,
  childrenProps: t,
  ...d
}) {
  var p, N, v;
  const { sortConfiguration: u, updateSort: o } = L({
    rows: e,
    onSortChange: i
  }), y = a.map((l, b) => ({
    ...l,
    key: typeof l.field == "string" ? String(l.field) : String(b),
    label: l.header
  })), f = (l) => {
    const b = a.find(
      (x) => typeof x.field == "string" && x.field.length > 0 && String(x.field) === l.key
    ), m = b == null ? void 0 : b.field;
    m != null && m !== "actions" && o(
      m,
      u.direction === "asc" ? "desc" : "asc"
    );
  };
  if (n)
    return /* @__PURE__ */ s.jsx(
      B,
      {
        columns: a.length,
        checkboxSelection: d.showSelectionCheckboxes,
        variant: r,
        rows: e.length
      }
    );
  const S = z[r];
  return /* @__PURE__ */ s.jsx("div", { className: "relative", children: /* @__PURE__ */ s.jsxs(
    k,
    {
      "aria-label": "data-grid",
      ...d,
      classNames: {
        ...d.classNames,
        table: c("overflow-auto h-[300px]", (p = d.classNames) == null ? void 0 : p.table),
        th: c(S.th, (N = d.classNames) == null ? void 0 : N.th),
        tr: c(S.tr, (v = d.classNames) == null ? void 0 : v.tr)
      },
      children: [
        /* @__PURE__ */ s.jsx(
          R,
          {
            columns: y,
            ...t == null ? void 0 : t.tableHeaderProps,
            children: (l) => /* @__PURE__ */ s.jsx(
              w,
              {
                "aria-label": E(l),
                ...t == null ? void 0 : t.tableColumnProps,
                children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                  l.label,
                  l.sortable !== !1 && /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: c("relative size-4 cursor-pointer"),
                      onClick: () => f(l),
                      role: "button",
                      "aria-label": H(l.label),
                      children: [
                        /* @__PURE__ */ s.jsx(
                          C,
                          {
                            size: 16,
                            className: c(
                              "absolute -top-1",
                              u.key === l.key && u.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          G,
                          {
                            size: 16,
                            className: c(
                              "absolute top-1",
                              u.key === l.key && u.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ s.jsx(A, { items: e, ...t == null ? void 0 : t.tableBodyProps, children: (l) => /* @__PURE__ */ s.jsx(h, { ...t == null ? void 0 : t.tableRowProps, children: (b) => /* @__PURE__ */ s.jsx(T, { ...t == null ? void 0 : t.tableCellProps, children: V(b, l, a) }) }, l.id) })
      ]
    }
  ) });
}
export {
  M as DataGrid
};
