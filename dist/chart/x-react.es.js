/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { cn as e } from "../utils/x-react.es.js";
import { Chart as y, CategoryScale as E, LinearScale as j, Title as k, Tooltip as R, Legend as L, RadialLinearScale as z, BarElement as A, ArcElement as O, PointElement as S, LineElement as B, BarController as F, DoughnutController as P, ScatterController as $, PolarAreaController as D } from "chart.js";
import { useRef as N } from "react";
import { Chart as T, getElementAtEvent as W } from "react-chartjs-2";
y.register(
  E,
  j,
  k,
  R,
  L,
  z,
  A,
  O,
  S,
  B,
  F,
  P,
  $,
  D
);
const o = {
  root: "relative w-full h-[400px] flex flex-col items-center justify-center bg-white dark:bg-content1 p-6 shadow-md rounded-xl",
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
  maintainAspectRatio: g = !1,
  title: n,
  showLegend: f = !0,
  showTooltip: h = !0,
  legendPosition: b = "top",
  customTooltip: i,
  ...C
}) => {
  const r = N(null), a = {
    root: e(o.root, t.root),
    canvas: e(o.canvas, t.canvas),
    title: e(o.title, t.title),
    legend: e(o.legend, t.legend),
    tooltip: e(o.tooltip, t.tooltip)
  }, x = (w) => {
    if (r.current !== null) {
      const d = W(
        r.current,
        w
      );
      d.length > 0 && l && l(d);
    }
  }, v = {
    ...{
      responsive: u,
      maintainAspectRatio: g,
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
          display: f,
          position: b
        },
        tooltip: h ? {
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
  return /* @__PURE__ */ s.jsx("div", { className: a.root, children: /* @__PURE__ */ s.jsx(
    T,
    {
      ref: r,
      data: p,
      options: v,
      type: c,
      onClick: x,
      className: a.canvas,
      ...C
    }
  ) });
};
q.displayName = "Chart";
export {
  q as Chart
};
