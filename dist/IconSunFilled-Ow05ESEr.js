import { forwardRef as k, createElement as e } from "react";
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
const i = (t, d, s, h) => {
  const a = k(
    ({ color: o = "currentColor", size: n = 24, stroke: v = 2, title: r, className: c, children: l, ...g }, p) => e(
      "svg",
      {
        ref: p,
        ...y[t],
        width: n,
        height: n,
        className: ["tabler-icon", `tabler-icon-${d}`, c].join(" "),
        ...t === "filled" ? {
          fill: o
        } : {
          strokeWidth: v,
          stroke: o
        },
        ...g
      },
      [
        r && e("title", { key: "svg-title" }, r),
        ...h.map(([u, f]) => e(u, f)),
        ...Array.isArray(l) ? l : [l]
      ]
    )
  );
  return a.displayName = `${s}`, a;
};
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var M = i("filled", "moon-filled", "IconMoonFilled", [["path", { d: "M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z", key: "svg-0" }]]);
const z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w = i("filled", "sun-filled", "IconSunFilled", [["path", { d: "M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z", key: "svg-0" }], ["path", { d: "M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z", key: "svg-1" }], ["path", { d: "M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z", key: "svg-2" }], ["path", { d: "M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z", key: "svg-3" }], ["path", { d: "M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z", key: "svg-4" }], ["path", { d: "M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z", key: "svg-5" }], ["path", { d: "M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z", key: "svg-6" }], ["path", { d: "M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z", key: "svg-7" }], ["path", { d: "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z", key: "svg-8" }]]);
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: w
}, Symbol.toStringTag, { value: "Module" }));
export {
  w as I,
  M as a,
  z as b,
  i as c,
  b as d
};
