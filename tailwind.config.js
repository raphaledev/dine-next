/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
				'beaver': '#9E7F66',
				'cod-gray': '#111111',
				'mirage': '#17192B',
				'ebony-clay': '#242B37',
				'shuttle-gray': '#5C6779',				
			},
			fontFamily: {
				sans: ['League Spartan', 'sans serif'],
			},
			boxShadow: {
				'custom-double': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
			},
			backgroundImage: theme => ({
				'hero-desk': "url('/images/homepage/hero-bg-desktop@2x.jpg')",
				'hero-mob': "url('/images/homepage/hero-bg-mobile.jpg')",
				'bg-ready': "url('/images/homepage/ready-bg-desktop@2x.jpg')",
				'bg-ready-mob': "url('/images/homepage/ready-bg-mobile.jpg')",
				'bg-book': "url('/images/booking/hero-bg-desktop@2x.jpg')",	
				'bg-book-mob': "url('/images/booking/hero-bg-mobile.jpg')",	
			}),
    },
  },
  plugins: [],
}
