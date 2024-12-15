import { forwardRef, useState } from "react";
import {
  Input as InputRoot,
  InputProps as InputRootProps,
} from "@nextui-org/react";
import { cn } from "@/utils";
import { IconEye, IconEyeOff, IconMail } from "@tabler/icons-react";

interface InputWrapperProps extends Omit<InputRootProps, "children"> {
  containerClasses?: string;
  customValidation?: (value: string) => boolean | string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

export const Input = forwardRef<HTMLInputElement, InputWrapperProps>(
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

      // Custom props
      containerClasses,
      customValidation,

      // Passthrough props
      validate,
      type,
      ...props
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState(type || "text");

    const inputWrapper = cn({
      inputWrapper: cn(
        "border-1 bg-white dark:bg-background",
        {
          "data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-11 group-data-[focus=true]:bg-content1":
            variant === "bordered",
        },
        props.classNames?.inputWrapper,
      ),
    });

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

    const endContent = () => {
      if (type === "password") {
        return (
          <button
            className="focus:outline-none opacity-60"
            type="button"
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
          >
            {inputType === "password" ? (
              <IconEye className="pointer-events-none" size={20} />
            ) : (
              <IconEyeOff className="pointer-events-none" size={20} />
            )}
          </button>
        );
      }
      if (type === "email") {
        return (
          <IconMail className="pointer-events-none opacity-60" size={20} />
        );
      }
    };
    const defaultContainerClasses = "w-full";

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
          classNames={{
            ...props.classNames,
            inputWrapper,
          }}
          endContent={endContent()}
          type={inputType}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
