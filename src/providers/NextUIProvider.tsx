import type { NextUIProviderProps as ProviderProps } from "@nextui-org/system";
import { NextUIProvider as Provider } from "@nextui-org/system";
import type { JSX } from "react";
import { type ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
} & ProviderProps;

export const NextUIProvider = (props: AppProviderProps): JSX.Element => {
  const { children, ...rest } = props;

  return <Provider {...rest}>{children}</Provider>;
};
