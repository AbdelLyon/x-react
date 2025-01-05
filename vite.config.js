var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
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
            rollupTypes: true,
            compilerOptions: {
                emitDeclarationOnly: true,
                preserveSymlinks: false,
            },
            beforeWriteFile: function (filePath, content) { return ({
                filePath: filePath.replace(/\.js\.d\.ts$/, ".d.ts"),
                content: content,
            }); },
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
            generateScopedName: "[name]__[local]__[hash:base64:5]",
        },
    },
    build: {
        target: "es2020",
        minify: "esbuild",
        sourcemap: true,
        lib: {
            entry: __assign({}, Object.fromEntries(modules.map(function (module) { return [
                module,
                path.resolve(__dirname, "src/".concat(module, "/index.ts")),
            ]; }))),
            name: "x-react",
            formats: ["es"],
            fileName: function (format, entryName) { return "".concat(entryName, "/index.").concat(format, ".js"); },
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
