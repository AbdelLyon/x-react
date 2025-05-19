import type { JSX, ReactNode } from "react";
import { forwardRef } from "react";
import type {
  CardFooterProps,
  CardProps as NextUICardProps,
} from "@heroui/react";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter,
} from "@heroui/react";
import { mergeTailwindClasses } from "@/utils";

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
        className={mergeTailwindClasses(
          "border border-border/40 dark:bg-background p-4 data-[hover=true]:bg-content1-100/30 dark:data-[hover=true]:bg-content1-200/20 transition-all",
          classNames?.base,
        )}
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
