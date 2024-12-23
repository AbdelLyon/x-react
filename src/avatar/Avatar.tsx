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
    const shouldShowImage = typeof src === "string" && src.length > 0;
    if (!showFallback && shouldShowImage) {
      return null;
    }

    const ariaLabel =
      typeof alt === "string" && alt.length > 0
        ? alt
        : typeof name === "string" && name.length > 0
          ? name
          : "avatar";

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

    const hasName = typeof name === "string" && name.length > 0;

    if (hasName) {
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
  const shouldShowImage = typeof src === "string" && src.length > 0;

  return (
    <div {...getAvatarProps()}>
      {shouldShowImage && <img {...getImageProps()} alt={alt} />}
      {getFallback()}
    </div>
  );
});

Avatar.displayName = "Avatar";
