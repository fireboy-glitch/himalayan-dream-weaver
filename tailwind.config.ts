
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for the trekking site
				mountain: {
					50: '#f0f7ff',
					100: '#e0eefe',
					200: '#b9ddfe',
					300: '#7cc2fd',
					400: '#36a1f8',
					500: '#0c85e9',
					600: '#0068c7',
					700: '#0054a1',
					800: '#064985',
					900: '#0a3d6e',
					950: '#07264a',
				},
				earth: {
					50: '#f7f6ef',
					100: '#eae6d5',
					200: '#d7ceae',
					300: '#c1b282',
					400: '#ae9a60',
					500: '#9c8549',
					600: '#866c3c',
					700: '#6c5534',
					800: '#5a462f',
					900: '#4c3b2c',
					950: '#2a1f16',
				},
				forest: {
					50: '#eefbee',
					100: '#d7f6d8',
					200: '#b1eab4',
					300: '#7fd783',
					400: '#4ebf54',
					500: '#33a239',
					600: '#248429',
					700: '#1f6824',
					800: '#1d5321',
					900: '#19451e',
					950: '#0a260e',
				},
				snow: {
					50: '#ffffff',
					100: '#fafeff',
					200: '#f4feff',
					300: '#e5fbff',
					400: '#d1f7ff',
					500: '#b8f0ff',
					600: '#94e3ff',
					700: '#62caff',
					800: '#38a5ff',
					900: '#2081ff',
					950: '#0057cf',
				},
				sunset: {
					50: '#fff2f1',
					100: '#ffe1de',
					200: '#ffc8c1',
					300: '#ffa296',
					400: '#ff6c5a',
					500: '#fa4230',
					600: '#e8301f',
					700: '#c22518',
					800: '#a12219',
					900: '#842219',
					950: '#480d09',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"slide-in": {
					"0%": {
						transform: "translateY(20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1"
					}
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"slide-in": "slide-in 0.6s ease-out forwards",
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/hero-bg.jpg')",
				'about-bg': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/images/about-bg.jpg')",
				'trek-bg': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/trek-bg.jpg')",
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
