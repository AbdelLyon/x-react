import "../image/image.es.js";
import { jsx as s } from "react/jsx-runtime";
import { cn as e } from "../utils/utils.es.js";
import { Chart as y, CategoryScale as k, LinearScale as E, Title as L, Tooltip as R, Legend as z, RadialLinearScale as A, BarElement as O, ArcElement as S, PointElement as j, LineElement as B, BarController as F, DoughnutController as P, ScatterController as $, PolarAreaController as D } from "chart.js";
import { useRef as N } from "react";
import { Chart as T, getElementAtEvent as W } from "react-chartjs-2";
y.register(
  k,
  E,
  L,
  R,
  z,
  A,
  O,
  S,
  j,
  B,
  F,
  P,
  $,
  D
);
const o = {
  root: "relative w-full h-max flex flex-col items-center border border-default justify-center bg-white dark:bg-content1 p-6 shadow-md rounded-xl",
  canvas: "w-full h-[400px]",
  title: "text-lg font-semibold text-center mb-4",
  legend: "mt-4",
  tooltip: "bg-white p-2 rounded shadow-lg border text-sm"
}, q = ({
  type: c,
  data: p,
  options: m,
  getElementSelected: l,
  classNames: t = {},
  responsive: u = !0,
  maintainAspectRatio: f = !1,
  title: n,
  showLegend: g = !0,
  showTooltip: b = !0,
  legendPosition: h = "top",
  customTooltip: i,
  ...C
}) => {
  const r = N(null), a = {
    root: e(o.root, t.root),
    canvas: e(o.canvas, t.canvas),
    title: e(o.title, t.title),
    legend: e(o.legend, t.legend),
    tooltip: e(o.tooltip, t.tooltip)
  }, v = (w) => {
    if (r.current !== null) {
      const d = W(
        r.current,
        w
      );
      d.length > 0 && l && l(d);
    }
  }, x = {
    ...{
      responsive: u,
      maintainAspectRatio: f,
      plugins: {
        title: n !== void 0 ? {
          display: !0,
          text: n,
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
          display: g,
          position: h
        },
        tooltip: b ? {
          enabled: !0,
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
          },
          ...i && {
            callbacks: {
              label: i
            }
          }
        } : void 0
      }
    },
    ...m
  };
  return /* @__PURE__ */ s("div", { className: a.root, children: /* @__PURE__ */ s(
    T,
    {
      ref: r,
      data: p,
      options: x,
      type: c,
      onClick: v,
      className: a.canvas,
      ...C
    }
  ) });
};
q.displayName = "Chart";
export {
  q as Chart
};
