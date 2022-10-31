module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    extend: {
      // 色を独自設定したいならここ
      colors: {
        main: {
          100: '#5D2887',
          200: '#F9FC00',
          300: '#02B151',
        },
      },
      animation: {
        'fade-in':
          'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-fluid-spacing'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    // MantineUIとTailwindCSSを一緒に使うとコンポーネントがうまく表示されない。その対策
    preflight: false,
  },
  darkMode: 'class',
};
