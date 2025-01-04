import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { RadioGroup as RadioGroup$1, Radio } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
const RadioGroup = forwardRef(
  ({
    items,
    groupClasses,
    itemClasses,
    label = "Select an option",
    defaultValue,
    ...props
  }, ref) => {
    const defaultGroupClasses = {
      base: "w-full",
      label: "text-medium font-semibold"
    };
    const defaultItemClasses = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ jsx(
      RadioGroup$1,
      {
        ref,
        label,
        defaultValue,
        ...props,
        classNames: {
          base: cn(defaultGroupClasses.base, groupClasses?.base),
          label: cn(defaultGroupClasses.label, groupClasses?.label)
        },
        children: items.map((item) => /* @__PURE__ */ jsx(
          Radio,
          {
            ...item,
            classNames: {
              base: cn(
                defaultItemClasses.base,
                itemClasses?.base,
                item.className
              ),
              label: cn(
                defaultItemClasses.label,
                itemClasses?.label,
                item.classNames?.label
              ),
              wrapper: cn(
                defaultItemClasses.wrapper,
                itemClasses?.wrapper,
                item.classNames?.wrapper
              ),
              control: cn(
                defaultItemClasses.control,
                itemClasses?.control,
                item.classNames?.control
              )
            },
            children: item.label
          },
          item.value
        ))
      }
    );
  }
);
RadioGroup.displayName = "RadioGroup";
export {
  RadioGroup
};
