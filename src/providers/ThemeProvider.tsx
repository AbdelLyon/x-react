import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      {...props}
      enableSystem={false}
      enableColorScheme={false}
    >
      {children}
    </NextThemesProvider>
  );
};

export { ThemeProvider, type ThemeProviderProps };
