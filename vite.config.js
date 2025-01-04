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
var MODULES = [
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
var EXTERNAL_DEPS = {
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
            entry: Object.fromEntries(MODULES.map(function (module) { return [
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
            external: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], EXTERNAL_DEPS.peer, true), EXTERNAL_DEPS.dependencies, true), EXTERNAL_DEPS.optional, true), [
                /^react\//,
                /^node_modules\//,
            ], false),
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
        exclude: __spreadArray(__spreadArray([], EXTERNAL_DEPS.peer, true), EXTERNAL_DEPS.optional, true),
    },
});
