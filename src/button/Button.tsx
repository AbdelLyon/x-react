import type { AnchorHTMLAttributes, ComponentType, ReactNode } from "react";
import { forwardRef } from "react";
import type { ButtonProps as ButtonRootProps } from "@nextui-org/react";
import { Button as ButtonRoot } from "@nextui-org/react";

import { cn } from "@/utils";

export interface ButtonProps extends ButtonRootProps {
  LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
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
      "transition-none font-normal border-1 rounded-md",
      fullWidth && "w-full",
      isLoading && "opacity-50 cursor-not-allowed",
      customStyles.base,
      className,
    );

    const Content = (): ReactNode => {
      const hasStartContent =
        startContent !== null && startContent !== undefined;
      const hasEndContent = endContent !== null && endContent !== undefined;

      return (
        <>
          {hasStartContent && (
            <span className={cn("mr-2", customStyles.beforeContent)}>
              {startContent}
            </span>
          )}
          <span className={customStyles.content}>{children}</span>
          {hasEndContent && (
            <span className={cn("ml-2", customStyles.afterContent)}>
              {endContent}
            </span>
          )}
        </>
      );
    };

    const hasValidLink =
      typeof href === "string" &&
      href.length > 0 &&
      LinkComponent !== null &&
      LinkComponent !== undefined;

    if (hasValidLink) {
      return (
        <ButtonRoot
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
        </ButtonRoot>
      );
    }

    return (
      <ButtonRoot
        ref={ref}
        {...props}
        variant={variant}
        className={baseStyles}
        isDisabled={isDisabled}
      >
        <Content />
      </ButtonRoot>
    );
  },
);

Button.displayName = "Button";
