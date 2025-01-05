// tsup.config.ts
import { defineConfig } from "tsup";

const modules = [
  "utils",
  "button",
  "modal",
  "hooks",
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
  "slider",
  "progress",
  "spiner",
  "datagrid",
  "drawer",
  "chip",
  "datepicker",
  "navbar",
  "sidebar",
  "layout",
  "tooltip",
  "tabs",
  "pagination",
  "typography",
  "HOC",
  "chart",
];

export default defineConfig((options) => ({
  entry: Object.fromEntries(
    modules.map((module) => [module, `src/${module}/index.ts`]),
  ),
  dts: true,
  clean: true,
  outDir: "dist",
  format: ["esm"],
  outExtension: () => ({
    js: ".es.js",
  }),
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
    "framer-motion",
  ],
  loader: {
    ".css": "css",
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
}));
