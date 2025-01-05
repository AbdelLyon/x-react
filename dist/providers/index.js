import { ThemeProvider as ThemeProvider$1 } from 'next-themes';
import { jsx } from 'react/jsx-runtime';
import { NextUIProvider as NextUIProvider$1 } from '@nextui-org/react';

// src/providers/ThemeProvider.tsx
var ThemeProvider = ({
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
var NextUIProvider = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsx(NextUIProvider$1, { ...rest, children });
};

export { NextUIProvider, ThemeProvider };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map