/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { useState as v, useEffect as m } from "react";
import { cn as u } from "../utils/x-react.es.js";
import { Table as I, TableHeader as z, TableColumn as D, Checkbox as P, TableBody as $, TableRow as B, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as G, IconChevronDown as H } from "@tabler/icons-react";
const L = {
  key: null,
  direction: "asc"
}, R = ({
  rows: t,
  onCheckedRowsChange: n,
  onSort: b
}) => {
  const [i, a] = v([]), [S, r] = v(!1), [x, l] = v(L);
  return m(() => {
    r(i.length === t.length && t.length > 0);
  }, [i, t]), {
    selectedRows: i,
    isAllChecked: S,
    sortConfig: x,
    handleCheckboxChange: (o) => {
      const g = i.some((h) => h.id === o.id) ? i.filter((h) => h.id !== o.id) : [...i, o];
      a(g), n == null || n(g);
    },
    handleSelectAll: (o) => {
      const c = o ? [...t] : [];
      a(c), n == null || n(c);
    },
    handleSort: (o, c) => {
      l({ key: o, direction: c }), b == null || b(o, c);
    },
    isRowSelected: (o) => i.some((c) => c.id === o.id)
  };
}, V = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 hover:bg-content2"
  }
};
function F(t) {
  return typeof t.label == "string" && t.label.length > 0 ? t.label : typeof t.key == "string" && t.key.length > 0 ? t.key : "Column";
}
function U(t) {
  return typeof t == "string" && t.length > 0 ? `Sort by ${t}` : "Sort column";
}
function q(t, n, b) {
  const i = b.find(
    (a) => typeof a.field == "string" && String(a.field) === String(t)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(n);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in n) {
    const a = n[i.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
}
function Y({
  rows: t,
  columns: n,
  caption: b,
  onCheckedRowsChange: i,
  onSort: a,
  checkboxSelection: S = !0,
  classNames: r,
  variant: x = "unstyled",
  props: l
}) {
  const {
    isAllChecked: j,
    sortConfig: y,
    handleCheckboxChange: C,
    handleSelectAll: A,
    handleSort: o,
    isRowSelected: c
  } = R({
    rows: t,
    onCheckedRowsChange: i,
    onSort: a
  }), g = V[x], h = [
    ...S === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...n.map((e, f) => ({
      ...e,
      key: typeof e.field == "string" ? String(e.field) : String(f),
      label: e.header
    }))
  ], T = (e) => {
    const f = n.find(
      (k) => typeof k.field == "string" && k.field.length > 0 && String(k.field) === e.key
    ), s = f == null ? void 0 : f.field;
    s != null && s !== "actions" && o(s, y.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ d.jsxs(
    I,
    {
      "aria-label": typeof b == "string" ? b : void 0,
      ...l == null ? void 0 : l.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ d.jsx(
          z,
          {
            columns: h,
            className: u(g.header),
            ...l == null ? void 0 : l.tableHeaderProps,
            children: (e) => /* @__PURE__ */ d.jsx(
              D,
              {
                "aria-label": F(e),
                className: u(g.column),
                ...l == null ? void 0 : l.tableColumnProps,
                children: e.key === "checkbox" ? /* @__PURE__ */ d.jsx(
                  P,
                  {
                    isSelected: j,
                    onValueChange: A,
                    "aria-label": "Select all rows",
                    className: r == null ? void 0 : r.checkbox
                  }
                ) : /* @__PURE__ */ d.jsxs("div", { className: u("flex items-center gap-2"), children: [
                  e.label,
                  e.sortable === !0 && /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: u(
                        "relative size-4 cursor-pointer",
                        r == null ? void 0 : r.sortIcon
                      ),
                      onClick: () => T(e),
                      role: "button",
                      "aria-label": U(e.label),
                      children: [
                        /* @__PURE__ */ d.jsx(
                          G,
                          {
                            size: 16,
                            className: u(
                              "absolute -top-1",
                              y.key === e.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ d.jsx(
                          H,
                          {
                            size: 16,
                            className: u(
                              "absolute top-1",
                              y.key === e.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              e.key
            )
          }
        ),
        /* @__PURE__ */ d.jsx($, { items: t, ...l == null ? void 0 : l.tableBodyProps, children: (e) => /* @__PURE__ */ d.jsx(
          B,
          {
            "aria-label": `Row ${e.id}`,
            className: u(g.row),
            ...l == null ? void 0 : l.tableRowProps,
            children: (f) => /* @__PURE__ */ d.jsx(E, { ...l == null ? void 0 : l.tableCellProps, children: f === "checkbox" ? /* @__PURE__ */ d.jsx(
              P,
              {
                isSelected: c(e),
                onValueChange: () => C(e),
                "aria-label": `Select row ${e.id}`,
                className: r == null ? void 0 : r.checkbox
              }
            ) : /* @__PURE__ */ d.jsx("div", { className: r == null ? void 0 : r.cellContent, children: q(f, e, n) }) })
          },
          e.id
        ) })
      ]
    }
  );
}
export {
  Y as DataGrid
};
