// types/datagrid/base.ts
import type {
  TableBodyProps,
  TableCellProps,
  TableColumnProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from "@heroui/react";

export interface SortConfig<T> {
  key: keyof T | null;
  direction: "asc" | "desc";
}

export type SortDirection = "asc" | "desc";

interface ColumnBase<T> {
  header: React.ReactNode;
  footer?: (data: T[]) => React.ReactNode;
  className?: string;
  sortable?: boolean;
}

interface FieldColumn<T> extends ColumnBase<T> {
  field: keyof T;
  cell?: (row: T) => React.ReactNode;
}

interface ActionColumn<T> extends ColumnBase<T> {
  field?: "actions";
  cell?: (row: T) => React.ReactNode;
}

export type ColumnDefinition<T> = FieldColumn<T> | ActionColumn<T>;

export type ExtendedColumn<T> = ColumnDefinition<T> & {
  key: string;
  header: React.ReactNode;
};

export interface DataGridComponentProps<T> {
  tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
  tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
  tableRowProps?: Omit<TableRowProps, "children">;
  tableCellProps?: Omit<TableCellProps, "children">;
  tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}

// types/datagrid/events.ts
export interface GridScrollEndParams {
  visibleRows: number;
  visibleStartIndex: number;
  visibleEndIndex: number;
}

export interface GridScrollEndEvent extends UIEvent {
  target: HTMLDivElement;
}

export interface GridCallbackDetails {
  reason: "scroll" | "resize";
}

export interface GridScrollEndCallback {
  params: GridScrollEndParams;
  details: GridCallbackDetails;
}

// types/datagrid/infinite-scroll.ts
export interface InfiniteScrollOptions {
  /** Active ou désactive le défilement infini */
  enabled?: boolean;
  /** Seuil d'intersection (0 à 1) pour déclencher le chargement */
  threshold?: number;
  /** Marge additionnelle autour de la zone d'intersection */
  rootMargin?: string;
  /** Déclencher une seule fois puis se détacher */
  triggerOnce?: boolean;
  /** Délai en ms pour éviter les déclenchements multiples */
  debounceTime?: number;
}

// types/datagrid/props.ts
export type GridVariant = "bordered" | "striped" | "unstyled";

export interface DataGridBaseProps<T> {
  childrenProps?: DataGridComponentProps<T>;
  rows: T[];
  columns: ColumnDefinition<T>[];
  className?: string;
  footerContent?: React.ReactNode;
  variant?: GridVariant;
  isLoading?: boolean;
  isFetching?: boolean;
}

export interface DataGridInfiniteScrollProps {
  /** Indique si plus de données sont en cours de chargement */
  isLoadingMore?: boolean;
  /** Indique s'il y a plus de données à charger */
  hasMoreData?: boolean;
  /** Options pour configurer le comportement du défilement infini */
  infiniteScrollOptions?: InfiniteScrollOptions;
  /** Contenu à afficher pendant le chargement de données supplémentaires */
  loadingMoreContent?: React.ReactNode;
  /** Contenu à afficher quand toutes les données ont été chargées */
  noMoreDataContent?: React.ReactNode;
}

export interface DataGridCallbacks<T> {
  /** Callback appelé lors du changement de tri */
  onSortChange?: (column: keyof T, direction: SortDirection) => void;
  /** Callback appelé lorsque l'utilisateur atteint la fin du tableau par défilement */
  onGridScrollEnd?: () => void;
  /** Callback appelé pour charger plus de données (utilisé par le défilement infini) */
  fetchNextPage?: () => void | Promise<void>;
}

export interface DataGridProps<T extends { id: string | number; }>
  extends DataGridBaseProps<T>,
  DataGridCallbacks<T>,
  DataGridInfiniteScrollProps,
  Omit<TableProps, "onSortChange"> { }