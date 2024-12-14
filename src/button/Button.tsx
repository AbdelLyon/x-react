import { forwardRef } from "react";
import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
} from "@nextui-org/react";

import { cn } from "@/utils";

export type ButtonVariant =
  | "solid"
  | "bordered"
  | "light"
  | "flat"
  | "faded"
  | "shadow"
  | "ghost";

export type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends NextUIButtonProps {
  LinkComponent?: React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >;
  customStyles?: {
    base?: string;
    beforeContent?: string;
    afterContent?: string;
    content?: string;
  };
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      fullWidth = false,
      isLoading = false,
      isDisabled = false,
      startContent,
      endContent,
      className = "",
      LinkComponent,
      variant = "solid",
      customStyles = {
        base: "",
        beforeContent: "",
        afterContent: "",
        content: "",
      },
      href,
      children,
      target,
      rel,
      ...props
    },
    ref,
  ) => {
    const baseStyles = cn(
      "transition-all font-normal dark:bg-opacity-90",
      fullWidth && "w-full",
      isLoading && "opacity-50 cursor-not-allowed",
      variant === "bordered" || (variant === "flat" && "border-1"),
      customStyles.base,
      className,
    );

    const Content = () => (
      <>
        {startContent && (
          <span className={cn("mr-2", customStyles.beforeContent)}>
            {startContent}
          </span>
        )}
        <span className={customStyles.content}>{children}</span>
        {endContent && (
          <span className={cn("ml-2", customStyles.afterContent)}>
            {endContent}
          </span>
        )}
      </>
    );

    if (href && LinkComponent) {
      return (
        <NextUIButton
          ref={ref}
          {...props}
          as={LinkComponent}
          variant={variant}
          className={baseStyles}
          href={href}
          rel={target === "_blank" ? "noopener noreferrer" : rel}
          target={target}
        >
          <Content />
        </NextUIButton>
      );
    }

    return (
      <NextUIButton
        ref={ref}
        {...props}
        variant={variant}
        className={baseStyles}
        isDisabled={isDisabled}
      >
        <Content />
      </NextUIButton>
    );
  },
);

Button.displayName = "Button";
