/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as g, useMemo as j } from "react";
import { useAvatar as u, AvatarIcon as v } from "@nextui-org/react";
import { User as y } from "@nextui-org/react";
const k = g((f, p) => {
  const {
    src: o,
    icon: s = /* @__PURE__ */ r.jsx(v, {}),
    alt: t,
    classNames: a,
    slots: l,
    name: e,
    showFallback: c,
    fallback: i,
    getInitials: m,
    getAvatarProps: b,
    getImageProps: x
  } = u({
    ref: p,
    ...f
  }), d = j(() => {
    if (!c && o) return null;
    const n = t || e || "avatar";
    return i ? /* @__PURE__ */ r.jsx(
      "div",
      {
        "aria-label": n,
        className: l.fallback({ class: a == null ? void 0 : a.fallback }),
        role: "img",
        children: i
      }
    ) : e ? /* @__PURE__ */ r.jsx(
      "span",
      {
        "aria-label": n,
        className: l.name({ class: a == null ? void 0 : a.name }),
        role: "img",
        children: m(e)
      }
    ) : /* @__PURE__ */ r.jsx(
      "span",
      {
        "aria-label": n,
        className: l.icon({ class: a == null ? void 0 : a.icon }),
        role: "img",
        children: s
      }
    );
  }, [
    c,
    o,
    i,
    e,
    a,
    l,
    t,
    s,
    m
  ]);
  return /* @__PURE__ */ r.jsxs("div", { ...b(), children: [
    o && /* @__PURE__ */ r.jsx("img", { ...x(), alt: t }),
    d
  ] });
});
k.displayName = "Avatar";
export {
  k as Avatar,
  y as User
};
