import "../image/image.es.js";
import { jsx as t } from "react/jsx-runtime";
import { ThemeProvider as i } from "next-themes";
import { NextUIProvider as m } from "@nextui-org/react";
const h = ({
  children: r,
  ...e
}) => /* @__PURE__ */ t(
  i,
  {
    defaultTheme: "light",
    attribute: "class",
    disableTransitionOnChange: !0,
    ...e,
    children: r
  }
), v = (r) => {
  const { children: e, ...o } = r;
  return /* @__PURE__ */ t(m, { ...o, children: e });
};
export {
  v as NextUIProvider,
  h as ThemeProvider
};
