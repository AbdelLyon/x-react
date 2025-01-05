var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { jsx } from "react/jsx-runtime";
import { cn } from "../../utils/index.es.js";
import { Chart as Chart$1, CategoryScale, LinearScale, Title, Tooltip, Legend, RadialLinearScale, BarElement, ArcElement, PointElement, LineElement, BarController, DoughnutController, ScatterController, PolarAreaController } from "chart.js";
import { useRef } from "react";
import { Chart as Chart$2, getElementAtEvent } from "react-chartjs-2";
Chart$1.register(
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
  PolarAreaController
);
const defaultClassNames = {
  root: "relative w-full h-max flex flex-col items-center border border-default justify-center bg-white dark:bg-content1 p-6 shadow-md rounded-xl",
  canvas: "w-full h-[400px]",
  title: "text-lg font-semibold text-center mb-4",
  legend: "mt-4",
  tooltip: "bg-white p-2 rounded shadow-lg border text-sm"
};
const Chart = (_a) => {
  var _b = _a, {
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
    customTooltip
  } = _b, props = __objRest(_b, [
    "type",
    "data",
    "options",
    "getElementSelected",
    "classNames",
    "responsive",
    "maintainAspectRatio",
    "title",
    "showLegend",
    "showTooltip",
    "legendPosition",
    "customTooltip"
  ]);
  const chartRef = useRef(null);
  const mergedClassNames = {
    root: cn(defaultClassNames.root, classNames.root),
    canvas: cn(defaultClassNames.canvas, classNames.canvas),
    title: cn(defaultClassNames.title, classNames.title),
    legend: cn(defaultClassNames.legend, classNames.legend),
    tooltip: cn(defaultClassNames.tooltip, classNames.tooltip)
  };
  const handleClick = (event) => {
    if (chartRef.current !== null) {
      const element = getElementAtEvent(
        chartRef.current,
        event
      );
      if (element.length > 0 && getElementSelected) {
        getElementSelected(element);
      }
    }
  };
  const defaultOptions = {
    responsive,
    maintainAspectRatio,
    plugins: {
      title: title !== void 0 ? {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: "bold"
        },
        padding: {
          top: 10,
          bottom: 20
        }
      } : void 0,
      legend: {
        display: showLegend,
        position: legendPosition
      },
      tooltip: showTooltip ? __spreadValues({
        enabled: true,
        backgroundColor: "white",
        titleColor: "#1f2937",
        bodyColor: "#4b5563",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 8,
        cornerRadius: 4,
        bodyFont: {
          size: 14
        },
        titleFont: {
          size: 14,
          weight: "bold"
        }
      }, customTooltip && {
        callbacks: {
          label: customTooltip
        }
      }) : void 0
    }
  };
  const mergedOptions = __spreadValues(__spreadValues({}, defaultOptions), options);
  return /* @__PURE__ */ jsx("div", { className: mergedClassNames.root, children: /* @__PURE__ */ jsx(
    Chart$2,
    __spreadValues({
      ref: chartRef,
      data,
      options: mergedOptions,
      type,
      onClick: handleClick,
      className: mergedClassNames.canvas
    }, props)
  ) });
};
Chart.displayName = "Chart";
export {
  Chart
};
