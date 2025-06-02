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
import { Chip, Badge, Popover, PopoverTrigger, Button, PopoverContent, ScrollShadow, cn, Autocomplete, AutocompleteItem } from "@heroui/react";
import { IconXboxX, IconUsers } from "@tabler/icons-react";
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
      return /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 z-20 -translate-y-full pb-3", children: /* @__PURE__ */ jsx("div", { className: "grid auto-cols-max grid-flow-col gap-2 rounded-xl border border-divider/50 bg-gradient-to-r from-background/95 to-background/90 p-3 shadow-lg backdrop-blur-md", children: selectedItems.map((item) => {
        const itemKey = getItemKey(item);
        return /* @__PURE__ */ jsx(
          Chip,
          {
            onClose: () => handleRemoveChip(itemKey),
            variant: "flat",
            size: "sm",
            endContent: /* @__PURE__ */ jsx(IconXboxX, { size: 12 }),
            className: "max-w-[140px] font-medium",
            children: /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: getItemValue(item) })
          },
          itemKey
        );
      }) }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 z-20 -translate-y-full pb-3", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-divider/50 bg-gradient-to-r from-background/95 to-background/90 p-4 shadow-lg backdrop-blur-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
          Badge,
          {
            content: selectedItems.length,
            color: "primary",
            size: "sm",
            className: "font-semibold",
            children: /* @__PURE__ */ jsx("div", { className: "flex size-9 items-center justify-center rounded-lg bg-primary-50", children: selectionIcon })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxs("p", { className: "truncate text-sm font-semibold text-foreground", children: [
            selectedItems.length,
            " ",
            selectionLabel,
            selectedItems.length > 1 ? "s" : ""
          ] }),
          /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-foreground-500", children: "Cliquez pour gérer" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxs(
        Popover,
        {
          isOpen: isPopoverOpen,
          onOpenChange: setIsPopoverOpen,
          placement: "top-end",
          showArrow: true,
          backdrop: "transparent",
          children: [
            /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "flat",
                size: "sm",
                className: "h-9 bg-primary-50 px-4 text-xs font-medium text-primary-600 transition-all duration-200 hover:bg-primary-100",
                onPress: () => setIsPopoverOpen(!isPopoverOpen),
                children: "Gérer"
              }
            ) }),
            /* @__PURE__ */ jsx(PopoverContent, { className: "w-96 border-0 p-0 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-xl bg-gradient-to-br from-background to-background/95", children: [
              /* @__PURE__ */ jsx("div", { className: "border-b border-divider/30 bg-gradient-to-r from-primary-50 to-primary-100/50", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4", children: [
                /* @__PURE__ */ jsx(
                  Badge,
                  {
                    content: selectedItems.length,
                    color: "primary",
                    size: "sm",
                    className: "font-semibold",
                    children: /* @__PURE__ */ jsx("div", { className: "flex size-8 items-center justify-center rounded-lg bg-primary-100", children: selectionIcon })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "truncate text-sm font-semibold text-foreground", children: [
                    "Éléments ",
                    selectionLabel,
                    "s"
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "truncate text-xs text-foreground-500", children: [
                    selectedItems.length,
                    " élément",
                    selectedItems.length > 1 ? "s" : "",
                    " sélectionné",
                    selectedItems.length > 1 ? "s" : ""
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "flat",
                    color: "danger",
                    onPress: handleClearAll,
                    className: "h-8 px-3 text-xs font-medium",
                    children: "Tout supprimer"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx(ScrollShadow, { className: "max-h-80", children: /* @__PURE__ */ jsx("div", { className: "grid gap-1 p-4", children: selectedItems.map((item) => {
                const itemKey = getItemKey(item);
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "group grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-transparent p-3 transition-all duration-200 hover:border-divider/50 hover:bg-default-50",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-medium text-foreground", children: getItemValue(item) }) }),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          isIconOnly: true,
                          size: "sm",
                          variant: "light",
                          color: "danger",
                          className: "size-7 opacity-0 transition-all duration-200 group-hover:opacity-100",
                          onPress: () => handleRemoveChip(itemKey),
                          children: /* @__PURE__ */ jsx(IconXboxX, { size: 14 })
                        }
                      )
                    ]
                  },
                  itemKey
                );
              }) }) })
            ] }) })
          ]
        }
      ) })
    ] }) });
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
