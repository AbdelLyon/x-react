import { forwardRef } from "react";
import {
  Dropdown as DropdownRoot,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  DropdownProps,
  DropdownMenuProps,
} from "@nextui-org/react";

export interface DropdownSectionConfig {
  key: React.Key;
  label?: string;
  showDivider?: boolean;
  items: DropdownItemConfig[];
}

export interface DropdownItemConfig extends DropdownSectionConfig {
  label: string;
  key: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
}

interface Props extends Omit<DropdownProps, "trigger" | "children"> {
  trigger: React.ReactNode;
  sections: DropdownSectionConfig[];
  dropdownMenuProps?: DropdownMenuProps;
  onItemPress?: (key: string) => void;
}

export const Dropdown = forwardRef<HTMLDivElement, Props>(
  (
    { trigger, sections, dropdownMenuProps, onItemPress, classNames, ...props },
    ref,
  ) => {
    const handleItemPress = (key: string) => {
      if (onItemPress) {
        onItemPress(key);
      }
    };

    return (
      <DropdownRoot
        ref={ref}
        showArrow
        classNames={{
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
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
                // Destructure key separately
                const { key, label, ...remainingProps } = item;
                return (
                  <DropdownItem
                    key={key}
                    onPress={() => handleItemPress(key)}
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
