import { SidebarProps } from "@/sidebar/Sidebar";
import { NavbarProps } from "@nextui-org/react";

interface UseLayoutConfigOptions {
  navbar?: Partial<NavbarProps>;
  sidebar?: Partial<SidebarProps>;
}

export const useLayoutConfig = (
  options: UseLayoutConfigOptions = {},
): {
  navbar: Partial<NavbarProps> | undefined;
  sidebar: Partial<SidebarProps> | undefined;
} => {
  const { navbar, sidebar } = options;

  return {
    navbar: navbar
      ? {
          className: "fixed top-0 z-40",
          ...navbar,
        }
      : undefined,
    sidebar: sidebar
      ? {
          className: "fixed z-30",
          ...sidebar,
        }
      : undefined,
  };
};
