/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as B } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as k, TableHeader as v, TableColumn as A, Skeleton as m, TableBody as R, TableRow as h, TableCell as w } from "@nextui-org/react";
import { IconChevronUp as C, IconChevronDown as G } from "@tabler/icons-react";
const H = ({
  rows: t,
  onSelectionChange: l
}) => {
  const [o, r] = j(/* @__PURE__ */ new Set()), [i, d] = j(!1);
  return B(() => {
    d(o.size === t.length);
  }, [o, t]), {
    selectedRows: o,
    allRowsSelected: i,
    toggleRowSelection: (n) => {
      r((b) => {
        const f = new Set(b);
        return f.has(n) ? f.delete(n) : f.add(n), l == null || l(Array.from(f)), f;
      });
    },
    toggleAllRowsSelection: (n) => {
      const b = n ? new Set(t) : /* @__PURE__ */ new Set();
      r(b), l == null || l(Array.from(b));
    }
  };
}, _ = ({
  onSortChange: t
}) => {
  const [l, o] = j({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: l, updateSort: (i, d) => {
    o({ key: i, direction: d }), t == null || t(i, d);
  } };
}, I = (t) => ({
  ...H(t),
  ..._(t)
}), T = {
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
}, L = ({
  columns: t = 5,
  rows: l = 5,
  checkboxSelection: o = !0,
  variant: r = "unstyled",
  className: i
}) => {
  const d = T[r], a = o ? t + 1 : t;
  return /* @__PURE__ */ e.jsxs(k, { radius: "sm", "aria-label": "Loading data", className: i, children: [
    /* @__PURE__ */ e.jsx(v, { className: y(d.thead), children: Array(a).fill(null).map((u, n) => /* @__PURE__ */ e.jsx(A, { className: y(d.th), children: n === 0 && o ? /* @__PURE__ */ e.jsx(m, { className: "size-4 rounded-md" }) : /* @__PURE__ */ e.jsx(m, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ e.jsx(R, { children: Array(l).fill(null).map((u, n) => /* @__PURE__ */ e.jsx(h, { className: y(d.tr), children: Array(a).fill(null).map((b, f) => /* @__PURE__ */ e.jsx(w, { children: f === 0 && o ? /* @__PURE__ */ e.jsx(m, { className: "size-4 rounded-md" }) : /* @__PURE__ */ e.jsx(m, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, n)) })
  ] });
}, F = (t) => typeof t.label == "string" && t.label.length > 0 ? t.label : typeof t.key == "string" && t.key.length > 0 ? t.key : "Column", V = (t) => typeof t == "string" && t.length > 0 ? `Sort by ${t}` : "Sort column", E = (t, l, o) => {
  const r = o.find(
    (i) => typeof i.field == "string" && String(i.field) === String(t)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(l);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in l) {
    const i = l[r.field];
    return typeof i == "string" || typeof i == "number" ? String(i) : null;
  }
  return null;
};
function O({
  rows: t,
  columns: l,
  onSortChange: o,
  variant: r = "unstyled",
  isLoading: i = !1,
  onRowsScrollEnd: d,
  childrenProps: a,
  ...u
}) {
  var p, N;
  const { sortConfiguration: n, updateSort: b } = I({
    rows: t,
    onSortChange: o
  }), f = l.map((s, c) => ({
    ...s,
    key: typeof s.field == "string" ? String(s.field) : String(c),
    label: s.header
  })), z = (s) => {
    const c = l.find(
      (x) => typeof x.field == "string" && x.field.length > 0 && String(x.field) === s.key
    ), g = c == null ? void 0 : c.field;
    g != null && g !== "actions" && b(
      g,
      n.direction === "asc" ? "desc" : "asc"
    );
  }, S = T[r], D = (s) => {
    const c = s.target;
    Math.abs(c.scrollHeight - c.scrollTop - c.clientHeight) < 1 && d && d();
  };
  return i ? /* @__PURE__ */ e.jsx(
    L,
    {
      columns: l.length,
      checkboxSelection: u.showSelectionCheckboxes,
      variant: r,
      rows: t.length
    }
  ) : /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(
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
        /* @__PURE__ */ e.jsx(
          v,
          {
            columns: f,
            ...a == null ? void 0 : a.tableHeaderProps,
            children: (s) => /* @__PURE__ */ e.jsx(
              A,
              {
                "aria-label": F(s),
                ...a == null ? void 0 : a.tableColumnProps,
                children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                  s.label,
                  s.sortable !== !1 && /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: y("relative size-4 cursor-pointer"),
                      onClick: () => z(s),
                      role: "button",
                      "aria-label": V(s.label),
                      children: [
                        /* @__PURE__ */ e.jsx(
                          C,
                          {
                            size: 16,
                            className: y(
                              "absolute -top-1",
                              n.key === s.key && n.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          G,
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
        /* @__PURE__ */ e.jsx(R, { items: t, ...a == null ? void 0 : a.tableBodyProps, children: (s) => /* @__PURE__ */ e.jsx(h, { ...a == null ? void 0 : a.tableRowProps, children: (c) => /* @__PURE__ */ e.jsx(w, { ...a == null ? void 0 : a.tableCellProps, children: E(c, s, l) }) }, s.id) })
      ]
    }
  ) });
}
export {
  O as DataGrid
};
