import { forwardRef, ReactNode } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarContentProps,
  NavbarMenu,
  NavbarMenuProps,
  NavbarMenuToggle,
  NavbarProps as NextUINavbarProps,
} from "@nextui-org/react";
import { cn } from "@/utils";

export interface NavbarProps extends Omit<NextUINavbarProps, "children"> {
  brand?: ReactNode;
  startContent?: ReactNode;
  centerContent?: ReactNode;
  endContent?: ReactNode;
  menuContent?: ReactNode;
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;
  showMenuOnMobile?: boolean;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      // Content
      brand,
      startContent,
      centerContent,
      endContent,
      menuContent,

      // Props
      contentProps,
      menuProps,
      showMenuOnMobile = true,

      // NextUI props
      className,
      classNames,
      ...props
    },
    ref,
  ) => {
    return (
      <NextUINavbar
        ref={ref}
        className={className}
        classNames={classNames}
        {...props}
      >
        {/* Menu Toggle */}
        {showMenuOnMobile && (
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
          </NavbarContent>
        )}

        {/* Brand */}
        {brand && <NavbarBrand>{brand}</NavbarBrand>}

        {/* Start Content */}
        {startContent && (
          <NavbarContent
            className={cn("hidden sm:flex", classNames?.content)}
            justify="start"
            {...contentProps}
          >
            {startContent}
          </NavbarContent>
        )}

        {/* Center Content */}
        {centerContent && (
          <NavbarContent
            className={cn("hidden sm:flex", classNames?.content)}
            justify="center"
            {...contentProps}
          >
            {centerContent}
          </NavbarContent>
        )}

        {/* End Content */}
        {endContent && (
          <NavbarContent
            className={cn("hidden sm:flex", classNames?.content)}
            justify="end"
            {...contentProps}
          >
            {endContent}
          </NavbarContent>
        )}

        {/* Mobile Menu */}
        {showMenuOnMobile && menuContent && (
          <NavbarMenu {...menuProps}>{menuContent}</NavbarMenu>
        )}
      </NextUINavbar>
    );
  },
);

Navbar.displayName = "Navbar";
