import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

import { cn } from "@/utils";
import { useTheme } from "@/hooks/useTheme";
import type { JSX } from "react";

export const ToggleTheme = ({
  className,
}: {
  className?: string;
}): JSX.Element => {
  const { setTheme, theme } = useTheme();

  const handleClick = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };

  return (
    <button
      className={cn(
        "cursor-pointer transition-all hover:opacity-80 ",
        className,
      )}
      onClick={handleClick}
    >
      <IconSunFilled className="hidden dark:block" size={22} />
      <IconMoonFilled className="dark:hidden" size={22} />
    </button>
  );
};
