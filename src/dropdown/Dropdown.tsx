import { forwardRef } from "react";
import type { DropdownProps, DropdownMenuProps } from "@nextui-org/react";
import {
  Dropdown as DropdownRoot,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";

export type DropdownItemConfig = {
  key: string;
  label: string;
  href?: string;
  isReadOnly?: boolean;
  className?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  shortcut?: string;
};

export interface DropdownSectionConfig {
  key: string;
  label?: string;
  showDivider?: boolean;
  items: DropdownItemConfig[];
}

type Props = {
  trigger: React.ReactNode;
  sections: DropdownSectionConfig[];
  dropdownMenuProps?: DropdownMenuProps;
  onItemPress?: (item: DropdownItemConfig) => void;
} & Omit<DropdownProps, "trigger" | "children">;

export const Dropdown = forwardRef<HTMLDivElement, Props>(
  (
    { trigger, sections, dropdownMenuProps, onItemPress, classNames, ...props },
    ref,
  ) => {
    const handleItemPress = (item: DropdownItemConfig): void => {
      if (onItemPress) {
        onItemPress(item);
      }
    };

    return (
      <DropdownRoot
        ref={ref}
        showArrow
        classNames={{
          base: "before:bg-default-200",
          content: "p-0 border border-default-200 bg-background",
          ...classNames,
        }}
        {...props}
      >
        <DropdownTrigger>{trigger}</DropdownTrigger>
        <DropdownMenu className="p-3" {...dropdownMenuProps}>
          {sections.map((section) => (
            <DropdownSection
              key={section.key}
              showDivider={section.showDivider}
              aria-label={section.label}
            >
              {section.items.map((item) => {
                const { key, label, href, ...remainingProps } = item;
                return (
                  <DropdownItem
                    key={key}
                    onPress={() => {
                      handleItemPress({ ...item, href });
                    }}
                    {...remainingProps}
                  >
                    {label}
                  </DropdownItem>
                );
              })}
            </DropdownSection>
          ))}
        </DropdownMenu>
      </DropdownRoot>
    );
  },
);

Dropdown.displayName = "Dropdown";
