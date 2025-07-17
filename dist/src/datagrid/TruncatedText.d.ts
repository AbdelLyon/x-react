import { ReactNode, JSX, CSSProperties } from 'react';
interface TruncatedTextProps {
    children: ReactNode;
    className?: string;
    tooltipClassName?: string;
    placement?: "top" | "bottom" | "left" | "right";
    style?: CSSProperties;
}
export declare function TruncatedText({ children, className, tooltipClassName, placement, style, }: TruncatedTextProps): JSX.Element;
export {};
