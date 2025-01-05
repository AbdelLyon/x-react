import "../image/image.es.js";
import { jsx as t, jsxs as A } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { Avatar as d, useAvatarGroup as c, AvatarGroupProvider as l, User as f } from "@nextui-org/react";
const e = o((r, a) => /* @__PURE__ */ t(d, { ref: a, ...r }));
e.displayName = "Avatar";
const G = o(
  (r, a) => {
    const {
      Component: s,
      clones: p,
      context: m,
      remainingCount: n,
      renderCount: v = (u) => /* @__PURE__ */ t(e, { name: `+${u}` }),
      getAvatarGroupProps: i
    } = c({
      ref: a,
      ...r
    });
    return /* @__PURE__ */ t(s, { ...i(), children: /* @__PURE__ */ A(l, { value: m, children: [
      p,
      n > 0 && v(n)
    ] }) });
  }
);
G.displayName = "AvatarGroup";
const x = o(
  (r, a) => /* @__PURE__ */ t(f, { ref: a, ...r })
);
x.displayName = "UserAvatar";
e.displayName = "Avatar";
export {
  e as Avatar,
  G as AvatarGroup,
  x as UserAvatar
};
