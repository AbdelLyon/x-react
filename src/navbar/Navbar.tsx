import { forwardRef, ReactNode } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarProps as NextUINavbarProps,
} from "@nextui-org/react";
import { cn } from "@/utils";

// Types pour les items de navigation
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  icon?: ReactNode;
}

// Types pour les boutons d'action
interface ActionButton {
  label: string;
  href: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "ghost"
    | "shadow"
    | "faded";
  className?: string;
}

// Props pour la Navbar
export interface NavbarProps extends Omit<NextUINavbarProps, "children"> {
  // Logo et branding
  brand?: {
    logo?: ReactNode;
    title?: string;
    link?: string;
  };

  // Navigation items
  navItems?: NavItem[];
  hideNavItemsOnMobile?: boolean;

  // Actions (login/signup buttons)
  actions?: {
    loginButton?: ActionButton;
    signUpButton?: ActionButton;
    hideLoginOnMobile?: boolean;
  };

  // Personnalisation
  classNames?: {
    root?: string;
    wrapper?: string;
    brand?: string;
    content?: string;
    item?: string | string[];
    link?: string;
    button?: string;
  };
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      // Props
      brand,
      navItems = [],
      actions,
      hideNavItemsOnMobile = true,
      classNames,
      ...props
    },
    ref,
  ) => {
    // Classes par défaut pour les items de navbar
    const defaultItemClasses = [
      "flex",
      "relative",
      "h-full",
      "items-center",
      "data-[active=true]:after:content-['']",
      "data-[active=true]:after:absolute",
      "data-[active=true]:after:bottom-0",
      "data-[active=true]:after:left-0",
      "data-[active=true]:after:right-0",
      "data-[active=true]:after:h-[2px]",
      "data-[active=true]:after:rounded-[2px]",
      "data-[active=true]:after:bg-primary",
    ];

    return (
      <NextUINavbar ref={ref} className={cn(classNames?.root)} {...props}>
        {/* Brand Section */}
        {brand && (
          <NavbarBrand className={cn(classNames?.brand)}>
            {brand.logo}
            {brand.title && (
              <Link href={brand.link || "#"} className="font-bold text-inherit">
                {brand.title}
              </Link>
            )}
          </NavbarBrand>
        )}

        {/* Navigation Items */}
        {navItems.length > 0 && (
          <NavbarContent
            className={cn(
              hideNavItemsOnMobile ? "hidden sm:flex" : "flex",
              "gap-4",
              classNames?.content,
            )}
            justify="center"
          >
            {navItems.map((item, index) => (
              <NavbarItem
                key={index}
                isActive={item.isActive}
                className={cn(defaultItemClasses, classNames?.item)}
              >
                <Link
                  color={item.isActive ? "primary" : "foreground"}
                  href={item.href}
                  aria-current={item.isActive ? "page" : undefined}
                  className={classNames?.link}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        )}

        {/* Actions Section */}
        {actions && (
          <NavbarContent justify="end">
            {actions.loginButton && (
              <NavbarItem
                className={cn(
                  actions.hideLoginOnMobile ? "hidden lg:flex" : "flex",
                  classNames?.item,
                )}
              >
                <Link
                  href={actions.loginButton.href}
                  className={cn(
                    classNames?.link,
                    actions.loginButton.className,
                  )}
                >
                  {actions.loginButton.label}
                </Link>
              </NavbarItem>
            )}

            {actions.signUpButton && (
              <NavbarItem>
                <Button
                  as={Link}
                  href={actions.signUpButton.href}
                  color={actions.signUpButton.color || "primary"}
                  variant={actions.signUpButton.variant || "flat"}
                  className={cn(
                    classNames?.button,
                    actions.signUpButton.className,
                  )}
                >
                  {actions.signUpButton.label}
                </Button>
              </NavbarItem>
            )}
          </NavbarContent>
        )}
      </NextUINavbar>
    );
  },
);

Navbar.displayName = "Navbar";
