/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Poppins']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#436acd",
          "primary-focus": "#363da3",
          ".btn-secondary": {
            "background-color": "#ebf2ff",
            "color": "#436acd",
            "border": "1px solid white",
            "transition": "border 100ms linear"
          },
          ".btn-secondary:hover": {
            "background-color": "#ebf2ff",
            "border": "2px solid #436acd"
          },
          ".btn-primary": {
            "color": "white"
          }
        },
      }, "cupcake", "dark"
    ],
  },
}
