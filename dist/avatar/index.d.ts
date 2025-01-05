import * as react from 'react';
import { AvatarProps, AvatarGroupProps, UserProps } from '@nextui-org/react';

declare const Avatar: react.ForwardRefExoticComponent<Omit<AvatarProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const AvatarGroup: react.ForwardRefExoticComponent<Omit<AvatarGroupProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const UserAvatar: react.ForwardRefExoticComponent<Omit<UserProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Avatar, AvatarGroup, UserAvatar };
