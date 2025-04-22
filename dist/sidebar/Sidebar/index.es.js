import { jsxs, jsx } from "react/jsx-runtime";
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { Link } from "@heroui/react";
import { useResponsive } from "../../hooks/useResponsive/index.es.js";
import { Tooltip } from "../../tooltip/Tooltip/index.es.js";
const Sidebar = ({
  items = [],
  classNames,
  bgImage,
  onItemClick,
  ref
}) => {
  const { isDesktop, isTablet } = useResponsive();
  if (!isDesktop && !isTablet) {
    return null;
  }
  const renderLink = (item) => {
    const linkContent = /* @__PURE__ */ jsxs(
      Link,
      {
        className: mergeTailwindClasses(
          "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
          {
            "border-l-2 border-primary bg-content1 text-primary": item.isActive,
            "justify-center": isTablet
          },
          classNames == null ? void 0 : classNames.item
        ),
        onPress: () => onItemClick == null ? void 0 : onItemClick(item),
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
          className: "border border-border"
        },
        item.key
      );
    }
    return linkContent;
  };
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      ref,
      className: mergeTailwindClasses(
        "fixed left-0 h-screen flex flex-col bg-[#212324] border-r border-border",
        {
          "w-[270px]": isDesktop,
          "w-[90px]": isTablet
        },
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        /* @__PURE__ */ jsx("nav", { className: "flex-1 flex-col gap-2 p-4", children: items.map(renderLink) }),
        bgImage
      ]
    }
  );
};
export {
  Sidebar
};
