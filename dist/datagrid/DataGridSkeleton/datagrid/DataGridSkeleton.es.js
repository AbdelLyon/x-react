import { jsxs as p, jsx as a } from "react/jsx-runtime";
import { Table as f, TableHeader as h, TableColumn as N, Skeleton as r, TableBody as T, TableRow as b, TableCell as y } from "@nextui-org/react";
import { cn as m } from "../../../utils/utils.es.js";
import { GRID_VARIANTS as A } from "../../../data/default/data/default.es.js";
const z = ({
  columns: d = 5,
  rows: i = 5,
  checkboxSelection: e = !0,
  variant: o = "unstyled",
  className: u
}) => {
  const s = A[o], n = e ? d + 1 : d;
  return /* @__PURE__ */ p(f, { radius: "sm", "aria-label": "Loading data", className: u, children: [
    /* @__PURE__ */ a(h, { className: m(s.thead), children: Array(n).fill(null).map((c, l) => /* @__PURE__ */ a(N, { className: m(s.th), children: l === 0 && e ? /* @__PURE__ */ a(r, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a(r, { className: "h-4 w-24 rounded-md" }) }, l)) }),
    /* @__PURE__ */ a(T, { children: Array(i).fill(null).map((c, l) => /* @__PURE__ */ a(b, { className: m(s.tr), children: Array(n).fill(null).map((w, t) => /* @__PURE__ */ a(y, { children: t === 0 && e ? /* @__PURE__ */ a(r, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a(r, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, t)) }, l)) })
  ] });
};
export {
  z as DataGridSkeleton
};
