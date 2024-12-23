import { forwardRef, useState } from "react";
import {
  Modal as ModalRoot,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalProps as ModalPropsRoot,
} from "@nextui-org/react";

import { cn } from "@/utils";
import { Button, type ButtonProps } from "@/button";

interface Props extends Omit<Partial<ModalPropsRoot>, "title"> {
  trigger: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  onAction?: () => void;
  buttonCloseLabel?: string;
  buttonActionLabel?: string;
  buttonCloseProps?: ButtonProps;
  buttonActionProps?: ButtonProps;
}
export const Modal = forwardRef<HTMLDivElement, Props>(
  (
    {
      trigger,
      title,
      footer,
      onAction,
      buttonCloseLabel,
      buttonActionLabel,
      children,
      buttonCloseProps,
      buttonActionProps,
      ...props
    },
    ref,
  ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] =
      useState<ModalPropsRoot["backdrop"]>("opaque");

    const handleOpen = (
      backdropType: ModalPropsRoot["backdrop"] = "opaque",
    ) => {
      setBackdrop(backdropType);
      onOpen();
    };

    const handleAction = () => {
      onAction?.();
      onClose();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        handleOpen();
      }
    };

    return (
      <>
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleOpen()}
          onKeyDown={handleKeyDown}
        >
          {trigger}
        </div>

        <ModalRoot
          ref={ref}
          backdrop={backdrop}
          classNames={{
            closeButton: cn(
              "absolute right-4 top-4",
              props.classNames?.closeButton,
            ),
            base: cn(
              "bg-background border border-divider shadow-lg dark:shadow-none rounded-lg",
              props.classNames?.base,
            ),
            ...props.classNames,
          }}
          isOpen={isOpen}
          onClose={onClose}
          {...props}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {title}
                </ModalHeader>

                <ModalBody>{children}</ModalBody>

                <ModalFooter>
                  {footer || (
                    <>
                      {buttonCloseLabel && (
                        <Button
                          className={cn(
                            "border-primary/50",
                            buttonCloseProps?.className,
                          )}
                          color={buttonCloseProps?.color || "primary"}
                          radius={buttonCloseProps?.radius || "sm"}
                          variant={buttonCloseProps?.variant || "bordered"}
                          onPress={onClose}
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
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </ModalRoot>
      </>
    );
  },
);

Modal.displayName = "Modal";
