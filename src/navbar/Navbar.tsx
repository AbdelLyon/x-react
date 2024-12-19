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
  // Content
  brand?: ReactNode;
  startContent?: ReactNode;
  centerContent?: ReactNode;
  endContent?: ReactNode;
  menuContent?: ReactNode;

  // Props
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;

  // Breakpoints for responsive
  mobileBreakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
  showMenuButton?: boolean;
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
      mobileBreakpoint = "md",
      showMenuButton = true,

      // NextUI props
      className,
      classNames,
      ...props
    },
    ref,
  ) => {
    const breakpoint = {
      sm: "sm:flex",
      md: "md:flex",
      lg: "lg:flex",
      xl: "xl:flex",
      "2xl": "2xl:flex",
    }[mobileBreakpoint];

    return (
      <NextUINavbar
        ref={ref}
        className={className}
        classNames={classNames}
        {...props}
      >
        {/* Menu Toggle */}
        {showMenuButton && (
          <NavbarContent className={cn(`${breakpoint}:hidden`)} justify="start">
            <NavbarMenuToggle />
          </NavbarContent>
        )}

        {/* Brand - Always visible */}
        {brand && <NavbarBrand>{brand}</NavbarBrand>}

        {/* Start Content */}
        {startContent && (
          <NavbarContent
            className={cn("hidden", breakpoint, classNames?.content)}
            justify="start"
            {...contentProps}
          >
            {startContent}
          </NavbarContent>
        )}

        {/* Center Content */}
        {centerContent && (
          <NavbarContent
            className={cn("hidden", breakpoint, classNames?.content)}
            justify="center"
            {...contentProps}
          >
            {centerContent}
          </NavbarContent>
        )}

        {/* End Content */}
        {endContent && (
          <NavbarContent
            className={cn("hidden", breakpoint, classNames?.content)}
            justify="end"
            {...contentProps}
          >
            {endContent}
          </NavbarContent>
        )}

        {/* Mobile Menu */}
        {showMenuButton && menuContent && (
          <NavbarMenu
            className={cn(`${breakpoint}:hidden`, classNames?.menu)}
            {...menuProps}
          >
            {menuContent}
          </NavbarMenu>
        )}
      </NextUINavbar>
    );
  },
);

Navbar.displayName = "Navbar";
