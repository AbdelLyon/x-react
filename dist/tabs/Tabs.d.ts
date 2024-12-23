import { TabsProps as NextUITabsProps } from '@nextui-org/react';
export interface TabItem {
    key: string;
    title: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
    href?: string;
    target?: string;
    titleValue?: string;
}
interface CustomTabsProps extends Omit<NextUITabsProps, "children"> {
    items: TabItem[];
    defaultActiveTab?: string;
    onTabChange?: (key: string) => void;
    renderTabContent?: (item: TabItem) => React.ReactNode;
    classNames?: {
        base?: string;
        tabList?: string;
        tab?: string;
        tabContent?: string;
        cursor?: string;
        panel?: string;
    };
}
export declare const Tabs: import('react').ForwardRefExoticComponent<Omit<CustomTabsProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};