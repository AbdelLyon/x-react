import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Dropdown as Dropdown$1, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";
const Dropdown = forwardRef(
  ({ trigger, sections, dropdownMenuProps, onItemPress, classNames, ...props }, ref) => {
    const handleItemPress = (item) => {
      if (onItemPress) {
        onItemPress(item);
      }
    };
    return /* @__PURE__ */ jsxs(
      Dropdown$1,
      {
        ref,
        showArrow: true,
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border border-default bg-background",
          ...classNames
        },
        ...props,
        children: [
          /* @__PURE__ */ jsx(DropdownTrigger, { children: trigger }),
          /* @__PURE__ */ jsx(DropdownMenu, { className: "p-3", ...dropdownMenuProps, children: sections.map((section) => /* @__PURE__ */ jsx(
            DropdownSection,
            {
              showDivider: section.showDivider,
              "aria-label": section.label,
              children: section.items.map((item) => {
                const { key, label, href, ...remainingProps } = item;
                return /* @__PURE__ */ jsx(
                  DropdownItem,
                  {
                    onPress: () => {
                      handleItemPress({ ...item, href });
                    },
                    ...remainingProps,
                    children: label
                  },
                  key
                );
              })
            },
            section.key
          )) })
        ]
      }
    );
  }
);
Dropdown.displayName = "Dropdown";
export {
  Dropdown
};
