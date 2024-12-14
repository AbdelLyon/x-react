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
      "transition-none font-normal border-1 border-default rounded-md",
      variant === "solid" && "bg-primary text-white",
      variant === "bordered" &&
        "bg-default-100 text-primary border-primary/70 ",
      variant === "light" &&
        "bg-background border-none data-[hover=true]:bg-transparent data-[hover=true]:underline",
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
