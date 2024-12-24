export type LayoutProps = {
  children: React.ReactNode;
  navbar?: NavbarProps;
  sidebar?: SidebarProps;
  className?: string;
};

import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { NavbarProps } from "@/navbar/Navbar";
import { Navbar } from "@/navbar/Navbar";
import type { SidebarProps } from "@/sidebar/Sidebar";
import { Sidebar } from "@/sidebar/Sidebar";

import { cn } from "@/utils";
import type { JSX } from "react";

export const Layout = ({
  children,
  navbar,
  sidebar,
  className,
}: LayoutProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const hasNavbar = Boolean(navbar);
  const hasSidebar = Boolean(sidebar);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      {hasNavbar && <Navbar {...navbar} />}

      <div className="flex">
        {hasSidebar && <Sidebar {...sidebar} />}

        <main
          className={cn(
            "flex-1 px-4 transition-all duration-200",
            {
              "pt-16": hasNavbar,
              "ml-0": !hasSidebar || (!isTablet && !isDesktop),
              "ml-[90px]": hasSidebar && isTablet,
              "ml-[270px]": hasSidebar && isDesktop,
              "px-4 sm:px-6 md:px-8 lg:px-12": true,
            },
            className,
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
