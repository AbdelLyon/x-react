import { useInfiniteScroll } from "@/hooks";
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
import { IconXboxX, IconUsers } from "@tabler/icons-react";
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

  const selectionBadge = useMemo((): JSX.Element | null => {
    if (!isMultiSelect || selectedItems.length === 0) {
      return null;
    }

    // Si peu d'éléments, on affiche les chips inline en absolu
    if (selectedItems.length <= maxVisibleInBadge) {
      return (
        <div className="absolute inset-x-0 top-0 z-20 -translate-y-full pb-3">
          <div className="grid auto-cols-max grid-flow-col gap-2 rounded-xl border border-divider/50 bg-gradient-to-r from-background/95 to-background/90 p-3 shadow-lg backdrop-blur-md">
            {selectedItems.map((item): JSX.Element => {
              const itemKey = getItemKey(item);
              return (
                <Chip
                  key={itemKey}
                  onClose={(): void => handleRemoveChip(itemKey)}
                  variant="flat"
                  size="sm"
                  endContent={<IconXboxX size={12} />}
                  className="max-w-[140px] font-medium"
                >
                  <span className="truncate text-xs">{getItemValue(item)}</span>
                </Chip>
              );
            })}
          </div>
        </div>
      );
    }

    // Badge avec popover en absolu - VERSION MODERNE
    return (
      <div className="absolute inset-x-0 top-0 z-20 -translate-y-full pb-3">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-divider/50 bg-gradient-to-r from-background/95 to-background/90 p-4 shadow-lg backdrop-blur-md">
          {/* Colonne gauche - Info avec badge */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex-shrink-0">
              <Badge
                content={selectedItems.length}
                color="primary"
                size="sm"
                className="font-semibold"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary-50">
                  {selectionIcon}
                </div>
              </Badge>
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {selectedItems.length} {selectionLabel}
                {selectedItems.length > 1 ? "s" : ""}
              </p>
              <p className="truncate text-xs text-foreground-500">
                Cliquez pour gérer
              </p>
            </div>
          </div>

          {/* Colonne droite - Action popover */}
          <div className="flex gap-2">
            <Popover
              isOpen={isPopoverOpen}
              onOpenChange={setIsPopoverOpen}
              placement="top-end"
              showArrow
              backdrop="transparent"
            >
              <PopoverTrigger>
                <Button
                  variant="flat"
                  size="sm"
                  className="h-9 bg-primary-50 px-4 text-xs font-medium text-primary-600 transition-all duration-200 hover:bg-primary-100"
                  onPress={(): void => setIsPopoverOpen(!isPopoverOpen)}
                >
                  Gérer
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-96 border-0 p-0 shadow-xl">
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-background to-background/95">
                  {/* En-tête avec grid */}
                  <div className="border-b border-divider/30 bg-gradient-to-r from-primary-50 to-primary-100/50">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4">
                      <Badge
                        content={selectedItems.length}
                        color="primary"
                        size="sm"
                        className="font-semibold"
                      >
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary-100">
                          {selectionIcon}
                        </div>
                      </Badge>

                      <div className="min-w-0">
                        <h4 className="truncate text-sm font-semibold text-foreground">
                          Éléments {selectionLabel}s
                        </h4>
                        <p className="truncate text-xs text-foreground-500">
                          {selectedItems.length} élément
                          {selectedItems.length > 1 ? "s" : ""} sélectionné
                          {selectedItems.length > 1 ? "s" : ""}
                        </p>
                      </div>

                      <Button
                        size="sm"
                        variant="flat"
                        color="danger"
                        onPress={handleClearAll}
                        className="h-8 px-3 text-xs font-medium"
                      >
                        Tout supprimer
                      </Button>
                    </div>
                  </div>

                  {/* Liste avec grid */}
                  <ScrollShadow className="max-h-80">
                    <div className="grid gap-1 p-4">
                      {selectedItems.map((item): JSX.Element => {
                        const itemKey = getItemKey(item);
                        return (
                          <div
                            key={itemKey}
                            className="group grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-transparent p-3 transition-all duration-200 hover:border-divider/50 hover:bg-default-50"
                          >
                            <div className="min-w-0">
                              <div className="truncate text-sm font-medium text-foreground">
                                {getItemValue(item)}
                              </div>
                            </div>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              color="danger"
                              className="size-7 opacity-0 transition-all duration-200 group-hover:opacity-100"
                              onPress={(): void => handleRemoveChip(itemKey)}
                            >
                              <IconXboxX size={14} />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollShadow>
                </div>
              </PopoverContent>
            </Popover>
          </div>
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
