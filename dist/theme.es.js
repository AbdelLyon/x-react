import { useTheme } from './chunk-A4AJZ3AV.es.js';
import { cn } from './chunk-HWWI3HGE.es.js';
import './chunk-OFYPKX7Y.es.js';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import { jsxs, jsx } from 'react/jsx-runtime';

var ToggleTheme = ({
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
      className: cn(
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

export { ToggleTheme };
//# sourceMappingURL=theme.es.js.map
//# sourceMappingURL=theme.es.js.map