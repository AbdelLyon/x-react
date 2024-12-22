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
  brand?: ReactNode;
  profile?: ReactNode;
  navigationItems?: Item[];
  menuItems?: Item[];
  contentProps?: NavbarContentProps;
  menuProps?: NavbarMenuProps;
  onItemClick?: (item: Item) => void;
  classNames?: {
    item?: string;
  };
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
              <NavbarItem
                key={item.key}
                className={cn(
                  "p-2 hover:bg-content1 rounded-md",
                  {
                    "border-l border-primary bg-content1 text-primary":
                      item.isActive,
                  },
                  classNames?.item,
                )}
              >
                <Link
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
                className={cn(
                  "p-2 hover:bg-content1 rounded-md",
                  {
                    "border-l border-primary bg-content1 text-primary":
                      item.isActive,
                  },
                  classNames?.item,
                )}
              >
                <Link
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
