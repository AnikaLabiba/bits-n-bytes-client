module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4F82E0",

          "secondary": "#fda4af",

          "accent": "#bfdbfe",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#5eead4",

          "success": "#ecfeff",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
