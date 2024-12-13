import {
  Accordion,
  AccordionItem,
  AccordionProps,
  AccordionItemProps,
} from "@nextui-org/react";
import { cn } from "@/utils"; // Assuming you're using the cn utility for class name concatenation

interface ExtendedAccordionItemProps
  extends Omit<AccordionItemProps, "content"> {
  content?: React.ReactNode;
}

interface AccordionWrapperProps extends Omit<AccordionProps, "children"> {
  items: ExtendedAccordionItemProps[];
}

export const AccordionWrapper = ({
  items,
  itemClasses,
  ...accordionProps
}: AccordionWrapperProps) => {
  const defaultItemClasses = {
    base: "w-full border-none shadow-none",
    title: "text-lg font-semibold",
  };

  return (
    <Accordion
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
    </Accordion>
  );
};
