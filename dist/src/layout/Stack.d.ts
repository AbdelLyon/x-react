import { ReactNode } from 'react';
interface StackProps {
    children: ReactNode;
    spacing?: number;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "end" | "between";
    className?: string;
}
export declare const Stack: import('react').ForwardRefExoticComponent<StackProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
