import { Chart as ChartJS, ChartTypeRegistry, ChartOptions, ChartData, InteractionItem, TooltipItem } from 'chart.js';
import { ChartProps } from 'react-chartjs-2';
import { DistributiveArray } from 'chart.js/dist/types/utils';
type ChartType = keyof ChartTypeRegistry;
interface ChartClassNames {
    root?: string;
    canvas?: string;
    container?: string;
    title?: string;
    legend?: string;
    tooltip?: string;
}
interface ChartStyles {
    root?: React.CSSProperties;
    canvas?: React.CSSProperties;
    container?: React.CSSProperties;
}
interface ChartBaseProps<T extends ChartType> {
    data: ChartData<T>;
    options?: ChartOptions<T>;
    type: T;
    getElementSelected?: (elementSelected: InteractionItem[]) => void;
    classNames?: ChartClassNames;
    styles?: ChartStyles;
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
export declare const Chart: import('react').ForwardRefExoticComponent<ChartBaseProps<keyof ChartTypeRegistry> & Omit<ChartProps<keyof ChartTypeRegistry, (number | import('chart.js').Point | [number, number] | import('chart.js').BubbleDataPoint | null)[], unknown>, keyof ChartBaseProps<T>> & import('react').RefAttributes<ChartJS<keyof ChartTypeRegistry, (number | import('chart.js').Point | [number, number] | import('chart.js').BubbleDataPoint | null)[], unknown>>>;
export type { ChartType, ChartClassNames, ChartStyles, ChartTypeRegistry, DistributiveArray, ChartJS, ChartOptions, ChartProps, ChartBaseProps, };
