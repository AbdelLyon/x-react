import { forwardRef } from "react";
import {
  Slider as SliderRoot,
  SliderProps,
  SliderRenderThumbProps,
} from "@nextui-org/react";
import { cn } from "@/utils";

interface CustomThumbConfig {
  baseClassName?: string;
  thumbClassName?: string;
  renderCustomThumb?: (props: SliderRenderThumbProps) => React.ReactNode;
  position?: "left" | "right" | "both";
}

interface GenericSliderProps extends SliderProps {
  customThumb?: CustomThumbConfig;
}

export const Slider = forwardRef<HTMLDivElement, GenericSliderProps>(
  ({ customThumb, classNames, renderThumb, ...props }, ref) => {
    const defaultThumb = (thumbProps: SliderRenderThumbProps) => (
      <div
        {...thumbProps}
        className={cn(
          `
        group 
        p-1 
        top-1/2 
        bg-background 
        border-small 
        border-default-200 
        dark:border-default-400/50 
        shadow-medium 
        rounded-full 
        cursor-grab 
        data-[dragging=true]:cursor-grabbing
        `,
          customThumb?.baseClassName,
        )}
      >
        <span
          className={cn(
            `
          transition-transform 
          bg-gradient-to-br 
          shadow-small 
          from-primary
          to-black
          rounded-full 
          w-5 
          h-5 
          block 
          group-data-[dragging=true]:scale-80
          `,
            customThumb?.thumbClassName,
          )}
        />
      </div>
    );

    const thumbRenderer =
      customThumb?.renderCustomThumb || renderThumb || defaultThumb;

    const handleRenderThumb = (thumbProps: SliderRenderThumbProps) => {
      // Support for multiple thumbs
      if (customThumb?.position === "both") {
        return (
          <>
            {thumbRenderer({ ...thumbProps, "data-position": "left" })}
            {thumbRenderer({ ...thumbProps, "data-position": "right" })}
          </>
        );
      }
      return thumbRenderer(thumbProps);
    };

    return (
      <SliderRoot
        ref={ref}
        renderThumb={handleRenderThumb}
        classNames={{
          base: "max-w-md gap-3",
          track: cn("border-s-secondary-100", "left-0"),
          filler: cn("bg-gradient-to-r from-primary to-black", "left-0"),
          ...classNames,
        }}
        {...props}
      />
    );
  },
);

Slider.displayName = "Slider";
