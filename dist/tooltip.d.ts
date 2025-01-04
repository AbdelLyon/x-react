import { JSX } from 'react';
import { ReactNode } from 'react';
import { TooltipProps as TooltipProps_2 } from '@nextui-org/react';

export declare const Tooltip: ({ trigger, content, size, color, radius, shadow, placement, delay, closeDelay, offset, containerPadding, crossOffset, showArrow, shouldFlip, triggerScaleOnOpen, isKeyboardDismissDisabled, isDismissable, shouldCloseOnBlur, isDisabled, disableAnimation, ...props }: TooltipProps) => JSX.Element;

declare interface TooltipProps extends Omit<TooltipProps_2, "content" | "children" | "trigger"> {
    trigger: ReactNode;
    content: ReactNode;
}

export { }
