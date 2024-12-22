import { forwardRef, ReactNode } from "react";
import { Link } from "@nextui-org/react";
import { cn } from "@/utils";

export interface SidebarItem {
  key: string;
  label: string;
  icon: ReactNode;
  href?: string;
  isActive?: boolean;
}

interface Props {
  items?: SidebarItem[];
  className?: string;
  classNames?: {
    base?: string;
    item?: string;
  };
  onItemClick?: (item: SidebarItem) => void;
}

export const Sidebar = forwardRef<HTMLDivElement, Props>(
  ({ items = [], className, classNames, onItemClick }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "fixed left-0 hidden md:flex h-screen w-[240px] flex-col bg-default-100",
          classNames?.base,
          className,
        )}
      >
        <nav className="flex flex-1 flex-col">
          {items.map((item) => (
            <Link
              key={item.key}
              className={cn("p-2 hover:bg-default rounded-md", {
                "border-l border-primary bg-default": item.isActive,
              })}
              onPress={() => onItemClick?.(item)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";
