import { jsx } from "react/jsx-runtime";
import { Tooltip as Tooltip$1 } from "@nextui-org/react";
const Tooltip = ({
  trigger,
  content,
  size = "md",
  color = "default",
  radius = "sm",
  shadow = "sm",
  placement = "top",
  delay = 0,
  closeDelay = 500,
  offset = 7,
  containerPadding = 12,
  crossOffset = 0,
  showArrow = false,
  shouldFlip = true,
  triggerScaleOnOpen = true,
  isKeyboardDismissDisabled = false,
  isDismissable = false,
  shouldCloseOnBlur = true,
  isDisabled = false,
  disableAnimation = false,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Tooltip$1,
    {
      content,
      size,
      color,
      radius,
      shadow,
      placement,
      delay,
      closeDelay,
      offset,
      containerPadding,
      crossOffset,
      showArrow,
      shouldFlip,
      triggerScaleOnOpen,
      isKeyboardDismissDisabled,
      isDismissable,
      shouldCloseOnBlur,
      isDisabled,
      disableAnimation,
      ...props,
      children: trigger
    }
  );
};
export {
  Tooltip
};
