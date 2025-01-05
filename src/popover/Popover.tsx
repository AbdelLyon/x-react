import type { JSX } from "react";
import { forwardRef } from "react";
import type { PopoverProps, PopoverContentProps } from "@nextui-org/popover";
import {
  Popover as PopoverRoot,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/popover";
import type { Radius } from "@/types/types";

export type PropsPopover = {
  trigger: React.ReactNode;
  contentClassName?: string;
  popoverContentProps?: PopoverContentProps;
  radius?: Radius;
} & Omit<PopoverProps, "content">;

export const Popover = forwardRef<HTMLDivElement, PropsPopover>(
  (
    {
      trigger,
      contentClassName,
      popoverContentProps,
      radius = "sm",
      motionProps = {
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              y: { duration: 0.1 },
              opacity: { duration: 0.15 },
            },
          },
          exit: {
            y: "10%",
            opacity: 0,
            transition: {
              y: { duration: 0 },
              opacity: { duration: 0.1 },
            },
          },
        },
      },
      offset = 10,
      placement = "bottom",
      ...props
    },
    ref,
  ): JSX.Element => {
    return (
      <PopoverRoot
        ref={ref}
        motionProps={motionProps}
        offset={offset}
        placement={placement}
        radius={radius}
        isOpen={props.isOpen}
        {...props}
      >
        <PopoverTrigger>{trigger}</PopoverTrigger>
        <PopoverContent className={contentClassName} {...popoverContentProps}>
          {props.children}
        </PopoverContent>
      </PopoverRoot>
    );
  },
);

Popover.displayName = "Popover";
