/* empty css                */
import { j as t } from "../jsx-runtime-BFln9wzo.js";
import { forwardRef as o } from "react";
import { Avatar as A, useAvatarGroup as d, AvatarGroupProvider as x, User as c } from "@nextui-org/react";
const e = o((r, a) => /* @__PURE__ */ t.jsx(A, { ref: a, ...r }));
e.displayName = "Avatar";
const l = o(
  (r, a) => {
    const {
      Component: n,
      clones: p,
      context: m,
      remainingCount: s,
      renderCount: i = (u) => /* @__PURE__ */ t.jsx(e, { name: `+${u}` }),
      getAvatarGroupProps: v
    } = d({
      ref: a,
      ...r
    });
    return /* @__PURE__ */ t.jsx(n, { ...v(), children: /* @__PURE__ */ t.jsxs(x, { value: m, children: [
      p,
      s > 0 && i(s)
    ] }) });
  }
);
l.displayName = "AvatarGroup";
const j = o(
  (r, a) => /* @__PURE__ */ t.jsx(c, { ref: a, ...r })
);
j.displayName = "UserAvatar";
e.displayName = "Avatar";
export {
  e as Avatar,
  l as AvatarGroup,
  j as UserAvatar
};
