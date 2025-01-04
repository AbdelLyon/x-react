/* empty css                */
import { j as t } from "../jsx-runtime-BFln9wzo.js";
import { useState as D } from "react";
import { cn as m } from "../utils/x-react.es.js";
import { Table as N, TableHeader as S, TableColumn as v, Skeleton as h, TableBody as k, TableRow as H, TableCell as T } from "@nextui-org/react";
import { IconChevronUp as R, IconChevronDown as w } from "@tabler/icons-react";
const V = ({
  columns: c,
  onSortChange: i,
  onGridScrollEnd: o
}) => {
  const [f, g] = D({
    field: null,
    direction: "asc"
  }), b = c.map((e, s) => ({
    ...e,
    key: typeof e.field == "string" ? String(e.field) : String(s),
    header: e.header
  }));
  return {
    sortConfig: f,
    onSort: (e) => {
      const s = c.find(
        (l) => typeof l.field == "string" && l.field.length > 0 && String(l.field) === e.key
      ), u = s == null ? void 0 : s.field;
      u !== void 0 && u !== "actions" && (g({
        field: u,
        direction: f.direction === "asc" ? "desc" : "asc"
      }), i == null || i(
        u,
        f.direction === "asc" ? "desc" : "asc"
      ));
    },
    extractCellValue: (e, s, u) => {
      const l = u.find(
        (d) => typeof d.field == "string" && String(d.field) === String(e)
      );
      if (l === void 0)
        return null;
      if (l.cell !== void 0)
        return l.cell(s);
      if (typeof l.field == "string" && l.field.length > 0 && l.field in s) {
        const d = s[l.field];
        return typeof d == "string" || typeof d == "number" ? String(d) : null;
      }
      return null;
    },
    extractColumnHeader: (e) => typeof e.header == "string" && e.header.length > 0 ? e.header : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column",
    formatSortHeader: (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column",
    processedColumns: b,
    handleGridScroll: (e) => {
      const s = e.currentTarget;
      s.scrollTop + s.clientHeight >= s.scrollHeight && (o == null || o());
    }
  };
}, z = {
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
}, _ = ({
  columns: c = 5,
  rows: i = 5,
  checkboxSelection: o = !0,
  variant: f = "unstyled",
  className: g
}) => {
  const b = z[f], a = o ? c + 1 : c;
  return /* @__PURE__ */ t.jsxs(N, { radius: "sm", "aria-label": "Loading data", className: g, children: [
    /* @__PURE__ */ t.jsx(S, { className: m(b.thead), children: Array(a).fill(null).map((y, n) => /* @__PURE__ */ t.jsx(v, { className: m(b.th), children: n === 0 && o ? /* @__PURE__ */ t.jsx(h, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(h, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ t.jsx(k, { children: Array(i).fill(null).map((y, n) => /* @__PURE__ */ t.jsx(H, { className: m(b.tr), children: Array(a).fill(null).map((j, x) => /* @__PURE__ */ t.jsx(T, { children: x === 0 && o ? /* @__PURE__ */ t.jsx(h, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(h, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, x)) }, n)) })
  ] });
};
function $({
  rows: c,
  columns: i,
  onSortChange: o,
  variant: f = "unstyled",
  isLoading: g = !1,
  onGridScrollEnd: b,
  childrenProps: a,
  ...y
}) {
  var C, p;
  const {
    sortConfig: n,
    processedColumns: j,
    formatSortHeader: x,
    extractCellValue: e,
    extractColumnHeader: s,
    onSort: u,
    handleGridScroll: l
  } = V({
    onSortChange: o,
    columns: i,
    onGridScrollEnd: b
  }), d = z[f];
  return g ? /* @__PURE__ */ t.jsx(
    _,
    {
      columns: i.length,
      checkboxSelection: y.showSelectionCheckboxes,
      variant: f,
      rows: c.length
    }
  ) : /* @__PURE__ */ t.jsxs(
    N,
    {
      "aria-label": "data-grid",
      ...y,
      classNames: {
        ...y.classNames,
        th: m(d.th, (C = y.classNames) == null ? void 0 : C.th),
        tr: m(d.tr, (p = y.classNames) == null ? void 0 : p.tr)
      },
      onScroll: l,
      children: [
        /* @__PURE__ */ t.jsx(
          S,
          {
            columns: j,
            ...a == null ? void 0 : a.tableHeaderProps,
            children: (r) => /* @__PURE__ */ t.jsx(
              v,
              {
                "aria-label": s(r),
                ...a == null ? void 0 : a.tableColumnProps,
                children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
                  r.header,
                  r.sortable !== !1 && /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      className: m("relative size-4 cursor-pointer"),
                      onClick: () => u(r),
                      role: "button",
                      "aria-label": x(r.header),
                      children: [
                        /* @__PURE__ */ t.jsx(
                          R,
                          {
                            size: 16,
                            className: m(
                              "absolute -top-1",
                              n.field === r.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ t.jsx(
                          w,
                          {
                            size: 16,
                            className: m(
                              "absolute top-1",
                              n.field === r.key && n.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ t.jsx(k, { items: c, ...a == null ? void 0 : a.tableBodyProps, children: (r) => /* @__PURE__ */ t.jsx(H, { ...a == null ? void 0 : a.tableRowProps, children: (A) => /* @__PURE__ */ t.jsx(T, { ...a == null ? void 0 : a.tableCellProps, children: e(A, r, i) }) }, r.id) })
      ]
    }
  );
}
export {
  $ as DataGrid
};
