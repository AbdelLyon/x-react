import { forwardRef } from "react";
import type {
  SelectProps as NextUISelectProps,
  Selection,
} from "@nextui-org/react";
import { Select as NextUISelect, SelectItem } from "@nextui-org/react";

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
    {
      // Options
      options = [],
      value,
      defaultValue,
      classNames,
      ...props
    },
    ref,
  ) => {
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
        {options.map((option) => (
          <SelectItem
            key={option.key}
            description={option.description}
            startContent={option.icon}
            className="text-small"
          >
            {option.label}
          </SelectItem>
        ))}
      </NextUISelect>
    );
  },
);

Select.displayName = "Select";
