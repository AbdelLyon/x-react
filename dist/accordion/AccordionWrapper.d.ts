import { AccordionProps, AccordionItemProps } from '@nextui-org/react';
interface AccordionItemData extends Omit<AccordionItemProps, "content"> {
    content: React.ReactNode;
}
interface AccordionWrapperProps extends AccordionProps {
    items: AccordionItemData[];
}
export declare const AccordionWrapper: ({ items, ...accordionProps }: AccordionWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
