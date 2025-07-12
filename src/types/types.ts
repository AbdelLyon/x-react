// Core theme colors
export type BaseColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | undefined;

export type Color = "default" | BaseColor;

export type LinkColor = "foreground" | BaseColor;

// Common UI variants
export type Variant = "solid" | "bordered" | "flat" | "faded" | "light" | "shadow" | "ghost";

export type Radius = "none" | "sm" | "md" | "lg" | "full";

export type Shadow = "none" | "sm" | "md" | "lg";

export type Size = "sm" | "md" | "lg";

// Common component props interface
export interface BaseComponentProps {
  className?: string;
  "data-testid"?: string;
}

// Loading states
export interface LoadingState {
  isLoading?: boolean;
  loadingText?: string;
}

// Selection types for form components
export type SelectionMode = "single" | "multiple";

// Common event handlers
export interface CommonEventHandlers<T = unknown> {
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;
  onChange?: (value: T) => void;
}

// Accessibility props
export interface AccessibilityProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-expanded"?: boolean;
  "aria-disabled"?: boolean;
  "aria-required"?: boolean;
  "aria-invalid"?: boolean;
}
