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

// Types spécifiques pour les couleurs
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

// Interface pour les éléments de navigation
export interface NavItemConfig {
  key: string;
  label: string;
  href?: string;
  isActive?: boolean;
  linkColor?: LinkColor;
  buttonColor?: ButtonColor;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
}

// Interface pour les sections de navigation
export interface NavItem {
  key: string;
  items: NavItemConfig[];
  justify?: "start" | "center" | "end";
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
}

// Props du composant
interface NavbarProps extends Omit<NavbarRootProps, "children"> {
  brand?: ReactNode;
  sections: NavItem[];
  mobileMenu?: NavItemConfig[];
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;
  itemProps?: ButtonProps;
  onItemPress?: (item: NavItemConfig) => void;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      brand,
      sections,
      mobileMenu = [],
      contentProps,
      menuProps,
      itemProps,
      onItemPress,
      className,
      classNames,
      isMenuOpen,
      onMenuOpenChange,
      ...props
    },
    ref,
  ) => {
    const handleItemPress = (item: NavItemConfig) => {
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

        {/* Sections Layout */}
        {sections.map((section) => (
          <NavbarContent
            key={section.key}
            className={[
              section.showOnDesktop ? "hidden md:flex" : "hidden",
              section.showOnMobile ? "flex md:hidden" : "",
            ].join(" ")}
            justify={section.justify || "start"}
            {...contentProps}
          >
            {section.key === "brand" && brand && (
              <NavbarBrand>{brand}</NavbarBrand>
            )}

            {section.items.map((item) => (
              <NavbarItem
                key={item.key}
                isActive={item.isActive}
                className={item.className}
              >
                <Link
                  color={item.linkColor || "foreground"}
                  href={item.href}
                  onPress={() => handleItemPress(item)}
                >
                  {item.startContent}
                  {item.label}
                  {item.endContent}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        ))}

        {/* Mobile Menu */}
        <NavbarMenu {...menuProps}>
          {mobileMenu.map((item) => (
            <NavbarMenuItem key={item.key}>
              <Button
                color={item.buttonColor || "default"}
                onPress={() => handleItemPress(item)}
                className="w-full"
                {...itemProps}
              >
                {item.startContent}
                {item.label}
                {item.endContent}
              </Button>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarRoot>
    );
  },
);

Navbar.displayName = "Navbar";
