/* empty css                */
import { j as v } from "../jsx-runtime-Dx-03ztt.js";
import * as h from "react";
import { useEffect as V } from "react";
import { Table as z, TableHeader as B, TableColumn as D, TableBody as M, TableRow as G, TableCell as O } from "@nextui-org/react";
import { IconChevronUp as _, IconChevronDown as H } from "@tabler/icons-react";
import { cn as p } from "../utils/x-react.es.js";
var I = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new WeakMap(), A = 0, $ = void 0;
function E(t) {
  return t ? (j.has(t) || (A += 1, j.set(t, A.toString())), j.get(t)) : "0";
}
function L(t) {
  return Object.keys(t).sort().filter(
    (r) => t[r] !== void 0
  ).map((r) => `${r}_${r === "root" ? E(t.root) : t[r]}`).toString();
}
function U(t) {
  const r = L(t);
  let o = I.get(r);
  if (!o) {
    const i = /* @__PURE__ */ new Map();
    let f;
    const d = new IntersectionObserver((e) => {
      e.forEach((u) => {
        var g;
        const n = u.isIntersecting && f.some((l) => u.intersectionRatio >= l);
        t.trackVisibility && typeof u.isVisible > "u" && (u.isVisible = n), (g = i.get(u.target)) == null || g.forEach((l) => {
          l(n, u);
        });
      });
    }, t);
    f = d.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), o = {
      id: r,
      observer: d,
      elements: i
    }, I.set(r, o);
  }
  return o;
}
function W(t, r, o = {}, i = $) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const g = t.getBoundingClientRect();
    return r(i, {
      isIntersecting: i,
      target: t,
      intersectionRatio: typeof o.threshold == "number" ? o.threshold : 0,
      time: 0,
      boundingClientRect: g,
      intersectionRect: g,
      rootBounds: g
    }), () => {
    };
  }
  const { id: f, observer: d, elements: e } = U(o), u = e.get(t) || [];
  return e.has(t) || e.set(t, u), u.push(r), d.observe(t), function() {
    u.splice(u.indexOf(r), 1), u.length === 0 && (e.delete(t), d.unobserve(t)), e.size === 0 && (d.disconnect(), I.delete(f));
  };
}
function q({
  threshold: t,
  delay: r,
  trackVisibility: o,
  rootMargin: i,
  root: f,
  triggerOnce: d,
  skip: e,
  initialInView: u,
  fallbackInView: g,
  onChange: n
} = {}) {
  var l;
  const [a, s] = h.useState(null), w = h.useRef(n), [b, c] = h.useState({
    inView: !!u,
    entry: void 0
  });
  w.current = n, h.useEffect(
    () => {
      if (e || !a) return;
      let x;
      return x = W(
        a,
        (T, C) => {
          c({
            inView: T,
            entry: C
          }), w.current && w.current(T, C), C.isIntersecting && d && x && (x(), x = void 0);
        },
        {
          root: f,
          rootMargin: i,
          threshold: t,
          // @ts-ignore
          trackVisibility: o,
          // @ts-ignore
          delay: r
        },
        g
      ), () => {
        x && x();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(t) ? t.toString() : t,
      a,
      f,
      i,
      d,
      e,
      o,
      g,
      r
    ]
  );
  const S = (l = b.entry) == null ? void 0 : l.target, R = h.useRef(void 0);
  !a && S && !d && !e && R.current !== S && (R.current = S, c({
    inView: !!u,
    entry: void 0
  }));
  const y = [s, b.inView, b.entry];
  return y.ref = y[0], y.inView = y[1], y.entry = y[2], y;
}
const F = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 even:bg-content2 h-12"
  },
  flat: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 hover:bg-content2 h-12"
  }
};
function J(t, r, o) {
  const i = o.find(
    (f) => typeof f.field == "string" && String(f.field) === String(t)
  );
  if (!i)
    return null;
  if (i.cell)
    return i.cell(r);
  if (typeof i.field == "string" && i.field in r) {
    const f = r[i.field];
    return typeof f == "string" || typeof f == "number" ? String(f) : null;
  }
  return null;
}
function m({
  rows: t,
  columns: r,
  onEndReached: o,
  onSelectionChange: i,
  onSortChange: f,
  selectionMode: d = "multiple",
  classNames: e,
  variant: u = "flat",
  isLoading: g = !1,
  childrenProps: n,
  ...l
}) {
  const { inView: a } = q({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (V(() => {
    a && (o == null || o());
  }, [a, o]), g)
    return /* @__PURE__ */ v.jsx("div", { children: "Loading..." });
  const s = F[u], w = r.map((b, c) => ({
    ...b,
    key: typeof b.field == "string" ? String(b.field) : String(c),
    label: b.header
  }));
  return /* @__PURE__ */ v.jsxs(
    z,
    {
      "aria-label": "DataGrid",
      selectionMode: d,
      onSelectionChange: i,
      onSortChange: f,
      classNames: {
        wrapper: p("p-0", e == null ? void 0 : e.wrapper),
        thead: p("sticky top-0 z-10", e == null ? void 0 : e.thead),
        tbody: e == null ? void 0 : e.tbody,
        tr: e == null ? void 0 : e.tr,
        th: e == null ? void 0 : e.th,
        td: e == null ? void 0 : e.td
      },
      ...l,
      children: [
        /* @__PURE__ */ v.jsx(
          B,
          {
            columns: w,
            className: p(s.header),
            ...n == null ? void 0 : n.tableHeaderProps,
            children: (b) => /* @__PURE__ */ v.jsx(
              D,
              {
                allowsSorting: b.sortable ?? !1,
                className: p(s.column),
                ...n == null ? void 0 : n.tableColumnProps,
                children: /* @__PURE__ */ v.jsxs("div", { className: p("flex items-center gap-2"), children: [
                  b.label,
                  b.sortable !== !1 && /* @__PURE__ */ v.jsxs(
                    "div",
                    {
                      className: p(
                        "relative size-4 cursor-pointer",
                        e == null ? void 0 : e.sortIcon
                      ),
                      children: [
                        /* @__PURE__ */ v.jsx(
                          _,
                          {
                            size: 16,
                            className: "absolute -top-1 opacity-30"
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          H,
                          {
                            size: 16,
                            className: "absolute top-1 opacity-30"
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              b.key
            )
          }
        ),
        /* @__PURE__ */ v.jsx(M, { items: t, ...n == null ? void 0 : n.tableBodyProps, children: (b) => /* @__PURE__ */ v.jsx(
          G,
          {
            className: p(s.row),
            ...n == null ? void 0 : n.tableRowProps,
            children: (c) => /* @__PURE__ */ v.jsx(O, { ...n == null ? void 0 : n.tableCellProps, children: J(c, b, r) })
          },
          b.id
        ) })
      ]
    }
  );
}
export {
  m as DataGrid
};
