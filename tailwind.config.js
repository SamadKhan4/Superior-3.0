export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E10',
        graphite: '#151A1E',
        bone: '#F2F1EC',
        chalk: '#F5F5F2',
        steel: '#90999F',
        metal: '#ABB2B7',
        molten: '#F47B20',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      transitionTimingFunction: {
        weld: 'cubic-bezier(0.22, 1, 0.36, 1)',
        steel: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      maxWidth: {
        shell: '1360px',
      },
    },
  },
  plugins: [],
};
