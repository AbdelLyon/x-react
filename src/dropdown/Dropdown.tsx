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

// Interface pour les items de dropdown
export interface DropdownItemConfig {
  key: string;
  label: string;
  isReadOnly?: boolean;
  className?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  shortcut?: string;
}

// Interface pour les sections de dropdown
export interface DropdownSectionConfig {
  key: string;
  label?: string;
  showDivider?: boolean;
  items: DropdownItemConfig[];
}

interface Props extends Omit<DropdownProps, "trigger"> {
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
