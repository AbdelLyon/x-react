import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { IconSunFilled as s, IconMoonFilled as l } from "@tabler/icons-react";
import { cn as m } from "../../utils/index.js";
import { useTheme as c } from "../../hooks/useTheme/index.js";
const T = ({
  className: o
}) => {
  const { setTheme: n, theme: r } = c(), t = () => {
    n(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ i(
    "button",
    {
      className: m(
        "cursor-pointer transition-all hover:opacity-80 ",
        o
      ),
      onClick: t,
      children: [
        /* @__PURE__ */ e(s, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ e(l, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  T as ToggleTheme
};
//# sourceMappingURL=index.js.map
