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
var nextUIDependencies = [
    "@nextui-org/accordion",
    "@nextui-org/alert",
    "@nextui-org/avatar",
    "@nextui-org/button",
    "@nextui-org/card",
    "@nextui-org/checkbox",
    "@nextui-org/chip",
    "@nextui-org/date-picker",
    "@nextui-org/drawer",
    "@nextui-org/dropdown",
    "@nextui-org/image",
    "@nextui-org/input",
    "@nextui-org/input-otp",
    "@nextui-org/link",
    "@nextui-org/modal",
    "@nextui-org/navbar",
    "@nextui-org/pagination",
    "@nextui-org/popover",
    "@nextui-org/progress",
    "@nextui-org/radio",
    "@nextui-org/scroll-shadow",
    "@nextui-org/select",
    "@nextui-org/skeleton",
    "@nextui-org/slider",
    "@nextui-org/spinner",
    "@nextui-org/switch",
    "@nextui-org/system",
    "@nextui-org/table",
    "@nextui-org/tabs",
    "@nextui-org/theme",
    "@nextui-org/tooltip",
    "@nextui-org/user",
];
export default defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ["src/data/**/*", "src/tests/**/*"],
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
        target: "es2015",
        minify: "terser",
        cssMinify: true,
        reportCompressedSize: false,
        cssCodeSplit: true,
        chunkSizeWarningLimit: 500,
        lib: {
            entry: __assign({ style: "src/index.css" }, Object.fromEntries(modules.map(function (module) { return [
                module,
                path.resolve(__dirname, "src/".concat(module, "/index.ts")),
            ]; }))),
            name: "x-react",
            formats: ["es"],
        },
        rollupOptions: {
            external: __spreadArray(__spreadArray([
                "react",
                "react-dom",
                "framer-motion",
                "@tabler/icons-react",
                "@vitejs/plugin-react-swc",
                "clsx",
                "next-themes",
                "react-chartjs-2",
                "chart.js",
                "tailwind-merge"
            ], nextUIDependencies, true), [
                /^react\/.*/,
                /^node_modules\/.*/,
            ], false),
            output: {
                preserveModulesRoot: "src",
                preserveModules: true,
                exports: "named",
                globals: __assign({ react: "React", "react-dom": "ReactDOM", "framer-motion": "FramerMotion", "@tabler/icons-react": "TablerIcons", "chart.js": "Chart", "react-chartjs-2": "ReactChartJS" }, Object.fromEntries(nextUIDependencies.map(function (dep) { return [
                    dep,
                    dep.replace(/@nextui-org\//, "NextUI"),
                ]; }))),
                entryFileNames: function (chunkInfo) {
                    return "".concat(chunkInfo.name, "/index.es.js");
                },
                assetFileNames: function (chunkInfo) {
                    var _a;
                    if ((_a = chunkInfo.type) === null || _a === void 0 ? void 0 : _a.endsWith(".d.ts")) {
                        return "".concat(chunkInfo.type.replace(".d.ts", ""), "/index.d.ts");
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
