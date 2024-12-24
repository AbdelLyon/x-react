type Id = string | number;
type DataRow = {
    id: Id;
};
type SortConfig<T> = {
    key: keyof T | null;
    direction: "asc" | "desc";
};
type DataGridState<T> = {
    selectedRows: T[];
    isAllChecked: boolean;
    sortConfig: SortConfig<T>;
    handleCheckboxChange: (row: T) => void;
    handleSelectAll: (checked: boolean) => void;
    handleSort: (column: keyof T, direction: "asc" | "desc") => void;
    isRowSelected: (row: T) => boolean;
};
type DataGridHookProps<T> = {
    rows: T[];
    onCheckedRowsChange?: (rows: T[]) => void;
    onSort?: (column: keyof T, direction: "asc" | "desc") => void;
};
export declare const useDataGridState: <T extends DataRow>({ rows, onCheckedRowsChange, onSort, }: DataGridHookProps<T>) => DataGridState<T>;
export {};
