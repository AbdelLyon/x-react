import { jsx as t, jsxs as A } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import { Avatar as d, useAvatarGroup as c, AvatarGroupProvider as l, User as f } from "@nextui-org/react";
const o = e((r, a) => /* @__PURE__ */ t(d, { ref: a, ...r }));
o.displayName = "Avatar";
const G = e(
  (r, a) => {
    const {
      Component: s,
      clones: p,
      context: v,
      remainingCount: n,
      renderCount: m = (u) => /* @__PURE__ */ t(o, { name: `+${u}` }),
      getAvatarGroupProps: i
    } = c({
      ref: a,
      ...r
    });
    return /* @__PURE__ */ t(s, { ...i(), children: /* @__PURE__ */ A(l, { value: v, children: [
      p,
      n > 0 && m(n)
    ] }) });
  }
);
G.displayName = "AvatarGroup";
const x = e(
  (r, a) => /* @__PURE__ */ t(f, { ref: a, ...r })
);
x.displayName = "UserAvatar";
o.displayName = "Avatar";
export {
  o as Avatar,
  G as AvatarGroup,
  x as UserAvatar
};
//# sourceMappingURL=index.js.map
