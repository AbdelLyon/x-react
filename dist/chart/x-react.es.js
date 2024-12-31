/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { Chart as k, CategoryScale as y, LinearScale as R, Title as j, Tooltip as E, Legend as L, RadialLinearScale as z, BarElement as A, ArcElement as O, PointElement as B, LineElement as F, BarController as N, DoughnutController as P, ScatterController as S, PolarAreaController as $ } from "chart.js";
import { forwardRef as D, useRef as T, useCallback as W } from "react";
import { getElementAtEvent as q, Chart as G } from "react-chartjs-2";
import { cn as e } from "../utils/x-react.es.js";
k.register(
  y,
  R,
  j,
  E,
  L,
  z,
  A,
  O,
  B,
  F,
  N,
  P,
  S,
  $
);
const o = {
  root: "relative w-full bg-white dark:bg-content1 p-6 shadow-md rounded-xl",
  canvas: "w-full",
  title: "text-lg font-semibold text-center mb-4",
  legend: "mt-4",
  tooltip: "bg-white p-2 rounded shadow-lg border text-sm"
}, H = D(
  ({
    type: c,
    data: p,
    options: m,
    getElementSelected: l,
    classNames: t = {},
    responsive: u = !0,
    maintainAspectRatio: g = !1,
    title: r,
    showLegend: f = !0,
    showTooltip: h = !0,
    legendPosition: b = "top",
    customTooltip: d,
    ...C
  }) => {
    const n = T(null), a = {
      root: e(o.root, t.root),
      canvas: e(o.canvas, t.canvas),
      title: e(o.title, t.title),
      legend: e(o.legend, t.legend),
      tooltip: e(o.tooltip, t.tooltip)
    }, v = W(
      (w) => {
        if (n.current !== null) {
          const s = q(
            n.current,
            w
          );
          s.length > 0 && l && l(s);
        }
      },
      [l]
    ), x = {
      ...{
        responsive: u,
        maintainAspectRatio: g,
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
    return /* @__PURE__ */ i.jsxs("div", { className: a.root, children: [
      r !== void 0 && /* @__PURE__ */ i.jsx("h3", { className: a.title, children: r }),
      /* @__PURE__ */ i.jsx(
        G,
        {
          ref: n,
          data: p,
          options: x,
          type: c,
          onClick: v,
          className: a.canvas,
          ...C
        }
      )
    ] });
  }
);
H.displayName = "Chart";
export {
  H as Chart
};
