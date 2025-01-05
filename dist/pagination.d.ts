import { ForwardRefExoticComponent } from 'react';
import { PaginationProps as PaginationProps_2 } from '@nextui-org/react';
import { RefAttributes } from 'react';

export declare const Pagination: ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & RefAttributes<HTMLUListElement>>;

declare interface PaginationProps extends PaginationProps_2 {
    containerClasses?: string;
}

export { }
