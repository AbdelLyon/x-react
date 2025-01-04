import { useTheme as m } from "next-themes";
const h = () => {
  const { setTheme: e, theme: s } = m();
  return { setTheme: e, theme: s };
};
export {
  h as u
};
