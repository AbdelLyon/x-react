import "../image/image.es.js";
import { jsxs as p, jsx as a } from "react/jsx-runtime";
import { useState as R } from "react";
import { cn as b } from "../utils/utils.es.js";
import { Table as k, TableHeader as x, TableColumn as H, Skeleton as C, TableBody as T, TableRow as z, TableCell as A } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as _ } from "@tabler/icons-react";
const G = ({
  columns: c,
  onSortChange: i,
  onGridScrollEnd: o
}) => {
  const [f, g] = R({
    field: null,
    direction: "asc"
  }), m = c.map((e, l) => ({
    ...e,
    key: typeof e.field == "string" ? String(e.field) : String(l),
    header: e.header
  }));
  return {
    sortConfig: f,
    onSort: (e) => {
      const l = c.find(
        (r) => typeof r.field == "string" && r.field.length > 0 && String(r.field) === e.key
      ), u = l == null ? void 0 : l.field;
      u !== void 0 && u !== "actions" && (g({
        field: u,
        direction: f.direction === "asc" ? "desc" : "asc"
      }), i == null || i(
        u,
        f.direction === "asc" ? "desc" : "asc"
      ));
    },
    extractCellValue: (e, l, u) => {
      const r = u.find(
        (d) => typeof d.field == "string" && String(d.field) === String(e)
      );
      if (r === void 0)
        return null;
      if (r.cell !== void 0)
        return r.cell(l);
      if (typeof r.field == "string" && r.field.length > 0 && r.field in l) {
        const d = l[r.field];
        return typeof d == "string" || typeof d == "number" ? String(d) : null;
      }
      return null;
    },
    extractColumnHeader: (e) => typeof e.header == "string" && e.header.length > 0 ? e.header : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column",
    formatSortHeader: (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column",
    processedColumns: m,
    handleGridScroll: (e) => {
      const l = e.currentTarget;
      l.scrollTop + l.clientHeight >= l.scrollHeight && (o == null || o());
    }
  };
}, D = {
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
}, I = ({
  columns: c = 5,
  rows: i = 5,
  checkboxSelection: o = !0,
  variant: f = "unstyled",
  className: g
}) => {
  const m = D[f], t = o ? c + 1 : c;
  return /* @__PURE__ */ p(k, { radius: "sm", "aria-label": "Loading data", className: g, children: [
    /* @__PURE__ */ a(x, { className: b(m.thead), children: Array(t).fill(null).map((y, n) => /* @__PURE__ */ a(H, { className: b(m.th), children: n === 0 && o ? /* @__PURE__ */ a(C, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a(C, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ a(T, { children: Array(i).fill(null).map((y, n) => /* @__PURE__ */ a(z, { className: b(m.tr), children: Array(t).fill(null).map((N, h) => /* @__PURE__ */ a(A, { children: h === 0 && o ? /* @__PURE__ */ a(C, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a(C, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, h)) }, n)) })
  ] });
};
function q({
  rows: c,
  columns: i,
  onSortChange: o,
  variant: f = "unstyled",
  isLoading: g = !1,
  onGridScrollEnd: m,
  childrenProps: t,
  ...y
}) {
  var S, v;
  const {
    sortConfig: n,
    processedColumns: N,
    formatSortHeader: h,
    extractCellValue: e,
    extractColumnHeader: l,
    onSort: u,
    handleGridScroll: r
  } = G({
    onSortChange: o,
    columns: i,
    onGridScrollEnd: m
  }), d = D[f];
  return g ? /* @__PURE__ */ a(
    I,
    {
      columns: i.length,
      checkboxSelection: y.showSelectionCheckboxes,
      variant: f,
      rows: c.length
    }
  ) : /* @__PURE__ */ p(
    k,
    {
      "aria-label": "data-grid",
      ...y,
      classNames: {
        ...y.classNames,
        th: b(d.th, (S = y.classNames) == null ? void 0 : S.th),
        tr: b(d.tr, (v = y.classNames) == null ? void 0 : v.tr)
      },
      onScroll: r,
      children: [
        /* @__PURE__ */ a(
          x,
          {
            columns: N,
            ...t == null ? void 0 : t.tableHeaderProps,
            children: (s) => /* @__PURE__ */ a(
              H,
              {
                "aria-label": l(s),
                ...t == null ? void 0 : t.tableColumnProps,
                children: /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: [
                  s.header,
                  s.sortable !== !1 && /* @__PURE__ */ p(
                    "div",
                    {
                      className: b("relative size-4 cursor-pointer"),
                      onClick: () => u(s),
                      role: "button",
                      "aria-label": h(s.header),
                      children: [
                        /* @__PURE__ */ a(
                          V,
                          {
                            size: 16,
                            className: b(
                              "absolute -top-1",
                              n.field === s.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ a(
                          _,
                          {
                            size: 16,
                            className: b(
                              "absolute top-1",
                              n.field === s.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ a(T, { items: c, ...t == null ? void 0 : t.tableBodyProps, children: (s) => /* @__PURE__ */ a(z, { ...t == null ? void 0 : t.tableRowProps, children: (w) => /* @__PURE__ */ a(A, { ...t == null ? void 0 : t.tableCellProps, children: e(w, s, i) }) }, s.id) })
      ]
    }
  );
}
export {
  q as DataGrid
};
