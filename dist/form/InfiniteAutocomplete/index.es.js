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
import { jsxs, jsx } from "react/jsx-runtime";
import { Chip, Autocomplete, AutocompleteItem, cn } from "@heroui/react";
import { IconXboxX } from "@tabler/icons-react";
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
    onSelectionChange
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
    "onSelectionChange"
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
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
        onSelectionChange == null ? void 0 : onSelectionChange(null);
        return;
      }
      if (!isMultiSelect) {
        onSelectionChange == null ? void 0 : onSelectionChange(key);
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
  const isItemSelected = useCallback(
    (item) => {
      return isMultiSelect && selectedKeys.has(getItemKey(item));
    },
    [isMultiSelect, selectedKeys, getItemKey]
  );
  return /* @__PURE__ */ jsxs("div", { className, children: [
    isMultiSelect && selectedItems.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-2 flex flex-wrap gap-1", children: selectedItems.map((item) => {
      const itemKey = getItemKey(item);
      return /* @__PURE__ */ jsx(
        Chip,
        {
          onClose: () => handleRemoveChip(itemKey),
          variant: "flat",
          size: "sm",
          endContent: /* @__PURE__ */ jsx(IconXboxX, {}),
          className: "max-w-xs",
          children: /* @__PURE__ */ jsx("span", { className: "truncate", children: getItemValue(item) })
        },
        itemKey
      );
    }) }),
    /* @__PURE__ */ jsx(
      Autocomplete,
      __spreadProps(__spreadValues(__spreadValues({
        className: "w-full",
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
        }
      }, isMultiSelect && {
        allowsCustomValue: true,
        shouldCloseOnBlur: false
        // Garder ouvert en multiselect
      }), autocompleteProps), {
        children: (item) => /* @__PURE__ */ jsx(
          AutocompleteItem,
          {
            className: cn(
              isItemSelected(item) && "bg-primary-50 text-primary-600"
            ),
            endContent: isItemSelected(item) ? "✓" : void 0,
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
