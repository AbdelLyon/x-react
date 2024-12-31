import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  BarController,
  DoughnutController,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  ScatterController,
  PolarAreaController,
} from "chart.js";
import type {
  ChartTypeRegistry,
  ChartOptions,
  ChartData,
  InteractionItem,
  TooltipItem,
} from "chart.js";
import type { JSX } from "react";
import { useRef, useCallback, forwardRef } from "react";
import type { ChartProps } from "react-chartjs-2";
import { Chart as ChartRoot, getElementAtEvent } from "react-chartjs-2";
import { cn } from "@/utils";
import type { DistributiveArray } from "chart.js/dist/types/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  BarController,
  DoughnutController,
  ScatterController,
  PolarAreaController,
);

type ChartType = keyof ChartTypeRegistry;

interface ChartClassNames {
  root?: string;
  canvas?: string;
  container?: string;
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

type Props<T extends ChartType> = ChartBaseProps<T> &
  Omit<ChartProps<T>, keyof ChartBaseProps<T>>;

const defaultClassNames: Required<ChartClassNames> = {
  root: "relative w-full h-[400px]",
  canvas: "w-full h-full",
  container: "relative",
  title: "text-lg font-semibold text-center mb-4",
  legend: "mt-4",
  tooltip: "bg-white p-2 rounded shadow-lg border text-sm",
};

export const Chart = forwardRef(
  <T extends ChartType>(
    {
      type,
      data,
      options,
      getElementSelected,
      classNames = {},
      responsive = true,
      maintainAspectRatio = false,
      title,
      showLegend = true,
      showTooltip = true,
      legendPosition = "top",
      customTooltip,
      ...props
    }: Props<T>,
    ref: React.ForwardedRef<ChartJS<T>>,
  ): JSX.Element => {
    const chartRef = useRef<ChartJS<T>>(null);

    const mergedClassNames = {
      root: cn(defaultClassNames.root, classNames.root),
      canvas: cn(defaultClassNames.canvas, classNames.canvas),
      container: cn(defaultClassNames.container, classNames.container),
      title: cn(defaultClassNames.title, classNames.title),
      legend: cn(defaultClassNames.legend, classNames.legend),
      tooltip: cn(defaultClassNames.tooltip, classNames.tooltip),
    };

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (chartRef.current !== null) {
          const element = getElementAtEvent(
            chartRef.current as unknown as ChartJS<keyof ChartTypeRegistry>,
            event,
          );
          if (element.length > 0 && getElementSelected) {
            getElementSelected(element);
          }
        }
      },
      [getElementSelected],
    );

    const defaultOptions: ChartOptions<T> = {
      responsive,
      maintainAspectRatio,
      plugins: {
        title:
          title !== undefined
            ? {
                display: true,
                text: title,
                font: {
                  size: 16,
                  weight: "bold",
                },
                padding: {
                  top: 10,
                  bottom: 20,
                },
              }
            : undefined,
        legend: {
          display: showLegend,
          position: legendPosition,
        },
        tooltip: showTooltip
          ? {
              enabled: true,
              backgroundColor: "white",
              titleColor: "#1f2937",
              bodyColor: "#4b5563",
              borderColor: "#e5e7eb",
              borderWidth: 1,
              padding: 8,
              cornerRadius: 4,
              bodyFont: {
                size: 14,
              },
              titleFont: {
                size: 14,
                weight: "bold" as const,
              },
              ...(customTooltip && {
                callbacks: {
                  label: customTooltip,
                },
              }),
            }
          : undefined,
      },
    } as ChartOptions<T>;

    const mergedOptions: ChartOptions<T> = {
      ...defaultOptions,
      ...options,
    };

    return (
      <div className={mergedClassNames.root}>
        <div className={mergedClassNames.container}>
          {title !== undefined && (
            <h3 className={mergedClassNames.title}>{title}</h3>
          )}
          <ChartRoot
            ref={(instance) => {
              chartRef.current = instance as ChartJS<
                T,
                DistributiveArray<ChartTypeRegistry[T]["defaultDataPoint"]>,
                unknown
              > | null;
              if (typeof ref === "function") {
                ref(
                  instance as ChartJS<
                    T,
                    DistributiveArray<ChartTypeRegistry[T]["defaultDataPoint"]>,
                    unknown
                  > | null,
                );
              } else if (ref) {
                ref.current = instance as ChartJS<
                  T,
                  DistributiveArray<ChartTypeRegistry[T]["defaultDataPoint"]>,
                  unknown
                > | null;
              }
            }}
            data={data}
            options={mergedOptions}
            type={type}
            onClick={handleClick}
            className={mergedClassNames.canvas}
            {...props}
          />
        </div>
      </div>
    );
  },
);

Chart.displayName = "Chart";

export type {
  ChartType,
  ChartClassNames,
  ChartTypeRegistry,
  DistributiveArray,
  ChartJS,
  ChartOptions,
  ChartProps,
  ChartBaseProps,
};
