import type { JSX, ReactNode } from "react";
import { cn } from "@/utils";
import type { Item } from "@/types/navigation";
import { useResponsive } from "@/hooks";
import { Tooltip } from "@/tooltip";
import { Link } from "@nextui-org/link";

export interface SidebarProps {
  items?: Item[];
  className?: string;
  classNames?: {
    base?: string;
    item?: string;
  };
  bgImage?: ReactNode;
  ref?: React.RefObject<HTMLElement>;
  onItemClick?: (item: Item) => void;
}

export const Sidebar = ({
  items = [],
  classNames,
  bgImage,
  onItemClick,
  ref,
}: SidebarProps): JSX.Element | null => {
  const { isDesktop, isTablet } = useResponsive();

  if (!isDesktop && !isTablet) {
    return null;
  }

  const renderLink = (item: Item): JSX.Element => {
    const linkContent = (
      <Link
        key={item.key}
        className={cn(
          "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
          {
            "border-l-2 border-primary bg-content1 text-primary": item.isActive,
            "justify-center": isTablet,
          },
          classNames?.item,
        )}
        onPress={(): void => onItemClick?.(item)}
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
          className="border border-default"
        />
      );
    }

    return linkContent;
  };

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed left-0 h-screen flex flex-col bg-[#212324] border-r border-default",
        {
          "w-[270px]": isDesktop,
          "w-[90px]": isTablet,
        },
        classNames?.base,
      )}
    >
      <nav className="flex-1 flex-col gap-2 p-4">{items.map(renderLink)}</nav>
      {bgImage}
    </aside>
  );
};
