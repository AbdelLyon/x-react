import { forwardRef, ReactNode, useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  NavbarProps as NextUINavbarProps,
  NavbarContentProps,
  NavbarBrandProps,
  NavbarMenuProps,
  NavbarMenuItemProps,
  NavbarMenuToggleProps,
  LinkProps,
  ButtonProps,
} from "@nextui-org/react";
import { cn } from "@/utils";

// Types de base pour les couleurs et variants
type LinkColor = LinkProps["color"];
type ButtonColor = ButtonProps["color"];
type ButtonVariant = ButtonProps["variant"];

// Type pour un élément de navigation
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  color?: LinkColor;
  className?: string;
}

// Type pour les boutons d'action
interface ActionButton {
  label: string;
  href: string;
  color?: ButtonColor;
  variant?: ButtonVariant;
  className?: string;
  showOnMobile?: boolean;
}

// Props pour la marque/logo
interface BrandProps {
  logo?: ReactNode;
  title?: string;
  link?: string;
  mobileOnly?: boolean;
  props?: NavbarBrandProps;
}

// Props spécifiques à la navbar
interface NavbarCustomProps {
  brand?: BrandProps;
  navigationItems?: NavItem[];
  mobileMenuItems?: NavItem[];
  actions?: {
    loginButton?: ActionButton;
    signUpButton?: ActionButton;
  };
  showNavigationOnMobile?: boolean;
}

// Props pour les sous-composants
interface NavbarComponentProps {
  contentProps?: NavbarContentProps;
  brandProps?: NavbarBrandProps;
  menuProps?: NavbarMenuProps;
  menuItemProps?: NavbarMenuItemProps;
  menuToggleProps?: NavbarMenuToggleProps;
}

// Props complètes du composant
export interface NavbarProps
  extends Omit<NextUINavbarProps, "children">,
    NavbarCustomProps,
    NavbarComponentProps {}

// Composant Navbar
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      // Props personnalisées
      brand,
      navigationItems = [],
      mobileMenuItems = [],
      actions,
      showNavigationOnMobile = false,

      // Props des sous-composants
      contentProps,
      brandProps,
      menuProps,
      menuItemProps,
      menuToggleProps,

      // Props de base NextUI
      className,
      classNames,
      isMenuOpen: controlledMenuOpen,
      onMenuOpenChange,
      ...props
    },
    ref,
  ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpenChange = (open: boolean) => {
      setIsMenuOpen(open);
      onMenuOpenChange?.(open);
    };

    return (
      <NextUINavbar
        ref={ref}
        className={className}
        classNames={classNames}
        isMenuOpen={controlledMenuOpen ?? isMenuOpen}
        onMenuOpenChange={handleMenuOpenChange}
        {...props}
      >
        {/* Menu Toggle Mobile */}
        <NavbarContent className="sm:hidden" justify="start" {...contentProps}>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={classNames?.toggle as string}
            {...menuToggleProps}
          />
        </NavbarContent>

        {/* Brand Section */}
        {brand && (
          <NavbarContent
            className={cn(
              brand.mobileOnly ? "sm:hidden" : "hidden sm:flex",
              classNames?.content,
            )}
            justify={brand.mobileOnly ? "center" : "start"}
            {...contentProps}
          >
            <NavbarBrand
              className={classNames?.brand as string}
              {...brandProps}
              {...brand.props}
            >
              {brand.logo}
              {brand.title && (
                <Link
                  href={brand.link || "#"}
                  className="font-bold text-inherit"
                >
                  {brand.title}
                </Link>
              )}
            </NavbarBrand>
          </NavbarContent>
        )}

        {/* Navigation Items */}
        <NavbarContent
          className={cn(
            "hidden sm:flex gap-4",
            showNavigationOnMobile && "flex",
            classNames?.content,
          )}
          justify="center"
          {...contentProps}
        >
          {navigationItems.map((item, index) => (
            <NavbarItem
              key={index}
              isActive={item.isActive}
              className={cn(classNames?.item, item.className)}
            >
              <Link
                color={item.color || (item.isActive ? "primary" : "foreground")}
                href={item.href}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Actions Section */}
        <NavbarContent justify="end" {...contentProps}>
          {actions?.loginButton && (
            <NavbarItem
              className={cn(
                !actions.loginButton.showOnMobile && "hidden lg:flex",
                classNames?.item,
              )}
            >
              <Link
                href={actions.loginButton.href}
                color={actions.loginButton.color as LinkColor}
                className={actions.loginButton.className}
              >
                {actions.loginButton.label}
              </Link>
            </NavbarItem>
          )}

          {actions?.signUpButton && (
            <NavbarItem>
              <Button
                as={Link}
                href={actions.signUpButton.href}
                color={actions.signUpButton.color}
                variant={actions.signUpButton.variant}
                className={actions.signUpButton.className}
              >
                {actions.signUpButton.label}
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>

        {/* Mobile Menu */}
        {mobileMenuItems.length > 0 && (
          <NavbarMenu className={classNames?.menu as string} {...menuProps}>
            {mobileMenuItems.map((item, index) => (
              <NavbarMenuItem
                key={index}
                className={cn(classNames?.menuItem, item.className)}
                {...menuItemProps}
              >
                <Link
                  color={item.color || "foreground"}
                  href={item.href}
                  size="lg"
                  className="w-full"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
      </NextUINavbar>
    );
  },
);

Navbar.displayName = "Navbar";
