import { useInfiniteScroll } from "@/hooks";
import { useInfiniteList } from "@/hooks/useInfiniteList";
import type { SelectProps } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import type { JSX } from "react";
import { useState } from "react";

interface InfiniteSelectProps<T>
  extends Omit<SelectProps, "items" | "children"> {
  // Fetch function requirements
  fetchFunction: (
    offset: number,
    limit: number,
    searchText?: string,
  ) => Promise<{
    items: T[];
    hasMore: boolean;
  }>;
  fetchDelay?: number;
  limit?: number;

  // Core functionality
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T, index?: number) => string | number;

  // Search functionality
  onSearchChange?: (searchText: string) => void;
  searchPlaceholder?: string;
  isSearchable?: boolean;
}

export function InfiniteSelect<T extends object>({
  fetchFunction,
  fetchDelay = 0,
  limit = 10,
  className = "max-w-xs",
  renderItem,
  getItemKey,
  selectionMode = "single",
  onSearchChange,
  searchPlaceholder = "Rechercher...",
  isSearchable = false,
  ...selectProps
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const { items, hasMore, isLoading, onLoadMore, setSearchText, searchText } =
    useInfiniteList({
      fetchFunction,
      fetchDelay,
      limit,
    });

  const [, scrollerRef] = useInfiniteScroll({
    hasMore,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore,
  });

  const handleSearchChange = (value: string): void => {
    setSearchText(value);
    onSearchChange?.(value);
  };

  return (
    <Select
      className={className}
      isLoading={isLoading}
      items={items}
      scrollRef={scrollerRef}
      selectionMode={selectionMode}
      // Props pour la recherche
      {...(isSearchable && {
        allowsCustomValue: true,
        onInputChange: handleSearchChange,
        inputValue: searchText,
        placeholder: searchPlaceholder,
      })}
      onOpenChange={(open): void => {
        setIsOpen(open);
        selectProps.onOpenChange?.(open);
      }}
      {...selectProps}
    >
      {(item: T): JSX.Element => (
        <SelectItem key={getItemKey(item)}>{renderItem(item)}</SelectItem>
      )}
    </Select>
  );
}
