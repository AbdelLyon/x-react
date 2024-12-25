type Id = string | number;
type DataRow = {
    id: Id;
};
export type SortConfig<T> = {
    key: keyof T | null;
    direction: "asc" | "desc";
};
type DataGridHookProps<T> = {
    rows: T[];
    onSelectionChange?: (rows: T[]) => void;
    onSortChange?: (column: keyof T, direction: "asc" | "desc") => void;
};
export declare const initialSortConfig: {
    readonly key: null;
    readonly direction: "asc";
};
export type SelectionAction<T> = {
    row: T;
    isSelected?: boolean;
};
type DataGridState<T> = {
    selectedRows: T[];
    isAllChecked: boolean;
    sortConfig: SortConfig<T>;
    handleSelectionChange: (action: SelectionAction<T>) => void;
    handleSelectAll: (checked: boolean) => void;
    handleSortChange: (column: keyof T, direction: "asc" | "desc") => void;
    isRowSelected: (row: T) => boolean;
};
export declare const useDataGridState: <T extends DataRow>({ rows, onSelectionChange, onSortChange, }: DataGridHookProps<T>) => DataGridState<T>;
export {};
