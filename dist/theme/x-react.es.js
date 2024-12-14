/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { IconSunFilled as n, IconMoonFilled as i } from "@tabler/icons-react";
import { cn as m } from "../utils/x-react.es.js";
import { u as c } from "../useTheme-ery4R1ul.js";
const k = ({ className: o }) => {
  const { setTheme: s, theme: r } = c(), t = () => {
    s(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: m("cursor-pointer hover:opacity-80 ", o),
      onClick: t,
      children: [
        /* @__PURE__ */ e.jsx(n, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ e.jsx(i, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  k as ToggleTheme
};
