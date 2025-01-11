import { jsxs, jsx } from "react/jsx-runtime";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { useTheme } from "../../hooks/useTheme/index.es.js";
const ToggleTheme = ({
  className
}) => {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: mergeTailwindClasses(
        "cursor-pointer transition-all hover:opacity-80 ",
        className
      ),
      onClick: handleClick,
      children: [
        /* @__PURE__ */ jsx(IconSunFilled, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ jsx(IconMoonFilled, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  ToggleTheme
};
