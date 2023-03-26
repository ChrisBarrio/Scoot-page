/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "url('src/assets/images/home-hero-desktop.jpg')",
        'about-hero': "url('src/assets/images/about-hero-desktop.jpg')",
        'careers-hero':
          "url('src/assets/images/careers-location-hero-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
