import { forwardRef } from "react";
import { Button } from "@/button";
import { Popover, PropsPopover } from "./Popover";

interface Link {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface PopoverNavigationProps extends PropsPopover {
  trigger: React.ReactNode;
  links: Link[];
  onpress?: (link: Link) => void;
}

export const PopoverNavigation = forwardRef<
  HTMLDivElement,
  PopoverNavigationProps
>(({ trigger, links, onpress, ...props }, ref) => {
  const handlePress = (link: Link) => {
    if (onpress) {
      onpress(link);
    }
  };

  return (
    <Popover
      ref={ref}
      trigger={trigger}
      classNames={{
        content: "w-40 bg-white dark:bg-content1 border border-default",
      }}
      {...props}
    >
      {links.map((link) => (
        <Button
          key={link.label}
          type="button"
          onPress={() => handlePress(link)}
          startContent={link.icon}
          className="w-full border-none flex justify-start gap-2"
          variant="ghost"
        >
          {link.label}
        </Button>
      ))}
    </Popover>
  );
});

PopoverNavigation.displayName = "PopoverNavigation";
