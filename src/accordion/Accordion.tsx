import { forwardRef } from "react";
import { cn } from "@/utils";
import type { AccordionProps, AccordionItemProps } from "@nextui-org/react";
import { Accordion as AccordionRoot, AccordionItem } from "@nextui-org/react";

export interface ExtendedAccordionItemProps
  extends Omit<AccordionItemProps, "content"> {
  content?: React.ReactNode;
}

interface AccordionWrapperProps extends Omit<AccordionProps, "children"> {
  items: ExtendedAccordionItemProps[];
  itemClasses?: {
    base?: string;
    title?: string;
    [key: string]: string | undefined;
  };
}

export const Accordion = forwardRef<HTMLDivElement, AccordionWrapperProps>(
  ({ items, itemClasses, ...accordionProps }, ref) => {
    const defaultItemClasses = {
      base: cn("w-full shadow-none ", {
        "bg-white dark:bg-content1 border-1 border-default rounded-md":
          accordionProps.variant === "splitted",
      }),
      title: "text-lg font-semibold",
    };

    return (
      <AccordionRoot
        ref={ref}
        {...accordionProps}
        itemClasses={{
          ...defaultItemClasses,
          ...itemClasses,
          base: cn(defaultItemClasses.base, itemClasses?.base),
          title: cn(defaultItemClasses.title, itemClasses?.title),
        }}
      >
        {items.map((item) => {
          const { content, ...itemProps } = item;
          return (
            <AccordionItem
              {...itemProps}
              key={itemProps.key}
              children={content}
            />
          );
        })}
      </AccordionRoot>
    );
  },
);

Accordion.displayName = "Accordion";
