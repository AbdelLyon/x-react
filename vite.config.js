// https://vite.dev/config/
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
            entry: Object.fromEntries(modules.map(function (module) { return [
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
            external: [
                // Peer Dependencies
                "react",
                "react-dom",
                // Dependencies
                "@nextui-org/react",
                "@tabler/icons-react",
                "@vitejs/plugin-react-swc",
                "clsx",
                "next-themes",
                "react-chartjs-2",
                "chart.js",
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
