import type { JSX } from "react";
import { forwardRef } from "react";
import type { RadioGroupProps, RadioProps } from "@nextui-org/radio";
import { RadioGroup as RadioGroupRoot, Radio } from "@nextui-org/radio";
import { cn } from "@/utils";

type RadioItemProps = {
  label?: React.ReactNode;
} & Omit<RadioProps, "children">;

type RadioWrapperProps = {
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
} & Omit<RadioGroupProps, "children">;

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
  ): JSX.Element => {
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
        {items.map(
          (item): JSX.Element => (
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
          ),
        )}
      </RadioGroupRoot>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
