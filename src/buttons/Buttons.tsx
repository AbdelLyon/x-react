import type { JSX } from "react";
import { forwardRef } from "react";
import type { ButtonGroupProps, ButtonProps } from "@nextui-org/button";
import { ButtonGroup } from "@nextui-org/button";
import { Button } from "@/button/Button";

export interface ButtonsProps extends ButtonGroupProps {
  buttons: Array<{
    key: string | number;
    label: React.ReactNode;
    buttonProps?: ButtonProps;
  }>;
}

export const Buttons = forwardRef<HTMLDivElement, ButtonsProps>(
  ({ buttons, ...props }, ref): JSX.Element => {
    return (
      <ButtonGroup ref={ref} {...props}>
        {buttons.map(
          ({ key, label, buttonProps }): JSX.Element => (
            <Button key={key} {...buttonProps}>
              {label}
            </Button>
          ),
        )}
      </ButtonGroup>
    );
  },
);

Buttons.displayName = "Buttons";
