import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { visualizer } from "rollup-plugin-visualizer";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var modules = [
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
            beforeWriteFile: function (filePath, content) { return ({
                filePath: filePath.replace(/\.js\.d\.ts$/, ".d.ts"),
                content: content,
            }); },
        }),
        visualizer({
            filename: "./bundle-stats.html",
            open: true,
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
        target: "es2020",
        minify: "esbuild",
        sourcemap: true,
        rollupOptions: {
            input: Object.fromEntries(modules.map(function (module) { return [
                module,
                path.resolve(__dirname, "src/".concat(module, "/index.ts")),
            ]; })),
            output: {
                chunkFileNames: function (chunkInfo) {
                    return "chunks/".concat(chunkInfo.name.replace("/", "-"), "-[hash].js");
                },
                entryFileNames: "[name]/index.js",
                assetFileNames: "assets/[name]-[hash][extname]",
                manualChunks: function (id) {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                    if (id.includes("/src/")) {
                        return id.toString().split("/src/")[1].split("/")[0];
                    }
                },
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    tailwindcss: "tailwindcss",
                },
                exports: "named",
                inlineDynamicImports: false,
            },
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
            treeshake: {
                moduleSideEffects: false,
                propertyReadSideEffects: false,
                tryCatchDeoptimization: false,
            },
        },
    },
    optimizeDeps: {
        exclude: ["react", "react-dom"],
    },
});
