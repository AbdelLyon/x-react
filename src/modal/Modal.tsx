import {
  Modal as NextUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalProps,
} from "@nextui-org/react";
import { useState } from "react";
import { SlotsToClasses } from "@nextui-org/react";

import { cn } from "@/utils";

type GenericModalProps = {
  trigger: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  modalProps?: Partial<ModalProps>;
  children: React.ReactNode;
  onAction?: () => void;
  buttonCloseLabel?: string;
  buttonActionLabel?: string;
  classNames?: SlotsToClasses<
    | "footer"
    | "backdrop"
    | "base"
    | "body"
    | "header"
    | "closeButton"
    | "wrapper"
  >;
};

export const Modal: React.FC<GenericModalProps> = ({
  trigger,
  title = "Modal Title",
  footer,
  modalProps,
  onAction,
  buttonCloseLabel = "Close",
  buttonActionLabel,
  classNames,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<ModalProps["backdrop"]>("opaque");

  const handleOpen = (backdropType: ModalProps["backdrop"] = "opaque") => {
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

      <NextUIModal
        backdrop={backdrop}
        classNames={{
          closeButton: cn("absolute right-4 top-4", classNames?.closeButton),
          base: cn("bg-background", classNames?.base),
          ...classNames,
        }}
        isOpen={isOpen}
        onClose={onClose}
        {...modalProps}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>

              <ModalBody>{children}</ModalBody>

              <ModalFooter>
                {footer || (
                  <>
                    <Button
                      className="border-primary/20"
                      color="primary"
                      radius="sm"
                      variant="bordered"
                      onPress={onClose}
                    >
                      {buttonCloseLabel}
                    </Button>
                    {buttonActionLabel && onAction && (
                      <Button
                        color="primary"
                        radius="sm"
                        onPress={handleAction}
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
      </NextUIModal>
    </>
  );
};
