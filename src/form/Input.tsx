import { forwardRef } from "react";
import {
  Input as InputRoot,
  InputProps as InputRootProps,
} from "@nextui-org/react";
import { cn } from "@/utils";

interface InputWrapperProps extends Omit<InputRootProps, "children"> {
  containerClasses?: string;
  customValidation?: (value: string) => boolean | string;
}

export const Input = forwardRef<HTMLInputElement, InputWrapperProps>(
  (
    {
      variant = "flat",
      color = "default",
      size = "md",
      radius = "md",
      labelPlacement = "inside",
      fullWidth = true,
      isClearable = false,
      isRequired = false,
      isReadOnly = false,
      isDisabled = false,

      // Custom props
      containerClasses,
      customValidation,

      // Passthrough props
      validate,
      ...props
    },
    ref,
  ) => {
    const combinedValidate = (value: string) => {
      if (customValidation) {
        const customResult = customValidation(value);
        if (typeof customResult === "string") {
          return customResult;
        }
        if (customResult === false) {
          return "Validation failed";
        }
      }

      if (validate) {
        return validate(value);
      }

      return true;
    };

    const defaultContainerClasses = "w-full";

    const borderedClassNames = {
      inputWrapper:
        "border-1 data-[hover=true]:border-outline data-[focus=true]:border-outline",
    };

    return (
      <div className={cn(defaultContainerClasses, containerClasses)}>
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
          classNames={borderedClassNames}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
