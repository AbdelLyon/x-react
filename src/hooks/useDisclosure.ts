import { useState } from "react";

export const useDisclosure = (
  initialState = false,
  callbacks?: { onOpen?: () => void; onClose?: () => void },
): [boolean, { open: () => void; close: () => void; toggle: () => void }] => {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = useState(initialState);

  const open = (): void => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen?.();
        return true;
      }
      return isOpened;
    });
  };

  const close = (): void => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose?.();
        return false;
      }
      return isOpened;
    });
  };

  const toggle = (): void => {
    if (opened) {
      close();
    } else {
      open();
    }
  };

  return [opened, { open, close, toggle }] as const;
};
