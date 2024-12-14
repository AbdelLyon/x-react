import { AccordionProps, AccordionItemProps } from '@nextui-org/react';
interface ExtendedAccordionItemProps extends Omit<AccordionItemProps, "content"> {
    content?: React.ReactNode;
}
interface AccordionWrapperProps extends Omit<AccordionProps, "children"> {
    items: ExtendedAccordionItemProps[];
}
export declare const Accordion: ({ items, itemClasses, ...accordionProps }: AccordionWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
