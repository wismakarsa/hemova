module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
