import { forwardRef, useState } from "react";
import type { InputProps as InputRootProps } from "@nextui-org/react";
import { Input as InputRoot } from "@nextui-org/react";
import { cn } from "@/utils";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

type ValidationError = string | string[];

type InputProps = InputRootProps & {
  containerClasses?: string;
  customValidation?: (value: string) => boolean | string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "bordered",
      color = "default",
      size = "md",
      radius = "md",
      labelPlacement = "inside",
      fullWidth = true,
      isClearable = false,
      isRequired = false,
      isReadOnly = false,
      isDisabled = false,
      containerClasses,
      customValidation,
      validate,
      type,
      ...props
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState(type);

    const combinedValidate = (
      value: string,
    ): ValidationError | true | null | undefined => {
      if (customValidation) {
        const customResult = customValidation(value);
        if (typeof customResult === "string") {
          return customResult;
        }
        if (customResult) {
          return "Validation failed";
        }
      }
      return validate?.(value) ?? true;
    };

    const endContent =
      type === "password" ? (
        <button
          className="opacity-40 focus:outline-none"
          type="button"
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        >
          {inputType === "password" ? (
            <IconEye className="pointer-events-none" />
          ) : (
            <IconEyeOff className="pointer-events-none" />
          )}
        </button>
      ) : undefined;

    const { classNames: propClassNames, ...restProps } = props;

    return (
      <div className={cn("w-full", containerClasses)}>
        <InputRoot
          ref={ref}
          variant={variant}
          color={color}
          size={size}
          radius={radius}
          labelPlacement={labelPlacement}
          fullWidth={fullWidth}
          isClearable={isClearable}
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          validate={combinedValidate}
          classNames={{
            ...propClassNames,
            inputWrapper: cn(
              "border-1 bg-white dark:bg-background",
              {
                "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1":
                  variant === "bordered",
              },
              propClassNames?.inputWrapper,
            ),
          }}
          endContent={endContent}
          type={inputType}
          {...restProps}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
