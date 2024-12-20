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
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 h-[50px] cursor-pointer",
                "transition-colors duration-150",
                "hover:bg-default/40",
                {
                  "bg-primary-500/20 text-primary": item.isActive,
                },
                classNames?.item,
              )}
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
