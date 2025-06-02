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
  Button,
  ScrollShadow,
} from "@heroui/react";
import { IconXboxX, IconUsers, IconX } from "@tabler/icons-react";
import type { JSX, ReactNode } from "react";
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

  // Customization pour généricité
  selectionIcon?: ReactNode; // Icône configurable
  selectionLabel?: string; // Label configurable (ex: "sélectionné", "choisi", etc.)
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
  maxVisibleInBadge = 2,
  selectionIcon = <IconUsers size={16} />, // Icône par défaut
  selectionLabel = "sélectionné", // Label par défaut
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

  const isItemSelected = useCallback(
    (item: T): boolean => {
      return isMultiSelect && selectedKeys.has(getItemKey(item));
    },
    [isMultiSelect, selectedKeys, getItemKey],
  );

  // Badge pour afficher le nombre d'éléments sélectionnés - POSITION ABSOLUE
  // Badge pour afficher le nombre d'éléments sélectionnés - POSITION ABSOLUE
  const selectionBadge = useMemo((): JSX.Element | null => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }

    // Si on a moins ou égal à maxVisibleInBadge éléments, afficher tous les chips
    if (selectedItems.length <= maxVisibleInBadge) {
      return (
        <div className="absolute inset-x-0 top-0 z-20 -translate-y-full pb-2">
          <div className="flex flex-wrap gap-1 rounded-lg border border-divider bg-background/95 p-2 shadow-medium backdrop-blur-sm">
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
        </div>
      );
    }

    // Si on dépasse maxVisibleInBadge : afficher 2 chips + bouton "+N"
    const visibleItems = selectedItems.slice(0, 2); // Toujours 2 éléments
    const remainingCount = selectedItems.length - 2;

    return (
      <div className="absolute inset-x-0 top-0 z-20 -translate-y-full pb-2">
        <div className="flex flex-wrap items-center gap-1 rounded-lg border border-divider bg-background/95 p-2 shadow-medium backdrop-blur-sm">
          {/* Afficher les 2 premiers chips */}
          {visibleItems.map((item): JSX.Element => {
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

          {/* Bouton "+N" avec popover pour les éléments restants */}
          <Popover
            isOpen={isPopoverOpen}
            onOpenChange={setIsPopoverOpen}
            placement="top-start"
            showArrow
            backdrop="transparent"
          >
            <PopoverTrigger>
              <Button
                variant="flat"
                size="sm"
                startContent={selectionIcon}
                className="h-6 border border-divider bg-primary-50 px-2 text-xs text-primary-600 hover:bg-primary-100"
                onPress={(): void => setIsPopoverOpen(!isPopoverOpen)}
              >
                +{remainingCount}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-80 p-0">
              <div className="border-b border-divider px-4 py-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">
                    Éléments {selectionLabel}s ({selectedItems.length})
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
    selectionIcon,
    selectionLabel,
  ]);

  return (
    <div className={cn("relative", className)}>
      {/* Badge absolue - ne déplace PAS le select */}
      {selectionBadge}

      {/* Composant Autocomplete - position normale */}
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
