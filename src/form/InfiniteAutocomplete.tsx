import { useInfiniteScroll } from "@/hooks";
import { useDebouncedValue } from "@/hooks";
import { Tooltip } from "@/tooltip";
import { mergeTailwindClasses } from "@/utils";
import type { AutocompleteProps } from "@heroui/react";
import {
  Autocomplete,
  AutocompleteItem,
  Chip,
  cn,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Badge,
  Button,
  ScrollShadow,
} from "@heroui/react";
import { IconXboxX, IconTrash } from "@tabler/icons-react";
import type { JSX, ReactNode } from "react";
import { useState, useCallback, useMemo, useEffect } from "react";

// Utiliser le type Key compatible avec HeroUI
type SelectionKey = string | number;

interface InfiniteSelectProps<T extends Record<string, unknown>>
  extends Omit<
    AutocompleteProps<T>,
    "items" | "children" | "selectedKey" | "onSelectionChange"
  > {
  // React Query props
  items: T[];
  isFetching: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
  error?: Error | null;

  // Core functionality
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T) => SelectionKey;
  getItemValue?: (item: T) => string;

  // Search functionality
  onSearchChange?: (searchText: string) => void;
  searchDebounceMs?: number;

  // Selection - enrichissement pour multiselect
  selectionMode?: "single" | "multiple";
  selectedKey?: SelectionKey | null; // Pour single select
  selectedKeys?: Set<SelectionKey>; // Pour multiselect
  onSelectionChange?: (key: SelectionKey | Set<SelectionKey> | null) => void;
  maxVisibleInBadge?: number; // Nombre max dans le badge avant d'utiliser le popover

  // Customization pour généricité
  selectionIcon?: ReactNode; // Icône configurable
  selectionLabel?: string; // Label configurable (ex: "sélectionné", "choisi", etc.)
  itemClassName?: string;

  // Empty state
  emptyContent?: React.ReactNode;
  errorContent?: React.ReactNode;

  // Loading states
  loadingContent?: React.ReactNode;
  fetchingMoreContent?: React.ReactNode;
}

/**
 * Composant Autocomplete avec scroll infini, recherche et sélection multiple
 * @template T - Type des éléments dans la liste
 */
