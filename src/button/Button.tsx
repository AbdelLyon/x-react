import type {
  ButtonProps as HeroUIButtonProps,
  PressEvent,
} from "@heroui/react";
import { Button as HeroUIButton, Spinner } from "@heroui/react";
import type { JSX, ReactNode } from "react";
import { forwardRef } from "react";
import { mergeTailwindClasses } from "@/utils";
import type {
  Color,
  Variant,
  Size,
  BaseComponentProps,
  AccessibilityProps,
} from "@/types";

export interface ButtonProps
  extends Omit<
      HeroUIButtonProps,
      "color" | "variant" | "size" | "aria-label" | "aria-disabled" | "onPress" | "onClick"
    >,
    BaseComponentProps,
    Pick<
      AccessibilityProps,
      "aria-label" | "aria-labelledby" | "aria-describedby"
    > {
  variant?: Variant;
  color?: Color;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  onClick?: (event: PressEvent) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      color = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      className,
      onClick,
      ...props
    },
    ref,
  ): JSX.Element => {
    const isDisabled = disabled || loading;

    const handlePress = (e: PressEvent): void => {
      e.continuePropagation();
      onClick?.(e);
    };

    return (
      <HeroUIButton
        ref={ref}
        variant={variant}
        onPress={handlePress}
        color={color}
        size={size}
        isDisabled={isDisabled}
        startContent={
          loading ? <Spinner size="sm" color="current" /> : leftIcon
        }
        endContent={!loading ? rightIcon : undefined}
        className={mergeTailwindClasses(
          fullWidth && "w-full",
          loading && "cursor-wait",
          className,
        )}
        {...props}
      >
        {children}
      </HeroUIButton>
    );
  },
);

Button.displayName = "Button";
