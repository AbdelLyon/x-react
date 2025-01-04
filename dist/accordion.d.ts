import { AccordionItemProps } from '@nextui-org/react';
import { AccordionProps } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

export declare const Accordion: ForwardRefExoticComponent<Omit<AccordionWrapperProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface AccordionWrapperProps extends Omit<AccordionProps, "children"> {
    items: ExtendedAccordionItemProps[];
    itemClasses?: {
        base?: string;
        title?: string;
        [key: string]: string | undefined;
    };
}

export declare interface ExtendedAccordionItemProps extends Omit<AccordionItemProps, "content"> {
    content?: React.ReactNode;
}

export { }
