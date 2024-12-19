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

export interface NavbarProps extends Omit<NextUINavbarProps, "children"> {
  // Mobile Content
  mobileBrand?: ReactNode;
  mobileContent?: ReactNode;
  menuContent?: ReactNode;

  // Desktop Content
  desktopBrand?: ReactNode;
  desktopContent?: ReactNode;
  endContent?: ReactNode;

  // Props
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      // Mobile Content
      mobileBrand,
      mobileContent,
      menuContent,

      // Desktop Content
      desktopBrand,
      desktopContent,
      endContent,

      // Props
      contentProps,
      menuProps,

      // NextUI props
      className,
      classNames,
      isMenuOpen,
      onMenuOpenChange,
      ...props
    },
    ref,
  ) => {
    return (
      <NextUINavbar
        ref={ref}
        className={className}
        classNames={classNames}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={onMenuOpenChange}
        {...props}
      >
        {/* Mobile Menu Toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* Mobile Brand */}
        {mobileBrand && (
          <NavbarContent
            className="sm:hidden pr-3"
            justify="center"
            {...contentProps}
          >
            <NavbarBrand>{mobileBrand}</NavbarBrand>
          </NavbarContent>
        )}

        {/* Mobile Content */}
        {mobileContent && (
          <NavbarContent className="sm:hidden" {...contentProps}>
            {mobileContent}
          </NavbarContent>
        )}

        {/* Desktop Content */}
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
          {...contentProps}
        >
          {desktopBrand && <NavbarBrand>{desktopBrand}</NavbarBrand>}
          {desktopContent}
        </NavbarContent>

        {/* End Content - Both Mobile & Desktop */}
        {endContent && (
          <NavbarContent justify="end" {...contentProps}>
            {endContent}
          </NavbarContent>
        )}

        {/* Menu Content - Mobile Only */}
        {menuContent && <NavbarMenu {...menuProps}>{menuContent}</NavbarMenu>}
      </NextUINavbar>
    );
  },
);

Navbar.displayName = "Navbar";
