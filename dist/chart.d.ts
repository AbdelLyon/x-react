import { ChartData } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartProps } from 'react-chartjs-2';
import { ChartTypeRegistry } from 'chart.js';
import { InteractionItem } from 'chart.js';
import { JSX } from 'react';
import { TooltipItem } from 'chart.js';

export declare const Chart: {
    <T extends ChartType>({ type, data, options, getElementSelected, classNames, responsive, maintainAspectRatio, title, showLegend, showTooltip, legendPosition, customTooltip, ...props }: Props<T>): JSX.Element;
    displayName: string;
};

export declare interface ChartBaseProps<T extends ChartType> {
    data: ChartData<T>;
    options?: ChartOptions<T>;
    type: T;
    getElementSelected?: (elementSelected: InteractionItem[]) => void;
    classNames?: ChartClassNames;
    width?: number | string;
    height?: number | string;
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    title?: string;
    showLegend?: boolean;
    showTooltip?: boolean;
    legendPosition?: "top" | "bottom" | "left" | "right";
    customTooltip?: (context: TooltipItem<T>) => string | string[] | undefined;
}

export declare interface ChartClassNames {
    root?: string;
    canvas?: string;
    title?: string;
    legend?: string;
    tooltip?: string;
}

export { ChartJS }

export { ChartOptions }

export { ChartProps }

export declare type ChartType = keyof ChartTypeRegistry;

export { ChartTypeRegistry }

declare type Props<T extends ChartType> = ChartBaseProps<T> & Omit<ChartProps<T>, keyof ChartBaseProps<T>>;

export { }
