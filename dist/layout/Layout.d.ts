import { NavbarProps } from '../navbar/Navbar';
import { SidebarProps } from '../sidebar/Sidebar';
export interface LayoutProps {
    children: React.ReactNode;
    navbar?: NavbarProps;
    sidebar?: SidebarProps;
    className?: string;
}
export declare const Layout: ({ children, navbar, sidebar, className, }: LayoutProps) => import("react/jsx-runtime").JSX.Element;
