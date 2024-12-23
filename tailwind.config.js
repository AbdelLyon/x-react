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
              DEFAULT: "#fefefe",
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
              DEFAULT: "#252728",
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
              DEFAULT: "#2c2f30",
              foreground: "#000000",
            },

            content2: {
              DEFAULT: "#272a2b",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
