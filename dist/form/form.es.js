var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import "../image/image.es.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useEffect } from "react";
import { RadioGroup as RadioGroup$1, Radio, CheckboxGroup as CheckboxGroup$1, Checkbox, InputOtp as InputOtp$1, Input as Input$1, Textarea as Textarea$1, Switch as Switch$1, Select as Select$1, SelectItem } from "@nextui-org/react";
import { Checkbox as Checkbox2 } from "@nextui-org/react";
import { cn } from "../utils/utils.es.js";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { u as useInfiniteScroll } from "../useInfiniteScroll-CvJJSKPz.js";
const RadioGroup = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      items,
      groupClasses,
      itemClasses,
      label = "Select an option",
      defaultValue
    } = _b, props = __objRest(_b, [
      "items",
      "groupClasses",
      "itemClasses",
      "label",
      "defaultValue"
    ]);
    const defaultGroupClasses = {
      base: "w-full",
      label: "text-medium font-semibold"
    };
    const defaultItemClasses = {
      base: "w-full",
      label: "text-small",
      wrapper: "",
      control: ""
    };
    return /* @__PURE__ */ jsx(
      RadioGroup$1,
      __spreadProps(__spreadValues({
        ref,
        label,
        defaultValue
      }, props), {
        classNames: {
          base: cn(defaultGroupClasses.base, groupClasses == null ? void 0 : groupClasses.base),
          label: cn(defaultGroupClasses.label, groupClasses == null ? void 0 : groupClasses.label)
        },
        children: items.map((item) => {
          var _a2, _b2, _c;
          return /* @__PURE__ */ jsx(
            Radio,
            __spreadProps(__spreadValues({}, item), {
              classNames: {
                base: cn(
                  defaultItemClasses.base,
                  itemClasses == null ? void 0 : itemClasses.base,
                  item.className
                ),
                label: cn(
                  defaultItemClasses.label,
                  itemClasses == null ? void 0 : itemClasses.label,
                  (_a2 = item.classNames) == null ? void 0 : _a2.label
                ),
                wrapper: cn(
                  defaultItemClasses.wrapper,
                  itemClasses == null ? void 0 : itemClasses.wrapper,
                  (_b2 = item.classNames) == null ? void 0 : _b2.wrapper
                ),
                control: cn(
                  defaultItemClasses.control,
                  itemClasses == null ? void 0 : itemClasses.control,
                  (_c = item.classNames) == null ? void 0 : _c.control
                )
              },
              children: item.label
            }),
            item.value
          );
        })
      })
    );
  }
);
RadioGroup.displayName = "RadioGroup";
const CheckboxGroup = forwardRef(
  (_c, ref) => {
    var _d = _c, {
      items,
      groupClasses,
      itemClasses,
      label = "Select options",
      defaultValue
    } = _d, props = __objRest(_d, [
      "items",
      "groupClasses",
      "itemClasses",
      "label",
      "defaultValue"
    ]);
    const defaultGroupClasses = {
      base: "w-full",
      label: "text-medium font-semibold"
    };
    const defaultItemClasses = {
      base: "w-full",
      label: "text-small",
      wrapper: ""
    };
    return /* @__PURE__ */ jsx(
      CheckboxGroup$1,
      __spreadProps(__spreadValues({
        ref,
        label,
        defaultValue
      }, props), {
        classNames: {
          base: cn(defaultGroupClasses.base, groupClasses == null ? void 0 : groupClasses.base),
          label: cn(defaultGroupClasses.label, groupClasses == null ? void 0 : groupClasses.label)
        },
        children: items.map((item) => {
          var _a, _b;
          return /* @__PURE__ */ jsx(
            Checkbox,
            __spreadProps(__spreadValues({}, item), {
              classNames: {
                base: cn(
                  defaultItemClasses.base,
                  itemClasses == null ? void 0 : itemClasses.base,
                  item.className
                ),
                label: cn(
                  defaultItemClasses.label,
                  itemClasses == null ? void 0 : itemClasses.label,
                  (_a = item.classNames) == null ? void 0 : _a.label
                ),
                wrapper: cn(
                  defaultItemClasses.wrapper,
                  itemClasses == null ? void 0 : itemClasses.wrapper,
                  (_b = item.classNames) == null ? void 0 : _b.wrapper
                )
              },
              children: item.label
            }),
            item.value
          );
        })
      })
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";
const InputOtp = forwardRef(
  (_e, ref) => {
    var _f = _e, {
      length = 6,
      label = `${length} digits OTP`,
      labelClasses,
      containerClasses
    } = _f, props = __objRest(_f, [
      "length",
      "label",
      "labelClasses",
      "containerClasses"
    ]);
    const defaultLabelClasses = "text-default-500 text-small mb-2";
    const defaultContainerClasses = "flex flex-col";
    return /* @__PURE__ */ jsxs("div", { ref, className: cn(defaultContainerClasses, containerClasses), children: [
      label && /* @__PURE__ */ jsx("p", { className: cn(defaultLabelClasses, labelClasses), children: label }),
      /* @__PURE__ */ jsx(InputOtp$1, __spreadValues({ length }, props))
    ] });
  }
);
InputOtp.displayName = "InputOtp";
const Input = forwardRef(
  (_g, ref) => {
    var _h = _g, {
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
      type
    } = _h, props = __objRest(_h, [
      "variant",
      "color",
      "size",
      "radius",
      "labelPlacement",
      "fullWidth",
      "isClearable",
      "isRequired",
      "isReadOnly",
      "isDisabled",
      "containerClasses",
      "customValidation",
      "validate",
      "type"
    ]);
    const [inputType, setInputType] = useState(type);
    const combinedValidate = (value) => {
      var _a2;
      if (customValidation) {
        const customResult = customValidation(value);
        if (typeof customResult === "string") {
          return customResult;
        }
        if (customResult) {
          return "Validation failed";
        }
      }
      return (_a2 = validate == null ? void 0 : validate(value)) != null ? _a2 : true;
    };
    const endContent = type === "password" ? /* @__PURE__ */ jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => setInputType(inputType === "password" ? "text" : "password"),
        children: inputType === "password" ? /* @__PURE__ */ jsx(IconEye, { className: "pointer-events-none" }) : /* @__PURE__ */ jsx(IconEyeOff, { className: "pointer-events-none" })
      }
    ) : void 0;
    const _a = props, { classNames: propClassNames } = _a, restProps = __objRest(_a, ["classNames"]);
    const getVariantStyles = () => {
      switch (variant) {
        case "bordered":
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "group-data-[focus=true]:bg-content1",
            "h-12"
          ].join(" ");
        case "flat":
          return [
            "border-none",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:bg-default-100",
            "h-12"
          ].join(" ");
        case "faded":
          return [
            "border-1",
            "border-transparent",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
        case "underlined":
          return [
            "relative",
            "border-b-1",
            "rounded-none",
            "bg-transparent",
            "border-default",
            "h-12",
            // Underline effect
            "after:bg-outline",
            // Hover
            "data-[hover=true]:after:scale-x-100",
            "data-[hover=true]:after:bg-outline",
            // Focus
            "group-data-[focus=true]:after:scale-x-100",
            "group-data-[focus=true]:after:bg-outline"
          ].join(" ");
        default:
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
      }
    };
    return /* @__PURE__ */ jsx("div", { className: cn("w-full", containerClasses), children: /* @__PURE__ */ jsx(
      Input$1,
      __spreadValues({
        ref,
        variant,
        color,
        size,
        radius,
        labelPlacement,
        fullWidth,
        isClearable,
        isRequired,
        isReadOnly,
        isDisabled,
        validate: combinedValidate,
        classNames: __spreadProps(__spreadValues({}, propClassNames), {
          inputWrapper: cn(getVariantStyles(), propClassNames == null ? void 0 : propClassNames.inputWrapper)
        }),
        endContent,
        type: inputType
      }, restProps)
    ) });
  }
);
Input.displayName = "Input";
const Textarea = forwardRef(
  (_i, ref) => {
    var _j = _i, {
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
      validate
    } = _j, props = __objRest(_j, [
      "variant",
      "color",
      "size",
      "radius",
      "labelPlacement",
      "fullWidth",
      "isRequired",
      "isReadOnly",
      "isDisabled",
      "containerClasses",
      "width",
      "height",
      "style",
      "customValidation",
      "validate"
    ]);
    const combinedStyle = __spreadValues({
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height
    }, style);
    const combinedValidate = (value) => {
      var _a2;
      if (customValidation) {
        const customResult = customValidation(value);
        if (typeof customResult === "string") {
          return customResult;
        }
        if (customResult === false) {
          return "Validation failed";
        }
      }
      return (_a2 = validate == null ? void 0 : validate(value)) != null ? _a2 : true;
    };
    const _a = props, { classNames: propClassNames } = _a, restProps = __objRest(_a, ["classNames"]);
    const getVariantStyles = () => {
      switch (variant) {
        case "bordered":
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "group-data-[focus=true]:bg-content1",
            "h-12"
          ].join(" ");
        case "flat":
          return [
            "border-none",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:bg-default-100",
            "h-12"
          ].join(" ");
        case "faded":
          return [
            "border-1",
            "border-transparent",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
        case "underlined":
          return [
            "relative",
            "border-b-1",
            "rounded-none",
            "bg-transparent",
            "border-default",
            // Underline effect
            "after:bg-outline",
            // Hover
            "data-[hover=true]:after:scale-x-100",
            "data-[hover=true]:after:bg-outline",
            // Focus
            "group-data-[focus=true]:after:scale-x-100",
            "group-data-[focus=true]:after:bg-outline"
          ].join(" ");
        default:
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
      }
    };
    return /* @__PURE__ */ jsx("div", { className: cn("w-full", containerClasses), children: /* @__PURE__ */ jsx(
      Textarea$1,
      __spreadValues({
        ref,
        variant,
        color,
        size,
        radius,
        labelPlacement,
        fullWidth,
        isRequired,
        isReadOnly,
        isDisabled,
        validate: combinedValidate,
        style: combinedStyle,
        classNames: __spreadProps(__spreadValues({}, propClassNames), {
          inputWrapper: cn(getVariantStyles(), propClassNames == null ? void 0 : propClassNames.inputWrapper),
          input: cn("text-base", propClassNames == null ? void 0 : propClassNames.input)
        })
      }, restProps)
    ) });
  }
);
Textarea.displayName = "Textarea";
const Switch = forwardRef(
  (_k, ref) => {
    var _l = _k, { width, height, style } = _l, props = __objRest(_l, ["width", "height", "style"]);
    const combinedStyle = __spreadValues({
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height
    }, style);
    return /* @__PURE__ */ jsx(Switch$1, __spreadValues({ ref, style: combinedStyle }, props));
  }
);
Switch.displayName = "Switch";
const Select = forwardRef(
  (_m, ref) => {
    var _n = _m, {
      options: options = [],
      value,
      defaultValue,
      classNames
    } = _n, props = __objRest(_n, [
      // Options
      "options",
      "value",
      "defaultValue",
      "classNames"
    ]);
    return /* @__PURE__ */ jsx(
      Select$1,
      __spreadProps(__spreadValues({
        ref,
        classNames: __spreadValues({
          base: "max-w-xs",
          trigger: "h-10",
          value: "text-small"
        }, classNames),
        selectedKeys: value,
        defaultSelectedKeys: defaultValue
      }, props), {
        children: options.map((option) => /* @__PURE__ */ jsx(
          SelectItem,
          {
            description: option.description,
            startContent: option.icon,
            className: "text-small",
            children: option.label
          },
          option.key
        ))
      })
    );
  }
);
Select.displayName = "Select";
function useInfiniteList({
  fetchFunction,
  fetchDelay = 0,
  limit = 10
}) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const loadItems = (currentOffset) => __async(this, null, function* () {
    try {
      setIsLoading(true);
      if (offset > 0) {
        yield new Promise((resolve) => setTimeout(resolve, fetchDelay));
      }
      const { items: newItems, hasMore: moreAvailable } = yield fetchFunction(
        currentOffset,
        limit
      );
      setHasMore(moreAvailable);
      setItems((prevItems) => [...prevItems, ...newItems]);
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  });
  useEffect(() => {
    void loadItems(offset);
  }, []);
  const onLoadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    void loadItems(newOffset);
  };
  return {
    items,
    hasMore,
    isLoading,
    onLoadMore
  };
}
function InfiniteSelect({
  fetchFunction,
  fetchDelay = 0,
  limit = 10,
  className = "max-w-xs",
  renderItem,
  getItemKey,
  selectionMode = "single"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { items, hasMore, isLoading, onLoadMore } = useInfiniteList({
    fetchFunction,
    fetchDelay,
    limit
  });
  const [, scrollerRef] = useInfiniteScroll({
    hasMore,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore
  });
  return /* @__PURE__ */ jsx(
    Select$1,
    {
      className,
      isLoading,
      items,
      scrollRef: scrollerRef,
      selectionMode,
      onOpenChange: setIsOpen,
      children: (item) => /* @__PURE__ */ jsx(SelectItem, { children: renderItem(item) }, getItemKey(item))
    }
  );
}
export {
  Checkbox2 as Checkbox,
  CheckboxGroup,
  InfiniteSelect,
  Input,
  InputOtp,
  RadioGroup,
  Select,
  Switch,
  Textarea
};
//# sourceMappingURL=form.es.js.map
