import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Tabs as Tabs$1, Tab } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
const Tabs = forwardRef(
  ({
    items,
    defaultActiveTab,
    onTabChange,
    renderTabContent,
    variant = "solid",
    color = "primary",
    size = "md",
    radius = "md",
    fullWidth = false,
    placement = "top",
    isVertical = false,
    disableAnimation = false,
    disableCursorAnimation = false,
    destroyInactiveTabPanel = true,
    ...props
  }, ref) => {
    const handleSelectionChange = (key) => {
      onTabChange?.(key.toString());
    };
    const defaultContent = (item) => item.content;
    const contentRenderer = renderTabContent || defaultContent;
    const getVariantStyles = () => {
      if (variant === "bordered") {
        return "border-1 border-default";
      }
      return "";
    };
    return /* @__PURE__ */ jsx(
      Tabs$1,
      {
        ref,
        variant,
        color,
        size,
        radius,
        fullWidth,
        placement,
        isVertical,
        disableAnimation,
        disableCursorAnimation,
        destroyInactiveTabPanel,
        defaultSelectedKey: defaultActiveTab,
        classNames: {
          ...props.classNames,
          tabList: cn(getVariantStyles(), props.classNames?.tabList)
        },
        onSelectionChange: handleSelectionChange,
        ...props,
        children: items.map((item) => /* @__PURE__ */ jsx(
          Tab,
          {
            title: item.title,
            titleValue: item.titleValue,
            href: item.href,
            target: item.target,
            isDisabled: item.disabled,
            children: contentRenderer(item)
          },
          item.key
        ))
      }
    );
  }
);
Tabs.displayName = "Tabs";
export {
  Tabs
};
