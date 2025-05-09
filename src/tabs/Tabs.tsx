import type { JSX, ReactNode } from "react";
import { forwardRef } from "react";
import type { TabsProps as NextUITabsProps } from "@heroui/react";
import { Tabs as TabsRoot, Tab } from "@heroui/react";
import { mergeTailwindClasses } from "@/utils";

export interface TabItem {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  href?: string;
  target?: string;
  titleValue?: string;
}

interface CustomTabsProps extends Omit<NextUITabsProps, "children"> {
  items: TabItem[];
  defaultActiveTab?: string;
  onTabChange?: (key: string) => void;
  renderTabContent?: (item: TabItem) => React.ReactNode;
}

export const Tabs = forwardRef<HTMLDivElement, CustomTabsProps>(
  (
    {
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
    },
    ref,
  ): JSX.Element => {
    const handleSelectionChange = (key: React.Key): void => {
      onTabChange?.(key.toString());
    };

    const defaultContent = (item: TabItem): ReactNode => item.content;
    const contentRenderer = renderTabContent ?? defaultContent;

    const getVariantStyles = (): string => {
      if (variant === "bordered") {
        return "border-1 border-border";
      }
      return "";
    };

    return (
      <TabsRoot
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        fullWidth={fullWidth}
        placement={placement}
        isVertical={isVertical}
        disableAnimation={disableAnimation}
        disableCursorAnimation={disableCursorAnimation}
        destroyInactiveTabPanel={destroyInactiveTabPanel}
        defaultSelectedKey={defaultActiveTab}
        classNames={{
          ...props.classNames,
          tabList: mergeTailwindClasses(
            getVariantStyles(),
            props.classNames?.tabList,
          ),
        }}
        onSelectionChange={handleSelectionChange}
        {...props}
      >
        {items.map(
          (item): JSX.Element => (
            <Tab
              key={item.key}
              title={item.title}
              titleValue={item.titleValue}
              href={item.href}
              target={item.target}
              isDisabled={item.disabled}
            >
              {contentRenderer(item)}
            </Tab>
          ),
        )}
      </TabsRoot>
    );
  },
);

Tabs.displayName = "Tabs";
