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
import { Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import { Input } from "../Input/index.es.js";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/index.es.js";
function InfiniteSelect(_a) {
  var _b = _a, {
    items,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isLoading,
    className = "max-w-xs",
    renderItem,
    getItemKey,
    selectionMode = "single",
    onSearchChange,
    searchPlaceholder = "Rechercher...",
    isSearchable = false,
    searchClassName
  } = _b, selectProps = __objRest(_b, [
    "items",
    "isFetching",
    "fetchNextPage",
    "hasNextPage",
    "isLoading",
    "className",
    "renderItem",
    "getItemKey",
    "selectionMode",
    "onSearchChange",
    "searchPlaceholder",
    "isSearchable",
    "searchClassName"
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage
  });
  const handleSearchChange = (value) => {
    setSearchText(value);
    onSearchChange == null ? void 0 : onSearchChange(value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
    isSearchable && /* @__PURE__ */ jsx(
      Input,
      {
        className: searchClassName,
        placeholder: searchPlaceholder,
        value: searchText,
        onValueChange: handleSearchChange,
        isClearable: true,
        variant: "bordered",
        size: "sm"
      }
    ),
    /* @__PURE__ */ jsx(
      Select,
      __spreadProps(__spreadValues({
        className,
        isLoading: isLoading || isFetching,
        items,
        scrollRef: scrollerRef,
        selectionMode,
        onOpenChange: (open) => {
          var _a2;
          setIsOpen(open);
          (_a2 = selectProps.onOpenChange) == null ? void 0 : _a2.call(selectProps, open);
        }
      }, selectProps), {
        children: (item) => /* @__PURE__ */ jsx(SelectItem, { children: renderItem(item) }, getItemKey(item))
      })
    )
  ] });
}
export {
  InfiniteSelect
};
