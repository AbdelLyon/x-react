import { forwardRef } from "react";
import type { TextAreaProps as TextAreaRootProps } from "@nextui-org/react";
import { Textarea as TextareaRoot } from "@nextui-org/react";
import { cn } from "@/utils";

type ValidationError = string | string[];

type TextareaProps = TextAreaRootProps & {
  containerClasses?: string;
  width?: string | number;
  height?: string | number;
  customValidation?: (value: string) => boolean | string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "bordered",
      color = "default",
      size = "md",
      radius = "md",
      labelPlacement = "inside",
      fullWidth = true,
      isRequired = false,
      isReadOnly = false,
      isDisabled = false,
      containerClasses,
      width,
      height,
      style,
      customValidation,
      validate,
      ...props
    },
    ref,
  ) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style,
    };

    const combinedValidate = (
      value: string,
    ): ValidationError | true | null | undefined => {
      if (customValidation) {
        const customResult = customValidation(value);
        if (typeof customResult === "string") {
          return customResult;
        }
        if (customResult === false) {
          return "Validation failed";
        }
      }
      return validate?.(value) ?? true;
    };

    const { classNames: propClassNames, ...restProps } = props;

    return (
      <div className={cn("w-full", containerClasses)}>
        <TextareaRoot
          ref={ref}
          variant={variant}
          color={color}
          size={size}
          radius={radius}
          labelPlacement={labelPlacement}
          fullWidth={fullWidth}
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          validate={combinedValidate}
          style={combinedStyle}
          classNames={{
            ...propClassNames,
            inputWrapper: cn(
              "border-1 bg-white dark:bg-background",
              {
                "data-[hover=true]:border-outline group-data-[focus=true]:border-outline group-data-[focus=true]:bg-content1":
                  variant === "bordered",
              },
              propClassNames?.inputWrapper,
            ),
            input: cn("text-base", propClassNames?.input),
          }}
          {...restProps}
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
