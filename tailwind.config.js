/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
],
  theme: {
    screens: {
      '2xs': '0',
      'xs': '400px',
      '2sm':'500px',
      '1sm':'615px',
      'sm': '640px',
      
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'sideral-gray': '#434344',
      'sideralf-gray': '#1F2937',
      'sideralf-light': '#6B7280'
      },
    },
  },
  plugins: [
    

  ],
}

