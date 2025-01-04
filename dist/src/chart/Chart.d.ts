import { ChartData, ChartOptions, ChartTypeRegistry, InteractionItem, TooltipItem, Chart as ChartJS } from 'chart.js';
import { JSX } from 'react';
import { ChartProps } from 'react-chartjs-2';
type ChartType = keyof ChartTypeRegistry;
interface ChartClassNames {
    root?: string;
    canvas?: string;
    title?: string;
    legend?: string;
    tooltip?: string;
}
interface ChartBaseProps<T extends ChartType> {
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
type Props<T extends ChartType> = ChartBaseProps<T> & Omit<ChartProps<T>, keyof ChartBaseProps<T>>;
export declare const Chart: {
    <T extends keyof ChartTypeRegistry>({ type, data, options, getElementSelected, classNames, responsive, maintainAspectRatio, title, showLegend, showTooltip, legendPosition, customTooltip, ...props }: Props<T>): JSX.Element;
    displayName: string;
};
export type { ChartType, ChartClassNames, ChartTypeRegistry, ChartJS, ChartOptions, ChartProps, ChartBaseProps, };
