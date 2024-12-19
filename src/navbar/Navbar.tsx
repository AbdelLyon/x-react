// Navbar.tsx
import { forwardRef, ReactNode } from "react";
import {
  Navbar as NavbarRoot,
  NavbarBrand,
  NavbarContent,
  NavbarContentProps,
  NavbarMenu,
  NavbarMenuProps,
  NavbarMenuToggle,
  NavbarProps as NavbarRootProps,
  NavbarItem,
  Link,
  NavbarMenuItem,
} from "@nextui-org/react";

export interface NavItem {
  label: string;
  onPress?: () => void;
  isActive?: boolean;
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
}

export interface NavbarProps extends Omit<NavbarRootProps, "children"> {
  // Branding
  brand?: ReactNode;

  // Navigation Items
  navigationItems?: NavItem[];
  menuItems?: NavItem[];

  profile?: ReactNode;

  // Props
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      // Content
      brand,
      navigationItems = [],
      menuItems = [],
      profile,

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
      <NavbarRoot
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
        {brand && (
          <NavbarContent
            className="sm:hidden pr-3"
            justify="center"
            {...contentProps}
          >
            <NavbarBrand>{brand}</NavbarBrand>
          </NavbarContent>
        )}

        {/* Desktop Content */}
        <NavbarContent
          className="sm:flex gap-4"
          justify="end"
          {...contentProps}
        >
          {brand && <NavbarBrand>{brand}</NavbarBrand>}
          {navigationItems.map((item, index) => (
            <NavbarItem key={index} isActive={item.isActive}>
              <Link
                color={item.color || (item.isActive ? "primary" : "foreground")}
                aria-current={item.isActive ? "page" : undefined}
                onPress={item.onPress}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Actions */}
        <NavbarContent justify="end" {...contentProps}>
          {profile && <NavbarItem>{profile}</NavbarItem>}
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu {...menuProps}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color={item.color || "foreground"}
                onPress={item.onPress}
                size="lg"
                className="w-full"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarRoot>
    );
  },
);

Navbar.displayName = "Navbar";
