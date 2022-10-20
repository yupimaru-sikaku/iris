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
        'slide-in-bottom':
          'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
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
