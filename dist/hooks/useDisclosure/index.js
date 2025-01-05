import { useState as f } from "react";
const a = (s = !1, u) => {
  const { onOpen: c, onClose: l } = u || {}, [t, o] = f(s), n = () => {
    o((e) => e || (c?.(), !0));
  }, r = () => {
    o((e) => e && (l?.(), !1));
  };
  return [t, { open: n, close: r, toggle: () => {
    t ? r() : n();
  } }];
};
export {
  a as useDisclosure
};
//# sourceMappingURL=index.js.map
