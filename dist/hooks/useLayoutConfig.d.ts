import { SidebarProps } from '../sidebar/Sidebar';
import { NavbarProps } from '@nextui-org/react';
interface UseLayoutConfigOptions {
    navbar?: Partial<NavbarProps>;
    sidebar?: Partial<SidebarProps>;
}
export declare const useLayoutConfig: (options?: UseLayoutConfigOptions) => {
    navbar: Partial<NavbarProps> | undefined;
    sidebar: Partial<SidebarProps> | undefined;
};
export {};
