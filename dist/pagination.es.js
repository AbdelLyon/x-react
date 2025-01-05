import { cn } from './chunk-HWWI3HGE.es.js';
import './chunk-OFYPKX7Y.es.js';
import { forwardRef } from 'react';
import { Pagination as Pagination$1 } from '@nextui-org/react';
import { jsx } from 'react/jsx-runtime';

var Pagination = forwardRef(
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

export { Pagination };
//# sourceMappingURL=pagination.es.js.map
//# sourceMappingURL=pagination.es.js.map