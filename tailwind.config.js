const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      vine: '#0E5356',
      earth: '#A47250',
      fullMoon: '#F9F5EA',
      merlot: '#30292F'
    },
    fontFamily: {
      sans: ['Gopher', 'sans-serif'],
      serif: ['Gopher', 'serif'],
      mono: ['Courier Prime Sans', 'monospaced']
    },
    extend: {
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '80': '80px',
        '88': '88px',
        '96': '96px',
        '104': '104px',
        '112': '112px',
        '120': '120px',
        '128': '128px',
        '136': '136px',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      fontStyle: ['hover', 'focus']
    }
  },
  extend: {
    animation: {
      marquee: 'marquee 25s linear infinite',
      marquee2: 'marquee2 25s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}