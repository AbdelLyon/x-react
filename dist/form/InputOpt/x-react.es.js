import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { InputOtp as InputOtp$1 } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
const InputOtp = forwardRef(
  ({
    length = 6,
    label = `${length} digits OTP`,
    labelClasses,
    containerClasses,
    ...props
  }, ref) => {
    const defaultLabelClasses = "text-default-500 text-small mb-2";
    const defaultContainerClasses = "flex flex-col";
    return /* @__PURE__ */ jsxs("div", { ref, className: cn(defaultContainerClasses, containerClasses), children: [
      label && /* @__PURE__ */ jsx("p", { className: cn(defaultLabelClasses, labelClasses), children: label }),
      /* @__PURE__ */ jsx(InputOtp$1, { length, ...props })
    ] });
  }
);
InputOtp.displayName = "InputOtp";
export {
  InputOtp
};
//# sourceMappingURL=x-react.es.js.map
