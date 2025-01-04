import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef } from "react";
import { Select as Select$1, SelectItem } from "@nextui-org/react";
const Select = forwardRef(
  ({
    // Options
    options = [],
    value,
    defaultValue,
    classNames,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select$1,
      {
        ref,
        classNames: {
          base: "max-w-xs",
          trigger: "h-10",
          value: "text-small",
          ...classNames
        },
        selectedKeys: value,
        defaultSelectedKeys: defaultValue,
        ...props,
        children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectItem,
          {
            description: option.description,
            startContent: option.icon,
            className: "text-small",
            children: option.label
          },
          option.key
        ))
      }
    );
  }
);
Select.displayName = "Select";
export {
  Select
};
//# sourceMappingURL=x-react.es.js.map
