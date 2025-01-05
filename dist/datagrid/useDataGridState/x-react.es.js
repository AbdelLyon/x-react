import { useState as c } from "react";
const H = ({
  columns: o,
  onSortChange: l,
  onGridScrollEnd: s
}) => {
  const [f, d] = c({
    field: null,
    direction: "asc"
  }), a = o.map((e, t) => ({
    ...e,
    key: typeof e.field == "string" ? String(e.field) : String(t),
    header: e.header
  }));
  return {
    sortConfig: f,
    onSort: (e) => {
      const t = o.find(
        (i) => typeof i.field == "string" && i.field.length > 0 && String(i.field) === e.key
      ), r = t == null ? void 0 : t.field;
      r !== void 0 && r !== "actions" && (d({
        field: r,
        direction: f.direction === "asc" ? "desc" : "asc"
      }), l == null || l(
        r,
        f.direction === "asc" ? "desc" : "asc"
      ));
    },
    extractCellValue: (e, t, r) => {
      const i = r.find(
        (n) => typeof n.field == "string" && String(n.field) === String(e)
      );
      if (i === void 0)
        return null;
      if (i.cell !== void 0)
        return i.cell(t);
      if (typeof i.field == "string" && i.field.length > 0 && i.field in t) {
        const n = t[i.field];
        return typeof n == "string" || typeof n == "number" ? String(n) : null;
      }
      return null;
    },
    extractColumnHeader: (e) => typeof e.header == "string" && e.header.length > 0 ? e.header : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column",
    formatSortHeader: (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column",
    processedColumns: a,
    handleGridScroll: (e) => {
      const t = e.currentTarget;
      t.scrollTop + t.clientHeight >= t.scrollHeight && (s == null || s());
    }
  };
};
export {
  H as useDataGridState
};
