import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" {...props}>
      {children}
    </NextThemesProvider>
  );
};

export { ThemeProvider, type ThemeProviderProps };
