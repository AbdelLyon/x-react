// https://vite.dev/config/
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
];

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["src/shared/**/*", "src/tests/**/*", "src/ui/**/*"],
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
    lib: {
      entry: Object.fromEntries(
        modules.map((module) => [
          module,
          path.resolve(__dirname, `src/${module}`),
        ]),
      ),
      name: "x-react",
      formats: ["es"],
      fileName: (format, entryName) =>
        `${entryName ? entryName + "/" : ""}x-react.${format}.js`,
    },
    rollupOptions: {
      external: [
        // Peer Dependencies
        "react",
        "react-dom",
        // Dependencies
        "@nextui-org/react",
        "@tabler/icons-react",
        "@tanstack/react-query",
        "@vitejs/plugin-react-swc",
        "clsx",
        "next-themes",
      ],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
