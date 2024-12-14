import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

import { cn } from "@/utils";
import { useTheme } from "@/hooks/useTheme";

export const ToggleTheme = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
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
