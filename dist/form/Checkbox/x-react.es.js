import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { CheckboxGroup as CheckboxGroup$1, Checkbox } from "@nextui-org/react";
import { Checkbox as Checkbox2 } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
const CheckboxGroup = forwardRef(
  ({
    items,
    groupClasses,
    itemClasses,
    label = "Select options",
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
      wrapper: ""
    };
    return /* @__PURE__ */ jsx(
      CheckboxGroup$1,
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
          Checkbox,
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
CheckboxGroup.displayName = "CheckboxGroup";
export {
  Checkbox2 as Checkbox,
  CheckboxGroup
};
