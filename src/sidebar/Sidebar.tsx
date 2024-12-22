import { forwardRef } from "react";
import { cn } from "@/utils";
import { Item } from "@/types/navigation";
import { Link } from "@nextui-org/react";
import { useResponsive } from "@/hooks";
import { Tooltip } from "@/tooltip";

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
    const { isDesktop, isTablet } = useResponsive();

    if (!isDesktop && !isTablet) {
      return null;
    }

    const renderLink = (item: Item) => {
      const linkContent = (
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
      );

      if (isTablet) {
        return (
          <Tooltip
            trigger={linkContent}
            key={item.key}
            content={item.label}
            placement="right"
            delay={0}
            closeDelay={0}
            className="bg-black/80 text-white"
          />
        );
      }

      return linkContent;
    };

    return (
      <aside
        ref={ref}
        className={cn(
          "fixed left-0 h-screen flex-col bg-[#191b1d]",
          {
            "w-[270px]": isDesktop,
            "w-[90px]": isTablet,
          },
          classNames?.base,
        )}
      >
        <nav className="flex flex-1 flex-col gap-2 p-4">
          {items.map(renderLink)}
        </nav>
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";
