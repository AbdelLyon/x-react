import type { JSX, ReactNode } from "react";
import { forwardRef } from "react";
import type {
  CardFooterProps,
  CardProps as NextUICardProps,
} from "@nextui-org/card";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/card";

interface CardProps extends NextUICardProps {
  header?: ReactNode;
  footer?: ReactNode;
  footerProps?: CardFooterProps;
  classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      shadow = "md",
      radius = "lg",
      fullWidth = false,
      isHoverable = false,
      isPressable = false,
      isBlurred = false,
      isFooterBlurred = false,
      isDisabled = false,
      disableAnimation = false,
      disableRipple = false,
      allowTextSelectionOnPress = false,
      classNames,
      header,
      footer,
      footerProps,
      ...props
    },
    ref,
  ): JSX.Element => {
    return (
      <NextUICard
        ref={ref}
        shadow={shadow}
        radius={radius}
        fullWidth={fullWidth}
        isHoverable={isHoverable}
        isPressable={isPressable}
        isBlurred={isBlurred}
        isFooterBlurred={isFooterBlurred}
        isDisabled={isDisabled}
        disableAnimation={disableAnimation}
        disableRipple={disableRipple}
        allowTextSelectionOnPress={allowTextSelectionOnPress}
        className={classNames?.base}
        {...props}
      >
        {header !== undefined && (
          <CardHeader className={classNames?.header}>{header}</CardHeader>
        )}
        <CardBody className={classNames?.body}>{children}</CardBody>
        {footer !== undefined && (
          <CardFooter className={classNames?.footer} {...footerProps}>
            {footer}
          </CardFooter>
        )}
      </NextUICard>
    );
  },
);

Card.displayName = "Card";