export function InfiniteAutocomplete<T extends Record<string, unknown>>({
  items,
  isFetching,
  fetchNextPage,
  hasNextPage,
  isLoading,
  error,
  className = "max-w-xs",
  renderItem,
  getItemKey,
  getItemValue = (item: T): string => String(renderItem(item)),
  onSearchChange,
  searchDebounceMs = 300,
  selectionMode = "single",
  selectedKey,
  selectedKeys = new Set(),
  onSelectionChange,
  maxVisibleInBadge = 2,
  selectionIcon = null,
  selectionLabel = "sélectionné",
  itemClassName,
  emptyContent = "Aucun élément trouvé",
  errorContent,
  loadingContent,
  fetchingMoreContent,
  ...autocompleteProps
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [savedSelectedItems, setSavedSelectedItems] = useState<
    Map<SelectionKey, T>
  >(new Map());

  const { debouncedValue: debouncedSearchTerm, cancel: cancelDebounce } =
    useDebouncedValue(inputValue, searchDebounceMs);

  const { scrollContainerRef } = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen && !error,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage,
  });

  const isMultiSelect = selectionMode === "multiple";

  useEffect((): void => {
    if (onSearchChange && inputValue !== "") {
      onSearchChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearchChange, inputValue]);

  useEffect((): void => {
    if (!isMultiSelect) {
      return;
    }

    setSavedSelectedItems((prev): Map<SelectionKey, T> => {
      const newSavedItems = new Map(prev);

      items.forEach((item): void => {
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

  const selectedItems = useMemo((): T[] => {
    if (!isMultiSelect) {
      return [];
    }
    return Array.from(savedSelectedItems.values());
  }, [savedSelectedItems, isMultiSelect]);

  const handleInputChange = useCallback(
    (value: string): void => {
      setInputValue(value);

      if (value === "" && onSearchChange) {
        cancelDebounce();
        onSearchChange("");
      }
    },
    [onSearchChange, cancelDebounce],
  );

  const handleSelectionChange = useCallback(
    (key: SelectionKey | null): void => {
      if (key === null || key === undefined) {
        if (!isMultiSelect) {
          onSelectionChange?.(null);
        }
        return;
      }

      if (!isMultiSelect) {
        onSelectionChange?.(key);
        setInputValue("");
        return;
      }

      const newSelectedKeys = new Set(selectedKeys);

      if (selectedKeys.has(key)) {
        newSelectedKeys.delete(key);
      } else {
        newSelectedKeys.add(key);
      }

      onSelectionChange?.(newSelectedKeys);
      setInputValue("");
    },
    [isMultiSelect, selectedKeys, onSelectionChange],
  );

  const handleRemoveChip = useCallback(
    (itemKey: SelectionKey): void => {
      const newSelectedKeys = new Set(selectedKeys);
      newSelectedKeys.delete(itemKey);
      onSelectionChange?.(newSelectedKeys);
    },
    [selectedKeys, onSelectionChange],
  );

  const handleClearAll = useCallback((): void => {
    onSelectionChange?.(new Set());
    setIsPopoverOpen(false);
  }, [onSelectionChange]);

  const handleOpenChange = useCallback(
    (open: boolean): void => {
      setIsOpen(open);
      autocompleteProps.onOpenChange?.(open);

      if (!open && inputValue) {
        setInputValue("");
        cancelDebounce();
        onSearchChange?.("");
      }
    },
    [autocompleteProps, inputValue, onSearchChange, cancelDebounce],
  );

  const isItemSelected = useCallback(
    (item: T): boolean => {
      return isMultiSelect && selectedKeys.has(getItemKey(item));
    },
    [isMultiSelect, selectedKeys, getItemKey],
  );

  const autocompleteItems = useMemo((): ReactNode[] => {
    return items.map(
      (item): ReactNode => (
        <AutocompleteItem
          key={getItemKey(item)}
          className={mergeTailwindClasses(
            "border border-border/10",
            isItemSelected(item) && "bg-default",
            itemClassName,
          )}
          endContent={
            isItemSelected(item) ? (
              <span className="text-success">✓</span>
            ) : undefined
          }
        >
          {renderItem(item)}
        </AutocompleteItem>
      ),
    );
  }, [items, getItemKey, isItemSelected, itemClassName, renderItem]);

  const selectionBadge = useCallback((): JSX.Element | null => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }

    if (selectedItems.length <= maxVisibleInBadge) {
      return (
        <div className="absolute inset-x-0 top-0 z-20 -translate-y-full pb-3">
          <div className="flex flex-wrap gap-2 rounded-md border border-primary/20 bg-content1-100/40 p-3 shadow-lg ring-1 ring-primary/10 backdrop-blur-md dark:bg-background">
            {selectedItems.map((item): JSX.Element => {
              const itemKey = getItemKey(item);
              return (
                <Chip
                  key={itemKey}
                  onClose={(): void => handleRemoveChip(itemKey)}
                  variant="flat"
                  size="sm"
                  endContent={
                    <IconXboxX
                      size={12}
                      className="text-default-400 transition-colors duration-200 hover:text-danger"
                    />
                  }
                  className="max-w-[140px] border border-primary/20 bg-primary/10 text-primary shadow-sm transition-all duration-200 hover:bg-primary/20"
                >
                  <span className="truncate text-xs font-medium">
                    {getItemValue(item)}
                  </span>
                </Chip>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="absolute left-0 top-0 z-20 flex -translate-y-full justify-end pb-3">
        <Popover
          isOpen={isPopoverOpen}
          onOpenChange={setIsPopoverOpen}
          placement="top-start"
          showArrow
          backdrop="transparent"
          classNames={{
            content: "border-0 bg-transparent shadow-none p-0",
          }}
        >
          <PopoverTrigger>
            <Badge
              content={selectedItems.length}
              color="primary"
              size="lg"
              className="cursor-pointer"
              classNames={{
                badge: "bg-primary text-white font-semibold",
              }}
            >
              <Button
                variant="flat"
                size="sm"
                startContent={selectionIcon}
                className="h-9 border border-primary/20 bg-content1-100/40 px-4 text-xs font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/5 hover:to-secondary/20 hover:shadow-sm"
                onPress={(): void => setIsPopoverOpen(!isPopoverOpen)}
              >
                {selectedItems.length} {selectionLabel}
                {selectedItems.length > 1 ? "s" : ""}
              </Button>
            </Badge>
          </PopoverTrigger>

          <PopoverContent className="border border-border bg-gradient-to-b from-content1 to-content1-100/10 p-2 backdrop-blur-xl transition-all data-[hover=true]:bg-content1-100/30 dark:bg-background dark:from-background-200/20 dark:to-background dark:data-[hover=true]:bg-content1-200/20">
            <div className="mb-5 flex w-full items-center justify-between gap-4">
              <h4 className="text-sm font-bold">
                Éléments {selectionLabel}s ({selectedItems.length})
              </h4>
              <div className="flex gap-2">
                <Tooltip
                  trigger={
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      color="danger"
                      onPress={handleClearAll}
                      className="size-8 bg-danger/10 transition-all duration-200 hover:scale-110 hover:bg-danger/20"
                    >
                      <IconTrash size={16} />
                    </Button>
                  }
                  content="Tout supprimer"
                  placement="top"
                />
              </div>
            </div>
            <ScrollShadow className="max-h-80 w-80 overflow-x-hidden">
              <div className="grid w-full grid-cols-2 gap-3 pr-2">
                {selectedItems.map((item): JSX.Element => {
                  const itemKey = getItemKey(item);
                  const itemValue = getItemValue(item);

                  return (
                    <Tooltip
                      key={itemKey}
                      content={itemValue}
                      placement="top"
                      showArrow
                      delay={300}
                      closeDelay={0}
                      classNames={{
                        content:
                          "max-w-xs text-xs bg-content1-100/40 border border-primary/5 shadow-xl backdrop-blur-md",
                      }}
                      trigger={
                        <div className="group relative flex min-w-0 flex-col items-center rounded-sm border border-primary/20 bg-content1-100/40 p-3 transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/10 hover:shadow-sm">
                          <div className="w-full min-w-0 text-center">
                            <div className="truncate text-xs font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                              {itemValue}
                            </div>
                          </div>

                          <Button
                            isIconOnly
                            size="sm"
                            variant="flat"
                            color="danger"
                            onPress={(): void => handleRemoveChip(itemKey)}
                            className="absolute -right-1 -top-1 size-6 bg-danger/20 opacity-70 transition-all duration-200 hover:scale-110 hover:bg-danger/30 group-hover:opacity-100"
                          >
                            <IconXboxX size={12} />
                          </Button>
                        </div>
                      }
                    />
                  );
                })}
              </div>
            </ScrollShadow>
          </PopoverContent>
        </Popover>
      </div>
    );
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
    handleClearAll,
  ]);

  if (error && !isLoading) {
    return (
      <div className={cn("relative", className)}>
        {selectionBadge()}
        <Autocomplete
          className="w-full"
          isDisabled
          placeholder="Erreur de chargement"
          aria-label="Autocomplete en erreur"
          {...autocompleteProps}
        >
          <AutocompleteItem key="error" isReadOnly>
            {errorContent ?? `Erreur: ${error.message}`}
          </AutocompleteItem>
        </Autocomplete>
      </div>
    );
  }

  if (isLoading && items.length === 0) {
    return (
      <div className={cn("relative", className)}>
        {selectionBadge()}
        <Autocomplete
          className="w-full"
          isLoading
          placeholder="Chargement..."
          aria-label="Autocomplete en chargement"
          {...autocompleteProps}
        >
          <AutocompleteItem key="loading" isReadOnly>
            {loadingContent ?? "Chargement des données..."}
          </AutocompleteItem>
        </Autocomplete>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {selectionBadge()}

      <Autocomplete<T>
        className="w-full"
        inputProps={{
          classNames: {
            inputWrapper:
              autocompleteProps.variant === "bordered" &&
              "border border-border",
          },
          ...autocompleteProps.inputProps,
        }}
        isLoading={isFetching && items.length === 0}
        items={items}
        scrollRef={scrollContainerRef}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        selectedKey={isMultiSelect ? null : selectedKey}
        onSelectionChange={handleSelectionChange}
        onOpenChange={handleOpenChange}
        shouldCloseOnBlur={!isMultiSelect}
        allowsCustomValue={isMultiSelect}
        menuTrigger={isMultiSelect ? "focus" : "focus"}
        aria-label={
          autocompleteProps["aria-label"] || "Autocomplete avec scroll infini"
        }
        aria-describedby={
          isFetching
            ? "infinite-autocomplete-loading"
            : autocompleteProps["aria-describedby"]
        }
        {...autocompleteProps}
      >
        {items.length === 0 && !isLoading ? (
          <AutocompleteItem key="empty" isReadOnly>
            {emptyContent}
          </AutocompleteItem>
        ) : (
          <>{autocompleteItems}</>
        )}

        {isFetching && items.length > 0 ? (
          <AutocompleteItem key="fetching-more" isReadOnly>
            {fetchingMoreContent ?? "Chargement..."}
          </AutocompleteItem>
        ) : null}
      </Autocomplete>
    </div>
  );
}

export type { InfiniteSelectProps };
