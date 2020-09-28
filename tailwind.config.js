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
      backgroundImage: {
        'top-blur': "url('/dfame-bg.svg')",
      },
      colors: {
        'primary': '#FF8CFF',
        'secondary': '#785DFF'
      },
      animation: {
        pulse: "pulse 4s infinite",
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        'karla': ['Karla']
      },
      borderRadius: {
        xl: "2rem",
      },
      boxShadow: {
        focus: '5px 5px 10px 10px rgba(196, 196, 196, 1)'
      },
      height: {
        xl: '75%'
      },
      fontSize: {
        'tiny': '.3rem',
        'nonexist': '0rem'
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
