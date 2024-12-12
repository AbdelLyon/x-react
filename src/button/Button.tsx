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

export const Button = ({
  fullWidth = false,
  isLoading = false,
  isDisabled = false,
  startContent,
  endContent,
  className = "",
  LinkComponent,
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
}: ButtonProps) => {
  const baseStyles = cn(
    "transition-all font-normal dark:bg-opacity-90",
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
        {...props}
        as={LinkComponent}
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
    <NextUIButton {...props} className={baseStyles} isDisabled={isDisabled}>
      <Content />
    </NextUIButton>
  );
};
