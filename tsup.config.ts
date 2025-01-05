import { defineConfig } from "tsup";

const modules = [
  "utils",
  "button",
  "modal",
  // "hooks",
  "theme",
  "providers",
  "accordion",
  "alert",
  "avatar",
  "card",
  "icons",
  "form",
  "popover",
  "dropdown",
  "image",
  // "slider",
  // "progress",
  // "spiner",
  // "datagrid",
  // "drawer",
  // "chip",
  // "datepicker",
  // "navbar",
  // "sidebar",
  // "layout",
  // "tooltip",
  // "tabs",
  // "pagination",
  // "typography",
  // "HOC",
  // "chart",
];

export default defineConfig({
  entry: Object.fromEntries(
    modules.map((module) => [`${module}/index`, `src/${module}/index.ts`]),
  ),
  format: ["esm"],
  dts: {
    resolve: true,
    entry: {
      ...Object.fromEntries(
        modules.map((module) => [`${module}/index`, `src/${module}/index.ts`]),
      ),
    },
  },
  clean: true,
  outDir: "dist",
  splitting: false,
  sourcemap: true,
  treeshake: true,
  external: [
    "react",
    "react-dom",
    "@nextui-org/react",
    "@tabler/icons-react",
    "clsx",
    "next-themes",
    "react-chartjs-2",
    "chart.js",
    "tailwind-merge",
  ],
  loader: {
    ".css": "css",
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
