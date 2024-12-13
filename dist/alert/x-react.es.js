import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { Alert as f } from "@nextui-org/react";
const u = ({
  onClose: t,
  onVisibleChange: r,
  isVisible: e = !0,
  ...s
}) => {
  const l = (i) => {
    r && r(i);
  }, o = () => {
    t && t(), l(!1);
  };
  return e ? /* @__PURE__ */ n.jsx(f, { ...s, onClose: o }) : null;
};
export {
  u as Alert
};
