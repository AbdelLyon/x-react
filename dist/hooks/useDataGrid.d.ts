export declare function useDataGridState<T extends {
    id: string | number;
}>(rows: T[], onCheckedRowsChange?: (rows: T[]) => void, onSort?: (column: keyof T, direction: "asc" | "desc") => void): {
    checkedRows: Set<T>;
    isAllChecked: boolean;
    sortConfig: {
        key: keyof T | null;
        direction: "asc" | "desc";
    };
    handleCheckboxChange: (row: T) => void;
    handleSelectAll: (checked: boolean) => void;
    handleSort: (column: keyof T, direction: "asc" | "desc") => void;
};
