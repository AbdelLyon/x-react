import { forwardRef } from "react";
import type {
  RadioGroupProps,
  RadioProps} from "@nextui-org/react";
import {
  RadioGroup as RadioGroupRoot,
  Radio
} from "@nextui-org/react";
import { cn } from "@/utils";

interface RadioItemProps extends Omit<RadioProps, "children"> {
  label?: React.ReactNode;
}

interface RadioWrapperProps extends Omit<RadioGroupProps, "children"> {
  items: RadioItemProps[];
  groupClasses?: {
    base?: string;
    label?: string;
  };
  itemClasses?: {
    base?: string;
    label?: string;
    wrapper?: string;
    control?: string;
  };
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioWrapperProps>(
  (
    {
      items,
      groupClasses,
      itemClasses,
      label = "Select an option",
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
      control: "",
    };

    return (
      <RadioGroupRoot
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
          <Radio
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
              control: cn(
                defaultItemClasses.control,
                itemClasses?.control,
                item.classNames?.control,
              ),
            }}
          >
            {item.label}
          </Radio>
        ))}
      </RadioGroupRoot>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
