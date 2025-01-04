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
          base: cn(defaultGroupClasses.base, groupClasses == null ? void 0 : groupClasses.base),
          label: cn(defaultGroupClasses.label, groupClasses == null ? void 0 : groupClasses.label)
        },
        children: items.map((item) => {
          var _a, _b, _c;
          return /* @__PURE__ */ jsx(
            Radio,
            {
              ...item,
              classNames: {
                base: cn(
                  defaultItemClasses.base,
                  itemClasses == null ? void 0 : itemClasses.base,
                  item.className
                ),
                label: cn(
                  defaultItemClasses.label,
                  itemClasses == null ? void 0 : itemClasses.label,
                  (_a = item.classNames) == null ? void 0 : _a.label
                ),
                wrapper: cn(
                  defaultItemClasses.wrapper,
                  itemClasses == null ? void 0 : itemClasses.wrapper,
                  (_b = item.classNames) == null ? void 0 : _b.wrapper
                ),
                control: cn(
                  defaultItemClasses.control,
                  itemClasses == null ? void 0 : itemClasses.control,
                  (_c = item.classNames) == null ? void 0 : _c.control
                )
              },
              children: item.label
            },
            item.value
          );
        })
      }
    );
  }
);
RadioGroup.displayName = "RadioGroup";
export {
  RadioGroup
};
//# sourceMappingURL=x-react.es.js.map
