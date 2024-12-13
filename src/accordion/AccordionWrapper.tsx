import {
  Accordion,
  AccordionItem,
  AccordionProps,
  AccordionItemProps,
} from "@nextui-org/react";

interface AccordionItemData extends Omit<AccordionItemProps, "content"> {
  content: React.ReactNode;
}

interface AccordionWrapperProps extends AccordionProps {
  items: AccordionItemData[];
}

export const AccordionWrapper = ({
  items,
  ...accordionProps
}: AccordionWrapperProps) => {
  return (
    <Accordion {...accordionProps}>
      {items.map((item) => {
        const { content, ...itemProps } = item;

        return (
          <AccordionItem {...itemProps} key={itemProps.key}>
            {content}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
