import type { AnchorHTMLAttributes, ComponentType, ReactNode } from "react";
import { forwardRef } from "react";
import type { ButtonProps as ButtonRootProps } from "@nextui-org/button";
import { Button as ButtonRoot } from "@nextui-org/button";
import { cn } from "@/utils";

export interface ButtonProps extends ButtonRootProps {
  LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  classNames?: {
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
      classNames = {
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
      classNames.base,
      className,
    );

    const Content = (): ReactNode => (
      <>
        {startContent !== undefined && (
          <span className={cn("mr-2", classNames.beforeContent)}>
            {startContent}
          </span>
        )}
        <span className={classNames.content}>{children}</span>
        {endContent !== undefined && (
          <span className={cn("ml-2", classNames.afterContent)}>
            {endContent}
          </span>
        )}
      </>
    );

    const hasValidLink =
      href !== undefined &&
      href.length > 0 &&
      LinkComponent !== undefined &&
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
