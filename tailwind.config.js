/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'light': '#F8E48B',
          'gold': '#F2D56D',
          'bronze': '#BF9C4A',
          'gray': '#808080',
          'dark': '#181818',
        }
      },
    },
  },
  plugins: [],
}
