import { forwardRef } from "react";
import { Button } from "@/button";
import { Popover, PropsPopover } from "./Popover";
import { VariantProps } from "@nextui-org/react";
import { cn } from "@/utils";

interface Link {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface PopoverNavigationProps extends Omit<PropsPopover, "children"> {
  links: Link[];
  onPress?: (link: Link) => void;
  variant?: VariantProps<typeof Button>["variant"];
  classNameLinks?: string;
}
export const PopoverNavigation = forwardRef<
  HTMLDivElement,
  PopoverNavigationProps
>(({ trigger, links, onPress, classNameLinks, ...props }, ref) => {
  const handlePress = (link: Link) => {
    if (onPress) {
      onPress(link);
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
          onPress={() => handlePress(link)}
          startContent={link.icon}
          className={cn("w-full flex justify-start gap-2", classNameLinks)}
          variant={props.variant}
        >
          {link.label}
        </Button>
      ))}
    </Popover>
  );
});
PopoverNavigation.displayName = "PopoverNavigation";
