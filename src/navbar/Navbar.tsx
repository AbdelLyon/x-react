import type { JSX, ReactNode } from "react";
import { forwardRef } from "react";
import type {
  NavbarContentProps,
  NavbarMenuProps,
  NavbarProps as NavbarRootProps,
} from "@nextui-org/navbar";
import {
  Navbar as NavbarRoot,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { mergeTailwindClasses } from "@/utils";
import type { Item } from "@/types/navigation";
import { useResponsive } from "@/hooks";
import { Link } from "@nextui-org/link";

export type NavbarProps = {
  appName?: ReactNode;
  appLogo?: ReactNode;
  profile?: ReactNode;
  navigationItems?: Item[];
  menuItems?: Item[];
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;
  onItemClick?: (item: Item) => void;
  isMenuOpen?: boolean;
  onMenuOpenChange?: (isOpen: boolean) => void;
  classNames?: {
    item?: string;
  };
} & Omit<NavbarRootProps, "children">;

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      appName,
      appLogo,
      profile,
      navigationItems = [],
      menuItems = [],
      contentProps,
      menuProps,
      onItemClick,
      className,
      classNames,
      isMenuOpen,
      onMenuOpenChange,
      ...props
    },
    ref,
  ): JSX.Element => {
    const { isDesktop, isMobile, isTablet } = useResponsive();

    const handleItemPress = (item: Item): void => {
      item.onPress?.();
      onItemClick?.(item);
      onMenuOpenChange?.(false);
    };

    return (
      <NavbarRoot
        ref={ref}
        className={className}
        classNames={{
          base: "bg-white dark:bg-background",
          wrapper: "max-w-full",
          ...classNames,
        }}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={onMenuOpenChange}
        {...props}
      >
        {isMobile && (
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen === true ? "Close menu" : "Open menu"}
            />
          </NavbarContent>
        )}

        {!isMobile && (appName !== null || appLogo !== null) && (
          <NavbarContent justify="start">
            {!isTablet && appName !== null && (
              <NavbarItem className="w-[247px] border-r-2 border-default">
                {appName}
              </NavbarItem>
            )}
            {appLogo !== null && <NavbarItem>{appLogo}</NavbarItem>}
          </NavbarContent>
        )}

        <NavbarContent justify="end" {...contentProps}>
          {isDesktop &&
            navigationItems.map(
              (item): JSX.Element => (
                <NavbarItem key={item.key}>
                  <Link
                    className={mergeTailwindClasses(
                      "p-2 hover:bg-content1 rounded-md text-foreground",
                      {
                        "border-l-2 border-primary bg-content1 text-primary":
                          item.isActive,
                      },
                      classNames?.item,
                    )}
                    onPress={(): void => handleItemPress(item)}
                  >
                    {item.startContent}
                    {item.label}
                    {item.endContent}
                  </Link>
                </NavbarItem>
              ),
            )}
          {profile !== null && <NavbarItem>{profile}</NavbarItem>}
        </NavbarContent>

        {/* Mobile Menu */}
        {!isDesktop && (
          <NavbarMenu {...menuProps}>
            {menuItems.map(
              (item): JSX.Element => (
                <NavbarMenuItem key={item.key}>
                  <Link
                    key={item.key}
                    className={mergeTailwindClasses(
                      "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                      {
                        "border-l-2 border-primary bg-content1 text-primary":
                          item.isActive,
                      },
                      classNames?.item,
                    )}
                    onPress={(): void => onItemClick?.(item)}
                  >
                    {item.startContent}
                    {item.label}
                    {item.endContent}
                  </Link>
                </NavbarMenuItem>
              ),
            )}
          </NavbarMenu>
        )}
      </NavbarRoot>
    );
  },
);

Navbar.displayName = "Navbar";
