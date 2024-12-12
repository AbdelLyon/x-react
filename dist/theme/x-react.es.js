/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { cn as u } from "../utils/x-react.es.js";
import { u as w } from "../useTheme-DNnSNDW2.js";
import { forwardRef as f, createElement as n } from "react";
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d = (e, l, t, a) => {
  const o = f(
    ({ color: c = "currentColor", size: i = 24, stroke: x = 2, title: h, className: m, children: r, ...p }, v) => n(
      "svg",
      {
        ref: v,
        ...y[e],
        width: i,
        height: i,
        className: ["tabler-icon", `tabler-icon-${l}`, m].join(" "),
        fill: c,
        ...p
      },
      [
        h && n("title", { key: "svg-title" }, h),
        ...a.map(([g, k]) => n(g, k)),
        ...Array.isArray(r) ? r : [r]
      ]
    )
  );
  return o.displayName = `${t}`, o;
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var M = d("filled", "moon-filled", "IconMoonFilled", [["path", { d: "M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var z = d("filled", "sun-filled", "IconSunFilled", [["path", { d: "M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z", key: "svg-0" }], ["path", { d: "M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z", key: "svg-1" }], ["path", { d: "M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z", key: "svg-2" }], ["path", { d: "M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z", key: "svg-3" }], ["path", { d: "M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z", key: "svg-4" }], ["path", { d: "M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z", key: "svg-5" }], ["path", { d: "M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z", key: "svg-6" }], ["path", { d: "M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z", key: "svg-7" }], ["path", { d: "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z", key: "svg-8" }]]);
const F = ({ className: e }) => {
  const { setTheme: l, theme: t } = w(), a = () => {
    l(t === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      className: u(
        "cursor-pointer transition-all hover:opacity-80 ",
        e
      ),
      onClick: a,
      children: [
        /* @__PURE__ */ s.jsx(z, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ s.jsx(M, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  F as ToggleTheme
};
