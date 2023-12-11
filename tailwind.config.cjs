/** @type {import('tailwindcss').Config}*/
const defaultTheme = require('tailwindcss/defaultTheme');
const ldnColors = require("@ldn-viz/themes/colors.json");

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/@ldn-viz/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			colors: ldnColors,
			fontFamily: {
				sans: ['"Roboto"', ...defaultTheme.fontFamily.sans]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						h1: { fontWeight: 'bold' },
						a: { color: theme('colors.core.blue.600') }
					}
				}
			})
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
