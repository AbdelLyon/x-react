type Id = string | number;
type Row = {
    id: Id;
};
type SortDirection = "asc" | "desc";
interface SortConfig<T> {
    key: keyof T | null;
    direction: SortDirection;
}
interface SelectionState<T> {
    selectedRows: Set<T>;
    isAllSelected: boolean;
}
interface SelectionActions<T> {
    handleRowSelect: (row: T) => void;
    handleSelectAll: (checked: boolean) => void;
}
interface SortState<T> {
    sortConfig: SortConfig<T>;
    handleSort: (column: keyof T, direction: SortDirection) => void;
}
interface GridProps<T> {
    rows: T[];
    onSelectionChange?: (rows: T[]) => void;
    onSortChange?: (column: keyof T, direction: SortDirection) => void;
}
type GridState<T> = SelectionState<T> & SelectionActions<T> & SortState<T>;
export declare const useSelection: <T extends Row>({ rows, onSelectionChange, }: Pick<GridProps<T>, "rows" | "onSelectionChange">) => SelectionState<T> & SelectionActions<T>;
export declare const useSort: <T extends Row>({ onSortChange, }: Pick<GridProps<T>, "onSortChange">) => SortState<T>;
export declare const useGridState: <T extends Row>(props: GridProps<T>) => GridState<T>;
export {};
