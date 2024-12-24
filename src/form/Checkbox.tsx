import { forwardRef } from "react";
import type {
  CheckboxGroupProps,
  CheckboxProps} from "@nextui-org/react";
import {
  CheckboxGroup as CheckboxGroupRoot,
  Checkbox
} from "@nextui-org/react";
import { cn } from "@/utils";

type CheckboxItemProps = {
  label?: React.ReactNode;
} & Omit<CheckboxProps, "children">

type CheckboxWrapperProps = {
  items: CheckboxItemProps[];
  groupClasses?: {
    base?: string;
    label?: string;
  };
  itemClasses?: {
    base?: string;
    label?: string;
    wrapper?: string;
  };
} & Omit<CheckboxGroupProps, "children">

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxWrapperProps>(
  (
    {
      items,
      groupClasses,
      itemClasses,
      label = "Select options",
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const defaultGroupClasses = {
      base: "w-full",
      label: "text-medium font-semibold",
    };

    const defaultItemClasses = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
    };

    return (
      <CheckboxGroupRoot
        ref={ref}
        label={label}
        defaultValue={defaultValue}
        {...props}
        classNames={{
          base: cn(defaultGroupClasses.base, groupClasses?.base),
          label: cn(defaultGroupClasses.label, groupClasses?.label),
        }}
      >
        {items.map((item) => (
          <Checkbox
            key={item.value}
            {...item}
            classNames={{
              base: cn(
                defaultItemClasses.base,
                itemClasses?.base,
                item.className,
              ),
              label: cn(
                defaultItemClasses.label,
                itemClasses?.label,
                item.classNames?.label,
              ),
              wrapper: cn(
                defaultItemClasses.wrapper,
                itemClasses?.wrapper,
                item.classNames?.wrapper,
              ),
            }}
          >
            {item.label}
          </Checkbox>
        ))}
      </CheckboxGroupRoot>
    );
  },
);

CheckboxGroup.displayName = "CheckboxGroup";

export { Checkbox, CheckboxGroup };
