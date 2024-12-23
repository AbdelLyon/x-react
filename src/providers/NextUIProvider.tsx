import type {
  NextUIProviderProps as ProviderProps} from "@nextui-org/react";
import {
  NextUIProvider as Provider
} from "@nextui-org/react";
import type { JSX} from "react";
import { type ReactNode } from "react";

interface AppProviderProps extends ProviderProps {
  children: ReactNode;
}

export const NextUIProvider = (props: AppProviderProps): JSX.Element => {
  const { children, ...rest } = props;

  return <Provider {...rest}>{children}</Provider>;
};
