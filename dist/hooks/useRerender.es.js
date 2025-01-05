import { useReducer as r } from "react";
const t = (e) => (e + 1) % 1e6, u = () => {
  const [, e] = r(t, 0);
  return e;
};
export {
  u as useRerender
};
