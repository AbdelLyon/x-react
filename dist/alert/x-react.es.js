import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { Alert as A, Button as B } from "@nextui-org/react";
const z = ({
  title: l,
  icon: i,
  description: n,
  color: o = "default",
  variant: a = "flat",
  radius: f = "md",
  startContent: d,
  endContent: u,
  isVisible: c = !0,
  isClosable: t = !1,
  hideIcon: m = !1,
  hideIconWrapper: h = !1,
  closeButtonProps: x,
  onClose: e,
  onVisibleChange: r
}) => {
  const j = (v) => {
    r && r(v);
  }, p = () => {
    e && e(), j(!1);
  };
  return c ? /* @__PURE__ */ s.jsx(
    A,
    {
      color: o,
      variant: a,
      radius: f,
      title: l,
      icon: m ? void 0 : i,
      isClosable: t,
      hideIconWrapper: h,
      startContent: d,
      endContent: u,
      closeButton: t ? /* @__PURE__ */ s.jsx(
        B,
        {
          size: "sm",
          variant: "light",
          ...x,
          onPress: p,
          children: "Close"
        }
      ) : void 0,
      children: n
    }
  ) : null;
};
export {
  z as Alert
};
