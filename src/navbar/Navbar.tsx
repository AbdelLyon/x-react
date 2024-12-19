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
} from "@nextui-org/react";
import { Button, ButtonProps } from "@/button";

export interface NavItem {
  label: string;
  onPress?: () => void;
  isActive?: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
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

      // NextUI props
      className,
      classNames,
      isMenuOpen,
      onMenuOpenChange,
      itemProps,
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
        <NavbarContent>
          {/* Mobile Menu Toggle */}

          <NavbarMenuToggle
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />

          {/* Brand - Mobile & Desktop */}
          {brand && <NavbarBrand>{brand}</NavbarBrand>}
        </NavbarContent>

        {/* Navigation Items - Desktop */}
        <NavbarContent
          className="hidden md:flex gap-4"
          justify="start"
          {...contentProps}
        >
          {navigationItems.map((item, index) => (
            <NavbarItem key={index} isActive={item.isActive}>
              <Button
                color={item.color || (item.isActive ? "primary" : "default")}
                aria-current={item.isActive ? "page" : undefined}
                onPress={item.onPress}
                startContent={item.startContent}
                endContent={item.endContent}
                {...itemProps}
              >
                {item.label}
              </Button>
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
              <Button
                color={item.color || (item.isActive ? "primary" : "default")}
                onPress={item.onPress}
                startContent={item.startContent}
                endContent={item.endContent}
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
