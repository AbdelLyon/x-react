import { ReactNode } from 'react';
import { TooltipProps as TooltipPropsRoot } from '@nextui-org/react';
export interface TooltipProps extends Omit<TooltipPropsRoot, "content" | "children" | "trigger"> {
    trigger: ReactNode;
    content: ReactNode;
}
export declare const Tooltip: ({ trigger, content, size, color, radius, shadow, placement, delay, closeDelay, offset, containerPadding, crossOffset, showArrow, shouldFlip, triggerScaleOnOpen, isKeyboardDismissDisabled, isDismissable, shouldCloseOnBlur, isDisabled, disableAnimation, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;