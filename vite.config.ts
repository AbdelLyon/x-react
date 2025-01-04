import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

const MODULES = [
  "button",
  "modal",
  "utils",
  "hooks",
  "providers",
  "theme",
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

const EXTERNAL_DEPS = {
  peer: ["react", "react-dom", "framer-motion", "@tabler/icons-react"],
  dependencies: ["@nextui-org/react", "clsx", "next-themes"],
  optional: ["react-chartjs-2", "chart.js", "@internationalized/date"],
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["src/data/**/*", "src/tests/**/*"],
      rollupTypes: true,
      insertTypesEntry: true,
      logLevel: "error",
      compilerOptions: {
        skipLibCheck: true,
        emitDeclarationOnly: true,
        noEmit: false,
        declarationMap: false,
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },

  build: {
    sourcemap: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    lib: {
      entry: Object.fromEntries(
        MODULES.map((module) => [
          module,
          path.resolve(__dirname, `src/${module}/index.ts`),
        ]),
      ),
      name: "x-react",
      formats: ["es"],
      fileName: (format, entryName) =>
        `${entryName ? entryName + "/" : ""}x-react.${format}.js`,
    },

    rollupOptions: {
      external: [
        ...EXTERNAL_DEPS.peer,
        ...EXTERNAL_DEPS.dependencies,
        ...EXTERNAL_DEPS.optional,
        /^react\//,
        /^node_modules\//,
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "FramerMotion",
          "@tabler/icons-react": "TablerIcons",
          "@nextui-org/react": "NextUI",
          "chart.js": "Chart",
          "react-chartjs-2": "ReactChartJS",
        },
      },
    },
  },

  optimizeDeps: {
    exclude: [...EXTERNAL_DEPS.peer, ...EXTERNAL_DEPS.optional],
  },
});
