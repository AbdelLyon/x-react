import { useInfiniteScroll } from "@/hooks";
import type { SelectProps } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import type { JSX } from "react";
import { useState } from "react";
import { Input } from "./Input";

interface InfiniteSelectProps<T>
  extends Omit<SelectProps, "items" | "children"> {
  // React Query props
  items: T[];
  isFetching: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;

  // Core functionality
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T, index?: number) => string | number;

  // Search functionality
  onSearchChange?: (searchText: string) => void;
  searchPlaceholder?: string;
  isSearchable?: boolean;
  searchClassName?: string;
}

export function InfiniteSelect<T extends object>({
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
  searchClassName,
  ...selectProps
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage,
  });

  const handleSearchChange = (value: string): void => {
    setSearchText(value);
    onSearchChange?.(value);
  };

  return (
    <div className="flex flex-col gap-2">
      {isSearchable && (
        <Input
          className={searchClassName}
          placeholder={searchPlaceholder}
          value={searchText}
          onValueChange={handleSearchChange}
          isClearable
          variant="bordered"
          size="sm"
        />
      )}

      <Select
        className={className}
        isLoading={isLoading || isFetching}
        items={items}
        scrollRef={scrollerRef}
        selectionMode={selectionMode}
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
    </div>
  );
}
