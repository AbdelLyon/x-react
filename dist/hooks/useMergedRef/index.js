const o = (e, n) => {
  typeof e == "function" ? e(n) : typeof e == "object" && e !== null && "current" in e && (e.current = n);
}, c = (...e) => (n) => {
  e.forEach((t) => o(t, n));
}, s = (...e) => c(...e);
export {
  s as useMergedRef
};
//# sourceMappingURL=index.js.map
