import { forwardRef, ReactNode } from "react";
import {
  Drawer as DrawerRoot,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@nextui-org/react";
import type { DrawerProps as rawerRootProps } from "@nextui-org/react";

export type DrawerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";
export type DrawerRadius = "none" | "sm" | "md" | "lg";
export type DrawerPlacement = "left" | "right" | "top" | "bottom";

export interface DrawerProps extends Omit<rawerRootProps, "children"> {
  // Content
  children?: ReactNode | ((onClose: () => void) => ReactNode);
  headerContent?: ReactNode;
  bodyContent?: ReactNode;
  footerContent?: ReactNode;

  // Styling
  classNames?: {
    wrapper?: string;
    base?: string;
    backdrop?: string;
    header?: string;
    body?: string;
    footer?: string;
    closeButton?: string;
  };
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      // Content
      children,
      headerContent,
      bodyContent,
      footerContent,
      closeButton,

      // Appearance
      size = "md",
      radius = "lg",
      placement = "right",

      // State
      isOpen,
      defaultOpen,
      isDismissable = true,
      isKeyboardDismissDisabled = false,
      shouldBlockScroll = true,
      hideCloseButton = false,
      disableAnimation = false,

      // Portal
      portalContainer,

      // Styling
      classNames,

      // Events
      onOpenChange,
      onClose,

      ...props
    },
    ref,
  ) => {
    const renderContent = (onCloseCallback: () => void) => {
      const content =
        typeof children === "function" ? children(onCloseCallback) : children;

      return (
        <>
          {(headerContent || content) && (
            <DrawerHeader className={classNames?.header}>
              {headerContent || content}
            </DrawerHeader>
          )}

          {bodyContent && (
            <DrawerBody className={classNames?.body}>{bodyContent}</DrawerBody>
          )}

          {footerContent && (
            <DrawerFooter className={classNames?.footer}>
              {footerContent}
            </DrawerFooter>
          )}
        </>
      );
    };

    return (
      <DrawerRoot
        ref={ref}
        // Appearance
        size={size}
        radius={radius}
        placement={placement}
        // State
        isOpen={isOpen}
        defaultOpen={defaultOpen}
        isDismissable={isDismissable}
        isKeyboardDismissDisabled={isKeyboardDismissDisabled}
        shouldBlockScroll={shouldBlockScroll}
        hideCloseButton={hideCloseButton}
        disableAnimation={disableAnimation}
        // Custom Elements
        closeButton={closeButton}
        // Portal
        portalContainer={portalContainer}
        // Styling
        classNames={{
          wrapper: classNames?.wrapper,
          base: classNames?.base,
          backdrop: classNames?.backdrop,
          closeButton: classNames?.closeButton,
        }}
        // Events
        onOpenChange={onOpenChange}
        onClose={onClose}
        {...props}
      >
        <DrawerContent>{renderContent}</DrawerContent>
      </DrawerRoot>
    );
  },
);

Drawer.displayName = "Drawer";
