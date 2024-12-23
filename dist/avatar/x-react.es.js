/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as x } from "react";
import { useAvatar as v, AvatarIcon as j } from "@nextui-org/react";
import { User as S } from "@nextui-org/react";
const k = x((i, c) => {
  const {
    src: e,
    icon: g = /* @__PURE__ */ t.jsx(j, {}),
    alt: l,
    classNames: a,
    slots: o,
    name: r,
    showFallback: m,
    fallback: n,
    getInitials: f,
    getAvatarProps: p,
    getImageProps: h
  } = v({
    ref: c,
    ...i
  }), d = () => {
    const b = typeof e == "string" && e.length > 0;
    if (!m && b)
      return null;
    const s = typeof l == "string" && l.length > 0 ? l : typeof r == "string" && r.length > 0 ? r : "avatar";
    return n != null ? /* @__PURE__ */ t.jsx(
      "div",
      {
        "aria-label": s,
        className: o.fallback({ class: a == null ? void 0 : a.fallback }),
        role: "img",
        children: n
      }
    ) : typeof r == "string" && r.length > 0 ? /* @__PURE__ */ t.jsx(
      "span",
      {
        "aria-label": s,
        className: o.name({ class: a == null ? void 0 : a.name }),
        role: "img",
        children: f(r)
      }
    ) : /* @__PURE__ */ t.jsx(
      "span",
      {
        "aria-label": s,
        className: o.icon({ class: a == null ? void 0 : a.icon }),
        role: "img",
        children: g
      }
    );
  }, u = typeof e == "string" && e.length > 0;
  return /* @__PURE__ */ t.jsxs("div", { ...p(), children: [
    u && /* @__PURE__ */ t.jsx("img", { ...h(), alt: l }),
    d()
  ] });
});
k.displayName = "Avatar";
export {
  k as Avatar,
  S as User
};
