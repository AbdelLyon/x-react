import { forwardRef } from "react";
import {
  Dropdown as DropdownRoot,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  DropdownProps,
  DropdownMenuProps,
  DropdownItemProps,
} from "@nextui-org/react";

export interface DropdownSectionConfig {
  key?: string;
  label?: string;
  showDivider?: boolean;
  items: DropdownItemConfig[];
}

export interface DropdownItemConfig extends DropdownItemProps {
  label: string;
  key: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
}

interface Props extends Omit<DropdownProps, "trigger"> {
  trigger: React.ReactNode;
  sections: DropdownSectionConfig[];
  dropdownMenuProps?: DropdownMenuProps;
  onItemPress?: (key: string) => void;
}

const Dropdown = forwardRef<HTMLDivElement, Props>(
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
              {section.items.map((item) => (
                <DropdownItem
                  onPress={() => handleItemPress(item.key)}
                  endContent={item.endContent}
                  startContent={item.startContent}
                  {...item}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownSection>
          ))}
        </DropdownMenu>
      </DropdownRoot>
    );
  },
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
