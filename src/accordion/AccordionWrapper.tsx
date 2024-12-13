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
        return (
          <AccordionItem {...item} key={item.key}>
            {item.content}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
