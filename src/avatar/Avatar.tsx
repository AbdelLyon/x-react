import type { ReactElement } from "react";
import { forwardRef } from "react";
import type { AvatarProps } from "@nextui-org/react";
import { AvatarIcon, useAvatar } from "@nextui-org/react";

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    src,
    icon = <AvatarIcon />,
    alt,
    classNames,
    slots,
    name,
    showFallback,
    fallback: fallbackComponent,
    getInitials,
    getAvatarProps,
    getImageProps,
  } = useAvatar({
    ref,
    ...props,
  });

  const getFallback = (): ReactElement | null => {
    if (!showFallback && src !== null) {
      return null;
    }

    const ariaLabel = alt ? alt : name !== null ? name : "avatar";

    if (fallbackComponent !== null && fallbackComponent !== undefined) {
      return (
        <div
          aria-label={ariaLabel}
          className={slots.fallback({ class: classNames?.fallback })}
          role="img"
        >
          {fallbackComponent}
        </div>
      );
    }

    if (name !== null && name !== undefined) {
      return (
        <span
          aria-label={ariaLabel}
          className={slots.name({ class: classNames?.name })}
          role="img"
        >
          {getInitials(name)}
        </span>
      );
    }

    return (
      <span
        aria-label={ariaLabel}
        className={slots.icon({ class: classNames?.icon })}
        role="img"
      >
        {icon}
      </span>
    );
  };

  return (
    <div {...getAvatarProps()}>
      {src !== null && <img {...getImageProps()} alt={alt} />}
      {getFallback()}
    </div>
  );
});

Avatar.displayName = "Avatar";
