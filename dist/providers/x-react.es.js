/* empty css                */
import { j as t } from "../jsx-runtime-BFln9wzo.js";
import { ThemeProvider as i } from "next-themes";
import { NextUIProvider as s } from "@nextui-org/react";
const x = ({
  children: r,
  ...e
}) => /* @__PURE__ */ t.jsx(
  i,
  {
    defaultTheme: "light",
    attribute: "class",
    disableTransitionOnChange: !0,
    ...e,
    children: r
  }
), h = (r) => {
  const { children: e, ...o } = r;
  return /* @__PURE__ */ t.jsx(s, { ...o, children: e });
};
export {
  h as NextUIProvider,
  x as ThemeProvider
};
