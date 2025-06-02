import { useInfiniteScroll } from "@/hooks";
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
import { IconXboxX, IconUsers, IconX } from "@tabler/icons-react";
import type { JSX } from "react";
import { useState, useCallback, useMemo } from "react";

// Utiliser le type Key compatible avec HeroUI
type SelectionKey = string | number;

interface InfiniteSelectProps<T extends object>
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

  // Core functionality
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T) => SelectionKey;
  getItemValue?: (item: T) => string;

  // Search functionality
  onSearchChange?: (searchText: string) => void;
  // Selection - enrichissement pour multiselect
  selectionMode?: "single" | "multiple";
  selectedKey?: SelectionKey | null; // Pour single select
  selectedKeys?: Set<SelectionKey>; // Pour multiselect
  onSelectionChange?: (key: SelectionKey | Set<SelectionKey> | null) => void;
  maxVisibleInBadge?: number; // Nombre max dans le badge avant d'utiliser le popover
}

export function InfiniteAutocomplete<T extends object>({
  items,
  isFetching,
  fetchNextPage,
  hasNextPage,
  isLoading,
  className = "max-w-xs",
  renderItem,
  getItemKey,
  getItemValue = (item: T): string => String(renderItem(item)),
  onSearchChange,
  selectionMode = "single",
  selectedKey,
  selectedKeys = new Set(),
  onSelectionChange,
  maxVisibleInBadge = 2, // Affiche max 2 éléments dans le badge
  ...autocompleteProps
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage,
  });

  const isMultiSelect = selectionMode === "multiple";

  // Obtenir les items sélectionnés pour l'affichage
  const selectedItems = useMemo((): T[] => {
    if (!isMultiSelect) {
      return [];
    }
    return items.filter((item): boolean => selectedKeys.has(getItemKey(item)));
  }, [items, selectedKeys, getItemKey, isMultiSelect]);

  const handleInputChange = useCallback(
    (value: string): void => {
      setInputValue(value);
      onSearchChange?.(value);
    },
    [onSearchChange],
  );

  const handleSelectionChange = useCallback(
    (key: SelectionKey | null): void => {
      if (!key) {
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

  const isItemSelected = useCallback(
    (item: T): boolean => {
      return isMultiSelect && selectedKeys.has(getItemKey(item));
    },
    [isMultiSelect, selectedKeys, getItemKey],
  );

  // Badge pour afficher le nombre d'éléments sélectionnés
  const selectionBadge = useMemo((): JSX.Element | null => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }

    // Si peu d'éléments, on affiche les chips inline
    if (selectedItems.length <= maxVisibleInBadge) {
      return (
        <div className="mb-2 flex flex-wrap gap-1">
          {selectedItems.map((item): JSX.Element => {
            const itemKey = getItemKey(item);
            return (
              <Chip
                key={itemKey}
                onClose={(): void => handleRemoveChip(itemKey)}
                variant="flat"
                size="sm"
                endContent={<IconXboxX size={12} />}
                className="max-w-[120px]"
              >
                <span className="truncate text-xs">{getItemValue(item)}</span>
              </Chip>
            );
          })}
        </div>
      );
    }

    // Sinon, badge avec popover
    return (
      <div className="mb-2">
        <Popover
          isOpen={isPopoverOpen}
          onOpenChange={setIsPopoverOpen}
          placement="top-start"
          showArrow
          backdrop="transparent"
        >
          <PopoverTrigger>
            <Badge
              content={selectedItems.length}
              color="primary"
              size="sm"
              className="cursor-pointer"
            >
              <Button
                variant="flat"
                size="sm"
                startContent={<IconUsers size={16} />}
                className="h-8 px-3 text-xs"
                onPress={(): void => setIsPopoverOpen(!isPopoverOpen)}
              >
                {selectedItems.length} sélectionné
                {selectedItems.length > 1 ? "s" : ""}
              </Button>
            </Badge>
          </PopoverTrigger>

          <PopoverContent className="w-80 p-0">
            <div className="border-b border-divider px-4 py-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-foreground">
                  Éléments sélectionnés ({selectedItems.length})
                </h4>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="light"
                    color="danger"
                    onPress={handleClearAll}
                    className="h-6 px-2 text-xs"
                  >
                    Tout supprimer
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onPress={(): void => setIsPopoverOpen(false)}
                    className="size-6"
                  >
                    <IconX size={14} />
                  </Button>
                </div>
              </div>
            </div>

            <ScrollShadow className="max-h-64">
              <div className="space-y-1 p-2">
                {selectedItems.map((item): JSX.Element => {
                  const itemKey = getItemKey(item);
                  return (
                    <div
                      key={itemKey}
                      className="group flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-default-100"
                    >
                      <div className="flex min-w-0 flex-1 items-center">
                        <div className="truncate text-sm text-foreground">
                          {getItemValue(item)}
                        </div>
                      </div>
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        color="danger"
                        className="size-6 opacity-0 transition-opacity group-hover:opacity-100"
                        onPress={(): void => handleRemoveChip(itemKey)}
                      >
                        <IconXboxX size={12} />
                      </Button>
                    </div>
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
    isPopoverOpen,
    getItemKey,
    getItemValue,
    handleRemoveChip,
    handleClearAll,
  ]);

  return (
    <div className={className}>
      {/* Badge moderne pour les sélections */}
      {selectionBadge}

      {/* Composant Autocomplete */}
      <Autocomplete<T>
        className="w-full"
        isLoading={isLoading || isFetching}
        items={items}
        scrollRef={scrollerRef}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        selectedKey={isMultiSelect ? null : selectedKey}
        onSelectionChange={handleSelectionChange}
        onOpenChange={(open): void => {
          setIsOpen(open);
          autocompleteProps.onOpenChange?.(open);
        }}
        shouldCloseOnBlur={!isMultiSelect}
        allowsCustomValue={isMultiSelect}
        menuTrigger={isMultiSelect ? "focus" : "focus"}
        {...autocompleteProps}
      >
        {(item: T): JSX.Element => (
          <AutocompleteItem
            key={getItemKey(item)}
            className={cn(
              isItemSelected(item) && "bg-primary-50 text-primary-600",
            )}
            endContent={isItemSelected(item) ? "✓" : undefined}
          >
            {renderItem(item)}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
