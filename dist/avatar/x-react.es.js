/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as o } from "react";
import { Avatar as A, useAvatarGroup as x, AvatarGroupProvider as c, User as d } from "@nextui-org/react";
const e = o((r, a) => /* @__PURE__ */ t.jsx(A, { ref: a, ...r }));
e.displayName = "Avatar";
const j = o(
  (r, a) => {
    const {
      Component: n,
      clones: p,
      context: m,
      remainingCount: s,
      renderCount: i = (v) => /* @__PURE__ */ t.jsx(e, { name: `+${v}` }),
      getAvatarGroupProps: u
    } = x({
      ref: a,
      ...r
    });
    return /* @__PURE__ */ t.jsx(n, { ...u(), children: /* @__PURE__ */ t.jsxs(c, { value: m, children: [
      p,
      s > 0 && i(s)
    ] }) });
  }
);
j.displayName = "AvatarGroup";
const C = o((r, a) => /* @__PURE__ */ t.jsx(d, { ref: a, ...r }));
e.displayName = "Avatar";
export {
  e as Avatar,
  j as AvatarGroup,
  C as User
};
