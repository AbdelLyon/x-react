/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as v } from "react";
import { useAvatar as x, AvatarIcon as g } from "@nextui-org/react";
import { User as P } from "@nextui-org/react";
const j = v((s, c) => {
  const {
    src: i,
    icon: m = /* @__PURE__ */ r.jsx(g, {}),
    alt: n,
    classNames: a,
    slots: o,
    name: l,
    showFallback: f,
    fallback: t,
    getInitials: p,
    getAvatarProps: u,
    getImageProps: b
  } = x({
    ref: c,
    ...s
  }), d = () => {
    if (!f && i !== null)
      return null;
    const e = n || (l !== null ? l : "avatar");
    return t != null ? /* @__PURE__ */ r.jsx(
      "div",
      {
        "aria-label": e,
        className: o.fallback({ class: a == null ? void 0 : a.fallback }),
        role: "img",
        children: t
      }
    ) : l != null ? /* @__PURE__ */ r.jsx(
      "span",
      {
        "aria-label": e,
        className: o.name({ class: a == null ? void 0 : a.name }),
        role: "img",
        children: p(l)
      }
    ) : /* @__PURE__ */ r.jsx(
      "span",
      {
        "aria-label": e,
        className: o.icon({ class: a == null ? void 0 : a.icon }),
        role: "img",
        children: m
      }
    );
  };
  return /* @__PURE__ */ r.jsxs("div", { ...u(), children: [
    i !== null && /* @__PURE__ */ r.jsx("img", { ...b(), alt: n }),
    d()
  ] });
});
j.displayName = "Avatar";
export {
  j as Avatar,
  P as User
};
