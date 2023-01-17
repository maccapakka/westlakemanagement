const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-overlay": {
          background:
            "linear-gradient(var(--overlay-angle, 90deg), var(--overlay-colors)), var(--overlay-image)",
          "background-position": "top center",
          "background-size": "cover",
        },
      });
    }),
  ],
};
