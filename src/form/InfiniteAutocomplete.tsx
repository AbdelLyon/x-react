import { useInfiniteScroll } from "@/hooks";
import { useInfiniteList } from "@/hooks/useInfiniteList";
import type { AutocompleteProps } from "@heroui/react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import type { JSX } from "react";
import { useState } from "react";

interface InfiniteAutocompleteProps<T extends object>
  extends Omit<AutocompleteProps<T>, "items" | "children"> {
  fetchFunction: (
    offset: number,
    limit: number,
  ) => Promise<{
    items: T[];
    hasMore: boolean;
  }>;
  fetchDelay?: number;
  limit?: number;

  // Core functionality
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T, index?: number) => string | number;
}

export function InfiniteAutocomplete<T extends object>({
  fetchFunction,
  fetchDelay = 0,
  limit = 10,
  className = "max-w-xs",
  renderItem,
  getItemKey,
  ...autocompleteProps
}: InfiniteAutocompleteProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const { items, hasMore, isLoading, onLoadMore } = useInfiniteList<T>({
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

  return (
    <Autocomplete<T>
      className={className}
      isLoading={isLoading}
      defaultItems={items}
      scrollRef={scrollerRef}
      onOpenChange={(open): void => {
        setIsOpen(open);
        autocompleteProps.onOpenChange?.(open);
      }}
      {...autocompleteProps}
    >
      {(item: T): JSX.Element => (
        <AutocompleteItem key={getItemKey(item)}>
          {renderItem(item)}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
