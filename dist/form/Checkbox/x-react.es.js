import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxGroup$1,
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
          var _a, _b;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
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
CheckboxGroup.displayName = "CheckboxGroup";
export {
  Checkbox2 as Checkbox,
  CheckboxGroup
};
//# sourceMappingURL=x-react.es.js.map
