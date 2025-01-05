import { forwardRef } from 'react';
import { Avatar as Avatar$1, useAvatarGroup, AvatarGroupProvider, User } from '@nextui-org/react';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/avatar/Avatar.tsx
var Avatar = forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx(Avatar$1, { ref, ...props });
});
Avatar.displayName = "Avatar";
var AvatarGroup = forwardRef(
  (props, ref) => {
    const {
      Component,
      clones,
      context,
      remainingCount,
      renderCount = (count) => /* @__PURE__ */ jsx(Avatar, { name: `+${count}` }),
      getAvatarGroupProps
    } = useAvatarGroup({
      ref,
      ...props
    });
    return /* @__PURE__ */ jsx(Component, { ...getAvatarGroupProps(), children: /* @__PURE__ */ jsxs(AvatarGroupProvider, { value: context, children: [
      clones,
      remainingCount > 0 && renderCount(remainingCount)
    ] }) });
  }
);
AvatarGroup.displayName = "AvatarGroup";
var UserAvatar = forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(User, { ref, ...props });
  }
);
UserAvatar.displayName = "UserAvatar";
Avatar.displayName = "Avatar";

export { Avatar, AvatarGroup, UserAvatar };
//# sourceMappingURL=avatar.js.map
//# sourceMappingURL=avatar.js.map