import type { ReactNode } from "react";
import { forwardRef, isValidElement } from "react";
import {
  Drawer as DrawerRoot,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  type DrawerProps as DrawerRootProps,
} from "@nextui-org/react";
import { cn } from "@/utils";
import { Button, type ButtonProps } from "@/button";

interface AdditionalDrawerProps {
  trigger: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  buttonCloseLabel?: string;
  buttonActionLabel?: string;
  onAction?: () => void;
  buttonCloseProps?: ButtonProps;
  buttonActionProps?: ButtonProps;
}

export type DrawerProps = Omit<DrawerRootProps, keyof AdditionalDrawerProps> &
  AdditionalDrawerProps;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      trigger,
      title,
      children,
      footer,
      buttonCloseLabel = "Close",
      buttonActionLabel,
      onAction,
      buttonCloseProps,
      buttonActionProps,
      classNames,
      ...nextUIProps
    },
    ref,
  ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAction = (): void => {
      onAction?.();
      onClose();
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ): void => {
      if (event.key === "Enter" || event.key === " ") {
        onOpen();
      }
    };

    const renderButtons = (): ReactNode => {
      const hasValidCloseLabel =
        typeof buttonCloseLabel === "string" && buttonCloseLabel.length > 0;

      const hasValidActionButton =
        typeof buttonActionLabel === "string" &&
        buttonActionLabel.length > 0 &&
        onAction !== undefined;

      return (
        <>
          {hasValidCloseLabel && (
            <Button
              color={buttonCloseProps?.color || "primary"}
              radius={buttonCloseProps?.radius || "sm"}
              variant={buttonCloseProps?.variant || "bordered"}
              onPress={onClose}
              className={cn("border-primary/50", buttonCloseProps?.className)}
              {...buttonCloseProps}
            >
              {buttonCloseLabel}
            </Button>
          )}

          {hasValidActionButton && (
            <Button
              color={buttonActionProps?.color || "primary"}
              radius={buttonActionProps?.radius || "sm"}
              onPress={handleAction}
              {...buttonActionProps}
            >
              {buttonActionLabel}
            </Button>
          )}
        </>
      );
    };

    const hasValidTitle =
      title !== undefined &&
      title !== null &&
      (typeof title === "string" || isValidElement(title));

    const hasValidFooter =
      footer !== undefined &&
      footer !== null &&
      (typeof footer === "string" || isValidElement(footer));

    const drawerClassNames = {
      ...classNames,
      wrapper:
        typeof classNames?.wrapper === "string" ? classNames.wrapper : "",
      base: cn(
        "bg-background",
        typeof classNames?.base === "string" ? classNames.base : "",
      ),
      backdrop:
        typeof classNames?.backdrop === "string" ? classNames.backdrop : "",
      closeButton: cn(
        "absolute right-4 top-4",
        typeof classNames?.closeButton === "string"
          ? classNames.closeButton
          : "",
      ),
      header: typeof classNames?.header === "string" ? classNames.header : "",
      body: typeof classNames?.body === "string" ? classNames.body : "",
      footer: typeof classNames?.footer === "string" ? classNames.footer : "",
    };

    return (
      <>
        <div
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={handleKeyDown}
        >
          {trigger}
        </div>

        <DrawerRoot
          ref={ref}
          isOpen={isOpen}
          onClose={onClose}
          classNames={drawerClassNames}
          {...nextUIProps}
        >
          <DrawerContent>
            {() => (
              <>
                {hasValidTitle && (
                  <DrawerHeader className={drawerClassNames.header}>
                    {title}
                  </DrawerHeader>
                )}

                <DrawerBody className={drawerClassNames.body}>
                  {children}
                </DrawerBody>

                <DrawerFooter className={drawerClassNames.footer}>
                  {hasValidFooter ? footer : renderButtons()}
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </DrawerRoot>
      </>
    );
  },
);

Drawer.displayName = "Drawer";
