import type {
  AnchorHTMLAttributes,
  ComponentType,
  JSX,
  ReactNode,
} from "react";
import type { ButtonProps as ButtonRootProps } from "@nextui-org/button";
import { Button as ButtonRoot } from "@nextui-org/button";
import { cn } from "@/utils";

export interface ButtonProps extends Omit<ButtonRootProps, "onPress"> {
  LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  classNames?: {
    base?: string;
    beforeContent?: string;
    afterContent?: string;
    content?: string;
  };
  onClick?: () => void;
  rounded?: ButtonProps["radius"];
}

export const Button = ({
  onClick,
  rounded,
  startContent,
  endContent,
  LinkComponent,
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
}: ButtonProps): JSX.Element => {
  const baseStyles = cn(
    "transition-none font-normal border-1 rounded border-default",
    props.fullWidth && "w-full",
    props.isLoading && "opacity-50 cursor-not-allowed",
    classNames.base,
    props.className,
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
    href !== undefined && href.length > 0 && LinkComponent !== undefined;

  if (hasValidLink) {
    return (
      <ButtonRoot
        as={LinkComponent}
        className={baseStyles}
        href={href}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        target={target}
        onPress={onClick}
        radius={rounded}
        {...props}
      >
        <Content />
      </ButtonRoot>
    );
  }

  return (
    <ButtonRoot
      className={baseStyles}
      onPress={onClick}
      radius={rounded}
      {...props}
    >
      <Content />
    </ButtonRoot>
  );
};
