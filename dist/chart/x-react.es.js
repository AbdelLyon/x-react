/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { cn as e } from "../utils/x-react.es.js";
import { Chart as y, CategoryScale as E, LinearScale as R, Title as j, Tooltip as k, Legend as L, RadialLinearScale as z, BarElement as A, ArcElement as O, PointElement as S, LineElement as B, BarController as F, DoughnutController as N, ScatterController as P, PolarAreaController as $ } from "chart.js";
import { forwardRef as D, useRef as T } from "react";
import { Chart as W, getElementAtEvent as q } from "react-chartjs-2";
y.register(
  E,
  R,
  j,
  k,
  L,
  z,
  A,
  O,
  S,
  B,
  F,
  N,
  P,
  $
);
const o = {
  root: "relative w-full bg-white dark:bg-content1 p-6 shadow-md rounded-xl",
  canvas: "w-full",
  title: "text-lg font-semibold text-center mb-4",
  legend: "mt-4",
  tooltip: "bg-white p-2 rounded shadow-lg border text-sm"
}, G = D(
  ({
    type: c,
    data: p,
    options: m,
    getElementSelected: a,
    classNames: t = {},
    responsive: g = !0,
    maintainAspectRatio: u = !1,
    title: r,
    showLegend: f = !0,
    showTooltip: h = !0,
    legendPosition: b = "top",
    customTooltip: d,
    ...C
  }) => {
    const l = T(null), n = {
      root: e(o.root, t.root),
      canvas: e(o.canvas, t.canvas),
      title: e(o.title, t.title),
      legend: e(o.legend, t.legend),
      tooltip: e(o.tooltip, t.tooltip)
    }, v = (w) => {
      if (l.current !== null) {
        const s = q(
          l.current,
          w
        );
        s.length > 0 && a && a(s);
      }
    }, x = {
      ...{
        responsive: g,
        maintainAspectRatio: u,
        plugins: {
          title: r !== void 0 ? {
            display: !0,
            text: r,
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
            ...d && {
              callbacks: {
                label: d
              }
            }
          } : void 0
        }
      },
      ...m
    };
    return /* @__PURE__ */ i.jsxs("div", { className: n.root, children: [
      r !== void 0 && /* @__PURE__ */ i.jsx("h3", { className: n.title, children: r }),
      /* @__PURE__ */ i.jsx(
        W,
        {
          ref: l,
          data: p,
          options: x,
          type: c,
          onClick: v,
          className: n.canvas,
          ...C
        }
      )
    ] });
  }
);
G.displayName = "Chart";
export {
  G as Chart
};
