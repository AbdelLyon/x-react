import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Pagination as Pagination$1 } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
const Pagination = forwardRef(
  ({ containerClasses, classNames, ...props }, ref) => {
    return /* @__PURE__ */ jsx("div", { className: cn("w-full flex justify-center", containerClasses), children: /* @__PURE__ */ jsx(
      Pagination$1,
      {
        ref,
        classNames: {
          ...classNames,
          base: cn("gap-2", classNames?.base),
          item: cn("data-[hover=true]:bg-default-100", classNames?.item),
          prev: cn("data-[hover=true]:bg-default-100", classNames?.prev),
          next: cn("data-[hover=true]:bg-default-100", classNames?.next)
        },
        ...props
      }
    ) });
  }
);
Pagination.displayName = "Pagination";
export {
  Pagination
};
