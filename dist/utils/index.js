import { clsx as s } from "clsx";
import { twMerge as c } from "tailwind-merge";
const p = (...t) => c(s(t)), f = (t) => t.charAt(0).toUpperCase() + t.slice(1), u = (...t) => t.filter(Boolean).join(" "), l = (t, o) => t.startsWith(o), v = (t, o) => t.endsWith(o), h = (t) => t.toLowerCase(), m = (t) => t.toUpperCase(), C = (t) => t.trim(), M = (t) => t.split("").reverse().join(""), W = (t, o, e) => o === void 0 && e === void 0 ? t : o !== void 0 && e === void 0 ? Math.max(t, o) : o === void 0 && e !== void 0 ? Math.min(t, e) : o !== void 0 && e !== void 0 ? Math.min(Math.max(t, o), e) : t;
function w(t, o = 0) {
  let e, i;
  function r(...n) {
    i = n, e !== void 0 && clearTimeout(e), e = setTimeout(() => {
      i && t.apply(this, i), e = void 0, i = void 0;
    }, o);
  }
  return r.cancel = function() {
    e !== void 0 && (clearTimeout(e), e = void 0, i = void 0);
  }, r;
}
export {
  f as capitalizeFirstLetter,
  p as cn,
  u as concatenateWithSpace,
  w as debounce,
  v as endsWith,
  W as limitValue,
  M as reverse,
  l as startsWith,
  h as toLowerCase,
  m as toUpperCase,
  C as trim
};
//# sourceMappingURL=index.js.map
