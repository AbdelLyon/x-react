import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef } from "react";
import { Avatar as Avatar$1, useAvatarGroup, AvatarGroupProvider, User } from "@nextui-org/react";
const Avatar = forwardRef((props, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { ref, ...props });
});
Avatar.displayName = "Avatar";
const AvatarGroup = forwardRef(
  (props, ref) => {
    const {
      Component,
      clones,
      context,
      remainingCount,
      renderCount = (count) => /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: `+${count}` }),
      getAvatarGroupProps
    } = useAvatarGroup({
      ref,
      ...props
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getAvatarGroupProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AvatarGroupProvider, { value: context, children: [
      clones,
      remainingCount > 0 && renderCount(remainingCount)
    ] }) });
  }
);
AvatarGroup.displayName = "AvatarGroup";
const UserAvatar = forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(User, { ref, ...props });
  }
);
UserAvatar.displayName = "UserAvatar";
Avatar.displayName = "Avatar";
export {
  Avatar,
  AvatarGroup,
  UserAvatar
};
//# sourceMappingURL=x-react.es.js.map
