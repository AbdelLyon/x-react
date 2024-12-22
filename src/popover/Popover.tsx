import { forwardRef } from "react";
import {
  Popover as PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverProps,
  PopoverContentProps,
} from "@nextui-org/react";
import { Radius } from "@/types/types";

export interface PropsPopover extends Omit<PopoverProps, "content"> {
  trigger: React.ReactNode;
  contentClassName?: string;
  popoverContentProps?: PopoverContentProps;
  radius?: Radius;
}

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
  ) => {
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
