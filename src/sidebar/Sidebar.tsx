import { forwardRef } from "react";
import { cn } from "@/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Item } from "@/types/navigation";
import { Link } from "@nextui-org/react";

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
  ({ items = [], classNames, onItemClick }, ref) => {
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
          "fixed left-0 h-screen flex-col bg-[#191b1d]",
          {
            "w-[270px]": isDesktop,
            "w-[100px]": isTablet,
          },
          classNames?.base,
        )}
      >
        <nav className="flex flex-1 flex-col gap-2 p-4 ">
          {items.map((item) => (
            <Link
              key={item.key}
              className={cn(
                "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary":
                    item.isActive,
                  "justify-center": isTablet,
                },
                classNames?.item,
              )}
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
