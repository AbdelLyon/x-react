var __defProp = Object.defineProperty;
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
import { jsxs, jsx } from "react/jsx-runtime";
import { Chip, Popover, PopoverTrigger, Input, PopoverContent, Listbox, ListboxItem } from "@heroui/react";
import { IconX, IconSearch } from "@tabler/icons-react";
import { useState, useRef } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/index.es.js";
function InfiniteAutocomplete({
  items,
  isFetching,
  fetchNextPage,
  hasNextPage,
  isLoading,
  renderItem,
  getItemKey,
  getItemValue = (item) => String(renderItem(item)),
  selectedItems,
  onSelectionChange,
  onSearchChange,
  placeholder = "Rechercher et sélectionner...",
  className = "max-w-xs",
  inputProps
}) {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage
  });
  const handleSearchChange = (value) => {
    setSearchText(value);
    onSearchChange == null ? void 0 : onSearchChange(value);
    setIsOpen(true);
  };
  const handleItemSelect = (item) => {
    var _a;
    const itemKey = getItemKey(item);
    const isSelected = selectedItems.some(
      (selected) => getItemKey(selected) === itemKey
    );
    if (isSelected) {
      onSelectionChange(
        selectedItems.filter(
          (selected) => getItemKey(selected) !== itemKey
        )
      );
    } else {
      onSelectionChange([...selectedItems, item]);
    }
    setSearchText("");
    setIsOpen(false);
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  };
  const handleRemoveItem = (item) => {
    const itemKey = getItemKey(item);
    onSelectionChange(
      selectedItems.filter(
        (selected) => getItemKey(selected) !== itemKey
      )
    );
  };
  const isItemSelected = (item) => {
    const itemKey = getItemKey(item);
    return selectedItems.some(
      (selected) => getItemKey(selected) === itemKey
    );
  };
  return /* @__PURE__ */ jsxs("div", { className, children: [
    selectedItems.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-2 flex flex-wrap gap-1", children: selectedItems.map(
      (item) => /* @__PURE__ */ jsx(
        Chip,
        {
          onClose: () => handleRemoveItem(item),
          variant: "flat",
          size: "sm",
          endContent: /* @__PURE__ */ jsx(IconX, {}),
          children: getItemValue(item)
        },
        getItemKey(item)
      )
    ) }),
    /* @__PURE__ */ jsxs(
      Popover,
      {
        isOpen,
        onOpenChange: setIsOpen,
        placement: "bottom-start",
        shouldCloseOnBlur: true,
        children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(
            Input,
            __spreadValues({
              ref: inputRef,
              placeholder,
              value: searchText,
              onValueChange: handleSearchChange,
              isClearable: true,
              startContent: /* @__PURE__ */ jsx(IconSearch, { className: "text-default-400" }),
              variant: "bordered",
              onFocus: () => setIsOpen(true)
            }, inputProps)
          ) }),
          /* @__PURE__ */ jsx(PopoverContent, { className: "w-full p-0", children: /* @__PURE__ */ jsx(
            Listbox,
            {
              "aria-label": "Search results",
              className: "max-h-60 overflow-auto",
              emptyContent: isLoading || isFetching ? "Chargement..." : "Aucun résultat trouvé",
              items,
              ref: scrollerRef,
              children: (item) => /* @__PURE__ */ jsx(
                ListboxItem,
                {
                  onPress: () => handleItemSelect(item),
                  className: isItemSelected(item) ? "bg-primary-50 text-primary-600" : "",
                  endContent: isItemSelected(item) ? "✓" : void 0,
                  children: renderItem(item)
                },
                getItemKey(item)
              )
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  InfiniteAutocomplete
};
