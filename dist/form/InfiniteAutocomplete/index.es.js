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
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { AutocompleteItem, Chip, Popover, PopoverTrigger, Badge, Button, PopoverContent, ScrollShadow, cn, Autocomplete } from "@heroui/react";
import { IconXboxX, IconTrash } from "@tabler/icons-react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue/index.es.js";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/index.es.js";
import { Tooltip } from "../../tooltip/Tooltip/index.es.js";
function InfiniteAutocomplete(_a) {
  var _b = _a, {
    items,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
    className = "max-w-xs",
    renderItem,
    getItemKey,
    getItemValue = (item) => String(renderItem(item)),
    onSearchChange,
    searchDebounceMs = 300,
    selectionMode = "single",
    selectedKey,
    selectedKeys = /* @__PURE__ */ new Set(),
    onSelectionChange,
    maxVisibleInBadge = 2,
    selectionIcon = null,
    selectionLabel = "sélectionné",
    itemClassName,
    emptyContent = "Aucun élément trouvé",
    errorContent,
    loadingContent,
    fetchingMoreContent
  } = _b, autocompleteProps = __objRest(_b, [
    "items",
    "isFetching",
    "fetchNextPage",
    "hasNextPage",
    "isLoading",
    "error",
    "className",
    "renderItem",
    "getItemKey",
    "getItemValue",
    "onSearchChange",
    "searchDebounceMs",
    "selectionMode",
    "selectedKey",
    "selectedKeys",
    "onSelectionChange",
    "maxVisibleInBadge",
    "selectionIcon",
    "selectionLabel",
    "itemClassName",
    "emptyContent",
    "errorContent",
    "loadingContent",
    "fetchingMoreContent"
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [savedSelectedItems, setSavedSelectedItems] = useState(/* @__PURE__ */ new Map());
  const { debouncedValue: debouncedSearchTerm, cancel: cancelDebounce } = useDebouncedValue(inputValue, searchDebounceMs);
  const { scrollContainerRef } = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen && !error,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage
  });
  const isMultiSelect = selectionMode === "multiple";
  useEffect(() => {
    if (onSearchChange && inputValue !== "") {
      onSearchChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearchChange, inputValue]);
  useEffect(() => {
    if (!isMultiSelect) {
      return;
    }
    setSavedSelectedItems((prev) => {
      const newSavedItems = new Map(prev);
      items.forEach((item) => {
        const key = getItemKey(item);
        if (selectedKeys.has(key) && !newSavedItems.has(key)) {
          newSavedItems.set(key, item);
        }
      });
      for (const [key] of newSavedItems) {
        if (!selectedKeys.has(key)) {
          newSavedItems.delete(key);
        }
      }
      return newSavedItems;
    });
  }, [items, selectedKeys, getItemKey, isMultiSelect]);
  const selectedItems = useMemo(() => {
    if (!isMultiSelect) {
      return [];
    }
    return Array.from(savedSelectedItems.values());
  }, [savedSelectedItems, isMultiSelect]);
  const handleInputChange = useCallback(
    (value) => {
      setInputValue(value);
      if (value === "" && onSearchChange) {
        cancelDebounce();
        onSearchChange("");
      }
    },
    [onSearchChange, cancelDebounce]
  );
  const handleSelectionChange = useCallback(
    (key) => {
      if (key === null || key === void 0) {
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
  const handleOpenChange = useCallback(
    (open) => {
      var _a2;
      setIsOpen(open);
      (_a2 = autocompleteProps.onOpenChange) == null ? void 0 : _a2.call(autocompleteProps, open);
      if (!open && inputValue) {
        setInputValue("");
        cancelDebounce();
        onSearchChange == null ? void 0 : onSearchChange("");
      }
    },
    [autocompleteProps, inputValue, onSearchChange, cancelDebounce]
  );
  const isItemSelected = useCallback(
    (item) => {
      return isMultiSelect && selectedKeys.has(getItemKey(item));
    },
    [isMultiSelect, selectedKeys, getItemKey]
  );
  const autocompleteItems = useMemo(() => {
    return items.map(
      (item) => /* @__PURE__ */ jsx(
        AutocompleteItem,
        {
          className: mergeTailwindClasses(
            "border border-border/10",
            isItemSelected(item) && "bg-default",
            itemClassName
          ),
          endContent: isItemSelected(item) ? /* @__PURE__ */ jsx("span", { className: "text-success", children: "✓" }) : void 0,
          children: renderItem(item)
        },
        getItemKey(item)
      )
    );
  }, [items, getItemKey, isItemSelected, itemClassName, renderItem]);
  const selectionBadge = useCallback(() => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }
    if (selectedItems.length <= maxVisibleInBadge) {
      return /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 z-20 -translate-y-full pb-3", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 rounded-md border border-primary/20 bg-content1-100/40 p-3 shadow-lg ring-1 ring-primary/10 backdrop-blur-md dark:bg-background", children: selectedItems.map((item) => {
        const itemKey = getItemKey(item);
        return /* @__PURE__ */ jsx(
          Chip,
          {
            onClose: () => handleRemoveChip(itemKey),
            variant: "flat",
            size: "sm",
            endContent: /* @__PURE__ */ jsx(
              IconXboxX,
              {
                size: 12,
                className: "text-default-400 transition-colors duration-200 hover:text-danger"
              }
            ),
            className: "max-w-[140px] border border-primary/20 bg-primary/10 text-primary shadow-sm transition-all duration-200 hover:bg-primary/20",
            children: /* @__PURE__ */ jsx("span", { className: "truncate text-xs font-medium", children: getItemValue(item) })
          },
          itemKey
        );
      }) }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 z-20 flex -translate-y-full justify-end pb-3", children: /* @__PURE__ */ jsxs(
      Popover,
      {
        isOpen: isPopoverOpen,
        onOpenChange: setIsPopoverOpen,
        placement: "top-start",
        showArrow: true,
        backdrop: "transparent",
        classNames: {
          content: "border-0 bg-transparent shadow-none p-0"
        },
        children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(
            Badge,
            {
              content: selectedItems.length,
              color: "primary",
              size: "lg",
              className: "cursor-pointer",
              classNames: {
                badge: "bg-primary text-white font-semibold"
              },
              children: /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "flat",
                  size: "sm",
                  startContent: selectionIcon,
                  className: "h-9 border border-primary/20 bg-content1-100/40 px-4 text-xs font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/5 hover:to-secondary/20 hover:shadow-sm",
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
          /* @__PURE__ */ jsxs(PopoverContent, { className: "border border-border bg-gradient-to-b from-content1 to-content1-100/10 p-2 backdrop-blur-xl transition-all data-[hover=true]:bg-content1-100/30 dark:bg-background dark:from-background-200/20 dark:to-background dark:data-[hover=true]:bg-content1-200/20", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex w-full items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-sm font-bold", children: [
                "Éléments ",
                selectionLabel,
                "s (",
                selectedItems.length,
                ")"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(
                Tooltip,
                {
                  trigger: /* @__PURE__ */ jsx(
                    Button,
                    {
                      isIconOnly: true,
                      size: "sm",
                      variant: "flat",
                      color: "danger",
                      onPress: handleClearAll,
                      className: "size-8 bg-danger/10 transition-all duration-200 hover:scale-110 hover:bg-danger/20",
                      children: /* @__PURE__ */ jsx(IconTrash, { size: 16 })
                    }
                  ),
                  content: "Tout supprimer",
                  placement: "top"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(ScrollShadow, { className: "max-h-80 w-80 overflow-x-hidden", children: /* @__PURE__ */ jsx("div", { className: "grid w-full grid-cols-2 gap-3 pr-2", children: selectedItems.map((item) => {
              const itemKey = getItemKey(item);
              const itemValue = getItemValue(item);
              return /* @__PURE__ */ jsx(
                Tooltip,
                {
                  content: itemValue,
                  placement: "top",
                  showArrow: true,
                  delay: 300,
                  closeDelay: 0,
                  classNames: {
                    content: "max-w-xs text-xs bg-content1-100/40 border border-primary/5 shadow-xl backdrop-blur-md"
                  },
                  trigger: /* @__PURE__ */ jsxs("div", { className: "group relative flex min-w-0 flex-col items-center rounded-sm border border-primary/20 bg-content1-100/40 p-3 transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/10 hover:shadow-sm", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-full min-w-0 text-center", children: /* @__PURE__ */ jsx("div", { className: "truncate text-xs font-medium text-foreground transition-colors duration-200 group-hover:text-primary", children: itemValue }) }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        isIconOnly: true,
                        size: "sm",
                        variant: "flat",
                        color: "danger",
                        onPress: () => handleRemoveChip(itemKey),
                        className: "absolute -right-1 -top-1 size-6 bg-danger/20 opacity-70 transition-all duration-200 hover:scale-110 hover:bg-danger/30 group-hover:opacity-100",
                        children: /* @__PURE__ */ jsx(IconXboxX, { size: 12 })
                      }
                    )
                  ] })
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
    getItemKey,
    getItemValue,
    handleRemoveChip,
    isPopoverOpen,
    selectionIcon,
    selectionLabel,
    handleClearAll
  ]);
  if (error && !isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
      selectionBadge(),
      /* @__PURE__ */ jsx(
        Autocomplete,
        __spreadProps(__spreadValues({
          className: "w-full",
          isDisabled: true,
          placeholder: "Erreur de chargement",
          "aria-label": "Autocomplete en erreur"
        }, autocompleteProps), {
          children: /* @__PURE__ */ jsx(AutocompleteItem, { isReadOnly: true, children: errorContent != null ? errorContent : `Erreur: ${error.message}` }, "error")
        })
      )
    ] });
  }
  if (isLoading && items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
      selectionBadge(),
      /* @__PURE__ */ jsx(
        Autocomplete,
        __spreadProps(__spreadValues({
          className: "w-full",
          isLoading: true,
          placeholder: "Chargement...",
          "aria-label": "Autocomplete en chargement"
        }, autocompleteProps), {
          children: /* @__PURE__ */ jsx(AutocompleteItem, { isReadOnly: true, children: loadingContent != null ? loadingContent : "Chargement des données..." }, "loading")
        })
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
    selectionBadge(),
    /* @__PURE__ */ jsxs(
      Autocomplete,
      __spreadProps(__spreadValues({
        className: "w-full",
        inputProps: __spreadValues({
          classNames: {
            inputWrapper: autocompleteProps.variant === "bordered" && "border border-border"
          }
        }, autocompleteProps.inputProps),
        isLoading: isFetching && items.length === 0,
        items,
        scrollRef: scrollContainerRef,
        inputValue,
        onInputChange: handleInputChange,
        selectedKey: isMultiSelect ? null : selectedKey,
        onSelectionChange: handleSelectionChange,
        onOpenChange: handleOpenChange,
        shouldCloseOnBlur: !isMultiSelect,
        allowsCustomValue: isMultiSelect,
        menuTrigger: isMultiSelect ? "focus" : "focus",
        "aria-label": autocompleteProps["aria-label"] || "Autocomplete avec scroll infini",
        "aria-describedby": isFetching ? "infinite-autocomplete-loading" : autocompleteProps["aria-describedby"]
      }, autocompleteProps), {
        children: [
          items.length === 0 && !isLoading ? /* @__PURE__ */ jsx(AutocompleteItem, { isReadOnly: true, children: emptyContent }, "empty") : /* @__PURE__ */ jsx(Fragment, { children: autocompleteItems }),
          isFetching && items.length > 0 ? /* @__PURE__ */ jsx(AutocompleteItem, { isReadOnly: true, children: fetchingMoreContent != null ? fetchingMoreContent : "Chargement..." }, "fetching-more") : null
        ]
      })
    )
  ] });
}
export {
  InfiniteAutocomplete
};
