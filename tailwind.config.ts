import type { Config } from "tailwindcss";
import tailwindcolors from "tailwindcss/colors";
let colors: any = tailwindcolors;
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];
export default <Partial<Config>>{
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#00225A",
        secondary: "#f3f5f7",
        accent: "#797979",
        error: "#d9000c",
        info: "#0a84ff",
        success: "#1cc738",
        warning: "#ff5713",
      },
    },
    screens: {
      sm: "600px",
      md: "968px",
      lg: "1280px",
    },
  },
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
};
