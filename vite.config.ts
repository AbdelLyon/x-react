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

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["src/data/**/*", "src/tests/**/*"],
      compilerOptions: {
        emitDeclarationOnly: true,
        preserveSymlinks: false,
      },
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/\.js\.d\.ts$/, ".d.ts"),
        content,
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
    // modules: {
    //   generateScopedName: "[name]__[local]__[hash:base64:5]",
    // },
  },

  build: {
    target: "es2020",
    minify: "esbuild",
    sourcemap: true,
    lib: {
      entry: {
        // index: path.resolve(__dirname, "src/index.ts"),
        ...Object.fromEntries(
          modules.map((module) => [
            module,
            path.resolve(__dirname, `src/${module}/index.ts`),
          ]),
        ),
      },
      name: "x-react",
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`,
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@nextui-org/react",
        "@tabler/icons-react",
        "@vitejs/plugin-react-swc",
        "clsx",
        "next-themes",
        "react-chartjs-2",
        "chart.js",
        "tailwind-merge",
        /^react\/.*/,
        /^@?[a-zA-Z\-]+\/.*/,
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name]/index.js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
        exports: "named",
        inlineDynamicImports: false,
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },

    commonjsOptions: {
      include: [],
      extensions: [".js", ".cjs", ".jsx", ".tsx", ".ts"],
      strictRequires: true,
      transformMixedEsModules: true,
    },
  },

  optimizeDeps: {
    exclude: ["react", "react-dom"],
  },
});
