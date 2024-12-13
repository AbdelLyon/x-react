/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { cn as r } from "../utils/x-react.es.js";
import { u as i } from "../useTheme-DNnSNDW2.js";
import { I as m, a } from "../IconSunFilled-Ow05ESEr.js";
const k = ({ className: o }) => {
  const { setTheme: s, theme: t } = i(), n = () => {
    s(t === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: r(
        "cursor-pointer transition-all hover:opacity-80 ",
        o
      ),
      onClick: n,
      children: [
        /* @__PURE__ */ e.jsx(m, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ e.jsx(a, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  k as ToggleTheme
};
