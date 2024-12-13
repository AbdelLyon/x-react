import { AccordionProps, AccordionItemProps } from '@nextui-org/react';
interface AccordionWrapperProps extends AccordionProps {
    items: AccordionItemProps[];
}
export declare const AccordionWrapper: ({ items, ...accordionProps }: AccordionWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
