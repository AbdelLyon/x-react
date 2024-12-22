export interface LayoutProps {
  children: React.ReactNode;
  navbar?: NavbarProps;
  sidebar?: SidebarProps;
  className?: string;
}

// components/Layout/Layout.tsx
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Navbar, NavbarProps } from "@/navbar/Navbar";
import { Sidebar, SidebarProps } from "@/sidebar/Sidebar";

import { cn } from "@/utils";

export const Layout = ({
  children,
  navbar,
  sidebar,
  className,
}: LayoutProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const hasNavbar = Boolean(navbar);
  const hasSidebar = Boolean(sidebar);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      {hasNavbar && <Navbar {...navbar} />}

      {/* Layout Container */}
      <div className="flex">
        {/* Sidebar */}
        {hasSidebar && <Sidebar {...sidebar} />}

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 px-4 transition-all duration-200",
            {
              // Padding top si navbar présente
              "pt-16": hasNavbar,
              // Margin left selon présence sidebar et breakpoint
              "ml-0": !hasSidebar || (!isTablet && !isDesktop),
              "ml-[90px]": hasSidebar && isTablet,
              "ml-[240px]": hasSidebar && isDesktop,
              // Padding sur les côtés selon breakpoint
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
