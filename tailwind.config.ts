import { nextui, ThemeColors } from "@nextui-org/theme";

interface Colors extends Partial<ThemeColors> {
  outline: {
    DEFAULT: string;
    foreground: string;
  };
}

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
          } as Colors,
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

            outline: {
              DEFAULT: "#0e8bdf63",
              foreground: "#ffffff",
            },

            content2: {
              DEFAULT: "#272a2b",
              foreground: "#000000",
            },
            content3: {
              DEFAULT: "#FF0000",
              foreground: "#ffffff",
            },
            focus: {
              DEFAULT: "blue",
              foreground: "#ffffff",
            },
          } as Colors,
        },
      },
    }),
  ],
};
