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
// Configuration des modules
var MODULES = {
    core: ["utils", "hooks", "theme", "providers", "HOC"],
    ui: [
        "button",
        "modal",
        "accordion",
        "alert",
        "avatar",
        "card",
        "form",
        "popover",
        "dropdown",
        "image",
        "slider",
        "progress",
        "spiner",
        "drawer",
        "chip",
        "tooltip",
        "tabs",
        "pagination",
        "typography",
    ],
    layout: ["navbar", "sidebar", "layout"],
    data: ["datagrid", "chart"],
    icons: ["icons"],
    date: ["datepicker"],
};
// Configuration des dépendances externes
var EXTERNAL_DEPS = {
    peer: ["react", "react-dom", "framer-motion", "@tabler/icons-react"],
    dependencies: ["@nextui-org/react", "clsx", "next-themes"],
    optional: ["react-chartjs-2", "chart.js", "@internationalized/date"],
};
// Utilitaire pour aplatir l'objet des modules
var flattenModules = Object.values(MODULES).flat();
export default defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ["src/data/**/*", "src/tests/**/*"],
            rollupTypes: true,
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@core": path.resolve(__dirname, "./src/core"),
            "@ui": path.resolve(__dirname, "./src/ui"),
            "@utils": path.resolve(__dirname, "./src/utils"),
        },
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
        modules: {
            localsConvention: "camelCase",
        },
    },
    build: {
        lib: {
            entry: Object.fromEntries(flattenModules.map(function (module) { return [
                module,
                path.resolve(__dirname, "src/".concat(module)),
            ]; })),
            name: "x-react",
            formats: ["es"],
            fileName: function (format, entryName) {
                return "".concat(entryName ? entryName + "/" : "", "x-react.").concat(format, ".js");
            },
        },
        rollupOptions: {
            external: __spreadArray(__spreadArray(__spreadArray([], EXTERNAL_DEPS.peer, true), EXTERNAL_DEPS.dependencies, true), EXTERNAL_DEPS.optional, true),
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "framer-motion": "FramerMotion",
                    "@tabler/icons-react": "TablerIcons",
                    "@nextui-org/react": "NextUI",
                    "chart.js": "Chart",
                    "react-chartjs-2": "ReactChartJS",
                },
                preserveModules: true,
                preserveModulesRoot: "src",
                exports: "named",
                sourcemap: true,
            },
        },
        sourcemap: true,
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    optimizeDeps: {
        include: EXTERNAL_DEPS.dependencies,
        exclude: __spreadArray(__spreadArray([], EXTERNAL_DEPS.peer, true), EXTERNAL_DEPS.optional, true),
    },
});
