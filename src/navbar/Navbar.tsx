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
import { Item } from "@/types/navigation";

export interface NavbarProps extends Omit<NavbarRootProps, "children"> {
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
}

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
  ) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const handleItemPress = (item: Item) => {
      item.onPress?.();
      onItemClick?.(item);
      onMenuOpenChange?.(false);
    };

    return (
      <NavbarRoot
        ref={ref}
        className={className}
        classNames={{
          base: "bg-white",
          wrapper: "max-w-full",
          ...classNames,
        }}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={onMenuOpenChange}
        {...props}
      >
        {!isDesktop && (
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
            {appName && <NavbarBrand>{appName}</NavbarBrand>}
          </NavbarContent>
        )}

        {isDesktop && (appName || appLogo) && (
          <NavbarContent justify="start">
            <NavbarItem className="w-[247px] border-r-2 border-divider">
              {appName}
            </NavbarItem>
            <NavbarItem>{appLogo}</NavbarItem>
          </NavbarContent>
        )}

        <NavbarContent justify="end" {...contentProps}>
          {isDesktop &&
            navigationItems.map((item) => (
              <NavbarItem key={item.key}>
                <Link
                  className={cn(
                    "p-2 hover:bg-content1 rounded-md text-foreground",
                    {
                      "border-l-2 border-primary bg-content1 text-primary":
                        item.isActive,
                    },
                    classNames?.item,
                  )}
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
              <NavbarMenuItem key={item.key}>
                <Link
                  key={item.key}
                  className={cn(
                    "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                    {
                      "border-l-2 border-primary bg-content1 text-primary":
                        item.isActive,
                    },
                    classNames?.item,
                  )}
                  onPress={() => onItemClick?.(item)}
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
