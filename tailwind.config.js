const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#f4f4f4",
              foreground: "#000000",
            },
            primary: {
              DEFAULT: "#e2121d",
              foreground: "#ffffff",
            },
            card: {
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
            border: "#dddddd",
          },
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#181a1b",
              foreground: "#ffffff",
            },
            primary: {
              DEFAULT: "#e2121d",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT: "#FF0000",
              foreground: "#ffffff",
            },
            border: "#2f3233",
            muted: "#777777",
            card: {
              DEFAULT: "#222426",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
