import {
  Accordion,
  AccordionItem,
  AccordionProps,
  AccordionItemProps,
} from "@nextui-org/react";

interface AccordionWrapperProps extends AccordionProps {
  items: AccordionItemProps[];
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
