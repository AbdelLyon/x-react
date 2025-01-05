import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { TabsProps } from '@nextui-org/react';

declare interface CustomTabsProps extends Omit<TabsProps, "children"> {
    items: TabItem[];
    defaultActiveTab?: string;
    onTabChange?: (key: string) => void;
    renderTabContent?: (item: TabItem) => React.ReactNode;
}

export declare interface TabItem {
    key: string;
    title: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
    href?: string;
    target?: string;
    titleValue?: string;
}

export declare const Tabs: ForwardRefExoticComponent<Omit<CustomTabsProps, "ref"> & RefAttributes<HTMLDivElement>>;

export { }
