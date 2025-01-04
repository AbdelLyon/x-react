var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var EXTERNAL_DEPS = {
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
            beforeWriteFile: function (filePath, content) { return ({
                filePath: filePath,
                content: content.replace(/import\s+\{\s*\}\s+from\s+['"]react['"];?/g, ""),
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
            entry: Object.fromEntries(modules.map(function (module) { return [
                module,
                path.resolve(__dirname, "src/".concat(module, "/index.ts")),
            ]; })),
            name: "x-react",
            formats: ["es"],
            fileName: function (format, entryName) {
                return "".concat(entryName ? entryName + "/" : "", "x-react.").concat(format, ".js");
            },
        },
        rollupOptions: {
            external: __spreadArray(__spreadArray([], Object.values(EXTERNAL_DEPS).flat(), true), [
                /^react\//,
                /^@nextui-org\/react\/.*/,
            ], false),
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
