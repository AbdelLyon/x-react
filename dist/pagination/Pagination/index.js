import { jsx as r } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { Pagination as f } from "@nextui-org/react";
import { cn as e } from "../../utils/index.js";
const d = n(
  ({ containerClasses: a, classNames: t, ...i }, o) => /* @__PURE__ */ r("div", { className: e("w-full flex justify-center", a), children: /* @__PURE__ */ r(
    f,
    {
      ref: o,
      classNames: {
        ...t,
        base: e("gap-2", t?.base),
        item: e("data-[hover=true]:bg-default-100", t?.item),
        prev: e("data-[hover=true]:bg-default-100", t?.prev),
        next: e("data-[hover=true]:bg-default-100", t?.next)
      },
      ...i
    }
  ) })
);
d.displayName = "Pagination";
export {
  d as Pagination
};
//# sourceMappingURL=index.js.map
