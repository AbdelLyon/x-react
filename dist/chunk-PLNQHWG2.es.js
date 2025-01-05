import { Tooltip } from './chunk-S3NYFN2P.es.js';
import { useResponsive } from './chunk-ZOFUAQAT.es.js';
import { cn } from './chunk-HWWI3HGE.es.js';
import { forwardRef } from 'react';
import { Link } from '@nextui-org/react';
import { jsx, jsxs } from 'react/jsx-runtime';

var Sidebar = forwardRef(
  ({ items = [], classNames, onItemClick }, ref) => {
    const { isDesktop, isTablet } = useResponsive();
    if (!isDesktop && !isTablet) {
      return null;
    }
    const renderLink = (item) => {
      const linkContent = /* @__PURE__ */ jsxs(
        Link,
        {
          className: cn(
            "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
            {
              "border-l-2 border-primary bg-content1 text-primary": item.isActive,
              "justify-center": isTablet
            },
            classNames?.item
          ),
          onPress: () => onItemClick?.(item),
          children: [
            item.startContent,
            isDesktop ? item.label : null,
            item.endContent
          ]
        },
        item.key
      );
      if (isTablet) {
        return /* @__PURE__ */ jsx(
          Tooltip,
          {
            trigger: linkContent,
            content: item.label,
            placement: "right",
            delay: 0,
            closeDelay: 0,
            className: "border border-default"
          },
          item.key
        );
      }
      return linkContent;
    };
    return /* @__PURE__ */ jsx(
      "aside",
      {
        ref,
        className: cn(
          "fixed left-0 h-screen flex-col bg-[#212324] border-r border-default",
          {
            "w-[270px]": isDesktop,
            "w-[90px]": isTablet
          },
          classNames?.base
        ),
        children: /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: items.map(renderLink) })
      }
    );
  }
);
Sidebar.displayName = "Sidebar";

export { Sidebar };
//# sourceMappingURL=chunk-PLNQHWG2.es.js.map
//# sourceMappingURL=chunk-PLNQHWG2.es.js.map