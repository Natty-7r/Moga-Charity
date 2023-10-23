/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        mobileNav_slideDown: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        mobileNav_slideUp: {
          "0%": { transform: "scaleY(1) " },
          "100%": { transform: "scaleY(0)" },
        },

        slideRight_chatbar: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        slideLeft_chatbar: {
          "0%": { transform: "scaleY(1) " },
          "100%": { transform: "scaleY(0)" },
        },

        slideRight_chatMobile: {
          "0%": { transform: "scaleX(0)  " },
          "100%": { transform: "scaleX(0)   " },
        },
        slideLeft_chatMobile: {
          "0%": { transform: "scaleX(0)   " },
          "100%": { transform: "scaleX(0)  " },
        },
        scale_full: {
          "0%": { transform: "scaleX(1)   " },
          "100%": { transform: "scaleX(1)  " },
        },
        slideLeft: {
          "0%": { transform: "scaleX(0) " },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        chatBody_slideLeft: "chatBody_slideLeft .1s ease-in-out forwards",
        chatBody_slideRight: "chatBody_slideRight .1s ease-in-out forwards",

        slideRight_bar: "slideRight_chatbar 0.2s ease-in-out forwards",
        slideLeft_bar: "slideLeft_chatbar 0.2s ease-in-out forwards",

        slideRight_barMobile: "slideRight_chatbar 0.1s ease-in-out forwards",
        slideLeft_barMobile: "slideLeft_chatbar 0.1s ease-in-out forwards",

        mobileNav_slideDown: "mobileNav_slideDown 0.1s ease-in-out forwards",
        mobileNav_slideUp: "mobileNav_slideUp 0.1s ease-in-out forwards",

        slideRight_mobile: "slideRight_chatMobile .1s ease-in-out forwards",
        slideLeft_mobile: "slideLeft_chatMobile .1s ease-in-out forwards",

        scale_full: "scale_full .1s ease-in-out forwards",
        slideLeft: "slideLeft .5s ease-in-out forwards",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      inter: ["inter"],
    },
    boxShadow: {
      fullsm: " 0px  2px 20px  rgba(0, 0, 0, 0.0515)",
      fullmd: " 0px  10px 20px  rgba(0, 0, 0, 0.15)",
      fullxl: " 0px  10px 20px  rgba(0, 0, 0, 0.55)",
      full2xl: "  30px  30px 60px  rgba(0, 0, 0, 0.95)",
      full2xl: "  -30px  30px 60px  rgba(0, 0, 0, 0.35)",
    },
    colors: {
      white: "#ffffff", // white
      white_blue: "rgb(238 242 255)", // indigo-50
      transparent: "transparent",

      white_blueDark: "rgb(191 219 254)", // indigo-50

      white_gray: "rgb(248 250 252)", // slate-50
      white_dimLight: "rgb(241 245 249)", //slate-100
      // white_dim: "rgb(226 232 240)", //slate-200
      white_dim: "#DEECF5", //slate-200
      white_dimmer: "rgb(203 213 225)", //slate-300

      gray_normal: "#746D69", // slate-800
      gray_light: " rgb(100 116 139)", // slate-500
      gray_lighter: "rgb(148 163 184)", //slate-400

      main_lighest: "rgb(96 165 250)", // blue-400
      main_lighter: "rgb(59 130 246)", // blue-500
      main_light: " rgb(37 99 235)", // blue-600
      main: "rgb(29 78 216)", //blue-700
      main_dark: "rgb(30 64 175)", //blue-800
      main_darker: "rgb(30 58 138)", //blue-900

      // main_black: "rgb(23 37 84)", //blue-950
      main_black: "#160544", //blue-950

      border_blue: "#dbeafe",
      error: "red",
      // error: "#b91c1c",
    },
  },
  plugins: [],
};
