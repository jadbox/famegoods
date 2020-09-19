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
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    gradientColorStops: theme => ({
      'primary': '#FF8CFF',
      'secondary': '#785DFF'
    }),
    extend: {
      colors: {
        'primary': '#FF8CFF',
        'secondary': '#785DFF'
      },
      animation: {
        pulse: "pulse 4s infinite",
      },
      fontFamily: {
        'head': ["Syne"],
        body: ['Montserrat', 'sans-serif']
      },
      borderRadius: {
        xl: "2rem",
      },
    },
  },
  variants: {
    scrollSnapType: ["responsive"],
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
  },
  plugins: [require("tailwindcss-scroll-snap"),
  require('tailwindcss-text-fill-stroke')(),],
};
