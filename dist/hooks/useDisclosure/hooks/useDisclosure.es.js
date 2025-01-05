import { useState as l } from "react";
const i = (c = !1, f) => {
  const { onOpen: e, onClose: r } = f || {}, [o, s] = l(c), n = () => {
    s((t) => t || (e == null || e(), !0));
  }, u = () => {
    s((t) => t && (r == null || r(), !1));
  };
  return [o, { open: n, close: u, toggle: () => {
    o ? u() : n();
  } }];
};
export {
  i as useDisclosure
};
