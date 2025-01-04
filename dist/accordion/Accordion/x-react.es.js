import { jsx } from "react/jsx-runtime";
import { forwardRef, createElement } from "react";
import { cn } from "../../utils/x-react.es.js";
import { Accordion as Accordion$1, AccordionItem } from "@nextui-org/react";
const Accordion = forwardRef(
  ({ items, itemClasses, ...accordionProps }, ref) => {
    const defaultItemClasses = {
      base: cn("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-default rounded-md": accordionProps.variant === "splitted"
      }),
      title: "text-lg font-semibold"
    };
    const defaultClassName = cn(
      "rounded-md",
      {
        "border-1 border-default": accordionProps.variant === "bordered"
      },
      accordionProps.className
    );
    return /* @__PURE__ */ jsx(
      Accordion$1,
      {
        ref,
        ...accordionProps,
        className: defaultClassName,
        itemClasses: {
          ...defaultItemClasses,
          ...itemClasses,
          base: cn(defaultItemClasses.base, itemClasses?.base),
          title: cn(defaultItemClasses.title, itemClasses?.title)
        },
        children: items.map((item) => {
          const { content, ...itemProps } = item;
          return /* @__PURE__ */ createElement(
            AccordionItem,
            {
              ...itemProps,
              key: itemProps.key,
              children: content
            }
          );
        })
      }
    );
  }
);
Accordion.displayName = "Accordion";
export {
  Accordion
};
