import { forwardRef } from "react";
import type { ButtonGroupProps, ButtonProps } from "@nextui-org/react";
import { ButtonGroup } from "@nextui-org/react";
import { Button } from "./Button";

export type ButtonsProps = ButtonGroupProps & {
  buttons: Array<{
    key: string | number;
    label: React.ReactNode;
    buttonProps?: ButtonProps;
  }>;
};

export const Buttons = forwardRef(
  (
    { buttons, ...props }: ButtonsProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <ButtonGroup ref={ref} {...props}>
        {buttons.map(({ key, label, buttonProps }) => (
          <Button key={key} {...buttonProps}>
            {label}
          </Button>
        ))}
      </ButtonGroup>
    );
  },
);

Buttons.displayName = "Buttons";
