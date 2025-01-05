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

export default defineConfig({
  // Points d'entrée pour chaque module
  entry: Object.fromEntries(
    modules.map((module) => [module, `src/${module}/index.ts`]),
  ),

  // Configuration de base
  format: ["esm"],
  target: "es2020",
  platform: "browser",
  outDir: "dist",

  // Optimisations
  clean: true, // Nettoie le dossier dist avant le build
  splitting: false, // Désactive le code splitting
  minify: false, // Désactive la minification
  treeshake: true, // Active le tree shaking
  sourcemap: true,
  skipNodeModulesBundle: true,

  // TypeScript
  dts: true, // Génère les fichiers de types

  // Dépendances externes
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

  // Options esbuild
  esbuildOptions(options) {
    options.jsx = "automatic";
  },

  // Support CSS
  loader: {
    ".css": "css",
  },
});
