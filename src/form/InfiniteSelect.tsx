import { useInfiniteScroll } from "@/hooks";
import type { SelectProps } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import type { JSX } from "react";
import { useCallback, useMemo, useState } from "react";

interface InfiniteSelectProps<T>
  extends Omit<SelectProps, "items" | "children" | "onSelectionChange"> {
  // React Query props
  items: T[];
  isFetching: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
  error?: Error | null;

  // Core functionality
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T, index?: number) => string | number;

  // Selection callbacks
  onSelectionChange?: (key: string | number | null) => void;
  onMultipleSelectionChange?: (keys: Set<string | number>) => void;

  // Empty state
  emptyContent?: React.ReactNode;
  errorContent?: React.ReactNode;

  // Loading states
  loadingContent?: React.ReactNode;
  fetchingMoreContent?: React.ReactNode;
}

/**
 * Composant Select avec scroll infini
 * @template T - Type des éléments dans la liste
 */
export function InfiniteSelect<T extends Record<string, unknown>>({
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
  fetchingMoreContent,
  ...selectProps
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollContainerRef } = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen && !error,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage,
  });

  const handleSelectionChange = useCallback(
    (keys: "all" | Set<React.Key>): void => {
      if (keys === "all") {
        return;
      }

      if (selectionMode === "single") {
        const key = keys.size > 0 ? Array.from(keys)[0] : null;
        onSelectionChange?.(key as string | number | null);
      } else {
        onMultipleSelectionChange?.(keys as Set<string | number>);
      }
    },
    [selectionMode, onSelectionChange, onMultipleSelectionChange],
  );

  const handleOpenChange = useCallback(
    (open: boolean): void => {
      setIsOpen(open);
      selectProps.onOpenChange?.(open);
    },
    [selectProps],
  );

  const selectItems = useMemo((): JSX.Element[] => {
    return items.map(
      (item, index): JSX.Element => (
        <SelectItem key={getItemKey(item, index)}>
          {renderItem(item)}
        </SelectItem>
      ),
    );
  }, [items, getItemKey, renderItem]);

  // Error state
  if (error && !isLoading) {
    return (
      <Select
        className={className}
        isDisabled
        placeholder="Erreur de chargement"
        aria-label="Select en erreur"
        {...selectProps}
      >
        <SelectItem key="error" isReadOnly>
          {errorContent !== undefined
            ? errorContent
            : `Erreur: ${error.message}`}
        </SelectItem>
      </Select>
    );
  }

  if (isLoading && items.length === 0) {
    return (
      <Select
        className={className}
        isLoading
        placeholder="Chargement..."
        aria-label="Select en chargement"
        {...selectProps}
      >
        <SelectItem key="loading" isReadOnly>
          {loadingContent ?? "Chargement des données..."}
        </SelectItem>
      </Select>
    );
  }

  return (
    <Select
      className={className}
      isLoading={isFetching && items.length === 0}
      items={items}
      scrollRef={scrollContainerRef}
      selectionMode={selectionMode}
      onOpenChange={handleOpenChange}
      onSelectionChange={handleSelectionChange}
      aria-label={selectProps["aria-label"] || "Select avec scroll infini"}
      aria-describedby={
        isFetching ? "infinite-select-loading" : selectProps["aria-describedby"]
      }
      {...selectProps}
    >
      {items.length === 0 && !isLoading ? (
        <SelectItem key="empty" isReadOnly>
          {emptyContent}
        </SelectItem>
      ) : (
        <>{selectItems}</>
      )}

      {isFetching && items.length > 0 ? (
        <SelectItem key="fetching-more" isReadOnly>
          {fetchingMoreContent ?? "Chargement..."}
        </SelectItem>
      ) : null}
    </Select>
  );
}

export type { InfiniteSelectProps };
