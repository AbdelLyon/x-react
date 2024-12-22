import { forwardRef, ReactNode } from "react";
import { Link } from "@nextui-org/react";
import { cn } from "@/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface SidebarItem {
  key: string;
  label: string;
  icon: ReactNode;
  href?: string;
  isActive?: boolean;
}

export interface SidebarProps {
  items?: SidebarItem[];
  className?: string;
  classNames?: {
    base?: string;
    item?: string;
  };
  onItemClick?: (item: SidebarItem) => void;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ items = [], className, classNames, onItemClick }, ref) => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const isTablet = useMediaQuery(
      "(min-width: 768px) and (max-width: 1023px)",
    );

    // Ne rien afficher sur mobile
    if (!isDesktop && !isTablet) {
      return null;
    }

    return (
      <aside
        ref={ref}
        className={cn(
          "fixed left-0 h-screen flex-col bg-default-100",
          {
            "w-[240px]": isDesktop,
            "w-[60px]": isTablet,
          },
          classNames?.base,
          className,
        )}
      >
        <nav className="flex flex-1 flex-col gap-2 p-4">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "flex items-center gap-3 p-3 hover:bg-default rounded-md transition-colors",
                {
                  "border-l-4 border-primary bg-default": item.isActive,
                  "justify-center": isTablet,
                },
                classNames?.item,
              )}
              onPress={() => onItemClick?.(item)}
              title={isTablet ? item.label : undefined}
            >
              {item.icon}
              {isDesktop && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";
