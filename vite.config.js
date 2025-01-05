// import path from "path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import dts from "vite-plugin-dts";
// import tailwindcss from "tailwindcss";
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
// const modules = [
//   "utils",
//   "button",
//   "modal",
//   "hooks",
//   "theme",
//   "providers",
//   "accordion",
//   "alert",
//   "avatar",
//   "card",
//   "icons",
//   "form",
//   "popover",
//   "dropdown",
//   "image",
//   "slider",
//   "progress",
//   "spiner",
//   "datagrid",
//   "drawer",
//   "chip",
//   "datepicker",
//   "navbar",
//   "sidebar",
//   "layout",
//   "tooltip",
//   "tabs",
//   "pagination",
//   "typography",
//   "HOC",
//   "chart",
// ];
// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       exclude: ["src/data/**/*", "src/tests/**/*"],
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   css: {
//     postcss: {
//       plugins: [tailwindcss],
//     },
//   },
//   build: {
//     lib: {
//       entry: Object.fromEntries(
//         modules.map((module) => [
//           module,
//           path.resolve(__dirname, `src/${module}`),
//         ]),
//       ),
//       name: "x-react",
//       formats: ["es"],
//       fileName: (format, entryName) =>
//         `${entryName ? entryName + "/" : ""}${entryName}.${format}.js`,
//     },
//     rollupOptions: {
//       external: [
//         "react",
//         "react-dom",
//         "@nextui-org/react",
//         "@tabler/icons-react",
//         "@vitejs/plugin-react-swc",
//         "clsx",
//         "next-themes",
//         "react-chartjs-2",
//         "chart.js",
//         "tailwind-merge",
//         /^react\/.*/,
//         /^node_modules\/.*/,
//       ],
//       output: {
//         preserveModulesRoot: "src",
//         sourcemap: true,
//         exports: "named",
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//           tailwindcss: "tailwindcss",
//         },
//       },
//       treeshake: {
//         moduleSideEffects: false,
//       },
//     },
//   },
// });
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
                path.resolve(__dirname, "src/".concat(module)),
            ]; }))),
            name: "x-react",
            formats: ["es"],
            fileName: function (format, entryName) {
                return "".concat(entryName ? entryName + "/" : "").concat(entryName, ".").concat(format, ".js");
            },
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
                    "@nextui-org/react": "NextUI",
                    "chart.js": "Chart",
                    "react-chartjs-2": "ReactChartJS",
                },
                entryFileNames: function (chunkInfo) {
                    return "".concat(chunkInfo.name, "/index.js");
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
