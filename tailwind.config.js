const { fontFamily } = require('tailwindcss/defaultTheme')
const { colors } = require('./tailwind/colors.js');
const { screens } = require('./tailwind/screens.js');
const { spacing } = require('./tailwind/spacing.js');
const { fontSize, fontWeight, lineHeight, letterSpacing } = require('./tailwind/typography.js');
const { pxToRem } = require('@captaincss/captaincss/helpers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	safelist: [
    'type-fire',
		'type-grass',
		'type-poison',
		'type-water',
		'type-bug',
		'type-normal',
		'type-flying',
		'type-electric',
		'type-ground',
		'type-fairy',
		'type-fighting',
		'type-psychic',
		'type-rock',
		'type-ice',
		'type-steel',
		'type-ghost',
		'type-dragon',
  ],
	plugins: [require('@captaincss/captaincss')],
  theme: {
		container: {
      center: true,
			padding: {
 				DEFAULT: pxToRem(25),
			}
    },
    extend: {
			fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
        heading: ['var(--font-montserrat)'],
        button: ['var(--font-montserrat)'],
      },
			fontSize,
			spacing,
		},
		screens,
		colors,
		fontWeight,
		lineHeight,
		letterSpacing,
  }
}



