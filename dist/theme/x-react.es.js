import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { IconSunFilled as r, IconMoonFilled as i } from "@tabler/icons-react";
import { cn as m } from "../utils/x-react.es.js";
import { u as l } from "../useTheme-ery4R1ul.js";
const u = ({ className: o }) => {
  const { setTheme: s, theme: n } = l(), t = () => {
    s(n === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: m(
        "cursor-pointer transition-all hover:opacity-80 ",
        o
      ),
      onClick: t,
      children: [
        /* @__PURE__ */ e.jsx(r, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ e.jsx(i, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  u as ToggleTheme
};
