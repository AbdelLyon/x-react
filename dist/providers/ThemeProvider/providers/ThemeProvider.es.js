import { jsx as t } from "react/jsx-runtime";
import { ThemeProvider as i } from "next-themes";
const a = ({
  children: e,
  ...r
}) => /* @__PURE__ */ t(
  i,
  {
    defaultTheme: "light",
    attribute: "class",
    disableTransitionOnChange: !0,
    ...r,
    children: e
  }
);
export {
  a as ThemeProvider
};
