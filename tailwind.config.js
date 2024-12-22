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
              DEFAULT: "#1f2224",
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
            content1: {
              DEFAULT: "#282b2e",
              foreground: "#000000",
            },

            content2: {
              DEFAULT: "#242729",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
