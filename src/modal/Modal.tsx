import type { JSX } from "react";
import { forwardRef, isValidElement, useState } from "react";
import type { ModalProps as ModalPropsRoot } from "@nextui-org/react";
import {
  Modal as ModalRoot,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { cn } from "@/utils";
import { Button, type ButtonProps } from "@/button";

type Backdrop = ModalPropsRoot["backdrop"];

interface ModalBaseProps extends Omit<Partial<ModalPropsRoot>, "title"> {
  trigger: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

interface ModalButtonProps {
  onAction?: () => void;
  buttonCloseLabel?: string;
  buttonActionLabel?: string;
  buttonCloseProps?: ButtonProps;
  buttonActionProps?: ButtonProps;
}

interface ModalProps extends ModalBaseProps, ModalButtonProps {}

const defaultClassNames = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default-200 shadow-lg dark:shadow-none rounded-lg",
} as const;

const defaultButtonProps = {
  color: "primary" as const,
  radius: "sm" as const,
} as const;

const ModalButtons = ({
  buttonCloseLabel,
  buttonActionLabel,
  buttonCloseProps,
  buttonActionProps,
  onAction,
  onClose,
}: ModalButtonProps & { onClose: () => void }): JSX.Element => {
  const handleAction = (): void => {
    onAction?.();
    onClose();
  };

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
          className={cn("border-primary/50", buttonCloseProps?.className)}
          variant={buttonCloseProps?.variant || "bordered"}
          onPress={onClose}
          {...defaultButtonProps}
          {...buttonCloseProps}
        >
          {buttonCloseLabel}
        </Button>
      )}

      {hasValidActionButton && (
        <Button
          onPress={handleAction}
          {...defaultButtonProps}
          {...buttonActionProps}
        >
          {buttonActionLabel}
        </Button>
      )}
    </>
  );
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      trigger,
      title,
      footer,
      children,
      onAction,
      buttonCloseLabel,
      buttonActionLabel,
      buttonCloseProps,
      buttonActionProps,
      ...props
    },
    ref,
  ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState<Backdrop>("opaque");

    const handleOpen = (backdropType: Backdrop = "opaque"): void => {
      setBackdrop(backdropType);
      onOpen();
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ): void => {
      if (event.key === "Enter" || event.key === " ") {
        handleOpen();
      }
    };

    const hasValidFooter =
      footer !== undefined &&
      footer !== null &&
      (typeof footer === "string" || isValidElement(footer));

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
              defaultClassNames.closeButton,
              props.classNames?.closeButton,
            ),
            base: cn(defaultClassNames.base, props.classNames?.base),
            ...props.classNames,
          }}
          isOpen={isOpen}
          onClose={onClose}
          {...props}
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {title}
                </ModalHeader>

                <ModalBody>{children}</ModalBody>

                <ModalFooter>
                  {hasValidFooter ? (
                    footer
                  ) : (
                    <ModalButtons
                      buttonCloseLabel={buttonCloseLabel}
                      buttonActionLabel={buttonActionLabel}
                      buttonCloseProps={buttonCloseProps}
                      buttonActionProps={buttonActionProps}
                      onAction={onAction}
                      onClose={onClose}
                    />
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
