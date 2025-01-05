import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme as useTheme$1 } from 'next-themes';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/theme/ToggleTheme.tsx
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
var useTheme = () => {
  const { setTheme, theme } = useTheme$1();
  return { setTheme, theme };
};
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
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map