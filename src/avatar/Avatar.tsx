import { forwardRef, useMemo } from "react";
import { AvatarIcon, AvatarProps, useAvatar } from "@nextui-org/react";

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

  const fallback = useMemo(() => {
    if (!showFallback && src) return null;

    const ariaLabel = alt || name || "avatar";

    if (fallbackComponent) {
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

    return name ? (
      <span
        aria-label={ariaLabel}
        className={slots.name({ class: classNames?.name })}
        role="img"
      >
        {getInitials(name)}
      </span>
    ) : (
      <span
        aria-label={ariaLabel}
        className={slots.icon({ class: classNames?.icon })}
        role="img"
      >
        {icon}
      </span>
    );
  }, [
    showFallback,
    src,
    fallbackComponent,
    name,
    classNames,
    slots,
    alt,
    icon,
    getInitials,
  ]);

  return (
    <div {...getAvatarProps()}>
      {src && <img {...getImageProps()} alt={alt} />}
      {fallback}
    </div>
  );
});

Avatar.displayName = "Avatar";
