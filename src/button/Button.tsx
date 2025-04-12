import type { ButtonProps } from "@heroui/react";
import { button as ButtonRoot } from "@heroui/react";
import type { JSX } from "react";

export const Button = (props: ButtonProps): JSX.Element => {
  return <ButtonRoot color="primary" className={props.className} {...props} />
};
