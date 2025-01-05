import { useRef as c } from "react";
import { useRerender as p } from "./useRerender.es.js";
const a = (o) => {
  const e = c(new Set(o)), t = p();
  return e.current.add = (...r) => {
    const n = Set.prototype.add.apply(e.current, r);
    return t(), n;
  }, e.current.clear = (...r) => {
    Set.prototype.clear.apply(e.current, r), t();
  }, e.current.delete = (...r) => {
    const n = Set.prototype.delete.apply(e.current, r);
    return t(), n;
  }, e.current;
};
export {
  a as useReactiveSet
};
