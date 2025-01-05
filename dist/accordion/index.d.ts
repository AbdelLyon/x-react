import * as react from 'react';
import { AccordionItemProps, AccordionProps } from '@nextui-org/react';

interface ExtendedAccordionItemProps extends Omit<AccordionItemProps, "content"> {
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
declare const Accordion: react.ForwardRefExoticComponent<Omit<AccordionWrapperProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Accordion, type ExtendedAccordionItemProps };
