import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";
import { cn } from "../../utils/x-react.es.js";
import { useTheme } from "../../hooks/useTheme/x-react.es.js";
const ToggleTheme = ({
  className
}) => {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: cn(
        "cursor-pointer transition-all hover:opacity-80 ",
        className
      ),
      onClick: handleClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconSunFilled, { className: "hidden dark:block", size: 22 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconMoonFilled, { className: "dark:hidden", size: 22 })
      ]
    }
  );
};
export {
  ToggleTheme
};
//# sourceMappingURL=x-react.es.js.map
