import type { JSX, ReactNode } from "react";
import { mergeTailwindClasses } from "@/utils";
import type { Item } from "@/types/navigation";
import { useResponsive } from "@/hooks";
import { Tooltip } from "@/tooltip";
import { Link } from "@heroui/react";
import { Button } from "@heroui/react";
import { IconPlus } from "@tabler/icons-react";

export interface SidebarProps {
  items?: Item[];
  className?: string;
  classNames?: {
    base?: string;
    item?: string;
    action?: string;
  };
  bgImage?: ReactNode;
  ref?: React.RefObject<HTMLElement>;
  onItemClick?: (item: Item) => void;
  actionLabel?: string;
  actionIcon?: ReactNode;
  actionColor?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  actionClick?: () => void;
  showDivider?: boolean;
}

export const Sidebar = ({
  items = [],
  classNames,
  bgImage,
  onItemClick,
  ref,
  actionLabel,
  actionIcon = <IconPlus className="text-primary" />,
  actionColor = "primary",
  actionClick,
  showDivider = true,
}: SidebarProps): JSX.Element | null => {
  const { isDesktop, isTablet } = useResponsive();

  if (!isDesktop && !isTablet) {
    return null;
  }

  const renderLink = (item: Item): JSX.Element => {
    const linkContent = (
      <Link
        key={item.key}
        className={mergeTailwindClasses(
          "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer text-sm",
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
          className="border border-border"
        />
      );
    }

    return linkContent;
  };

  const actionButton = actionClick && (
    <>
      <div className="flex justify-center">
        <Button
          color={actionColor}
          radius="none"
          className={mergeTailwindClasses(
            "mt-6 justify-start",
            {
              "w-56": isDesktop,
              "w-16 px-0": isTablet,
            },
            classNames?.action,
          )}
          startContent={<div className="mr-2 bg-white">{actionIcon}</div>}
          onPress={actionClick}
        >
          {isDesktop ? actionLabel : null}
        </Button>
      </div>
      {showDivider && <hr className="mx-4 my-6 border border-border" />}
    </>
  );

  return (
    <aside
      ref={ref}
      className={mergeTailwindClasses(
        "fixed left-0 h-screen flex flex-col bg-[#212324] border-r border-border",
        {
          "w-[270px]": isDesktop,
          "w-[90px]": isTablet,
        },
        classNames?.base,
      )}
    >
      {actionButton}
      <nav className="flex-1 flex-col gap-2 p-4">{items.map(renderLink)}</nav>
      {bgImage}
    </aside>
  );
};
