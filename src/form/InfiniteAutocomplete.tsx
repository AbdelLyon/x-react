import { useInfiniteScroll } from "@/hooks";
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
import { IconXboxX, IconUsers, IconTrash } from "@tabler/icons-react";
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
  itemClassName?: string;
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
  itemClassName,
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

  // Badge pour afficher le nombre d'éléments sélectionnés - POSITION ABSOLUE
  const selectionBadge = useMemo((): JSX.Element | null => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }

    // Si peu d'éléments, on affiche les chips inline en absolu
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

    // Badge avec popover en absolu
    return (
      <div className="absolute left-0 top-0 z-20 flex -translate-y-full justify-end pb-2">
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
                startContent={selectionIcon}
                className="h-8 border border-border bg-background/95 px-3 text-xs shadow-medium backdrop-blur-sm"
                onPress={(): void => setIsPopoverOpen(!isPopoverOpen)}
              >
                {selectedItems.length} {selectionLabel}
                {selectedItems.length > 1 ? "s" : ""}
              </Button>
            </Badge>
          </PopoverTrigger>

          <PopoverContent>
            <div className="border-b border-border py-4">
              <div className="flex items-center justify-between gap-4 px-2 ">
                <h4 className="text-sm font-semibold text-foreground">
                  Éléments {selectionLabel}s ({selectedItems.length})
                </h4>
                <div className="flex gap-1">
                  <Tooltip
                    trigger={
                      <IconTrash
                        className="cursor-pointer text-danger"
                        size={18}
                      />
                    }
                    content="Tout supprimer"
                  />
                </div>
              </div>
            </div>

            <ScrollShadow className="max-h-64 w-64">
              <div className="w-full space-y-1 p-3">
                {selectedItems.map((item): JSX.Element => {
                  const itemKey = getItemKey(item);
                  return (
                    <div
                      key={itemKey}
                      className="group flex items-center justify-between rounded-md border border-border p-2 transition-colors hover:bg-default"
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
                        className="size-6 opacity-80 transition-opacity group-hover:opacity-100"
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
        inputProps={{
          classNames: {
            inputWrapper:
              autocompleteProps.variant === "bordered" &&
              "border border-border",
          },
          ...autocompleteProps.inputProps,
        }}
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
            className={mergeTailwindClasses(
              "border border-border/40",
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
        )}
      </Autocomplete>
    </div>
  );
}
