export const GRID_VARIANTS = {
  bordered: {
    thead: "bg-content1-100 rounded-none",
    th: "h-14 bg-content1-100",
    tr: "py-4 border-b border-border last:border-b-0 hover:bg-content1-200 dark:hover:bg-content1 h-12",
    td: "py-4 h-12 max-h-12",
  },
  striped: {
    thead: "bg-content1-100 rounded-none",
    th: "h-14 bg-content1-100",
    tr: "py-4 even:bg-content1-100 h-12 hover:bg-content1-200",
    td: "py-4 h-12 max-h-12",
  },
  unstyled: {
    thead: "bg-content1-100 rounded-none",
    th: "h-14 bg-content1-100",
    tr: "py-4 hover:bg-content1-200 h-12",
    td: "py-4 h-12 max-h-12",
  },
};