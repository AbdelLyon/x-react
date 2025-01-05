import "../image/image.es.js";
import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { IconSunFilled as s, IconMoonFilled as m } from "@tabler/icons-react";
import { cn as l } from "../utils/utils.es.js";
import { u as c } from "../useTheme-ery4R1ul.js";
const T = ({
  className: o
}) => {
  const { setTheme: n, theme: r } = c(), t = () => {
    n(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ i(
    "button",
    {
      className: l(
        "cursor-pointer transition-all hover:opacity-80 ",
        o
      ),
      onClick: t,
      children: [
        /* @__PURE__ */ e(s, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ e(m, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  T as ToggleTheme
};
