import { useInfiniteScroll } from "@/hooks";
import { useInfiniteList } from "@/hooks/useInfiniteList";
import { Select, SelectItem } from "@nextui-org/select";
import type { JSX } from "react";
import { useState } from "react";

interface InfiniteSelectProps<T> {
  fetchFunction: (
    offset: number,
    limit: number,
  ) => Promise<{
    items: T[];
    hasMore: boolean;
  }>;
  fetchDelay?: number;
  limit?: number;
  className?: string;
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T) => string | number;
  selectionMode?: "single" | "multiple";
}

export function InfiniteSelect<T extends object>({
  fetchFunction,
  fetchDelay = 0,
  limit = 10,
  className = "max-w-xs",
  renderItem,
  getItemKey,
  selectionMode = "single",
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const { items, hasMore, isLoading, onLoadMore } = useInfiniteList({
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
    <Select
      className={className}
      isLoading={isLoading}
      items={items}
      scrollRef={scrollerRef}
      selectionMode={selectionMode}
      onOpenChange={setIsOpen}
    >
      {(item: T): JSX.Element => (
        <SelectItem key={getItemKey(item)}>{renderItem(item)}</SelectItem>
      )}
    </Select>
  );
}
