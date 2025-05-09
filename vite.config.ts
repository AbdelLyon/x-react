import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import fs from 'fs-extra';

const modules = [
  "utils",
  "button",
  "buttons",
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
      exclude: ["src/tests/**/*"],
    }),
    {
      name: 'copy-tailwind-config',
      closeBundle() {
        // Copie le fichier tailwind.config.js vers le répertoire dist
        fs.copyFileSync(
          path.resolve(__dirname, 'tailwind.config.js'),
          path.resolve(__dirname, 'dist/tailwind.config.js')
        );
      }
    }
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
    target: "es2015",
    minify: "terser",
    cssMinify: true,
    reportCompressedSize: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,

    lib: {
      entry: {
        style: "src/index.css",
        ...Object.fromEntries(
          modules.map((module) => [
            module,
            path.resolve(__dirname, `src/${module}/index.ts`),
          ]),
        ),
      },
      name: "x-react",
      formats: ["es"],
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "framer-motion",
        "@tabler/icons-react",
        "@vitejs/plugin-react-swc",
        "react-intersection-observer",
        "clsx",
        "next-themes",
        "react-chartjs-2",
        "chart.js",
        "tailwind-merge",
        "@heroui/react",
        /^react\/.*/,
        /^node_modules\/.*/,
      ],

      output: {
        preserveModulesRoot: "src",
        preserveModules: true,
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "FramerMotion",
          "@tabler/icons-react": "TablerIcons",
          "chart.js": "Chart",
          "react-chartjs-2": "ReactChartJS",
          "@heroui/react": "HerouiReact",
          "react-intersection-observer": "ReactIntersectionObserver"
        },
        entryFileNames: (chunkInfo) => {
          return `${chunkInfo.name}/index.es.js`;
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.type?.endsWith(".d.ts")) {
            return `${chunkInfo.type.replace(".d.ts", "")}/index.d.ts`;
          }
          return "[name][extname]";
        },
      },

      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.warn",
        ],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
  },
});
