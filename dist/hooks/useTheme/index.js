import { useTheme as s } from "next-themes";
const h = () => {
  const { setTheme: e, theme: m } = s();
  return { setTheme: e, theme: m };
};
export {
  h as useTheme
};
//# sourceMappingURL=index.js.map
