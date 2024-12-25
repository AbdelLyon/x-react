export type Id = string | number;
export type DataRow = {
    id: Id;
};
export type SortDirection = "asc" | "desc";
export type SortConfig<T> = {
    key: keyof T | null;
    direction: SortDirection;
};
export type SelectionState = {
    isAllChecked: boolean;
};
export type SelectionActions<T> = {
    handleSelectionChange: (row: T, checked: boolean) => void;
    handleSelectAll: (checked: boolean) => void;
};
export type SortState<T> = {
    sortConfig: SortConfig<T>;
};
export type SortActions<T> = {
    handleSortChange: (column: keyof T, direction: SortDirection) => void;
};
export type DataGridHookProps<T> = {
    rows: T[];
    onSelectionChange?: (rows: T[]) => void;
    onSortChange?: (column: keyof T, direction: SortDirection) => void;
    selectedRows?: T[];
};
export type DataGridState<T> = SelectionState & SelectionActions<T> & SortState<T> & SortActions<T>;
export declare const useSelection: <T extends DataRow>({ rows, onSelectionChange, selectedRows, }: Pick<DataGridHookProps<T>, "rows" | "onSelectionChange"> & {
    selectedRows?: T[];
}) => SelectionState & SelectionActions<T>;
export declare const initialSortConfig: {
    key: null;
    direction: "asc";
};
export declare const useSort: <T extends DataRow>({ onSortChange, }: Pick<DataGridHookProps<T>, "onSortChange">) => SortState<T> & SortActions<T>;
export declare const useDataGridState: <T extends DataRow>({ rows, onSelectionChange, onSortChange, }: DataGridHookProps<T>) => DataGridState<T>;
