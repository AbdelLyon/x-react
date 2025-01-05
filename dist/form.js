import { forwardRef, useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import { RadioGroup as RadioGroup$1, Radio, CheckboxGroup as CheckboxGroup$1, Checkbox, InputOtp as InputOtp$1, Input as Input$1, Textarea as Textarea$1, Switch as Switch$1, Select as Select$1, SelectItem } from '@nextui-org/react';
export { Checkbox } from '@nextui-org/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import 'next-themes';

// src/form/Radio.tsx
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
function debounce(callback, delay = 0) {
  let timeoutId;
  let latestArgs;
  function debouncedFn(...args) {
    latestArgs = args;
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      if (latestArgs) {
        callback.apply(this, latestArgs);
      }
      timeoutId = void 0;
      latestArgs = void 0;
    }, delay);
  }
  debouncedFn.cancel = function cancel() {
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
      timeoutId = void 0;
      latestArgs = void 0;
    }
  };
  return debouncedFn;
}
var RadioGroup = forwardRef(
  ({
    items,
    groupClasses,
    itemClasses,
    label = "Select an option",
    defaultValue,
    ...props
  }, ref) => {
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
      {
        ref,
        label,
        defaultValue,
        ...props,
        classNames: {
          base: cn(defaultGroupClasses.base, groupClasses?.base),
          label: cn(defaultGroupClasses.label, groupClasses?.label)
        },
        children: items.map((item) => /* @__PURE__ */ jsx(
          Radio,
          {
            ...item,
            classNames: {
              base: cn(
                defaultItemClasses.base,
                itemClasses?.base,
                item.className
              ),
              label: cn(
                defaultItemClasses.label,
                itemClasses?.label,
                item.classNames?.label
              ),
              wrapper: cn(
                defaultItemClasses.wrapper,
                itemClasses?.wrapper,
                item.classNames?.wrapper
              ),
              control: cn(
                defaultItemClasses.control,
                itemClasses?.control,
                item.classNames?.control
              )
            },
            children: item.label
          },
          item.value
        ))
      }
    );
  }
);
RadioGroup.displayName = "RadioGroup";
var CheckboxGroup = forwardRef(
  ({
    items,
    groupClasses,
    itemClasses,
    label = "Select options",
    defaultValue,
    ...props
  }, ref) => {
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
      {
        ref,
        label,
        defaultValue,
        ...props,
        classNames: {
          base: cn(defaultGroupClasses.base, groupClasses?.base),
          label: cn(defaultGroupClasses.label, groupClasses?.label)
        },
        children: items.map((item) => /* @__PURE__ */ jsx(
          Checkbox,
          {
            ...item,
            classNames: {
              base: cn(
                defaultItemClasses.base,
                itemClasses?.base,
                item.className
              ),
              label: cn(
                defaultItemClasses.label,
                itemClasses?.label,
                item.classNames?.label
              ),
              wrapper: cn(
                defaultItemClasses.wrapper,
                itemClasses?.wrapper,
                item.classNames?.wrapper
              )
            },
            children: item.label
          },
          item.value
        ))
      }
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";
var InputOtp = forwardRef(
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
var Input = forwardRef(
  ({
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
  }, ref) => {
    const [inputType, setInputType] = useState(type);
    const combinedValidate = (value) => {
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
    const endContent = type === "password" ? /* @__PURE__ */ jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => setInputType(inputType === "password" ? "text" : "password"),
        children: inputType === "password" ? /* @__PURE__ */ jsx(IconEye, { className: "pointer-events-none" }) : /* @__PURE__ */ jsx(IconEyeOff, { className: "pointer-events-none" })
      }
    ) : void 0;
    const { classNames: propClassNames, ...restProps } = props;
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
      {
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
        classNames: {
          ...propClassNames,
          inputWrapper: cn(getVariantStyles(), propClassNames?.inputWrapper)
        },
        endContent,
        type: inputType,
        ...restProps
      }
    ) });
  }
);
Input.displayName = "Input";
var Textarea = forwardRef(
  ({
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
  }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style
    };
    const combinedValidate = (value) => {
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
      {
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
        classNames: {
          ...propClassNames,
          inputWrapper: cn(getVariantStyles(), propClassNames?.inputWrapper),
          input: cn("text-base", propClassNames?.input)
        },
        ...restProps
      }
    ) });
  }
);
Textarea.displayName = "Textarea";
var Switch = forwardRef(
  ({ width, height, style, ...props }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style
    };
    return /* @__PURE__ */ jsx(Switch$1, { ref, style: combinedStyle, ...props });
  }
);
Switch.displayName = "Switch";
var Select = forwardRef(
  ({
    // Options
    options = [],
    value,
    defaultValue,
    classNames,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Select$1,
      {
        ref,
        classNames: {
          base: "max-w-xs",
          trigger: "h-10",
          value: "text-small",
          ...classNames
        },
        selectedKeys: value,
        defaultSelectedKeys: defaultValue,
        ...props,
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
      }
    );
  }
);
Select.displayName = "Select";
var useInfiniteScroll = (props = {}) => {
  const {
    hasMore = true,
    distance = 250,
    isEnabled = true,
    shouldUseLoader = true,
    onLoadMore
  } = props;
  const scrollContainerRef = useRef(null);
  const loaderRef = useRef(null);
  const observerRef = useRef(null);
  const isLoadingRef = useRef(false);
  const loadMore = useCallback(() => {
    let timer;
    if (!isLoadingRef.current && hasMore && onLoadMore) {
      isLoadingRef.current = true;
      onLoadMore();
      timer = setTimeout(() => {
        isLoadingRef.current = false;
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [hasMore, onLoadMore]);
  useLayoutEffect(() => {
    const scrollContainerNode = scrollContainerRef.current;
    if (!isEnabled || !scrollContainerNode || !hasMore) {
      return;
    }
    if (shouldUseLoader) {
      const loaderNode = loaderRef.current;
      if (!loaderNode) {
        return;
      }
      const options = {
        root: scrollContainerNode,
        rootMargin: `0px 0px ${distance}px 0px`,
        threshold: 0.1
      };
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMore();
        }
      }, options);
      observer.observe(loaderNode);
      observerRef.current = observer;
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
    const debouncedCheckIfNearBottom = debounce(() => {
      if (scrollContainerNode.scrollHeight - scrollContainerNode.scrollTop <= scrollContainerNode.clientHeight + distance) {
        loadMore();
      }
    }, 100);
    scrollContainerNode.addEventListener("scroll", debouncedCheckIfNearBottom);
    return () => {
      scrollContainerNode.removeEventListener(
        "scroll",
        debouncedCheckIfNearBottom
      );
    };
  }, [hasMore, distance, isEnabled, shouldUseLoader, loadMore]);
  return [loaderRef, scrollContainerRef];
};
function useInfiniteList({
  fetchFunction,
  fetchDelay = 0,
  limit = 10
}) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const loadItems = async (currentOffset) => {
    try {
      setIsLoading(true);
      if (offset > 0) {
        await new Promise((resolve) => setTimeout(resolve, fetchDelay));
      }
      const { items: newItems, hasMore: moreAvailable } = await fetchFunction(
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
  };
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

export { CheckboxGroup, InfiniteSelect, Input, InputOtp, RadioGroup, Select, Switch, Textarea };
//# sourceMappingURL=form.js.map
//# sourceMappingURL=form.js.map