import { useInfiniteScroll } from "@/hooks";
import type { AutocompleteProps } from "@heroui/react";
import { Autocomplete, AutocompleteItem, Chip, cn } from "@heroui/react";
import { IconXboxX } from "@tabler/icons-react";
import type { JSX } from "react";
import { useState, useCallback, useMemo, useRef } from "react";

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
  maxVisibleChips?: number; // Nombre max de chips visibles avant truncate
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
  maxVisibleChips = 3, // Par défaut, 3 chips max avant truncate
  ...autocompleteProps
}: InfiniteSelectProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const chipsContainerRef = useRef<HTMLDivElement>(null);

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

  // Calculer les chips visibles et cachés
  const { visibleChips, hiddenCount } = useMemo((): {
    visibleChips: T[];
    hiddenCount: number;
  } => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return { visibleChips: [], hiddenCount: 0 };
    }

    if (selectedItems.length <= maxVisibleChips) {
      return { visibleChips: selectedItems, hiddenCount: 0 };
    }

    return {
      visibleChips: selectedItems.slice(0, maxVisibleChips),
      hiddenCount: selectedItems.length - maxVisibleChips,
    };
  }, [selectedItems, maxVisibleChips, isMultiSelect]);

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
        // Mode single select - comportement normal de l'Autocomplete
        onSelectionChange?.(key);
        setInputValue(""); // Vider l'input après sélection
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

      // Vider l'input mais garder le focus et le dropdown ouvert
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

  // Chips à afficher dans le champ en mode multiselect avec truncate
  const chipsContent = useMemo((): JSX.Element | null => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }

    return (
      <div
        ref={chipsContainerRef}
        className="flex max-w-full flex-wrap items-center gap-1"
      >
        {/* Chips visibles */}
        {visibleChips.map((item): JSX.Element => {
          const itemKey = getItemKey(item);
          return (
            <Chip
              key={itemKey}
              onClose={(): void => handleRemoveChip(itemKey)}
              variant="flat"
              size="sm"
              endContent={<IconXboxX size={12} />}
              className="max-w-[120px] shrink-0"
            >
              <span className="truncate text-xs">{getItemValue(item)}</span>
            </Chip>
          );
        })}

        {/* Indicateur pour les chips cachés */}
        {hiddenCount > 0 && (
          <Chip
            variant="solid"
            size="sm"
            className="shrink-0 bg-default-200 text-default-600"
            isCloseable={false}
          >
            <span className="text-xs font-medium">+{hiddenCount}</span>
          </Chip>
        )}
      </div>
    );
  }, [
    isMultiSelect,
    visibleChips,
    hiddenCount,
    getItemKey,
    getItemValue,
    handleRemoveChip,
    selectedItems.length,
  ]);

  return (
    <div className={className}>
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
        // Chips intégrées dans le champ
        startContent={chipsContent}
        // Enrichissements pour le multiselect
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
