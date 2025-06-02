import { useInfiniteScroll } from "@/hooks";
import type { InputProps } from "@heroui/react";
import {
  Input,
  Chip,
  Listbox,
  ListboxItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@heroui/react";
import { IconSearch, IconX } from "@tabler/icons-react";
import type { JSX } from "react";
import { useState, useRef } from "react";

interface InfiniteMultiSelectProps<T> {
  // React Query props
  items: T[];
  isFetching: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;

  // Core functionality
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T) => string | number;
  getItemValue?: (item: T) => string; // Pour afficher dans les chips

  // Selection
  selectedItems: T[];
  onSelectionChange: (items: T[]) => void;

  // Search functionality
  onSearchChange?: (searchText: string) => void;
  placeholder?: string;

  // Styling
  className?: string;
  inputProps?: Partial<InputProps>;
}

export function InfiniteAutocomplete<T extends object>({
  items,
  isFetching,
  fetchNextPage,
  hasNextPage,
  isLoading,
  renderItem,
  getItemKey,
  getItemValue = (item: T): string => String(renderItem(item)),
  selectedItems,
  onSelectionChange,
  onSearchChange,
  placeholder = "Rechercher et sélectionner...",
  className = "max-w-xs",
  inputProps,
}: InfiniteMultiSelectProps<T>): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage,
  });

  const handleSearchChange = (value: string): void => {
    setSearchText(value);
    onSearchChange?.(value);
    setIsOpen(true);
  };

  const handleItemSelect = (item: T): void => {
    const itemKey = getItemKey(item);
    const isSelected = selectedItems.some(
      (selected): boolean => getItemKey(selected) === itemKey,
    );

    if (isSelected) {
      onSelectionChange(
        selectedItems.filter(
          (selected): boolean => getItemKey(selected) !== itemKey,
        ),
      );
    } else {
      onSelectionChange([...selectedItems, item]);
    }

    // Clear search and close dropdown after selection
    setSearchText("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleRemoveItem = (item: T): void => {
    const itemKey = getItemKey(item);
    onSelectionChange(
      selectedItems.filter(
        (selected): boolean => getItemKey(selected) !== itemKey,
      ),
    );
  };

  const isItemSelected = (item: T): boolean => {
    const itemKey = getItemKey(item);
    return selectedItems.some(
      (selected): boolean => getItemKey(selected) === itemKey,
    );
  };

  return (
    <div className={className}>
      {/* Selected items chips */}
      {selectedItems.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-1">
          {selectedItems.map(
            (item): JSX.Element => (
              <Chip
                key={getItemKey(item)}
                onClose={(): void => handleRemoveItem(item)}
                variant="flat"
                size="sm"
                endContent={<IconX />}
              >
                {getItemValue(item)}
              </Chip>
            ),
          )}
        </div>
      )}

      {/* Search input with dropdown */}
      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="bottom-start"
        shouldCloseOnBlur={true}
      >
        <PopoverTrigger>
          <Input
            ref={inputRef}
            placeholder={placeholder}
            value={searchText}
            onValueChange={handleSearchChange}
            isClearable
            startContent={<IconSearch className="text-default-400" />}
            variant="bordered"
            onFocus={(): void => setIsOpen(true)}
            {...inputProps}
          />
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Listbox
            aria-label="Search results"
            className="max-h-60 overflow-auto"
            emptyContent={
              isLoading || isFetching
                ? "Chargement..."
                : "Aucun résultat trouvé"
            }
            items={items}
            ref={scrollerRef}
          >
            {(item: T): JSX.Element => (
              <ListboxItem
                key={getItemKey(item)}
                onPress={(): void => handleItemSelect(item)}
                className={
                  isItemSelected(item) ? "bg-primary-50 text-primary-600" : ""
                }
                endContent={isItemSelected(item) ? "✓" : undefined}
              >
                {renderItem(item)}
              </ListboxItem>
            )}
          </Listbox>
        </PopoverContent>
      </Popover>
    </div>
  );
}
