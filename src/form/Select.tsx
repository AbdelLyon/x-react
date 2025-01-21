import type { JSX } from "react";
import { forwardRef } from "react";
import type {
  SelectProps as NextUISelectProps,
  Selection,
} from "@heroui/react";
import { Select as NextUISelect, SelectItem } from "@heroui/react";

export interface SelectOption {
  key: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface SelectProps
  extends Omit<NextUISelectProps, "children" | "value" | "onSelectionChange"> {
  options: SelectOption[];
  value?: Selection;
  defaultValue?: Selection;
  onSelectionChange?: (key: Selection) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { options = [], value, defaultValue, classNames, ...props },
    ref,
  ): JSX.Element => {
    return (
      <NextUISelect
        ref={ref}
        classNames={{
          base: "max-w-xs",
          trigger: "h-10",
          value: "text-small",
          ...classNames,
        }}
        selectedKeys={value}
        defaultSelectedKeys={defaultValue}
        {...props}
      >
        {options.map(
          (option): JSX.Element => (
            <SelectItem
              key={option.key}
              description={option.description}
              startContent={option.icon}
              className="text-small"
            >
              {option.label}
            </SelectItem>
          ),
        )}
      </NextUISelect>
    );
  },
);

Select.displayName = "Select";
