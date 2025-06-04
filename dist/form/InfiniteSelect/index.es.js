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
import { SelectItem, Select } from "@heroui/react";
import { useState, useCallback, useMemo } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/index.es.js";
function InfiniteSelect(_a) {
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
    selectionMode = "single",
    onSelectionChange,
    onMultipleSelectionChange,
    emptyContent = "Aucun élément trouvé",
    errorContent,
    loadingContent,
    fetchingMoreContent
  } = _b, selectProps = __objRest(_b, [
    "items",
    "isFetching",
    "fetchNextPage",
    "hasNextPage",
    "isLoading",
    "error",
    "className",
    "renderItem",
    "getItemKey",
    "selectionMode",
    "onSelectionChange",
    "onMultipleSelectionChange",
    "emptyContent",
    "errorContent",
    "loadingContent",
    "fetchingMoreContent"
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollContainerRef } = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen && !error,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage
  });
  const handleSelectionChange = useCallback(
    (keys) => {
      if (keys === "all") {
        return;
      }
      if (selectionMode === "single") {
        const key = keys.size > 0 ? Array.from(keys)[0] : null;
        onSelectionChange == null ? void 0 : onSelectionChange(key);
      } else {
        onMultipleSelectionChange == null ? void 0 : onMultipleSelectionChange(keys);
      }
    },
    [selectionMode, onSelectionChange, onMultipleSelectionChange]
  );
  const handleOpenChange = useCallback(
    (open) => {
      var _a2;
      setIsOpen(open);
      (_a2 = selectProps.onOpenChange) == null ? void 0 : _a2.call(selectProps, open);
    },
    [selectProps]
  );
  const selectItems = useMemo(() => {
    return items.map(
      (item, index) => /* @__PURE__ */ jsx(SelectItem, { children: renderItem(item) }, getItemKey(item, index))
    );
  }, [items, getItemKey, renderItem]);
  if (error && !isLoading) {
    return /* @__PURE__ */ jsx(
      Select,
      __spreadProps(__spreadValues({
        className,
        isDisabled: true,
        placeholder: "Erreur de chargement",
        "aria-label": "Select en erreur"
      }, selectProps), {
        children: /* @__PURE__ */ jsx(SelectItem, { isReadOnly: true, children: errorContent !== void 0 ? errorContent : `Erreur: ${error.message}` }, "error")
      })
    );
  }
  if (isLoading && items.length === 0) {
    return /* @__PURE__ */ jsx(
      Select,
      __spreadProps(__spreadValues({
        className,
        isLoading: true,
        placeholder: "Chargement...",
        "aria-label": "Select en chargement"
      }, selectProps), {
        children: /* @__PURE__ */ jsx(SelectItem, { isReadOnly: true, children: loadingContent != null ? loadingContent : "Chargement des données..." }, "loading")
      })
    );
  }
  return /* @__PURE__ */ jsxs(
    Select,
    __spreadProps(__spreadValues({
      className,
      isLoading: isFetching && items.length === 0,
      items,
      scrollRef: scrollContainerRef,
      selectionMode,
      onOpenChange: handleOpenChange,
      onSelectionChange: handleSelectionChange,
      "aria-label": selectProps["aria-label"] || "Select avec scroll infini",
      "aria-describedby": isFetching ? "infinite-select-loading" : selectProps["aria-describedby"]
    }, selectProps), {
      children: [
        items.length === 0 && !isLoading ? /* @__PURE__ */ jsx(SelectItem, { isReadOnly: true, children: emptyContent }, "empty") : /* @__PURE__ */ jsx(Fragment, { children: selectItems }),
        isFetching && items.length > 0 ? /* @__PURE__ */ jsx(SelectItem, { isReadOnly: true, children: fetchingMoreContent != null ? fetchingMoreContent : "Chargement..." }, "fetching-more") : null
      ]
    })
  );
}
export {
  InfiniteSelect
};
