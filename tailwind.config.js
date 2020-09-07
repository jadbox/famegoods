module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.js",
      "layouts/**/*.js",
      "pages/**/*.js",
      "plugins/**/*.js",
    ],
  },
  theme: {
    borderRadius: {
      xl: "2rem",
    },
    extend: {
      animation: {
        pulse: "pulse 4s infinite",
      },
      fontFamily: {
        header: ["Syne"],
      },
    },
  },
  variants: {
    scrollSnapType: ["responsive"],
  },
  plugins: [require("tailwindcss-scroll-snap")],
};
