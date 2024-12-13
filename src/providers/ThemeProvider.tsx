import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props} defaultTheme="light" attribute="class">
      {children}
    </NextThemesProvider>
  );
};

export { ThemeProvider, type ThemeProviderProps };
