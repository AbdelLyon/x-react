type Id = string | number;
type Row = {
    id: Id;
};
type SortDirection = "asc" | "desc";
interface SortConfiguration<T> {
    key: keyof T | null;
    direction: SortDirection;
}
interface SelectionState<T> {
    selectedRows: Set<T>;
    allRowsSelected: boolean;
}
interface SelectionActions<T> {
    toggleRowSelection: (row: T) => void;
    toggleAllRowsSelection: (selectAll: boolean) => void;
}
interface SortingState<T> {
    sortConfiguration: SortConfiguration<T>;
    updateSort: (column: keyof T, direction: SortDirection) => void;
}
interface GridProps<T> {
    rows: T[];
    onSelectionChange?: (selectedRows: T[]) => void;
    onSortChange?: (column: keyof T, direction: SortDirection) => void;
}
type GridState<T> = SelectionState<T> & SelectionActions<T> & SortingState<T>;
export declare const useSelectionState: <T extends Row>({ rows, onSelectionChange, }: Pick<GridProps<T>, "rows" | "onSelectionChange">) => SelectionState<T> & SelectionActions<T>;
export declare const useSortingState: <T extends Row>({ onSortChange, }: Pick<GridProps<T>, "onSortChange">) => SortingState<T>;
export declare const useDataGridState: <T extends Row>(props: GridProps<T>) => GridState<T>;
export {};
