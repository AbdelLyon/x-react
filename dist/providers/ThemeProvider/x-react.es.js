import { jsx } from "react/jsx-runtime";
import { ThemeProvider as ThemeProvider$1 } from "next-themes";
const ThemeProvider = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    ThemeProvider$1,
    {
      defaultTheme: "light",
      attribute: "class",
      disableTransitionOnChange: true,
      ...props,
      children
    }
  );
};
export {
  ThemeProvider
};
//# sourceMappingURL=x-react.es.js.map
