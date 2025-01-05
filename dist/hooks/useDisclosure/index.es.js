import { useState } from "react";
const useDisclosure = (initialState = false, callbacks) => {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = useState(initialState);
  const open = () => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen == null ? void 0 : onOpen();
        return true;
      }
      return isOpened;
    });
  };
  const close = () => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose == null ? void 0 : onClose();
        return false;
      }
      return isOpened;
    });
  };
  const toggle = () => {
    if (opened) {
      close();
    } else {
      open();
    }
  };
  return [opened, { open, close, toggle }];
};
export {
  useDisclosure
};
