/* empty css                */
import { j as b } from "../jsx-runtime-Dx-03ztt.js";
import * as j from "react";
import { useEffect as A } from "react";
import { Table as V, TableHeader as z, TableColumn as B, TableBody as D, TableRow as M, TableCell as N } from "@nextui-org/react";
import { IconChevronUp as G, IconChevronDown as O } from "@tabler/icons-react";
import { cn as S } from "../utils/x-react.es.js";
var R = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new WeakMap(), T = 0, _ = void 0;
function H(e) {
  return e ? (w.has(e) || (T += 1, w.set(e, T.toString())), w.get(e)) : "0";
}
function $(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? H(e.root) : e[t]}`).toString();
}
function E(e) {
  const t = $(e);
  let i = R.get(t);
  if (!i) {
    const n = /* @__PURE__ */ new Map();
    let a;
    const f = new IntersectionObserver((u) => {
      u.forEach((s) => {
        var l;
        const r = s.isIntersecting && a.some((d) => s.intersectionRatio >= d);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = r), (l = n.get(s.target)) == null || l.forEach((d) => {
          d(r, s);
        });
      });
    }, e);
    a = f.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
      id: t,
      observer: f,
      elements: n
    }, R.set(t, i);
  }
  return i;
}
function L(e, t, i = {}, n = _) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const l = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: l,
      intersectionRect: l,
      rootBounds: l
    }), () => {
    };
  }
  const { id: a, observer: f, elements: u } = E(i), s = u.get(e) || [];
  return u.has(e) || u.set(e, s), s.push(t), f.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (u.delete(e), f.unobserve(e)), u.size === 0 && (f.disconnect(), R.delete(a));
  };
}
function U({
  threshold: e,
  delay: t,
  trackVisibility: i,
  rootMargin: n,
  root: a,
  triggerOnce: f,
  skip: u,
  initialInView: s,
  fallbackInView: l,
  onChange: r
} = {}) {
  var d;
  const [g, y] = j.useState(null), x = j.useRef(r), [p, o] = j.useState({
    inView: !!s,
    entry: void 0
  });
  x.current = r, j.useEffect(
    () => {
      if (u || !g) return;
      let m;
      return m = L(
        g,
        (I, C) => {
          o({
            inView: I,
            entry: C
          }), x.current && x.current(I, C), C.isIntersecting && f && m && (m(), m = void 0);
        },
        {
          root: a,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: i,
          // @ts-ignore
          delay: t
        },
        l
      ), () => {
        m && m();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      g,
      a,
      n,
      f,
      u,
      i,
      l,
      t
    ]
  );
  const c = (d = p.entry) == null ? void 0 : d.target, h = j.useRef(void 0);
  !g && c && !f && !u && h.current !== c && (h.current = c, o({
    inView: !!s,
    entry: void 0
  }));
  const v = [y, p.inView, p.entry];
  return v.ref = v[0], v.inView = v[1], v.entry = v[2], v;
}
const W = {
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
function q(e, t, i) {
  const n = i.find(
    (a) => typeof a.field == "string" && String(a.field) === String(e)
  );
  if (!n)
    return null;
  if (n.cell)
    return n.cell(t);
  if (typeof n.field == "string" && n.field in t) {
    const a = t[n.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
}
function Z({
  rows: e,
  columns: t,
  onEndReached: i,
  onSelectionChange: n,
  onSortChange: a,
  selectionMode: f = "multiple",
  classNames: u,
  variant: s = "flat",
  isLoading: l = !1,
  childrenProps: r,
  ...d
}) {
  const { inView: g } = U({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (A(() => {
    g && (i == null || i());
  }, [g, i]), l)
    return /* @__PURE__ */ b.jsx("div", { children: "Loading..." });
  const y = W[s], x = (o) => {
    if (n) {
      const c = e.filter(
        (h) => o === "all" || o.has(h.id)
      );
      n(c);
    }
  }, p = t.map((o, c) => ({
    ...o,
    key: typeof o.field == "string" ? String(o.field) : String(c),
    label: o.header
  }));
  return /* @__PURE__ */ b.jsxs(
    V,
    {
      "aria-label": "DataGrid",
      selectionMode: f,
      onSelectionChange: x,
      onSortChange: a,
      ...d,
      children: [
        /* @__PURE__ */ b.jsx(
          z,
          {
            columns: p,
            className: S(y.header),
            ...r == null ? void 0 : r.tableHeaderProps,
            children: (o) => /* @__PURE__ */ b.jsx(
              B,
              {
                allowsSorting: o.sortable ?? !1,
                className: S(y.column),
                ...r == null ? void 0 : r.tableColumnProps,
                children: /* @__PURE__ */ b.jsxs("div", { className: S("flex items-center gap-2"), children: [
                  o.label,
                  o.sortable !== !1 && /* @__PURE__ */ b.jsxs(
                    "div",
                    {
                      className: S(
                        "relative size-4 cursor-pointer",
                        u == null ? void 0 : u.sortIcon
                      ),
                      children: [
                        /* @__PURE__ */ b.jsx(
                          G,
                          {
                            size: 16,
                            className: "absolute -top-1 opacity-30"
                          }
                        ),
                        /* @__PURE__ */ b.jsx(
                          O,
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
              o.key
            )
          }
        ),
        /* @__PURE__ */ b.jsx(D, { items: e, ...r == null ? void 0 : r.tableBodyProps, children: (o) => /* @__PURE__ */ b.jsx(
          M,
          {
            className: S(y.row),
            ...r == null ? void 0 : r.tableRowProps,
            children: (c) => /* @__PURE__ */ b.jsx(N, { ...r == null ? void 0 : r.tableCellProps, children: q(c, o, t) })
          },
          o.id
        ) })
      ]
    }
  );
}
export {
  Z as DataGrid
};
