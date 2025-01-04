import type { AvatarProps, UserProps } from "@nextui-org/react";
import { forwardRef } from "react";
import type { AvatarGroupProps } from "@nextui-org/react";
import {
  Avatar as AvatarRoot,
  User as UserRoot,
  useAvatarGroup,
  AvatarGroupProvider,
} from "@nextui-org/react";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  return <AvatarRoot ref={ref} {...props} />;
});

Avatar.displayName = "Avatar";

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      Component,
      clones,
      context,
      remainingCount,
      renderCount = (count) => <Avatar name={`+${count}`} />,
      getAvatarGroupProps,
    } = useAvatarGroup({
      ref,
      ...props,
    });

    return (
      <Component {...getAvatarGroupProps()}>
        <AvatarGroupProvider value={context}>
          {clones}
          {remainingCount > 0 && renderCount(remainingCount)}
        </AvatarGroupProvider>
      </Component>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";

export const UserAvatar = forwardRef<HTMLDivElement, UserProps>(
  (props, ref) => {
    return <UserRoot ref={ref} {...props} />;
  },
);

UserAvatar.displayName = "UserAvatar";

Avatar.displayName = "Avatar";
