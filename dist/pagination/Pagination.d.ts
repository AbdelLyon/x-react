import { PaginationProps as PaginationRootProps } from '@nextui-org/pagination';
export interface PaginationProps extends PaginationRootProps {
    containerClasses?: string;
}
export declare const Pagination: import('react').ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & import('react').RefAttributes<HTMLUListElement>>;
