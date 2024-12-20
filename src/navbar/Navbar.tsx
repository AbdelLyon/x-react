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

// Types pour les couleurs
type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type LinkColor =
  | "foreground"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

// Configuration des items
export interface NavItem {
  key: string;
  label: string;
  onPress?: () => void;
  isActive?: boolean;
  href?: string;
  linkColor?: LinkColor;
  buttonColor?: ButtonColor;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

// Configuration des sections
export interface NavSectionConfig {
  key: string;
  items: NavItem[];
  justify?: "start" | "center" | "end";
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
}

// Props du composant
interface Props extends Omit<NavbarRootProps, "children"> {
  // Branding & Profile
  brand?: ReactNode;
  profile?: ReactNode;

  // Navigation
  navigationItems?: NavItem[];
  menuItems?: NavItem[];

  // Props des sous-composants
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;

  // Callback
  onItemPress?: (item: NavItem) => void;
}

export const Navbar = forwardRef<HTMLElement, Props>(
  (
    {
      // Content
      brand,
      profile,
      navigationItems = [],
      menuItems = [],

      // Props
      contentProps,
      menuProps,

      // Callback
      onItemPress,

      // NextUI props
      className,
      classNames,
      isMenuOpen,
      onMenuOpenChange,
      ...props
    },
    ref,
  ) => {
    const handleItemPress = (item: NavItem) => {
      item.onPress?.();
      onItemPress?.(item);
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
        <NavbarContent className="md:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          {brand && <NavbarBrand>{brand}</NavbarBrand>}
        </NavbarContent>

        {/* Desktop Layout */}
        <NavbarContent className="hidden md:flex">
          {brand && <NavbarBrand>{brand}</NavbarBrand>}
          {navigationItems.map((item) => (
            <NavbarItem key={item.key} isActive={item.isActive}>
              <Link
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
        </NavbarContent>

        {/* Actions - Always visible */}
        <NavbarContent justify="end" {...contentProps}>
          {profile && <NavbarItem>{profile}</NavbarItem>}
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu {...menuProps}>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.key}>
              <Link
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
      </NavbarRoot>
    );
  },
);

Navbar.displayName = "Navbar";
