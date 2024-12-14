const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        none: "none",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              100: "#ffffff",
            },
            danger: {
              DEFAULT: "#df3b50",
              foreground: "#ffffff",
            },

            outline: {
              DEFAULT: "#0e8bdf63",
              foreground: "#ffffff",
            },

            background: {
              DEFAULT: "#fdfdfd",
              foreground: "#000000",
            },
            primary: {
              DEFAULT: "#e2121d",
              foreground: "#ffffff",
            },
            content1: {
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
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
            content1: {
              DEFAULT: "#222426",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
