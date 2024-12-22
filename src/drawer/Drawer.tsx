import { forwardRef, ReactNode } from "react";
import {
  Drawer as DrawerRoot,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@nextui-org/react";
import type { DrawerProps as DrawerRootProps } from "@nextui-org/react";
import { cn } from "@/utils";
import { Button, type ButtonProps } from "@/button";

export interface DrawerProps
  extends Omit<DrawerRootProps, "children" | "title"> {
  // Trigger
  trigger: ReactNode;

  // Content
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;

  // Actions
  onAction?: () => void;
  buttonCloseLabel?: string;
  buttonActionLabel?: string;

  // Styling
  classNames?: {
    wrapper?: string;
    base?: string;
    backdrop?: string;
    header?: string;
    body?: string;
    footer?: string;
    closeX?: string;
  };
  buttonCloseProps?: ButtonProps;
  buttonActionProps?: ButtonProps;
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      // Trigger
      trigger,

      // Content
      title,
      children,
      footer,

      // Actions
      onAction,
      buttonCloseLabel = "Close",
      buttonActionLabel,

      // Appearance
      size = "md",
      radius = "lg",
      placement = "right",

      // State
      isDismissable = true,
      isKeyboardDismissDisabled = false,
      shouldBlockScroll = true,
      hideCloseButton = false,
      disableAnimation = false,

      // Portal
      portalContainer,

      // Styling
      classNames,

      buttonActionProps,
      buttonCloseProps,
      ...props
    },
    ref,
  ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAction = () => {
      onAction?.();
      onClose();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        onOpen();
      }
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
          // Appearance
          size={size}
          radius={radius}
          placement={placement}
          // State
          isOpen={isOpen}
          isDismissable={isDismissable}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          shouldBlockScroll={shouldBlockScroll}
          hideCloseButton={hideCloseButton}
          disableAnimation={disableAnimation}
          // Portal
          portalContainer={portalContainer}
          // Styling
          classNames={{
            wrapper: cn(classNames?.wrapper),
            base: cn("bg-background", classNames?.base),
            backdrop: classNames?.backdrop,
            closeButton: cn("absolute right-4 top-4", classNames?.closeX),
          }}
          // Events
          onClose={onClose}
          {...props}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                {title && (
                  <DrawerHeader className={classNames?.header}>
                    {title}
                  </DrawerHeader>
                )}

                <DrawerBody className={classNames?.body}>{children}</DrawerBody>

                <DrawerFooter className={classNames?.footer}>
                  {footer || (
                    <>
                      {buttonCloseLabel && (
                        <Button
                          color={buttonCloseProps?.color || "primary"}
                          radius={buttonCloseProps?.radius || "sm"}
                          variant={buttonCloseProps?.variant || "bordered"}
                          onPress={onClose}
                          className={cn(
                            "border-primary/20",
                            buttonCloseProps?.className,
                          )}
                          {...buttonCloseProps}
                        >
                          {buttonCloseLabel}
                        </Button>
                      )}

                      {buttonActionLabel && onAction && (
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
                  )}
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
