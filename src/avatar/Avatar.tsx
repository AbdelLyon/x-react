import { User as UserRoot, type UserProps } from "@nextui-org/user";
import { forwardRef } from "react";
import type { AvatarGroupProps, AvatarProps } from "@nextui-org/avatar";
import {
  Avatar as AvatarRoot,
  useAvatarGroup,
  AvatarGroupProvider,
} from "@nextui-org/avatar";

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
