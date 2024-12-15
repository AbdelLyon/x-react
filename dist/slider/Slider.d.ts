import { SliderProps, SliderRenderThumbProps } from '@nextui-org/react';
interface CustomThumbConfig {
    baseClassName?: string;
    thumbClassName?: string;
    renderCustomThumb?: (props: SliderRenderThumbProps) => React.ReactNode;
}
interface GenericSliderProps extends SliderProps {
    customThumb?: CustomThumbConfig;
}
export declare const Slider: import('react').ForwardRefExoticComponent<Omit<GenericSliderProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
