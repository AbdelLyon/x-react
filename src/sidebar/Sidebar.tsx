import { forwardRef } from "react";
import { Link } from "@nextui-org/react";
import { cn } from "@/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Item } from "@/types/navigation";

export interface SidebarProps {
  items?: Item[];
  className?: string;
  classNames?: {
    base?: string;
    item?: string;
  };
  onItemClick?: (item: Item) => void;
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
              className={cn(
                "flex items-center gap-3 p-3 hover:bg-content1 rounded-md transition-colors",
                {
                  "border-l-4 border-primary bg-content1": item.isActive,
                  "justify-center": isTablet,
                },
                classNames?.item,
              )}
              color={
                item.linkColor || (item.isActive ? "primary" : "foreground")
              }
              onPress={() => onItemClick?.(item)}
            >
              {item.startContent}
              {isDesktop ? item.label : null}
              {item.endContent}
            </Link>
          ))}
        </nav>
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";
