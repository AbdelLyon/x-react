/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as k, useRef as G } from "react";
import { cn as f } from "../utils/x-react.es.js";
import { Table as R, TableHeader as A, TableColumn as h, Skeleton as x, TableBody as w, TableRow as I, TableCell as T } from "@nextui-org/react";
import { IconChevronUp as _, IconChevronDown as L } from "@tabler/icons-react";
const B = ({
  rows: e,
  onSelectionChange: s
}) => {
  const [r, t] = j(/* @__PURE__ */ new Set()), [i, d] = j(!1);
  return k(() => {
    d(r.size === e.length);
  }, [r, e]), {
    selectedRows: r,
    allRowsSelected: i,
    toggleRowSelection: (o) => {
      t((b) => {
        const u = new Set(b);
        return u.has(o) ? u.delete(o) : u.add(o), s == null || s(Array.from(u)), u;
      });
    },
    toggleAllRowsSelection: (o) => {
      const b = o ? new Set(e) : /* @__PURE__ */ new Set();
      t(b), s == null || s(Array.from(b));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [s, r] = j({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: s, updateSort: (i, d) => {
    r({ key: i, direction: d }), e == null || e(i, d);
  } };
}, O = (e) => ({
  ...B(e),
  ...H(e)
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
}, V = ({
  columns: e = 5,
  rows: s = 5,
  checkboxSelection: r = !0,
  variant: t = "unstyled",
  className: i
}) => {
  const d = z[t], l = r ? e + 1 : e;
  return /* @__PURE__ */ a.jsxs(R, { radius: "sm", "aria-label": "Loading data", className: i, children: [
    /* @__PURE__ */ a.jsx(A, { className: f(d.thead), children: Array(l).fill(null).map((c, o) => /* @__PURE__ */ a.jsx(h, { className: f(d.th), children: o === 0 && r ? /* @__PURE__ */ a.jsx(x, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(x, { className: "h-4 w-24 rounded-md" }) }, o)) }),
    /* @__PURE__ */ a.jsx(w, { children: Array(s).fill(null).map((c, o) => /* @__PURE__ */ a.jsx(I, { className: f(d.tr), children: Array(l).fill(null).map((b, u) => /* @__PURE__ */ a.jsx(T, { children: u === 0 && r ? /* @__PURE__ */ a.jsx(x, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(x, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, u)) }, o)) })
  ] });
}, E = (e) => {
  const [s, r] = j(null), t = G(null);
  return { ref: (d) => {
    if (t.current && (t.current.disconnect(), t.current = null), d === null) {
      r(null);
      return;
    }
    t.current = new IntersectionObserver(([l]) => {
      r(l);
    }, e), t.current.observe(d);
  }, entry: s };
}, F = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", M = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", U = (e, s, r) => {
  const t = r.find(
    (i) => typeof i.field == "string" && String(i.field) === String(e)
  );
  if (t === void 0)
    return null;
  if (t.cell !== void 0)
    return t.cell(s);
  if (typeof t.field == "string" && t.field.length > 0 && t.field in s) {
    const i = s[t.field];
    return typeof i == "string" || typeof i == "number" ? String(i) : null;
  }
  return null;
};
function X({
  rows: e,
  columns: s,
  onSortChange: r,
  variant: t = "unstyled",
  isLoading: i = !1,
  onRowsScrollEnd: d,
  childrenProps: l,
  ...c
}) {
  var v, N;
  const { sortConfiguration: o, updateSort: b } = O({
    rows: e,
    onSortChange: r
  }), { ref: u, entry: g } = E({
    threshold: 0.1,
    rootMargin: "100px"
  });
  k(() => {
    (g == null ? void 0 : g.isIntersecting) === !0 && d && d();
  }, [g == null ? void 0 : g.isIntersecting, d]);
  const D = s.map((n, y) => ({
    ...n,
    key: typeof n.field == "string" ? String(n.field) : String(y),
    label: n.header
  })), C = (n) => {
    const y = s.find(
      (S) => typeof S.field == "string" && S.field.length > 0 && String(S.field) === n.key
    ), m = y == null ? void 0 : y.field;
    m != null && m !== "actions" && b(
      m,
      o.direction === "asc" ? "desc" : "asc"
    );
  };
  if (i)
    return /* @__PURE__ */ a.jsx(
      V,
      {
        columns: s.length,
        checkboxSelection: c.showSelectionCheckboxes,
        variant: t,
        rows: e.length
      }
    );
  const p = z[t];
  return /* @__PURE__ */ a.jsxs(
    R,
    {
      "aria-label": "data-grid",
      ...c,
      classNames: {
        ...c.classNames,
        th: f(p.th, (v = c.classNames) == null ? void 0 : v.th),
        tr: f(p.tr, (N = c.classNames) == null ? void 0 : N.tr)
      },
      ref: u,
      children: [
        /* @__PURE__ */ a.jsx(
          A,
          {
            columns: D,
            ...l == null ? void 0 : l.tableHeaderProps,
            children: (n) => /* @__PURE__ */ a.jsx(
              h,
              {
                "aria-label": F(n),
                ...l == null ? void 0 : l.tableColumnProps,
                children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
                  n.label,
                  n.sortable !== !1 && /* @__PURE__ */ a.jsxs(
                    "div",
                    {
                      className: f("relative size-4 cursor-pointer"),
                      onClick: () => C(n),
                      role: "button",
                      "aria-label": M(n.label),
                      children: [
                        /* @__PURE__ */ a.jsx(
                          _,
                          {
                            size: 16,
                            className: f(
                              "absolute -top-1",
                              o.key === n.key && o.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ a.jsx(
                          L,
                          {
                            size: 16,
                            className: f(
                              "absolute top-1",
                              o.key === n.key && o.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              n.key
            )
          }
        ),
        /* @__PURE__ */ a.jsx(w, { items: e, ...l == null ? void 0 : l.tableBodyProps, children: (n) => {
          const y = e.indexOf(n);
          return /* @__PURE__ */ a.jsx(
            I,
            {
              ...l == null ? void 0 : l.tableRowProps,
              ref: y === e.length - 1 ? u : null,
              children: (m) => /* @__PURE__ */ a.jsx(T, { ...l == null ? void 0 : l.tableCellProps, children: U(m, n, s) })
            },
            n.id
          );
        } })
      ]
    }
  );
}
export {
  X as DataGrid
};
