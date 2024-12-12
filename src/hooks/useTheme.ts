import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { setTheme, theme } = useNextTheme();

  return { setTheme, theme };
};
