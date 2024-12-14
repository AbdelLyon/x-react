import { forwardRef, useState } from "react";
import {
  Input as InputRoot,
  InputProps as InputRootProps,
} from "@nextui-org/react";
import { cn } from "@/utils";
import { IconEye, IconEyeOff, IconMail } from "@tabler/icons-react";

interface InputWrapperProps extends Omit<InputRootProps, "type"> {
  containerClasses?: string;
  customValidation?: (value: string) => boolean | string;
}

export const Input = forwardRef(
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
    }: InputWrapperProps & { type?: string },
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const [inputType, setInputType] = useState(type || "text");

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
            type="button"
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
            className="focus:outline-none"
          >
            {inputType === "password" ? <IconEyeOff /> : <IconEye />}
          </button>
        );
      }

      if (type === "email") {
        return <IconMail />;
      }
    };

    const defaultContainerClasses = "w-full";

    const borderedClassNames = {
      inputWrapper: cn({
        "border-1 data-[hover=true]:border-outline group-data-[focus=true]:border-outline bg-default-100 dark:bg-background group-data-[focus=true]:bg-content1":
          variant === "bordered",
      }),
    };

    return (
      <InputRoot
        ref={ref}
        type={inputType}
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
        endContent={endContent()}
        validate={combinedValidate}
        className={cn(defaultContainerClasses, containerClasses)}
        classNames={borderedClassNames}
        {...props}
      />
    );
  },
);
