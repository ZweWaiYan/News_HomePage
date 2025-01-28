/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        'extra-wide': '0.3em', // Adjust this value as needed
      },
      fontFamily: {
        interBold: ['Inter-Bold', 'sans-serif'],
        interExtraBold: ['Inter-ExtraBold', 'sans-serif'],
        interRegular: ['Inter-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
