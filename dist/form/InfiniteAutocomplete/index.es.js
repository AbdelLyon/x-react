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
import { jsx, jsxs } from "react/jsx-runtime";
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { Chip, Popover, PopoverTrigger, Badge, Button, PopoverContent, ScrollShadow, cn, Autocomplete, AutocompleteItem } from "@heroui/react";
import { IconXboxX, IconX, IconUsers } from "@tabler/icons-react";
import { useState, useMemo, useCallback } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/index.es.js";
function InfiniteAutocomplete(_a) {
  var _b = _a, {
    items,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isLoading,
    className = "max-w-xs",
    renderItem,
    getItemKey,
    getItemValue = (item) => String(renderItem(item)),
    onSearchChange,
    selectionMode = "single",
    selectedKey,
    selectedKeys = /* @__PURE__ */ new Set(),
    onSelectionChange,
    maxVisibleInBadge = 2,
    selectionIcon = /* @__PURE__ */ jsx(IconUsers, { size: 16 }),
    selectionLabel: selectionLabel = "sélectionné",
    itemClassName: itemClassName
  } = _b, autocompleteProps = __objRest(_b, [
    "items",
    "isFetching",
    "fetchNextPage",
    "hasNextPage",
    "isLoading",
    "className",
    "renderItem",
    "getItemKey",
    "getItemValue",
    "onSearchChange",
    "selectionMode",
    "selectedKey",
    "selectedKeys",
    "onSelectionChange",
    "maxVisibleInBadge",
    "selectionIcon",
    // Icône par défaut
    "selectionLabel",
    // Label par défaut
    "itemClassName"
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage
  });
  const isMultiSelect = selectionMode === "multiple";
  const selectedItems = useMemo(() => {
    if (!isMultiSelect) {
      return [];
    }
    return items.filter((item) => selectedKeys.has(getItemKey(item)));
  }, [items, selectedKeys, getItemKey, isMultiSelect]);
  const handleInputChange = useCallback(
    (value) => {
      setInputValue(value);
      onSearchChange == null ? void 0 : onSearchChange(value);
    },
    [onSearchChange]
  );
  const handleSelectionChange = useCallback(
    (key) => {
      if (!key) {
        if (!isMultiSelect) {
          onSelectionChange == null ? void 0 : onSelectionChange(null);
        }
        return;
      }
      if (!isMultiSelect) {
        onSelectionChange == null ? void 0 : onSelectionChange(key);
        setInputValue("");
        return;
      }
      const newSelectedKeys = new Set(selectedKeys);
      if (selectedKeys.has(key)) {
        newSelectedKeys.delete(key);
      } else {
        newSelectedKeys.add(key);
      }
      onSelectionChange == null ? void 0 : onSelectionChange(newSelectedKeys);
      setInputValue("");
    },
    [isMultiSelect, selectedKeys, onSelectionChange]
  );
  const handleRemoveChip = useCallback(
    (itemKey) => {
      const newSelectedKeys = new Set(selectedKeys);
      newSelectedKeys.delete(itemKey);
      onSelectionChange == null ? void 0 : onSelectionChange(newSelectedKeys);
    },
    [selectedKeys, onSelectionChange]
  );
  const handleClearAll = useCallback(() => {
    onSelectionChange == null ? void 0 : onSelectionChange(/* @__PURE__ */ new Set());
    setIsPopoverOpen(false);
  }, [onSelectionChange]);
  const isItemSelected = useCallback(
    (item) => {
      return isMultiSelect && selectedKeys.has(getItemKey(item));
    },
    [isMultiSelect, selectedKeys, getItemKey]
  );
  const selectionBadge = useMemo(() => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }
    if (selectedItems.length <= maxVisibleInBadge) {
      return /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 z-20 -translate-y-full pb-2", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 rounded-lg border border-divider bg-background/95 p-2 shadow-medium backdrop-blur-sm", children: selectedItems.map((item) => {
        const itemKey = getItemKey(item);
        return /* @__PURE__ */ jsx(
          Chip,
          {
            onClose: () => handleRemoveChip(itemKey),
            variant: "flat",
            size: "sm",
            endContent: /* @__PURE__ */ jsx(IconXboxX, { size: 12 }),
            className: "max-w-[120px]",
            children: /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: getItemValue(item) })
          },
          itemKey
        );
      }) }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 z-20 flex -translate-y-full justify-end pb-2", children: /* @__PURE__ */ jsxs(
      Popover,
      {
        isOpen: isPopoverOpen,
        onOpenChange: setIsPopoverOpen,
        placement: "top-start",
        showArrow: true,
        backdrop: "transparent",
        children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(
            Badge,
            {
              content: selectedItems.length,
              color: "primary",
              size: "sm",
              className: "cursor-pointer",
              children: /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "flat",
                  size: "sm",
                  startContent: selectionIcon,
                  className: "h-8 border border-border bg-background/95 px-3 text-xs shadow-medium backdrop-blur-sm",
                  onPress: () => setIsPopoverOpen(!isPopoverOpen),
                  children: [
                    selectedItems.length,
                    " ",
                    selectionLabel,
                    selectedItems.length > 1 ? "s" : ""
                  ]
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs(PopoverContent, { className: "w-80 p-0", children: [
            /* @__PURE__ */ jsx("div", { className: "border-b border-border px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-foreground", children: [
                "Éléments ",
                selectionLabel,
                "s (",
                selectedItems.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "light",
                    color: "danger",
                    onPress: handleClearAll,
                    className: "h-6 px-2 text-xs",
                    children: "Tout supprimer"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    isIconOnly: true,
                    size: "sm",
                    variant: "light",
                    onPress: () => setIsPopoverOpen(false),
                    className: "size-6",
                    children: /* @__PURE__ */ jsx(IconX, { size: 14 })
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollShadow, { className: "max-h-64", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 p-2", children: selectedItems.map((item) => {
              const itemKey = getItemKey(item);
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "group flex items-center justify-between rounded-md p-2 transition-colors hover:bg-default-100",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "flex min-w-0 flex-1 items-center", children: /* @__PURE__ */ jsx("div", { className: "truncate text-sm text-foreground", children: getItemValue(item) }) }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        isIconOnly: true,
                        size: "sm",
                        variant: "light",
                        color: "danger",
                        className: "size-6 opacity-0 transition-opacity group-hover:opacity-100",
                        onPress: () => handleRemoveChip(itemKey),
                        children: /* @__PURE__ */ jsx(IconXboxX, { size: 12 })
                      }
                    )
                  ]
                },
                itemKey
              );
            }) }) })
          ] })
        ]
      }
    ) });
  }, [
    isMultiSelect,
    selectedItems,
    maxVisibleInBadge,
    isPopoverOpen,
    getItemKey,
    getItemValue,
    handleRemoveChip,
    handleClearAll,
    selectionIcon,
    selectionLabel
  ]);
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
    selectionBadge,
    /* @__PURE__ */ jsx(
      Autocomplete,
      __spreadProps(__spreadValues({
        className: "w-full",
        inputProps: __spreadValues({
          classNames: {
            inputWrapper: autocompleteProps.variant === "bordered" && "border border-border"
          }
        }, autocompleteProps.inputProps),
        isLoading: isLoading || isFetching,
        items,
        scrollRef: scrollerRef,
        inputValue,
        onInputChange: handleInputChange,
        selectedKey: isMultiSelect ? null : selectedKey,
        onSelectionChange: handleSelectionChange,
        onOpenChange: (open) => {
          var _a2;
          setIsOpen(open);
          (_a2 = autocompleteProps.onOpenChange) == null ? void 0 : _a2.call(autocompleteProps, open);
        },
        shouldCloseOnBlur: !isMultiSelect,
        allowsCustomValue: isMultiSelect,
        menuTrigger: isMultiSelect ? "focus" : "focus"
      }, autocompleteProps), {
        children: (item) => /* @__PURE__ */ jsx(
          AutocompleteItem,
          {
            className: mergeTailwindClasses(
              "border border-border/40",
              isItemSelected(item) && "bg-default",
              itemClassName
            ),
            endContent: isItemSelected(item) ? /* @__PURE__ */ jsx("span", { className: "text-success", children: "✓" }) : void 0,
            children: renderItem(item)
          },
          getItemKey(item)
        )
      })
    )
  ] });
}
export {
  InfiniteAutocomplete
};
