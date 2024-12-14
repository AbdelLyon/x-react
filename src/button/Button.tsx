import { forwardRef } from "react";
import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
} from "@nextui-org/react";

import { cn } from "@/utils";

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
      "font-normal border-1 border-default rounded-md",
      variant === "solid" && "bg-primary text-white",
      variant === "bordered" &&
        "bg-white bg-content-1 text-primary border-primary ",
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
