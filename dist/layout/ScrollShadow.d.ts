import { ScrollShadowProps } from '@nextui-org/scroll-shadow';
interface ScrollProps extends ScrollShadowProps {
    width?: string | number;
    height?: string | number;
}
export declare const Scroll: import('react').ForwardRefExoticComponent<Omit<ScrollProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
