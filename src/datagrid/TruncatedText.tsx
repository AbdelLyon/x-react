import { Tooltip } from "@/tooltip";
import type { ReactNode, JSX, CSSProperties } from "react";
import { useRef, useEffect, useState } from "react";

interface TruncatedTextProps {
  children: ReactNode;
  className?: string;
  tooltipClassName?: string;
  placement?: "top" | "bottom" | "left" | "right";
  style?: CSSProperties;
}

export function TruncatedText({
  children,
  className = "",
  tooltipClassName,
  placement = "top",
  style,
}: TruncatedTextProps): JSX.Element {
  const textRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect((): (() => void) => {
    const checkTruncation = (): void => {
      if (textRef.current) {
        const element = textRef.current;
        const isTruncatedNow = element.scrollWidth > element.clientWidth;
        setIsTruncated(isTruncatedNow);
      }
    };

    checkTruncation();

    // Vérifier à nouveau si la taille change
    const resizeObserver = new ResizeObserver(checkTruncation);
    if (textRef.current) {
      resizeObserver.observe(textRef.current);
    }

    return (): void => {
      resizeObserver.disconnect();
    };
  }, [children]);

  const textElement = (
    <div
      ref={textRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );

  if (isTruncated) {
    return (
      <Tooltip
        trigger={textElement}
        content={children}
        placement={placement}
        delay={500}
        closeDelay={100}
        className={tooltipClassName}
      />
    );
  }

  return textElement;
}