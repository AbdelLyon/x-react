import { ReactNode } from 'react';
interface SectionProps {
    children: ReactNode;
    className?: string;
    spacing?: "sm" | "md" | "lg" | "xl";
}
export declare const Section: import('react').ForwardRefExoticComponent<SectionProps & import('react').RefAttributes<HTMLElement>>;
export {};
