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
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Button, ButtonProps } from "@/button";

type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export interface NavItem {
  label: string;
  onPress?: () => void;
  isActive?: boolean;
  color?: Partial<Color>;

  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
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
  itemProps?: ButtonProps;
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
      itemProps,

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
        {/* Mobile Layout */}
        <NavbarContent className="md:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          {brand && <NavbarBrand>{brand}</NavbarBrand>}
        </NavbarContent>

        {/* Desktop Layout */}
        <NavbarContent className="hidden md:flex">
          {brand && <NavbarBrand>{brand}</NavbarBrand>}
          {navigationItems.map((item, index) => (
            <NavbarItem key={index} isActive={item.isActive}>
              <Link
                aria-current={item.isActive ? "page" : undefined}
                onPress={item.onPress}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Actions - Always visible */}
        <NavbarContent justify="end" {...contentProps}>
          {profile && <NavbarItem>{profile}</NavbarItem>}
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu {...menuProps}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Button
                color={item.color || (item.isActive ? "primary" : "default")}
                onPress={item.onPress}
                startContent={item.startContent}
                endContent={item.endContent}
                className="w-full"
                {...itemProps}
              >
                {item.label}
              </Button>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarRoot>
    );
  },
);

Navbar.displayName = "Navbar";
