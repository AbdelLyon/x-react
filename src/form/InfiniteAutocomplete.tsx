import { useInfiniteScroll } from "@/hooks";
import type { AutocompleteProps } from "@heroui/react";
import { Autocomplete, AutocompleteItem, Chip, cn } from "@heroui/react";
import { IconXboxX } from "@tabler/icons-react";
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
  ...autocompleteProps
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage,
  });

  const isMultiSelect = selectionMode === "multiple";

  // Obtenir les items sélectionnés pour l'affichage des chips
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
        onSelectionChange?.(null);
        return;
      }

      if (!isMultiSelect) {
        // Mode single select - comportement normal de l'Autocomplete
        onSelectionChange?.(key);
        return;
      }

      // Mode multiselect - logique enrichie
      const newSelectedKeys = new Set(selectedKeys);

      if (selectedKeys.has(key)) {
        // Désélectionner
        newSelectedKeys.delete(key);
      } else {
        // Sélectionner
        newSelectedKeys.add(key);
      }

      onSelectionChange?.(newSelectedKeys);

      // Vider l'input et garder le dropdown ouvert en mode multiselect
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

  const isItemSelected = useCallback(
    (item: T): boolean => {
      return isMultiSelect && selectedKeys.has(getItemKey(item));
    },
    [isMultiSelect, selectedKeys, getItemKey],
  );

  return (
    <div className={className}>
      {/* Chips pour les éléments sélectionnés en mode multiselect */}
      {isMultiSelect && selectedItems.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-1">
          {selectedItems.map((item): JSX.Element => {
            const itemKey = getItemKey(item);
            return (
              <Chip
                key={itemKey}
                onClose={(): void => handleRemoveChip(itemKey)}
                variant="flat"
                size="sm"
                endContent={<IconXboxX />}
                className="max-w-xs"
              >
                <span className="truncate">{getItemValue(item)}</span>
              </Chip>
            );
          })}
        </div>
      )}

      {/* Composant Autocomplete enrichi */}
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
        // Enrichissements pour le multiselect
        {...(isMultiSelect && {
          allowsCustomValue: true,
          shouldCloseOnBlur: false, // Garder ouvert en multiselect
        })}
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
