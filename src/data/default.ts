export const GRID_VARIANTS = {
  bordered: {
    thead: "[&>tr]:first:bg-content2 bg-content2",
    th: "py4 bg-content2 py4",
    tr: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2",
  },
  striped: {
    thead: "[&>tr]:first:bg-content2 bg-content2",
    th: "py4 bg-content2 py4",
    tr: "py-4 even:bg-content2",
  },
  unstyled: {
    thead: "[&>tr]:first:bg-content2 bg-content2",
    th: "py4 bg-content2 py4",
    tr: "py-4 hover:bg-content2",
  },
};
