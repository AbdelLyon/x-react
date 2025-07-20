import { PressEvent } from '@heroui/react';
export type BaseColor = "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
export type Color = "default" | BaseColor;
export type LinkColor = "foreground" | BaseColor;
export type Variant = "solid" | "bordered" | "flat" | "faded" | "light" | "shadow" | "ghost";
export type Radius = "none" | "sm" | "md" | "lg" | "full";
export type Shadow = "none" | "sm" | "md" | "lg";
export type Size = "sm" | "md" | "lg";
export interface BaseComponentProps {
    className?: string;
    "data-testid"?: string;
}
export interface LoadingState {
    isLoading?: boolean;
    loadingText?: string;
}
export type SelectionMode = "single" | "multiple";
export interface CommonEventHandlers<T = unknown> {
    onClick?: (event: PressEvent) => void;
    onClickStart?: (event: PressEvent) => void;
    onClickEnd?: (event: PressEvent) => void;
    onChange?: (value: T) => void;
}
export interface AccessibilityProps {
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    "aria-expanded"?: boolean;
    "aria-disabled"?: boolean;
    "aria-required"?: boolean;
    "aria-invalid"?: boolean;
}
