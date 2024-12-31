/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { Chart as j, CategoryScale as R, LinearScale as k, Title as E, Tooltip as L, Legend as z, RadialLinearScale as A, BarElement as O, ArcElement as B, PointElement as F, LineElement as N, BarController as P, DoughnutController as S, ScatterController as $, PolarAreaController as D } from "chart.js";
import { forwardRef as T, useRef as W, useCallback as q } from "react";
import { getElementAtEvent as G, Chart as H } from "react-chartjs-2";
import { cn as e } from "../utils/x-react.es.js";
j.register(
  R,
  k,
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
  $,
  D
);
const o = {
  root: "relative w-full",
  canvas: "w-full",
  container: "relative",
  title: "text-lg font-semibold text-center mb-4",
  legend: "mt-4",
  tooltip: "bg-white p-2 rounded shadow-lg border text-sm"
}, I = T(
  ({
    type: u,
    data: m,
    options: f,
    getElementSelected: d,
    classNames: t = {},
    responsive: g = !0,
    maintainAspectRatio: h = !1,
    title: l,
    showLegend: C = !0,
    showTooltip: b = !0,
    legendPosition: v = "top",
    customTooltip: c,
    ...x
  }, n) => {
    const s = W(null), i = {
      root: e(o.root, t.root),
      canvas: e(o.canvas, t.canvas),
      container: e(o.container, t.container),
      title: e(o.title, t.title),
      legend: e(o.legend, t.legend),
      tooltip: e(o.tooltip, t.tooltip)
    }, w = q(
      (r) => {
        if (s.current !== null) {
          const p = G(
            s.current,
            r
          );
          p.length > 0 && d && d(p);
        }
      },
      [d]
    ), y = {
      ...{
        responsive: g,
        maintainAspectRatio: h,
        plugins: {
          title: l !== void 0 ? {
            display: !0,
            text: l,
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
            display: C,
            position: v
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
            ...c && {
              callbacks: {
                label: c
              }
            }
          } : void 0
        }
      },
      ...f
    };
    return /* @__PURE__ */ a.jsx("div", { className: i.root, children: /* @__PURE__ */ a.jsxs("div", { className: i.container, children: [
      l !== void 0 && /* @__PURE__ */ a.jsx("h3", { className: i.title, children: l }),
      /* @__PURE__ */ a.jsx(
        H,
        {
          ref: (r) => {
            s.current = r, typeof n == "function" ? n(
              r
            ) : n && (n.current = r);
          },
          data: m,
          options: y,
          type: u,
          onClick: w,
          className: i.canvas,
          ...x
        }
      )
    ] }) });
  }
);
I.displayName = "Chart";
export {
  I as Chart
};
