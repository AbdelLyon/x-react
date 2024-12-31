/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { Chart as E, CategoryScale as L, LinearScale as z, Title as A, Tooltip as O, Legend as B, RadialLinearScale as F, BarElement as N, ArcElement as P, PointElement as S, LineElement as $, BarController as D, DoughnutController as T, ScatterController as W, PolarAreaController as q } from "chart.js";
import { forwardRef as G, useRef as H, useCallback as I } from "react";
import { getElementAtEvent as J, Chart as K } from "react-chartjs-2";
import { cn as e } from "../utils/x-react.es.js";
E.register(
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
  D,
  T,
  W,
  q
);
const o = {
  root: "relative w-full h-full",
  canvas: "w-full h-full",
  container: "relative",
  title: "text-lg font-semibold text-center mb-4",
  legend: "mt-4",
  tooltip: "bg-white p-2 rounded shadow-lg border text-sm"
}, M = G(
  ({
    type: f,
    data: m,
    options: h,
    getElementSelected: d,
    classNames: t = {},
    styles: s = {},
    width: g = "100%",
    height: C = "100%",
    responsive: b = !0,
    maintainAspectRatio: v = !1,
    title: l,
    showLegend: x = !0,
    showTooltip: w = !0,
    legendPosition: y = "top",
    customTooltip: p,
    ...j
  }, n) => {
    const c = H(null), i = {
      root: e(o.root, t.root),
      canvas: e(o.canvas, t.canvas),
      container: e(o.container, t.container),
      title: e(o.title, t.title),
      legend: e(o.legend, t.legend),
      tooltip: e(o.tooltip, t.tooltip)
    }, R = I(
      (r) => {
        if (c.current !== null) {
          const u = J(
            c.current,
            r
          );
          u.length > 0 && d && d(u);
        }
      },
      [d]
    ), k = {
      ...{
        responsive: b,
        maintainAspectRatio: v,
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
            display: x,
            position: y
          },
          tooltip: w ? {
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
            ...p && {
              callbacks: {
                label: p
              }
            }
          } : void 0
        }
      },
      ...h
    };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: i.root,
        style: { width: g, height: C, ...s.root },
        children: /* @__PURE__ */ a.jsxs("div", { className: i.container, style: s.container, children: [
          l !== void 0 && /* @__PURE__ */ a.jsx("h3", { className: i.title, children: l }),
          /* @__PURE__ */ a.jsx(
            K,
            {
              ref: (r) => {
                c.current = r, typeof n == "function" ? n(
                  r
                ) : n && (n.current = r);
              },
              data: m,
              options: k,
              type: f,
              onClick: R,
              className: i.canvas,
              style: s.canvas,
              ...j
            }
          )
        ] })
      }
    );
  }
);
M.displayName = "Chart";
export {
  M as Chart
};
