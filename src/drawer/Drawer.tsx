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

interface DrawerClassNames {
  wrapper?: string;
  base?: string;
  backdrop?: string;
  closeButton?: string;
  header?: string;
  body?: string;
  footer?: string;
}

interface AdditionalDrawerProps {
  trigger: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  buttonCloseLabel?: string;
  buttonActionLabel?: string;
  onAction?: () => void | Promise<void>;
  buttonCloseProps?: ButtonProps;
  buttonActionProps?: ButtonProps;
  classNames?: DrawerClassNames;
}

export type DrawerProps = Omit<DrawerRootProps, keyof AdditionalDrawerProps> &
  AdditionalDrawerProps;

const isValidNodeContent = (content: unknown): boolean =>
  content !== undefined && isValidElement(content);

const isValidButtonLabel = (label: unknown): label is string =>
  typeof label === "string" && label.length > 0;

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
      classNames = {},
      ...nextUIProps
    },
    ref,
  ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAction = async (): Promise<void> => {
      try {
        await onAction?.();
        onClose();
      } catch (error) {
        console.error("Action failed:", error);
      }
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ): void => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onOpen();
      }
    };

    const renderButtons = (): ReactNode => {
      const hasValidCloseLabel = isValidButtonLabel(buttonCloseLabel);
      const hasValidActionButton =
        isValidButtonLabel(buttonActionLabel) && onAction !== undefined;

      const defaultButtonProps = {
        color: "primary" as const,
        radius: "sm" as const,
      };

      return (
        <div className="flex justify-end gap-2">
          {hasValidCloseLabel && (
            <Button
              {...defaultButtonProps}
              variant="bordered"
              onPress={onClose}
              className={cn("border-primary/50", buttonCloseProps?.className)}
              {...buttonCloseProps}
            >
              {buttonCloseLabel}
            </Button>
          )}

          {hasValidActionButton && (
            <Button
              {...defaultButtonProps}
              onPress={handleAction}
              {...buttonActionProps}
            >
              {buttonActionLabel}
            </Button>
          )}
        </div>
      );
    };

    const drawerClassNames = {
      wrapper: cn(classNames.wrapper),
      base: cn("bg-background", classNames.base),
      backdrop: cn(classNames.backdrop),
      closeButton: cn("absolute right-4 top-4", classNames.closeButton),
      header: cn(classNames.header),
      body: cn(classNames.body),
      footer: cn(classNames.footer),
    };

    return (
      <>
        <div
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={handleKeyDown}
          className="inline-block"
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
                {isValidNodeContent(title) && (
                  <DrawerHeader className={drawerClassNames.header}>
                    {title}
                  </DrawerHeader>
                )}

                <DrawerBody className={drawerClassNames.body}>
                  {children}
                </DrawerBody>

                <DrawerFooter className={drawerClassNames.footer}>
                  {isValidNodeContent(footer) ? footer : renderButtons()}
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
