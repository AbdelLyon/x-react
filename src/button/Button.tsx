import { forwardRef } from "react";
import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
} from "@nextui-org/react";

import { cn } from "@/utils";

export const getButtonVariantStyles = (variant: ButtonVariant) => {
  const variantStyles = {
    solid: {
      default: "bg-default-500 text-default-foreground",
      primary: "bg-primary-500 text-primary-foreground",
      secondary: "bg-secondary-500 text-secondary-foreground",
      success: "bg-success-500 text-success-foreground",
      warning: "bg-warning-500 text-warning-foreground",
      danger: "bg-danger-500 text-danger-foreground",
    },
    bordered: {
      default: "border-default-500 text-default-500 bg-transparent",
      primary: "border-primary-500 text-primary-500 bg-transparent",
      secondary: "border-secondary-500 text-secondary-500 bg-transparent",
      success: "border-success-500 text-success-500 bg-transparent",
      warning: "border-warning-500 text-warning-500 bg-transparent",
      danger: "border-danger-500 text-danger-500 bg-transparent",
    },
    light: {
      default: "text-default-500 bg-default-100",
      primary: "text-primary-500 bg-primary-100",
      secondary: "text-secondary-500 bg-secondary-100",
      success: "text-success-500 bg-success-100",
      warning: "text-warning-500 bg-warning-100",
      danger: "text-danger-500 bg-danger-100",
    },
    flat: {
      default: "bg-default-100 text-default-600",
      primary: "bg-primary-100 text-primary-600",
      secondary: "bg-secondary-100 text-secondary-600",
      success: "bg-success-100 text-success-600",
      warning: "bg-warning-100 text-warning-600",
      danger: "bg-danger-100 text-danger-600",
    },
    faded: {
      default: "border-default-200 bg-default-100 text-default-600",
      primary: "border-primary-200 bg-primary-100 text-primary-600",
      secondary: "border-secondary-200 bg-secondary-100 text-secondary-600",
      success: "border-success-200 bg-success-100 text-success-600",
      warning: "border-warning-200 bg-warning-100 text-warning-600",
      danger: "border-danger-200 bg-danger-100 text-danger-600",
    },
    shadow: {
      default: "bg-default-500 text-default-foreground shadow-lg",
      primary: "bg-primary-500 text-primary-foreground shadow-lg",
      secondary: "bg-secondary-500 text-secondary-foreground shadow-lg",
      success: "bg-success-500 text-success-foreground shadow-lg",
      warning: "bg-warning-500 text-warning-foreground shadow-lg",
      danger: "bg-danger-500 text-danger-foreground shadow-lg",
    },
    ghost: {
      default:
        "border-default-500 text-default-500 hover:bg-default-500 hover:text-default-foreground",
      primary:
        "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-foreground",
      secondary:
        "border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-foreground",
      success:
        "border-success-500 text-success-500 hover:bg-success-500 hover:text-success-foreground",
      warning:
        "border-warning-500 text-warning-500 hover:bg-warning-500 hover:text-warning-foreground",
      danger:
        "border-danger-500 text-danger-500 hover:bg-danger-500 hover:text-danger-foreground",
    },
  };

  return variantStyles[variant];
};

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
      "transition-all font-normal border-1 rounded-sm",
      getButtonVariantStyles(variant),
      fullWidth && "w-full",
      isLoading && "opacity-50 cursor-not-allowed",
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
