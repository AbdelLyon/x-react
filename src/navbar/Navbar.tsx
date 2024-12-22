// hooks/useMediaQuery.ts

// types/navbar.ts
export type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type LinkColor =
  | "foreground"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export interface NavItem {
  key: string;
  label?: string;
  onPress?: () => void;
  isActive?: boolean;
  href?: string;
  linkColor?: LinkColor;
  buttonColor?: ButtonColor;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export interface NavbarProps extends Omit<NavbarRootProps, "children"> {
  brand?: ReactNode;
  profile?: ReactNode;
  navigationItems?: NavItem[];
  menuItems?: NavItem[];
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;
  onItemPress?: (item: NavItem) => void;
}

// components/Navbar/Navbar.tsx
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
import { cn } from "@/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Configuration des items
export interface NavItem {
  key: string;
  label?: string;
  onPress?: () => void;
  isActive?: boolean;
  href?: string;
  linkColor?: LinkColor;
  buttonColor?: ButtonColor;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      brand,
      profile,
      navigationItems = [],
      menuItems = [],
      contentProps,
      menuProps,
      onItemPress,
      className,
      classNames,
      isMenuOpen,
      onMenuOpenChange,
      ...props
    },
    ref,
  ) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const handleItemPress = (item: NavItem) => {
      item.onPress?.();
      onItemPress?.(item);
      onMenuOpenChange?.(false);
    };

    return (
      <NavbarRoot
        ref={ref}
        className={className}
        classNames={{
          base: "bg-background",
          wrapper: "max-w-full",
          ...classNames,
        }}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={onMenuOpenChange}
        {...props}
      >
        {/* Mobile Layout */}
        {!isDesktop && (
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
            {brand && <NavbarBrand>{brand}</NavbarBrand>}
          </NavbarContent>
        )}

        {/* Actions - Always visible */}
        <NavbarContent justify="end" {...contentProps}>
          {isDesktop &&
            navigationItems.map((item) => (
              <NavbarItem key={item.key} isActive={item.isActive}>
                <Link
                  href={item.href}
                  color={
                    item.linkColor || (item.isActive ? "primary" : "foreground")
                  }
                  aria-current={item.isActive ? "page" : undefined}
                  onPress={() => handleItemPress(item)}
                >
                  {item.startContent}
                  {item.label}
                  {item.endContent}
                </Link>
              </NavbarItem>
            ))}
          {profile && <NavbarItem>{profile}</NavbarItem>}
        </NavbarContent>

        {/* Mobile Menu */}
        {!isDesktop && (
          <NavbarMenu {...menuProps}>
            {menuItems.map((item) => (
              <NavbarMenuItem
                key={item.key}
                className={cn("p-2 hover:bg-content1 rounded-md", {
                  "border-l border-primary bg-content1": item.isActive,
                })}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2"
                  color={
                    item.linkColor || (item.isActive ? "primary" : "foreground")
                  }
                  aria-current={item.isActive ? "page" : undefined}
                  onPress={() => handleItemPress(item)}
                >
                  {item.startContent}
                  {item.label}
                  {item.endContent}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
      </NavbarRoot>
    );
  },
);

Navbar.displayName = "Navbar";
