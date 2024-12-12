import {
  NextUIProvider as Provider,
  NextUIProviderProps,
} from "@nextui-org/react";
import { type ReactNode } from "react";

interface AppProviderProps extends NextUIProviderProps {
  children: ReactNode;
}

export const NextUIProvider = (props: AppProviderProps) => {
  const { children, ...rest } = props;

  return <Provider {...rest}>{children}</Provider>;
};
