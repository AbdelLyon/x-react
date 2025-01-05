import { jsx as i } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { Pagination as p } from "@nextui-org/react";
import { cn as r } from "../../utils/x-react.es.js";
const u = d(
  ({ containerClasses: o, classNames: t, ...n }, f) => /* @__PURE__ */ i("div", { className: r("w-full flex justify-center", o), children: /* @__PURE__ */ i(
    p,
    {
      ref: f,
      classNames: {
        ...t,
        base: r("gap-2", t == null ? void 0 : t.base),
        item: r("data-[hover=true]:bg-default-100", t == null ? void 0 : t.item),
        prev: r("data-[hover=true]:bg-default-100", t == null ? void 0 : t.prev),
        next: r("data-[hover=true]:bg-default-100", t == null ? void 0 : t.next)
      },
      ...n
    }
  ) })
);
u.displayName = "Pagination";
export {
  u as Pagination
};
