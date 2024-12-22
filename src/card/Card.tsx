import { forwardRef } from "react";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonProps,
} from "@nextui-org/react";
import { Radius, Shadow } from "@/types/types";

interface GenericCardProps extends Partial<ButtonProps> {
  children?: React.ReactNode | React.ReactNode[];
  shadow?: Shadow;
  radius?: Radius;
  fullWidth?: boolean;
  isHoverable?: boolean;
  isPressable?: boolean;
  isBlurred?: boolean;
  isFooterBlurred?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  disableRipple?: boolean;
  allowTextSelectionOnPress?: boolean;
  classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, GenericCardProps>(
  (
    {
      children,
      shadow = "none",
      radius = "md",
      fullWidth = false,
      isHoverable = false,
      isPressable = false,
      isBlurred = false,
      isFooterBlurred = false,
      isDisabled = false,
      disableAnimation = false,
      disableRipple = false,
      allowTextSelectionOnPress = false,
      classNames,
      header,
      footer,
      onPress,
      onPressStart,
      onPressEnd,
      onPressChange,
      onPressUp,
    },
    ref,
  ) => {
    return (
      <NextUICard
        ref={ref}
        shadow={shadow}
        radius={radius}
        fullWidth={fullWidth}
        isHoverable={isHoverable}
        isPressable={isPressable}
        isBlurred={isBlurred}
        isFooterBlurred={isFooterBlurred}
        isDisabled={isDisabled}
        disableAnimation={disableAnimation}
        disableRipple={disableRipple}
        allowTextSelectionOnPress={allowTextSelectionOnPress}
        classNames={classNames}
        onPress={onPress}
        onPressStart={onPressStart}
        onPressEnd={onPressEnd}
        onPressChange={onPressChange}
        onPressUp={onPressUp}
      >
        {header && (
          <CardHeader className={classNames?.header}>{header}</CardHeader>
        )}

        <CardBody className={classNames?.body}>{children}</CardBody>

        {footer && (
          <CardFooter className={classNames?.footer}>{footer}</CardFooter>
        )}
      </NextUICard>
    );
  },
);

Card.displayName = "Card";
