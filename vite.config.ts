import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

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

const EXTERNAL_DEPS = {
  peer: ["react", "react-dom"],
  ui: ["@nextui-org/react", "@tabler/icons-react"],
  utils: ["clsx", "next-themes"],
  chart: ["react-chartjs-2", "chart.js"],
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["src/data/**/*", "src/tests/**/*"],
      rollupTypes: true,
      compilerOptions: {
        skipLibCheck: true,
        emitDeclarationOnly: true,
      },
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content: content.replace(
          /import\s+\{\s*\}\s+from\s+['"]react['"];?/g,
          "",
        ),
      }),
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
    modules: {
      scopeBehaviour: "local",
      generateScopedName: "[hash:base64:8]",
    },
  },

  build: {
    target: "es2020",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.trace",
        ],
      },
      mangle: {
        properties: false,
      },
      format: {
        comments: false,
      },
    },
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    modulePreload: false,
    reportCompressedSize: false,

    lib: {
      entry: Object.fromEntries(
        modules.map((module) => [
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
        ...Object.values(EXTERNAL_DEPS).flat(),
        /^react\//,
        /^@nextui-org\/react\/.*/,
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
          "@nextui-org/react": "NextUI",
          "@tabler/icons-react": "TablerIcons",
          "chart.js": "Chart",
          "react-chartjs-2": "ReactChartJS",
        },
        preserveModules: true,
        preserveModulesRoot: "src",
        minifyInternalExports: true,
        compact: true,
      },
    },
  },

  esbuild: {
    target: "es2020",
    legalComments: "none",
    treeShaking: true,
  },
});
