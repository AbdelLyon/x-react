import { useState as c } from "react";
const C = ({
  columns: o,
  onSortChange: d,
  onGridScrollEnd: s
}) => {
  const [l, f] = c({
    field: null,
    direction: "asc"
  }), a = o.map((e, r) => ({
    ...e,
    key: typeof e.field == "string" ? String(e.field) : String(r),
    header: e.header
  }));
  return {
    sortConfig: l,
    onSort: (e) => {
      const n = o.find(
        (t) => typeof t.field == "string" && t.field.length > 0 && String(t.field) === e.key
      )?.field;
      n !== void 0 && n !== "actions" && (f({
        field: n,
        direction: l.direction === "asc" ? "desc" : "asc"
      }), d?.(
        n,
        l.direction === "asc" ? "desc" : "asc"
      ));
    },
    extractCellValue: (e, r, n) => {
      const t = n.find(
        (i) => typeof i.field == "string" && String(i.field) === String(e)
      );
      if (t === void 0)
        return null;
      if (t.cell !== void 0)
        return t.cell(r);
      if (typeof t.field == "string" && t.field.length > 0 && t.field in r) {
        const i = r[t.field];
        return typeof i == "string" || typeof i == "number" ? String(i) : null;
      }
      return null;
    },
    extractColumnHeader: (e) => typeof e.header == "string" && e.header.length > 0 ? e.header : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column",
    formatSortHeader: (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column",
    processedColumns: a,
    handleGridScroll: (e) => {
      const r = e.currentTarget;
      r.scrollTop + r.clientHeight >= r.scrollHeight && s?.();
    }
  };
};
export {
  C as useDataGridState
};
//# sourceMappingURL=index.js.map
