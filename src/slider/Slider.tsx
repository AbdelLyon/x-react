import { forwardRef } from "react";
import {
  Slider as SliderRoot,
  SliderProps,
  SliderRenderThumbProps,
} from "@nextui-org/react";

interface CustomThumbConfig {
  baseClassName?: string;
  thumbClassName?: string;
  renderCustomThumb?: (props: SliderRenderThumbProps) => React.ReactNode;
}

interface GenericSliderProps extends SliderProps {
  customThumb?: CustomThumbConfig;
}

export const Slider = forwardRef<HTMLDivElement, GenericSliderProps>(
  ({ customThumb, classNames, renderThumb, ...props }, ref) => {
    const defaultThumb = (thumbProps: SliderRenderThumbProps) => (
      <div
        {...thumbProps}
        className={`
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
        ${customThumb?.baseClassName || ""}
      `}
      >
        <span
          className={`
          transition-transform 
          bg-gradient-to-br 
          shadow-small 
          from-primay
          to-black
          rounded-full 
          w-5 
          h-5 
          block 
          group-data-[dragging=true]:scale-80
          ${customThumb?.thumbClassName || ""}
        `}
        />
      </div>
    );

    const thumbRenderer =
      customThumb?.renderCustomThumb || renderThumb || defaultThumb;

    return (
      <SliderRoot
        ref={ref}
        renderThumb={thumbRenderer}
        classNames={{
          base: "max-w-md gap-3",
          track: "border-s-secondary-100",
          filler: "bg-gradient-to-r from-primary to-black",
          ...classNames,
        }}
        {...props}
      />
    );
  },
);

Slider.displayName = "Slider";
